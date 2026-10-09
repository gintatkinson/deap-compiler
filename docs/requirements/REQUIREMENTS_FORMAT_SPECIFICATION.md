# DEAP Compiler: Requirements Format Specification (IEEE 29148 & GitHub Issue Standard)

## 1. Scope & Objective

This document defines the mandatory, canonical format specification for all 199 formal requirement specifications (`REQ-0001` through `REQ-0199`) in the DEAP Compiler project. It governs both the markdown source files stored on disk (`docs/requirements/final/REQ-XXXX.md`) and their projected representation as GitHub Issues.

Every requirement must read as an executive-grade engineering contract, conforming strictly to **IEEE 29148-2018** (Systems and software engineering -- Life cycle processes -- Requirements engineering), **RFC 2119**, and **GitHub Flavored Markdown (GFM)** with native **KaTeX** display mathematics.

---

## 2. Inviolable Design & Rendering Principles

1. **Native GitHub Rendering (No Visual Clutter):**
   GitHub Issues render GitHub Flavored Markdown (GFM) and native KaTeX (`$$ ... $$` and `$ ... $`). Raw YAML frontmatter at the top of an issue body renders awkwardly as unformatted plain text. Therefore, every specification MUST feature a structured, beautiful GFM Metadata Card table immediately following the frontmatter.

2. **Crisp Information Density (Anti-Bloat):**
   - Word count target: **400 to 800 words**.
   - Word count hard ceiling: Strictly **< 1,200 words** (validator rejects > 1,500 words).
   - Discursive essays, multi-page theoretical treatises, and boilerplate repetition are strictly prohibited.

3. **Pure Clean-Room Abstract Placeholders:**
   - Zero hardcoded real-world domain concepts.
   - All illustrative examples, parameters, and entities must strictly use synthetic abstract MBSE placeholders:
     `Package_0`, `Classifier_Alpha`, `Classifier_Beta`, `Port_1`, `Flow_A`, `param_x : Real`.

4. **Zero Banned Third-Party Crates & Modules:**
   - Zero references to internal/third-party crates: `lasso`, `petgraph`, `bumpalo`, `typed-arena`, `memmap2`, `proptest`, `rayon`, `deap::*`.
   - All concepts must be expressed in formal algebraic, graph-theoretic, and operational compiler terminology.

5. **Strict ASCII Typography:**
   - Zero Unicode em dashes (`—` / `\u2014`) or en dashes (`–` / `\u2013`).
   - Use ASCII hyphen `-` or double hyphen `--` exclusively.

---

## 3. Canonical Document Structure

Every requirement document MUST consist of exactly the following sections in this exact order:

```markdown
---
id: REQ-XXXX
title: "<Canonical Requirement Title>"
subsystem: "Subsystem N: <Subsystem Name>"
uuidv5: <RFC 4122 Deterministic UUIDv5>
---

# [REQ-XXXX] <Canonical Requirement Title>

| Metadata Field | Contract Specification |
| :--- | :--- |
| **Requirement ID** | `REQ-XXXX` |
| **Deterministic UUIDv5** | `<RFC 4122 Deterministic UUIDv5>` |
| **Subsystem** | Subsystem N: <Subsystem Name> |
| **Complexity Class** | Class $\mathbf{P}$ / $\mathbf{NP}\text{-complete}$ / $\mathbf{PSPACE}$ ($O(\dots)$) |
| **NP Frontier Anchor** | NP-X: <Frontier Name> (or N/A: Deterministic P) |
| **Diagnostic Code Bindings**| `E0xxx`, `E0yyy` (per REQ-0191) |
| **Governing Standard** | IEEE 29148-2018 §8.4 / RFC 2119 / OMG SysML v2 / KerML |

---

## 1. Normative Statement

[Prescriptive, positive RFC 2119 specification using SHALL / MUST. Detailed explanation of compiler inputs, lowering transformations, invariants, outputs, and failure modes. Zero purple prose.]

---

## 2. Formal Invariant

[Isolated display math equation(s) in KaTeX $$ fences, with blank lines before and after. Multi-line equations must use \begin{aligned} ... \end{aligned}. Symbol definitions table directly beneath.]

| Symbol / Term | Domain / Formal Definition |
| :--- | :--- |
| $\mathcal{S}$ | Compiler state space or AST graph $(V, E)$ |
| $\dots$ | $\dots$ |

---

## 3. Computational Complexity & Algorithmic Bounds

- **Complexity Class:** $\mathbf{P}$ / $\mathbf{NP}\text{-complete}$ / $\mathbf{PSPACE}$
- **Asymptotic Bound:** $O(\dots)$ where $V = |\text{Nodes}|, E = |\text{Edges}|$
- **Tractable Subclass & Frontier:** [1-2 concise lines referencing the relevant NP-1..NP-8 frontier and the tractable fragment implemented by the compiler. No multi-page essays.]

---

## 4. Verification & Conformance Criteria (Acceptance Criteria)

### AC-01: <Descriptive Title>
- **Given:** <Precondition, initial model AST state, or schema input>
- **When:** <Compiler phase, lowering pass, or evaluation trigger>
- **Then:** <Observable postcondition, emitted artifact, or mathematical invariant>
- **Diagnostic:** `E0xxx` on violation (or: diagnostic sink remains empty)

### AC-02: <Descriptive Title>
- **Given:** ...
- **When:** ...
- **Then:** ...
- **Diagnostic:** `E0xxx` on violation

[4 to 6 total Acceptance Criteria covering: Happy Path, Boundary Edge Cases, Negative/Diagnostic Violations, Error Recovery, and Determinism/Idempotency.]

---

*Traceability: Elaborated under IEEE 29148-2018 and the DEAP Compiler Streamlined Charter.*
```

---

## 4. Detailed Section Formatting Standards

### 4.1 Header & Metadata Card
- **YAML Frontmatter:** Required for programmatic indexing and scripts. Contains `id`, `title`, `subsystem`, `uuidv5`.
- **Primary Heading:** `# [REQ-XXXX] <Canonical Requirement Title>`
- **Metadata Card:** A 2-column GFM table providing human-readable, executive-level summaries of identity, complexity, error codes, and standards alignment.

### 4.2 Section 1: Normative Statement
- Must use RFC 2119 capitalized keywords: `SHALL`, `MUST`, `SHALL NOT`, `MUST NOT`.
- Must specify:
  1. **Inputs:** Exact schema/AST inputs ingested.
  2. **Operational Transformation:** Lowering rules, symbol resolution, typing, or graph transformations.
  3. **Outputs / Postconditions:** Emitted representations, arena records, or target artifacts.
  4. **Error Handling:** Non-panicking error propagation using the 5 Architectural Directives (UUIDv5, work-stealing, string interning exception, sync-token recovery, release performance isolation).

### 4.3 Section 2: Formal Invariant (KaTeX Display Math)
- Must be enclosed in isolated `$$` fences on dedicated lines with blank lines before and after:
  ```markdown
  $$
  \begin{aligned}
  \forall v \in V_{\text{AST}}, \quad \text{UUID}(v) = \text{UUIDv5}(\text{OID}_{\text{DEAP}}, \, \text{Path}(v))
  \end{aligned}
  $$
  ```
- **KaTeX Syntax Rules:**
  - In `\text{...}`, always escape underscores: `\text{type\_name}` (not `\text{type_name}`).
  - Group subscripts in braces: $N_{\text{max\_workers}}$ (not $N_max_workers$).
  - Never use `\n` or `\r` as LaTeX macros (use `\texttt{\textbackslash n}` or formal symbol like $\text{SYM}_{\text{LF}}$).
  - Never use raw `<` or `>` in text mode; use `\lt`, `\gt`, `\le`, `\ge`, `\langle`, `\rangle`.
  - Wrap literal dollar signs in backticks (`` `$ref` ``) or escape as `\$`.
  - Never place `$` delimiters inside table cells.

### 4.4 Section 3: Computational Complexity & Algorithmic Bounds
- Must explicitly state the complexity class: Class $\mathbf{P}$, $\mathbf{NP}\text{-complete}$, or $\mathbf{PSPACE}$.
- Must state asymptotic worst-case bounds using standard Big-O notation.
- Must cite the corresponding NP frontier (NP-1 through NP-8) in 1 to 2 concise sentences, specifying the tractable subclass (e.g. ORD-Horn for NP-1, FFD for NP-2, meet-semilattice for NP-3, minimal cut-sets for NP-4). Multi-page essays on unrelated frontiers are strictly banned.

### 4.5 Section 4: Verification & Conformance Criteria (Acceptance Criteria)
- Must contain between **4 and 6** numbered criteria: `### AC-01: ...` through `### AC-05: ...`.
- Every AC must strictly follow the 4-part Given/When/Then/Diagnostic contract:
  - **Given:** <Concrete, testable precondition>
  - **When:** <Execution action or compilation trigger>
  - **Then:** <Measurable, verifiable postcondition>
  - **Diagnostic:** <Specific diagnostic code binding `E0100`--`E0599` on fault>
- Facet coverage:
  1. `AC-01`: Standard happy-path compilation / lowering.
  2. `AC-02`: Boundary / limit condition.
  3. `AC-03`: Malformed input / negative diagnostic rejection.
  4. `AC-04`: Synchronization token error recovery & AST containment.
  5. `AC-05`: Idempotency, bitwise determinism, or performance bound.

---

## 5. GitHub Issue Publication Format

When publishing a requirement to GitHub via `gh issue create`:
1. **Title:** Strictly formatted as `[REQ-XXXX] <Canonical Requirement Title>`.
2. **Body:** Created directly from `docs/requirements/final/REQ-XXXX.md` via `--body-file`.
3. **Labels:** Mandatory labels:
   - `requirement`
   - `clean-room`
   - Optional subsystem tag: `tier-N` (where N is the subsystem number 1--12).
4. **Idempotency:** The publisher must query GitHub before creating (`gh issue list --search "[REQ-XXXX] in:title"`) to guarantee zero duplicate issues.
5. **Ledger Synchronization:** The issue number and URL must be recorded in `.teamwork/issue_manifest.json` and `.teamwork/status_ledger.json`.

---

## 6. Gold Standard Reference Example (REQ-0001)

```markdown
---
id: REQ-0001
title: "Abstract MBSE Compiler Mandate & Pure Schema-Driven Execution"
subsystem: "Subsystem 1: System Vision, Bootstrapping & Foundational Invariants"
uuidv5: 5a4d7a99-0419-5c2b-ba0e-ccabdb05f1c9
---

# [REQ-0001] Abstract MBSE Compiler Mandate & Pure Schema-Driven Execution

| Metadata Field | Contract Specification |
| :--- | :--- |
| **Requirement ID** | `REQ-0001` |
| **Deterministic UUIDv5** | `5a4d7a99-0419-5c2b-ba0e-ccabdb05f1c9` |
| **Subsystem** | Subsystem 1: System Vision, Bootstrapping & Foundational Invariants |
| **Complexity Class** | Class $\mathbf{P}$ ($O(1)$ symbol resolution, $O(N)$ AST lowering) |
| **NP Frontier Anchor** | N/A (Deterministic Polynomial Foundation) |
| **Diagnostic Code Bindings**| `E0100`, `E0101`, `E0199` |
| **Governing Standard** | IEEE 29148-2018 §8.4 / RFC 2119 / Pure MBSE Invariant |

---

## 1. Normative Statement

The compiler SHALL operate exclusively as an abstract Model-Based Systems Engineering (MBSE) compiler and formal verification engine. The compiler MUST execute purely schema-driven transformations without hardcoding any concrete domain-specific entities, physical systems, or proprietary protocols.

All structural elements, classifiers, ports, connections, physical quantities, and behavioral state graphs SHALL be constructed dynamically from user-provided schema specifications. The ingestion pipeline MUST reject any model referencing undefined domain types by emitting diagnostic `E0100`. In the presence of malformed tokens, the parser SHALL employ synchronization token recovery (Architectural Directive 4) to isolate faulty statements and continue parsing subsequent definitions without panicking (Architectural Directive 5).

Every AST node and model entity emitted SHALL be assigned an immutable, deterministic RFC 4122 UUIDv5 identifier (Architectural Directive 1) derived from the repository namespace OID and the node fully qualified topological name.

---

## 2. Formal Invariant

$$
\begin{aligned}
\forall e \in \mathcal{E}_{\text{model}}, \quad & \text{Type}(e) \in \mathcal{T}_{\text{schema}} \\
\text{UUID}(e) = & \; \text{UUIDv5}(\text{OID}_{\text{DEAP}}, \, \text{FQN}(e)) \\
\mathcal{T}_{\text{hardcoded}} = & \; \emptyset
\end{aligned}
$$

| Symbol / Term | Domain / Formal Definition |
| :--- | :--- |
| $\mathcal{E}_{\text{model}}$ | Set of all semantic entities in the lowered compiler model |
| $\mathcal{T}_{\text{schema}}$ | Dynamic type lattice defined exclusively by user-supplied input schemas |
| $\text{UUIDv5}(\text{OID}, s)$ | RFC 4122 SHA-1 namespace-based deterministic UUID derivation |
| $\text{FQN}(e)$ | Canonical fully qualified topological namespace string of entity $e$ |
| $\mathcal{T}_{\text{hardcoded}}$ | Set of domain-specific concepts embedded in compiler binaries (invariant: strictly empty) |

---

## 3. Computational Complexity & Algorithmic Bounds

- **Complexity Class:** $\mathbf{P}$ (Deterministic Polynomial Time)
- **Asymptotic Bound:** $O(N)$ where $N = |\mathcal{E}_{\text{model}}|$, with $O(1)$ average-case symbol interning and UUIDv5 hashing per entity.
- **Tractable Subclass & Frontier:** Strictly deterministic polynomial; establishes the invariant foundation that prevents domain-specific exponential branching prior to solver invocation.

---

## 4. Verification & Conformance Criteria (Acceptance Criteria)

### AC-01: Pure Schema-Driven Ingestion
- **Given:** A valid input schema declaring synthetic package `Package_0` with classifier `Classifier_Alpha`.
- **When:** The compiler executes the front-end ingestion pass.
- **Then:** The compiler successfully lowers `Package_0::Classifier_Alpha` into the arena AST without diagnostic warnings or errors.
- **Diagnostic:** Diagnostic sink remains empty.

### AC-02: Rejection of Undefined Concrete Domain Constructs
- **Given:** An input model referencing an undeclared concrete domain identifier `Concrete_Engine_Block`.
- **When:** Type checking and namespace resolution are executed.
- **Then:** The compiler halts lowering of the undefined entity and emits diagnostic `E0100`.
- **Diagnostic:** `E0100` (Undefined type identifier).

### AC-03: Deterministic UUIDv5 Identifier Stability
- **Given:** A model with entity `Package_0::Classifier_Alpha` compiled across multiple independent runs and directories.
- **When:** UUID generation is evaluated for the entity AST node.
- **Then:** The identical UUIDv5 `5a4d7a99-0419-5c2b-ba0e-ccabdb05f1c9` is generated on every run with zero diff churn.
- **Diagnostic:** `E0101` on UUID divergence.

### AC-04: Synchronization Token Error Recovery
- **Given:** An input file containing a syntactically invalid definition on line 12 followed by a valid classifier on line 18.
- **When:** The ingestion lexer encounters the malformed token.
- **Then:** The parser records diagnostic `E0199`, resynchronizes on the next statement delimiter, and successfully parses the classifier on line 18.
- **Diagnostic:** `E0199` (Syntax error recovery sentinel).

---

*Traceability: Elaborated under IEEE 29148-2018 and the DEAP Compiler Streamlined Charter.*
```
