/teamwork-preview # ORCHESTRATION DIRECTIVE: Context-Isolated Single-Requirement Remediation Swarm (REQ-0001 Through REQ-0199)

## 1. SWARM CHARTER & SINGLE-ITEM ISOLATION INVARIANT

### Orchestrator Mandate
You are the **Lead Swarm Orchestrator** for the DEAP Compiler specification remediation. You are strictly prohibited from batching multiple requirements into a single worker context.

### The Mandatory Single-Item Scope Invariant
> **Every worker instance MUST target exactly ONE requirement item (`REQ-XXXX`). Subsystem batching is strictly forbidden.**
> Each of the 199 requirements (`REQ-0001` through `REQ-0199`) is assigned to its own private, context-isolated worker instance that refactors the requirement, validates it via the pure Rust validator, updates its live GitHub issue, audits the rendered HTML, and terminates.

---

## 2. REPOSITORY & TOOLING BASELINE
- **Workspace**: `/Users/perkunas/jail/deap-compiler`
- **Branch**: `reqs` (origin: `https://github.com/gintatkinson/deap-compiler`)
- **Strict 1:1 Parity**: Requirement `REQ-XXXX` corresponds strictly to live GitHub Issue `#XXXX`. Gaps, deletions, or new issue creations are prohibited.
- **Pure Rust Validator (`tools/validator/src/main.rs`)**:
  - Command: `cargo run -p validator -- docs/requirements/final/REQ-XXXX.md`
  - Required Literal Headers:
    - `"Normative Statement"`
    - `"Formal Invariant"` (singular)
    - `"Computational Complexity & Algorithmic Bounds"`
    - `"Verification & Conformance Criteria"`
    - `"AC-01"` or `"Acceptance Criteria"`
  - Banned Crates: `lasso`, `petgraph`, `bumpalo`, `typed-arena`, `memmap2`, `proptest`, `rayon`, `deap::`
  - Word Count: Hard ceiling $\le 1500$ words.
  - Dashes: ASCII `--` and `-` exclusively (Unicode `\u{2014}` and `\u{2013}` banned).
- **KaTeX & GitHub Issue Formatting Standards**:
  - Display Math: Enclosed in isolated `$$ ... $$` or ```` ```math ... ``` ```` blocks.
  - Inline Math with Underscores: ALWAYS enclosed in `$``...``$` to prevent GFM italics `<em>` corruption and table backslash stripping.
  - Semantic Brackets: Use Unicode `⟦` (U+27E6) and `⟧` (U+27E7). `\llbracket` and `\rrbracket` are strictly banned.
  - GitHub Frontmatter: Strip YAML frontmatter (`--- id: REQ-XXXX ... ---`) before updating issues so bodies begin at `# [REQ-XXXX] <Title>`.

---

## 3. ARCHITECTURAL DECOUPLING & DESIGN PURGE DIRECTIVES

Every isolated worker must enforce these four decoupling rules when refactoring its assigned requirement:

1. **Subsystem 8 (REQ-0145–0158) — Logical ICD Decoupling**:
   - Purge all mandatory L0/L1/L2 wire framing ($L_{\text{preamble}}, L_{\text{header}}, L_{\text{trailer}}, L_{\text{crc}}, L_{\text{ifg}}$), bit stuffing, inter-frame gaps, and bus serialization penalties from abstract logical port ICDs.
   - Subsystem 8 specifies pure logical interfaces (port types, payload structures, engineering units, coordinate references, publication rates, end-to-end latency deadlines $T_{\text{deadline}}$).
   - In REQ-0157: Framing and serialization calculations apply ONLY when an explicit physical allocation mapping (`Allocation(Flow, BusLink)`) binds the flow to a concrete hardware profile. Pure logical flows evaluate with zero wire penalty ($L_{\text{frame}} = L_{\text{payload}}$, $\Delta = 0$).

2. **Subsystems 1–3 (REQ-0001–0053) — Ingestion & Core Metamodel**:
   - Purge internal Rust memory mechanics (bump arenas, raw pointer deques, thread pool deques $N_{\text{max\_workers}}$) from normative statements.
   - Recast requirements as black-box system contracts: input grammar acceptance, deterministic AST synthesis ($S_1 = S_2 \implies \mathcal{C}(S_1) = \mathcal{C}(S_2)$), source span tracking, symbol namespace immutability, and diagnostic error propagation.

3. **Subsystems 6–7 (REQ-0114–0144) — Dynamics & Safety Solvers**:
   - Purge hardcoded solver heuristics (ORD-Horn classification, DPLL(T) loop step limits $\kappa_{\text{temporal}} = 50$) from normative statements.
   - Specify declarative satisfiability contracts: temporal interval consistency, state machine determinism, and formal safety verification.

4. **Cross-Cutting Boilerplate & Benchmark Purge (All 199 Requirements)**:
   - Delete the copy-pasted "Directive 1–5" paragraphs repeating identically across all files.
   - Eliminate dummy AC-05 performance micro-benchmarks (`< 25 ms, < 100 MB RSS`) from abstract AST metamodel lowering passes.
   - Global compiler performance budgets belong strictly in Subsystem 12 (`REQ-0195` through `REQ-0199`).

---

## 4. CANONICAL SINGLE-WORKER DISPATCH CONTRACT

The Lead Orchestrator dispatches 199 isolated worker instances sequentially using this exact execution template:

```text
Target: docs/requirements/final/REQ-XXXX.md (Issue #XXXX)
Role: Context-Isolated Requirement Remediation Worker

Execution Steps:
1. INGEST: Read `docs/requirements/final/REQ-XXXX.md`.
2. DECOUPLE:
   - Excised premature physical design (Subsystem 8 ICD wire framing).
   - Excised internal compiler heap/threading mandates (Subsystems 1-3).
   - Excised hardcoded solver heuristics (Subsystems 6-7).
   - Excised copy-pasted "Directive 1-5" boilerplate and dummy AC-05 benchmarks.
3. FORMAT:
   - Ensure all inline math containing underscores uses `$``...``$`.
   - Replace any `\llbracket` / `\rrbracket` with Unicode `⟦` / `⟧`.
   - Preserve exact IEEE 29148 4-part structure and literal headers.
4. VALIDATE:
   - Run `cargo run -p validator -- docs/requirements/final/REQ-XXXX.md`.
   - Assert exit code 0.
5. PUBLISH:
   - Strip YAML frontmatter to a temporary file: `/tmp/issue_XXXX_body.md`.
   - Execute: `gh issue edit XXXX --body-file /tmp/issue_XXXX_body.md`.
   - Sleep 0.8s for rate-limit protection.
6. AUDIT:
   - Verify via `gh api repos/gintatkinson/deap-compiler/issues/XXXX --header "Accept: application/vnd.github.html+json" -q .body_html`.
   - Assert 0 KaTeX errors, 0 broken italics `<em>` in math, and native `<math-renderer>` rendering.
7. REPORT: Return single-line completion token: `[VERIFIED] REQ-XXXX -> Issue #XXXX`.
```

---

## 5. ORCHESTRATOR DISPATCH QUEUE

The Lead Orchestrator iterates through the 199 items in strict sequence, maintaining progress in `.teamwork/status_ledger.json`:

- **Subsystem 1 (REQ-0001 .. REQ-0013)**: Foundational Invariants & Determinism
- **Subsystem 2 (REQ-0014 .. REQ-0033)**: Schema Ingestion & Table Parsing
- **Subsystem 3 (REQ-0034 .. REQ-0053)**: Core Metamodel & AST Graph Engine
- **Subsystem 4 (REQ-0054 .. REQ-0097)**: KerML / SysML v2 Metamodel Lowering
- **Subsystem 5 (REQ-0098 .. REQ-0113)**: 7D Physical Metrology & Conservation
- **Subsystem 6 (REQ-0114 .. REQ-0127)**: Spatio-Temporal Dynamics & State Machines
- **Subsystem 7 (REQ-0128 .. REQ-0144)**: Formal Safety, STPA & Verification
- **Subsystem 8 (REQ-0145 .. REQ-0158)**: Level 1C Logical ICDs & Interconnects
- **Subsystem 9 (REQ-0159 .. REQ-0174)**: Downstream Specification Projections
- **Subsystem 10 (REQ-0175 .. REQ-0189)**: Code Generation, IR & Transport Bindings
- **Subsystem 11 (REQ-0190 .. REQ-0194)**: Standardized Compiler Diagnostic Catalog
- **Subsystem 12 (REQ-0195 .. REQ-0199)**: Performance Assurance & Regression Gates

The orchestrator halts only when all 199 items have achieved `[VERIFIED]` status.
