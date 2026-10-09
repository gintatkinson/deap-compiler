const fs = require('fs');
const path = require('path');

// Locate KaTeX
const katexCandidates = [
  '/Users/perkunas/.npm/_npx/d62b6517736c1e35/node_modules/katex',
  '/Users/perkunas/.npm/_npx/668c188756b835f3/node_modules/katex',
  '/Users/perkunas/.npm/_npx/e258c78485ce3160/node_modules/katex',
  '/Users/perkunas/.npm/_npx/9a19ef509d3e4f96/node_modules/katex',
  'katex'
];

let katex = null;
for (const p of katexCandidates) {
  try {
    katex = require(p);
    break;
  } catch (e) {}
}

if (!katex) {
  console.error('CRITICAL: KaTeX module not found.');
  process.exit(1);
}

const BANNED_CRATES = [
  'lasso', 'petgraph', 'bumpalo', 'typed-arena', 'memmap2',
  'proptest', 'rayon', 'deap::'
];

function validateFile(filePath) {
  const fileName = path.basename(filePath);
  const errors = [];

  if (!fs.existsSync(filePath)) {
    return [`File does not exist: ${filePath}`];
  }

  const content = fs.readFileSync(filePath, 'utf-8');
  if (content.trim().length === 0) {
    return ['File is empty.'];
  }

  // 1. Check Frontmatter & 4-Part Schema
  if (!content.includes('id: REQ-')) errors.push('Missing frontmatter "id: REQ-XXXX".');
  if (!content.includes('Normative Statement')) errors.push('Missing "Normative Statement".');
  if (!content.includes('Formal Invariant')) errors.push('Missing "Formal Invariant".');
  if (!content.includes('Computational Complexity & Algorithmic Bounds')) {
    errors.push('Missing "Computational Complexity & Algorithmic Bounds".');
  }
  if (!content.includes('Verification & Conformance Criteria')) {
    errors.push('Missing "Verification & Conformance Criteria".');
  }

  // 2. Check Banned Crates
  for (const crate of BANNED_CRATES) {
    const regex = new RegExp(`\\b${crate}\\b`, 'i');
    if (regex.test(content)) {
      errors.push(`Banned crate or module reference found: "${crate}".`);
    }
  }

  // 3. Check Unicode Dashes (Em-dash \u2014, En-dash \u2013)
  if (/[\u2014\u2013]/.test(content)) {
    errors.push('Unicode em dash (—) or en dash (–) detected; use ASCII "--" or "-" exclusively.');
  }

  // 4. Validate Display Math ($$ ... $$)
  const displayParts = content.split('$$');
  if (displayParts.length > 1 && displayParts.length % 2 === 0) {
    errors.push('Unbalanced display math delimiters ($$).');
  }

  for (let i = 1; i < displayParts.length; i += 2) {
    const math = displayParts[i].trim();
    if (!math) {
      errors.push(`Display math block ${(i + 1) / 2} is empty.`);
      continue;
    }

    // Check for raw \n or \r used as LaTeX macro
    if (/\\[nr]\b/.test(math)) {
      errors.push(`Display math block ${(i + 1) / 2} contains raw \\n or \\r LaTeX command.`);
    }

    try {
      katex.renderToString(math, { displayMode: true, throwOnError: true });
    } catch (e) {
      errors.push(`Display math block ${(i + 1) / 2} KaTeX error: ${e.message.split('\n')[0]}`);
    }
  }

  // 5. Validate Inline Math ($ ... $)
  const lines = content.split('\n');
  let inDisplay = false;
  for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
    const line = lines[lineIdx];
    if (line.trim().startsWith('$$')) {
      inDisplay = !inDisplay;
      continue;
    }
    if (inDisplay) continue;

    const segments = line.split('$');
    if (segments.length > 1 && segments.length % 2 === 1) {
      for (let s = 1; s < segments.length; s += 2) {
        const inline = segments[s].trim();
        if (!inline) continue;

        // Check for raw \n or \r
        if (/\\[nr]\b/.test(inline)) {
          errors.push(`Line ${lineIdx + 1} inline math contains raw \\n or \\r command: $${inline}$`);
        }

        try {
          katex.renderToString(inline, { displayMode: false, throwOnError: true });
        } catch (e) {
          errors.push(`Line ${lineIdx + 1} inline math KaTeX error: ${e.message.split('\n')[0]} in "$${inline}$"`);
        }
      }
    }
  }

  return errors;
}

// CLI Execution
const args = process.argv.slice(2);
let targetFiles = [];

if (args.length > 0) {
  targetFiles = args;
} else {
  const finalDir = 'docs/requirements/final';
  if (fs.existsSync(finalDir)) {
    targetFiles = fs.readdirSync(finalDir)
      .filter(f => f.startsWith('REQ-') && f.endsWith('.md'))
      .sort()
      .map(f => path.join(finalDir, f));
  }
}

if (targetFiles.length === 0) {
  console.log('No requirement files to validate.');
  process.exit(0);
}

let totalFailed = 0;
for (const file of targetFiles) {
  const errors = validateFile(file);
  if (errors.length > 0) {
    totalFailed++;
    console.error(`\nFAIL: ${file}`);
    for (const err of errors) {
      console.error(`  - ${err}`);
    }
  } else {
    console.log(`PASS: ${path.basename(file)}`);
  }
}

if (totalFailed > 0) {
  console.error(`\nTotal failures: ${totalFailed} / ${targetFiles.length}`);
  process.exit(1);
} else {
  console.log(`\nAll ${targetFiles.length} files passed audit!`);
  process.exit(0);
}
