use std::fs;
use std::path::{Path, PathBuf};
use std::process::ExitCode;

const BANNED_CRATES: &[&str] = &[
    "lasso",
    "petgraph",
    "bumpalo",
    "typed-arena",
    "memmap2",
    "proptest",
    "rayon",
    "deap::",
];

struct ValidationReport {
    file_name: String,
    errors: Vec<String>,
}

fn contains_word(text: &str, word: &str) -> bool {
    let text_lower = text.to_lowercase();
    let word_lower = word.to_lowercase();
    let mut start = 0;

    while let Some(idx) = text_lower[start..].find(&word_lower) {
        let actual_idx = start + idx;
        let before_char = if actual_idx == 0 {
            ' '
        } else {
            text[..actual_idx].chars().last().unwrap_or(' ')
        };
        let after_idx = actual_idx + word.len();
        let after_char = text[after_idx..].chars().next().unwrap_or(' ');

        let before_boundary = !before_char.is_alphanumeric() && before_char != '_';
        let after_boundary = !after_char.is_alphanumeric() && after_char != '_';

        if before_boundary && after_boundary {
            return true;
        }
        start = actual_idx + word.len();
    }
    false
}

fn validate_file(path: &Path) -> ValidationReport {
    let file_name = path
        .file_name()
        .map(|s| s.to_string_lossy().into_owned())
        .unwrap_or_else(|| path.display().to_string());

    let mut errors = Vec::new();

    let content = match fs::read_to_string(path) {
        Ok(c) => c,
        Err(e) => {
            errors.push(format!("Failed to read file: {e}"));
            return ValidationReport { file_name, errors };
        }
    };

    if content.trim().is_empty() {
        errors.push("File is empty.".to_string());
        return ValidationReport { file_name, errors };
    }

    // 1. Check Frontmatter & IEEE Contract Schema
    if !content.contains("id: REQ-") {
        errors.push("Missing frontmatter \"id: REQ-XXXX\".".to_string());
    }
    if !content.contains("Normative Statement") {
        errors.push("Missing \"Normative Statement\".".to_string());
    }
    if !content.contains("Formal Invariant") {
        errors.push("Missing \"Formal Invariant\".".to_string());
    }
    if !content.contains("Computational Complexity & Algorithmic Bounds") {
        errors.push("Missing \"Computational Complexity & Algorithmic Bounds\".".to_string());
    }
    if !content.contains("Verification & Conformance Criteria") {
        errors.push("Missing \"Verification & Conformance Criteria\".".to_string());
    }
    if !content.contains("AC-01") && !content.contains("Acceptance Criteria") {
        errors.push(
            "Missing explicit IEEE 29148 Acceptance Criteria (\"AC-01\" or \"Acceptance Criteria\")."
                .to_string(),
        );
    }

    // Anti-bloat check: Must be crisp, high-density contract (<= 1500 words)
    let word_count = content.split_whitespace().count();
    if word_count > 1500 {
        errors.push(format!(
            "Requirement is excessively verbose ({word_count} words > 1500 limit). Refactor to crisp IEEE contract."
        ));
    }

    // 2. Check Banned Crates
    for crate_name in BANNED_CRATES {
        if contains_word(&content, crate_name) {
            errors.push(format!(
                "Banned crate or module reference found: \"{crate_name}\"."
            ));
        }
    }

    // 3. Check Unicode Dashes (Em-dash \u{2014}, En-dash \u{2013})
    if content.contains('\u{2014}') || content.contains('\u{2013}') {
        errors.push(
            "Unicode em dash (—) or en dash (–) detected; use ASCII \"--\" or \"-\" exclusively."
                .to_string(),
        );
    }

    // 4. Validate Display Math Delimiters ($$ ... $$)
    let display_parts: Vec<&str> = content.split("$$").collect();
    if display_parts.len() > 1 && display_parts.len() % 2 == 0 {
        errors.push("Unbalanced display math delimiters ($$).".to_string());
    }

    for (idx, &part) in display_parts.iter().enumerate() {
        if idx % 2 == 1 {
            let math = part.trim();
            if math.is_empty() {
                errors.push(format!("Display math block {} is empty.", (idx + 1) / 2));
                continue;
            }
            // Check for raw \n or \r used as LaTeX control sequences
            if math.contains("\\n ") || math.contains("\\n\\") || math.ends_with("\\n")
                || math.contains("\\r ") || math.contains("\\r\\") || math.ends_with("\\r")
            {
                errors.push(format!(
                    "Display math block {} contains raw \\n or \\r LaTeX control sequence.",
                    (idx + 1) / 2
                ));
            }

            // Check for balanced curly braces in math block
            let mut depth: i32 = 0;
            let mut prev_char = ' ';
            for ch in math.chars() {
                if prev_char != '\\' {
                    if ch == '{' {
                        depth += 1;
                    } else if ch == '}' {
                        depth -= 1;
                    }
                }
                prev_char = ch;
                if depth < 0 {
                    break;
                }
            }
            if depth != 0 {
                errors.push(format!(
                    "Display math block {} has unbalanced curly braces.",
                    (idx + 1) / 2
                ));
            }
        }
    }

    // 5. Validate Inline Math ($ ... $)
    for (line_idx, line) in content.lines().enumerate() {
        let trimmed = line.trim();
        if trimmed.starts_with("$$") || trimmed.starts_with("```") {
            continue;
        }

        // Count non-escaped dollar signs
        let mut dollar_count = 0;
        let mut prev = ' ';
        for ch in line.chars() {
            if ch == '$' && prev != '\\' {
                dollar_count += 1;
            }
            prev = ch;
        }

        if dollar_count % 2 != 0 {
            errors.push(format!(
                "Line {}: Unbalanced inline math delimiters ($).",
                line_idx + 1
            ));
        }
    }

    ValidationReport { file_name, errors }
}

fn main() -> ExitCode {
    let args: Vec<String> = std::env::args().skip(1).collect();

    let target_files: Vec<PathBuf> = if !args.is_empty() {
        args.into_iter().map(PathBuf::from).collect()
    } else {
        let final_dir = Path::new("docs/requirements/final");
        if final_dir.is_dir() {
            let mut files = Vec::new();
            if let Ok(entries) = fs::read_dir(final_dir) {
                for entry in entries.flatten() {
                    let path = entry.path();
                    if let Some(name) = path.file_name().and_then(|s| s.to_str()) {
                        if name.starts_with("REQ-") && name.ends_with(".md") {
                            files.push(path);
                        }
                    }
                }
            }
            files.sort();
            files
        } else {
            Vec::new()
        }
    };

    if target_files.is_empty() {
        println!("No requirement files found to validate.");
        return ExitCode::SUCCESS;
    }

    let mut total_failed = 0;
    for file in &target_files {
        let report = validate_file(file);
        if !report.errors.is_empty() {
            total_failed += 1;
            eprintln!("\nFAIL: {}", report.file_name);
            for err in report.errors {
                eprintln!("  - {err}");
            }
        } else {
            println!("PASS: {}", report.file_name);
        }
    }

    if total_failed > 0 {
        eprintln!(
            "\nTotal failures: {} / {}",
            total_failed,
            target_files.len()
        );
        ExitCode::FAILURE
    } else {
        println!("\nAll {} files passed audit!", target_files.len());
        ExitCode::SUCCESS
    }
}
