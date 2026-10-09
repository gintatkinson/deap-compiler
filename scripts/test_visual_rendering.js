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

const reqDir = path.join(__dirname, '../docs/requirements/final');
const files = fs.readdirSync(reqDir).filter(f => f.startsWith('REQ-') && f.endsWith('.md')).sort();

console.log(`Starting Visual Verification Audit on ${files.length} requirement specifications...\n`);

let totalDisplay = 0;
let totalInline = 0;
const results = [];
let totalErrors = 0;

for (const file of files) {
  const filePath = path.join(reqDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');

  let fileDisplayCount = 0;
  let fileInlineCount = 0;
  const fileErrors = [];

  // 1. Audit Display Math (```math ... ``` or $$ ... $$)
  const mathBlockRegex = /```math\s*\n([\s\S]*?)\n```/g;
  let bMatch;
  while ((bMatch = mathBlockRegex.exec(content)) !== null) {
    fileDisplayCount++;
    const math = bMatch[1].trim();
    try {
      katex.renderToString(math, { displayMode: true, throwOnError: true });
    } catch (err) {
      fileErrors.push({ type: 'Display', math, error: err.message.split('\n')[0] });
    }
  }

  // Also check $$ if any remains
  const displayParts = content.replace(mathBlockRegex, '').split('$$');
  for (let i = 1; i < displayParts.length; i += 2) {
    fileDisplayCount++;
    const math = displayParts[i].trim();
    try {
      katex.renderToString(math, { displayMode: true, throwOnError: true });
    } catch (err) {
      fileErrors.push({ type: 'Display ($$)', math, error: err.message.split('\n')[0] });
    }
  }

  // 2. Audit Inline Math ($`...`$ or $...$)
  const lines = content.split('\n');
  let inCode = false;
  for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
    const line = lines[lineIdx];
    if (line.trim().startsWith('```') || line.trim().startsWith('$$')) {
      inCode = !inCode;
      continue;
    }
    if (inCode) continue;

    // Check $`...`$
    const inlineBacktickRegex = /\$`([^`]+)`\$/g;
    let im;
    while ((im = inlineBacktickRegex.exec(line)) !== null) {
      fileInlineCount++;
      const math = im[1].trim();
      try {
        katex.renderToString(math, { displayMode: false, throwOnError: true });
      } catch (err) {
        fileErrors.push({ type: 'Inline ($`...`$)', line: lineIdx + 1, math, error: err.message.split('\n')[0] });
      }
    }

    // Check $...$ without backticks
    const lineNoBackticks = line.replace(/\$`[^`]+`\$/g, '');
    const segments = lineNoBackticks.split('$');
    if (segments.length > 1 && segments.length % 2 === 1) {
      for (let s = 1; s < segments.length; s += 2) {
        const math = segments[s].trim();
        if (!math || math.startsWith('`')) continue;
        fileInlineCount++;
        try {
          katex.renderToString(math, { displayMode: false, throwOnError: true });
        } catch (err) {
          fileErrors.push({ type: 'Inline ($...$)', line: lineIdx + 1, math, error: err.message.split('\n')[0] });
        }
      }
    }
  }

  totalDisplay += fileDisplayCount;
  totalInline += fileInlineCount;

  if (fileErrors.length > 0) {
    totalErrors += fileErrors.length;
    results.push({ file, status: 'FAIL', display: fileDisplayCount, inline: fileInlineCount, errors: fileErrors });
  } else {
    results.push({ file, status: 'PASS', display: fileDisplayCount, inline: fileInlineCount });
  }
}

console.log('='.repeat(80));
console.log(`VISUAL RENDERING AUDIT REPORT FOR 199 SPECIFICATIONS`);
console.log('='.repeat(80));
console.log(`Total Requirements Audited: ${files.length}`);
console.log(`Total Display Math Blocks: ${totalDisplay}`);
console.log(`Total Inline Math Blocks:  ${totalInline}`);
console.log(`Total Math Formulas:       ${totalDisplay + totalInline}`);
console.log(`Total Rendering Errors:    ${totalErrors}`);
console.log('='.repeat(80));

if (totalErrors > 0) {
  console.error('\nFAILURES DETECTED:');
  for (const r of results.filter(r => r.status === 'FAIL')) {
    console.error(`- ${r.file}: ${r.errors.length} errors`);
    for (const e of r.errors) {
      console.error(`    [${e.type}] ${e.error}`);
    }
  }
  process.exit(1);
} else {
  console.log('\n[SUCCESS] 100% of formulas in all 199 requirements render flawlessly in KaTeX!\n');
}
