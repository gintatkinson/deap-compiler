import sys

start = int(sys.argv[1])
end = int(sys.argv[2])

for req_num in range(start, end + 1):
    path = f"docs/requirements/final/REQ-{req_num:04d}.md"
    with open(path) as f:
        lines = f.readlines()
    words = len("".join(lines).split())
    in_math = False
    in_code = False
    prose_amps = []
    for idx, l in enumerate(lines, 1):
        if l.strip().startswith("```math"):
            in_math = True
            continue
        elif l.strip().startswith("```") and in_math:
            in_math = False
            continue
        elif l.strip().startswith("```"):
            in_code = not in_code
            continue
        if not in_math and not in_code:
            if "&" in l:
                if not l.startswith("#") and not l.strip().startswith("|") and not l.startswith("title:"):
                    prose_amps.append((idx, l.strip()))
    print(f"REQ-{req_num:04d}: {words} words, prose amps: {len(prose_amps)}")
    if prose_amps:
        for p in prose_amps:
            print(f"  Line {p[0]}: {p[1]}")
