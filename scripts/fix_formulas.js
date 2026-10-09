const fs = require('fs');
const path = require('path');

const katexCandidates = [
  '/Users/perkunas/.npm/_npx/d62b6517736c1e35/node_modules/katex',
  '/Users/perkunas/.npm/_npx/668c188756b835f3/node_modules/katex',
  '/Users/perkunas/.npm/_npx/e258c78485ce3160/node_modules/katex',
  '/Users/perkunas/.npm/_npx/9a19ef509d3e4f96/node_modules/katex',
  'katex'
];
let katex = null;
for (const p of katexCandidates) {
  try { katex = require(p); break; } catch(e){}
}
if (!katex) {
  console.error('KaTeX not found');
  process.exit(1);
}

function splitByCodeSpans(str) {
  const tokens = [];
  let i = 0;
  let textStart = 0;
  while (i < str.length) {
    if (str[i] === '`') {
      let runStart = i;
      while (i < str.length && str[i] === '`') i++;
      let delimLen = i - runStart;
      let delim = '`'.repeat(delimLen);
      let closeIdx = str.indexOf(delim, i);
      if (closeIdx !== -1) {
        if (runStart > textStart) {
          tokens.push({ isCode: false, text: str.slice(textStart, runStart) });
        }
        let codeEnd = closeIdx + delimLen;
        tokens.push({ isCode: true, text: str.slice(runStart, codeEnd) });
        i = codeEnd;
        textStart = i;
      } else {
        i++;
      }
    } else {
      i++;
    }
  }
  if (textStart < str.length) {
    tokens.push({ isCode: false, text: str.slice(textStart) });
  }
  return tokens;
}

function normalizeAndFixFile(content, filename) {
  // 1. Fix known syntax errors
  if (filename === 'REQ-0123.md') {
    content = content.replace('If $S_{\\text{comp}} is reachable', 'If $S_{\\text{comp}}$ is reachable');
  }
  if (filename === 'REQ-0180.md') {
    content = content.replace('dependency graph $\\mathcal{D}_{\\text{bb}} contains', 'dependency graph $\\mathcal{D}_{\\text{bb}}$ contains');
  }
  if (filename === 'REQ-0189.md') {
    content = content.replace('\\text{Path_0}', '\\text{Path\\_0}');
  }

  // 2. Expand single-line $$...$$ into dedicated 3-line blocks
  const rawLines = content.split('\n');
  const expandedLines = [];
  for (let l = 0; l < rawLines.length; l++) {
    const line = rawLines[l];
    const trimmed = line.trim();
    if (trimmed.startsWith('$$') && trimmed.endsWith('$$') && trimmed.length > 4) {
      const math = trimmed.slice(2, -2).trim();
      expandedLines.push('$$');
      expandedLines.push(math);
      expandedLines.push('$$');
    } else {
      expandedLines.push(line);
    }
  }

  // 3. Ensure blank lines before and after every $$ block, and wrap inline math in $`...`$
  const newLines = [];
  let inDisplay = false;

  for (let i = 0; i < expandedLines.length; i++) {
    const line = expandedLines[i];
    const trimmed = line.trim();

    if (trimmed === '$$') {
      if (!inDisplay) {
        // Opening $$
        if (newLines.length > 0 && newLines[newLines.length - 1].trim() !== '') {
          newLines.push('');
        }
        newLines.push('$$');
        inDisplay = true;
      } else {
        // Closing $$
        newLines.push('$$');
        inDisplay = false;
        if (i < expandedLines.length - 1 && expandedLines[i+1].trim() !== '') {
          newLines.push('');
        }
      }
      continue;
    }

    if (inDisplay) {
      newLines.push(line);
      continue;
    }

    // Outside display math: convert inline math $...$ into $`...`$
    const tokens = splitByCodeSpans(line);
    for (let t = 0; t < tokens.length; t++) {
      if (!tokens[t].isCode) {
        tokens[t].text = tokens[t].text.replace(/(?<!\$)\$(?!`)(.+?)(?<!`)\$(?!\$)/g, (match, inner) => {
          return '$`' + inner + '`$';
        });
      }
    }
    newLines.push(tokens.map(t => t.text).join(''));
  }

  return newLines.join('\n');
}

const dir = 'docs/requirements/final';
const files = fs.readdirSync(dir).filter(f => f.startsWith('REQ-') && f.endsWith('.md')).sort();

let totalFiles = files.length;
let totalDisplay = 0;
let totalInline = 0;
let allDisplayErrors = [];
let allInlineErrors = [];

for (const file of files) {
  const filePath = path.join(dir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const fixed = normalizeAndFixFile(content, file);

  // Validate Display Math
  const displayParts = fixed.split('$$');
  if (displayParts.length % 2 === 0) {
    allDisplayErrors.push({ file, error: 'Unbalanced $$' });
  }
  for (let d = 1; d < displayParts.length; d += 2) {
    totalDisplay++;
    const math = displayParts[d].trim();
    try {
      katex.renderToString(math, { displayMode: true, throwOnError: true });
    } catch (e) {
      allDisplayErrors.push({ file, math: math.slice(0, 50), error: e.message.split('\n')[0] });
    }
  }

  // Validate Inline Math
  const lines = fixed.split('\n');
  let inDisplay = false;
  for (let l = 0; l < lines.length; l++) {
    const line = lines[l];
    if (line.trim().startsWith('$$')) {
      inDisplay = !inDisplay;
      continue;
    }
    if (inDisplay) continue;

    const mathRegex = /\$`([^`]+)`\$/g;
    let match;
    while ((match = mathRegex.exec(line)) !== null) {
      totalInline++;
      const math = match[1];
      try {
        katex.renderToString(math, { displayMode: false, throwOnError: true });
      } catch (e) {
        allInlineErrors.push({ file, line: l + 1, math, error: e.message.split('\n')[0] });
      }
    }
  }

  // Write fixed content
  fs.writeFileSync(filePath, fixed, 'utf-8');
}

console.log(`Successfully transformed all ${totalFiles} requirement specification files.`);
console.log(`Verified ${totalDisplay} display math blocks (0 errors: ${allDisplayErrors.length === 0}).`);
console.log(`Verified ${totalInline} inline math expressions (0 errors: ${allInlineErrors.length === 0}).`);

if (allDisplayErrors.length > 0 || allInlineErrors.length > 0) {
  console.error('Errors occurred during transformation:');
  if (allDisplayErrors.length > 0) console.error('Display errors:', allDisplayErrors);
  if (allInlineErrors.length > 0) console.error('Inline errors:', allInlineErrors);
  process.exit(1);
}
