import subprocess
import re
import json
import time
import sys

repo = "gintatkinson/deap-compiler"

start_req = int(sys.argv[1]) if len(sys.argv) > 1 else 167
end_req = int(sys.argv[2]) if len(sys.argv) > 2 else 174

for req_num in range(start_req, end_req + 1):
    req_id = f"REQ-{req_num:04d}"
    path = f"docs/requirements/final/{req_id}.md"
    with open(path) as f:
        content = f.read()

    # Parse frontmatter
    fm_match = re.match(r"^---\n(.*?)\n---\n+", content, re.DOTALL)
    if not fm_match:
        print(f"ERROR: No frontmatter in {path}")
        sys.exit(1)
    
    fm_text = fm_match.group(1)
    body = content[fm_match.end():]

    # Extract title
    title_match = re.search(r"^title:\s*[\"']?(.*?)[\"']?\s*$", fm_text, re.MULTILINE)
    if not title_match:
        print(f"ERROR: No title in frontmatter of {path}")
        sys.exit(1)
    title = title_match.group(1).strip("\"'")
    issue_title = f"[{req_id}] {title}"

    # Verify body does not have raw YAML frontmatter
    if body.startswith("---"):
        print(f"ERROR: Body still starts with frontmatter delimiter in {path}")
        sys.exit(1)

    print(f"Publishing Issue #{req_num}: {issue_title} ...")
    cmd = [
        "gh", "issue", "create",
        "--repo", repo,
        "--title", issue_title,
        "--body", body,
        "--label", "requirement,clean-room"
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print(f"Failed to create issue {req_id}: {res.stderr}")
        sys.exit(1)
    
    issue_url = res.stdout.strip()
    print(f"Created: {issue_url}")
    
    created_num = int(issue_url.rstrip("/").split("/")[-1])
    if created_num != req_num:
        print(f"CRITICAL ALIGNMENT ERROR: Expected #{req_num} but got #{created_num}")
        sys.exit(1)

    # Verify rendering via API
    time.sleep(1)
    api_cmd = [
        "gh", "api", f"repos/{repo}/issues/{created_num}",
        "-H", "Accept: application/vnd.github.v3.html+json"
    ]
    api_res = subprocess.run(api_cmd, capture_output=True, text=True)
    if api_res.returncode == 0:
        issue_data = json.loads(api_res.stdout)
        html_body = issue_data.get("body_html", "")
        has_ampamp = "&amp;amp;" in html_body
        has_math = ("math-display" in html_body or "math-inline" in html_body or "render-math" in html_body or "data-math" in html_body or "```math" in html_body or "katex" in html_body)
        has_fm_h2 = "<h2>title:" in html_body or "<h2>id:" in html_body
        print(f"  Audit #{created_num}: ampamp={has_ampamp}, math={has_math}, frontmatter_h2={has_fm_h2}")
        if has_ampamp or has_fm_h2:
            print("  WARNING: Audit failed checks!")
            sys.exit(1)
    else:
        print(f"  Warning: could not fetch API HTML for #{created_num}")
    time.sleep(1)

print("Batch Publication & Verification Complete!")
