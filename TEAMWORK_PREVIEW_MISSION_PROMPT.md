# MISSION SPECIFICATION: DEAP COMPILER 199 CONTRACT-GRADE SPECIFICATIONS

## EXECUTION COMMAND
Execute `/teamwork-preview` with this mission prompt in a fresh session.

---

### MISSION CONTEXT & OBJECTIVE
- **Workspace:** `/Users/perkunas/jail/deap-compiler`
- **Remote Repo:** `https://github.com/gintatkinson/deap-compiler`
- **Target Branch:** `reqs` (branched from `main` at `0196b3b`)
- **Seed Input:** 199 seed requirement files in `docs/requirements/seeds/REQ-0001.md` through `REQ-0199.md` across Subsystems 1 to 12.
- **Objective:** Ingest, elaborate, validate, and publish all 199 requirements as contract-grade IEEE 29148 specifications to `docs/requirements/final/REQ-XXXX.md` and publish each as a live GitHub issue on `gintatkinson/deap-compiler` with strict 1:1 numerical alignment (`REQ-0001` <-> Issue #1, ..., `REQ-0199` <-> Issue #199).

---

### THE 5 NON-NEGOTIABLE ARCHITECTURAL DIRECTIVES
1. **Directive 1 (Deterministic UUIDv5 Anchors):**
   - Strictly prohibit UUIDv7 or timestamp-based UUIDs.
   - All synthetic topological anchors MUST derive via deterministic RFC 4122 UUIDv5 hashing using `uuid5(NAMESPACE_OID, "REQ-XXXX")` (or topological path $p$).
2. **Directive 2 (Bounded Work-Stealing Parallelism):**
   - All multi-threaded analysis, STPA Cartesian products, and AST passes MUST execute on a bounded work-stealing thread pool ($N_{\text{max\_workers}}$).
   - Unbounded thread spawning is strictly banned.
3. **Directive 3 (String Interner Zero-Copy Exception):**
   - Slicing and copying bytes from memory-mapped source buffers into the deduplicated global string interner pool during the initial lexical pass is the SOLE permitted exception to zero-copy memory management (REQ-0036).
   - All AST nodes thereafter store 32-bit scalar `SymbolId` handles.
4. **Directive 4 (Synchronization Token Error Recovery):**
   - Ingestion parsers MUST resynchronize on record/delimiter boundaries, accumulating diagnostics up to $C_{\text{max\_errors}}$ before halting with `E0199`, rather than panicking or terminating on the first fault.
5. **Directive 5 (Deterministic Non-Panicking Execution & Release Budget):**
   - Total-function non-panicking execution contract with structured diagnostic propagation (`E0xxx` codes).
   - Performance budget (< 25 ms, < 100 MB RSS) evaluated exclusively in compiled Release mode (`--release`).

---

### EXACT IEEE 29148 CONTRACT SPECIFICATION FORMAT (EVERY FILE)
Every file `docs/requirements/final/REQ-XXXX.md` MUST adhere strictly to this schema:

```markdown
---
id: REQ-XXXX
title: "Crisp Title"
subsystem: "Subsystem N: <Subsystem Title>"
uuidv5: <deterministic-uuidv5>
---

# [REQ-XXXX] <Title>

| Metadata Field | Contract Specification |
| :--- | :--- |
| **Requirement ID** | `REQ-XXXX` |
| **Deterministic UUIDv5** | `<deterministic-uuidv5>` |
| **Subsystem** | Subsystem N: <Subsystem Title> |
| **Complexity Class** | Class $\mathbf{P}$ (<Exact Algorithmic Bound>) |
| **NP Frontier Anchor** | N/A (Deterministic P) / <NP Frontier Anchor if applicable> |
| **Diagnostic Code Bindings** | `E0XXX`, `E0YYY` |
| **Governing Standard** | IEEE 29148-2018 / RFC 2119 / <Domain Standard> |

---

## 1. Normative Statement
<Prescriptive RFC 2119 keywords (SHALL, MUST, SHALL NOT). Purely synthetic abstract MBSE placeholders (e.g. Package_0, Classifier_Alpha, Port_1, Flow_A, param_x : Real). ZERO concrete domain nouns.>

## 2. Formal Invariant
<Rigorous mathematical formulas. All display math in ```math ... ``` code fences. Never raw $$. Inline math must NEVER contain raw & or \\& (use \\land for conjunction).>

## 3. Computational Complexity & Algorithmic Bounds
<Complexity class, formal asymptotic upper bounds for time and memory, proof of polynomial termination.>

## 4. Verification & Conformance Criteria (IEEE 29148 Acceptance Criteria)
### AC-01: <Title>
- **Given:** <precondition>
- **When:** <triggering action>
- **Then:** <observable postcondition>
- **Diagnostic:** `E0XXX` emitted on failure.

### AC-02: <Title>
...
### AC-03: <Title>
...
### AC-04: <Title>
...
```

---

### PURE RUST VALIDATOR MANDATE
Create and maintain a pure Rust validator in `tools/validator`:
- Schema checks: `id: REQ-XXXX`, `Normative Statement`, `Formal Invariant`, `Computational Complexity & Algorithmic Bounds`, `Verification & Conformance Criteria`, `AC-01`.
- Metadata Table check: `| Metadata Field | Contract Specification |`.
- Banned crates check: `lasso`, `petgraph`, `bumpalo`, `typed-arena`, `memmap2`, `proptest`, `rayon`, `deap::*`.
- Word count check: Crisp envelope 500–750 words, hard ceiling $\le 1500$ words.
- All files MUST pass `cargo run -p validator` with exit code 0 before any wave commit.

---

### GITHUB ISSUES PUBLISHING RULES & RENDERING AUDIT
1. **Frontmatter Stripping**: Before publishing or updating a GitHub issue body, the YAML frontmatter (`--- ... ---`) MUST be cleanly parsed and stripped. The issue title becomes `[REQ-XXXX] <Title>` and the body starts with `# [REQ-XXXX] <Title>`. Failure to strip frontmatter triggers GitHub's Setext `<h2>` parsing bug.
2. **Math Rendering Verification**: Display math must be in ```` ```math ```` blocks. Inline math must not contain `&` or `\&` (preventing `&amp;amp;` double-escaping).
3. **1:1 Parity**: Strictly assert that Issue `#N` corresponds to `REQ-{N:04d}`.
4. **Live API Audit**: Validate via `gh api repos/gintatkinson/deap-compiler/issues/<NUM> -H "Accept: application/vnd.github.v3.html+json"` that `frontmatter_h2 == False` and `ampamp == False`.

---

### TEAMWORK SWARM DISPATCH STRATEGY
Divide the 199 requirements into structured subsystem waves:
- Wave 1..8: Subsystems 1..3 (`REQ-0001`..`REQ-0066`)
- Wave 9..15: Subsystems 4..5 (`REQ-0067`..`REQ-0113`)
- Wave 16..20: Subsystems 6..7 (`REQ-0114`..`REQ-0144`)
- Wave 21..24: Subsystem 8 (`REQ-0145`..`REQ-0158`)
- Wave 25..26: Subsystem 9 (`REQ-0159`..`REQ-0174`)
- Wave 27..28: Subsystem 10 (`REQ-0175`..`REQ-0189`)
- Wave 29: Subsystem 11 (`REQ-0190`..`REQ-0194`)
- Wave 30: Subsystem 12 (`REQ-0195`..`REQ-0199`)

Every wave MUST follow the strict pipeline:
1. Ingest seed -> 2. Elaborate contract -> 3. Run Rust validator -> 4. Commit -> 5. Publish to GitHub -> 6. Audit live rendering via GitHub API.
Zero shortcuts. Zero fabricated claims.
