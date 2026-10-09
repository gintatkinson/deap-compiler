import re
import os

def determine_complexity(s3_text):
    # Extract O(...) bounds from Section 3
    bounds = re.findall(r"(\$[`]?O\(.*?\)[`]?\$)", s3_text)
    if bounds:
        clean_bound = bounds[0].replace("$`", "").replace("`$", "").replace("$", "")
        return f"Class $\\mathbf{{P}}$ ({clean_bound})"
    return "Class $\\mathbf{P}$ ($O(N)$ deterministic)"

def upgrade_file(req_num):
    path = f"docs/requirements/final/REQ-{req_num:04d}.md"
    with open(path) as f:
        content = f.read()

    fm_match = re.match(r"^---\n(.*?)\n---\n+", content, re.DOTALL)
    if not fm_match:
        print(f"ERROR: {path} has no frontmatter")
        return False
    fm = fm_match.group(1)
    body = content[fm_match.end():]

    req_id = re.search(r"^id:\s*(REQ-\d{4})", fm, re.M).group(1)
    title = re.search(r"^title:\s*[\"']?(.*?)[\"']?\s*$", fm, re.M).group(1).strip("\"'")
    subsystem = re.search(r"^subsystem:\s*[\"']?(.*?)[\"']?\s*$", fm, re.M).group(1).strip("\"'")
    uuidv5 = re.search(r"^uuidv5:\s*[\"']?(.*?)[\"']?\s*$", fm, re.M).group(1).strip("\"'")

    # Extract complexity
    s3_match = re.search(r"## 3\. Computational Complexity & Algorithmic Bounds\s*\n+(.*?)(?=\n+## 4\.)", body, re.DOTALL)
    s3_text = s3_match.group(1).strip() if s3_match else ""
    complexity = determine_complexity(s3_text)

    # Extract diagnostics
    diags = sorted(list(set(re.findall(r"\b(E\d{4})\b", body))))
    diag_str = ", ".join(f"`{d}`" for d in diags) if diags else "`E0100`"

    # Check NP frontier
    np_match = re.search(r"\b(NP-\d+)\b", body)
    np_str = f"N/A (Deterministic Polynomial Fragment of {np_match.group(1)})" if np_match else "N/A (Deterministic P)"

    # Determine Governing Standard
    std = "IEEE 29148-2018 / RFC 2119"
    if "SysML" in subsystem or "SysML" in body:
        std += " / OMG SysML v2"
    elif "KerML" in subsystem or "KerML" in body:
        std += " / OMG KerML"

    # Build metadata table
    table = f"""# [{req_id}] {title}

| Metadata Field | Contract Specification |
| :--- | :--- |
| **Requirement ID** | `{req_id}` |
| **Deterministic UUIDv5** | `{uuidv5}` |
| **Subsystem** | {subsystem} |
| **Complexity Class** | {complexity} |
| **NP Frontier Anchor** | {np_str} |
| **Diagnostic Code Bindings** | {diag_str} |
| **Governing Standard** | {std} |

---
"""

    # Replace old heading
    # Old heading might be: # REQ-XXXX: ... or # [REQ-XXXX] ...
    old_h1_match = re.search(r"^#\s*.*?\n+", body)
    if old_h1_match:
        new_body = table + "\n" + body[old_h1_match.end():].lstrip()
    else:
        new_body = table + "\n" + body

    new_content = f"---\n{fm}\n---\n\n{new_body}"

    with open(path, "w") as f:
        f.write(new_content)

    return True

if __name__ == "__main__":
    for i in range(2, 67):
        ok = upgrade_file(i)
        print(f"Upgraded REQ-{i:04d}: {ok}")
