# Sovereign DEAP Compiler: Authoritative Clean-Room Requirements Specification

| Metadata Attribute | Specification Record |
| :--- | :--- |
| **Document Title** | Authoritative Clean-Room Requirements Skeleton |
| **Document Identifier** | `DOC-DEAP-REQ-SKELETON-01` |
| **Compiler Platform** | Sovereign DEAP Model-Based Systems Engineering Compiler Platform |
| **Repository Scope** | `deap-compiler-spec` (Sovereign Clean-Room SSOT) |
| **Metamodel Base** | OMG KerML 1.0 / OMG SysML v2 Standard Metamodels (Release 2026-08) |
| **Coverage Scope** | 12 Subsystems, Exactly 199 Clean-Room Requirements (`REQ-0001` through `REQ-0199`) |
| **Diagnostic Codes** | Standardized Compiler Diagnostic Space (`E0100` through `E0599`) |
| **Architectural Directives** | Deterministic UUIDv5, Bounded Work-Stealing Parallelism, Interner Exception, Token Recovery, Panic-Free Release |
| **Status** | Authoritative Master Specification Catalog |

---

## 1. Executive Vision, Invariants & Architectural Directives

### 1.1 Pure Schema-Driven Compiler Invariant
The DEAP compiler is an abstract, domain-agnostic Model-Based Systems Engineering (MBSE) compiler platform, NOT a domain-specific modeler. The compiler platform operates strictly on generic systems engineering primitives (Classifiers, Feature Usages, Abstract Ports, Directional Connectors, Rational Dimensional Exponents, Kirchhoff Flow Networks, Temporal Occurrence Intervals, Hierarchical State Machines, Mathematical Invariants, and Verification Witnesses). All specification models, epics, features, user stories, use cases, and downstream engineering artifacts derive exclusively and deterministically from AST nodes present in user-provided schemas in `schema/` with zero hardcoded domain concepts.

### 1.2 The Five Non-Negotiable Architectural Directives
1. **Deterministic UUIDv5 Namespace Hashing**: All synthetic entities, document anchors, and artifact identities are generated using RFC 4122 UUIDv5 hashing seeded by fully qualified topological paths (`Package_0::Subsystem_Alpha::Classifier_Beta`). All entity identity generation exclusively employs deterministic RFC 4122 UUIDv5 path hashing.
2. **Bounded Work-Stealing Parallelism**: All multi-threaded graph traversals, combinatorial tensor expansions, and parallel file emissions are executed through bounded work-stealing thread pools (bounded worker pool, $N_{\text{max\_workers}}$). All parallel task execution is strictly bounded to the configured worker pool.
3. **String Interner Buffer Allocation Boundary**: Copying string slice bytes from memory-mapped source file buffers into the global symbol interner pool for scalar `SymbolId` tokens is the sole permitted exception to zero-copy memory management.
4. **Synchronization Token Error Recovery**: All schema and language parsers implement synchronization token error recovery, resynchronizing on statement and delimiter boundaries to discover and accumulate multiple diagnostic errors without halting on first fault.
5. **Panic-Free Release Paths & Production Performance**: Production release paths strictly enforce a deterministic, non-panicking execution contract with guaranteed total-function termination and structured error propagation on invalid inputs. Total compilation latency is bounded to under 25 milliseconds and peak memory consumption is bounded to under 100 megabytes RSS for baseline models up to 10,000 AST nodes evaluated via dedicated benchmark harnesses.

### 1.3 Positive Formulation & Zero-Contamination Invariant
All requirements in this catalog are formulated 100% positively using formal systems engineering primitives without negative-constraint phrases. All abstract examples utilize canonical generic placeholders (`Package_0`, `Package_Alpha`, `Classifier_Alpha`, `Port_1`, `Flow_A`, `param_x : Real`). The specification contains zero hardcoded domain concepts.

### 1.4 Mandatory Skeleton Requirement Structure
Every requirement block throughout this catalog strictly enforces the structural skeleton format:
1. **Normative Statement**: Explicit normative requirement using standard formal verbs ("shall" / "must").
2. **Formal Invariant**: Mathematical formulations, AST node mappings, algebraic equations, or algorithmic complexity bounds.

---

## 2. Master Requirements Catalog Index

| Subsystem Index & Name | Requirements Range | Count | Primary Compiler Logical Subsystem / Module | Diagnostic Code Space |
| :--- | :---: | :---: | :--- | :---: |
| **Subsystem 1: System Vision, Bootstrapping & Foundational Invariants** | `REQ-0001`--`REQ-0013` | 13 | `deap::compiler` | `E0117--E0130` |
| **Subsystem 2: Universal Schema Ingestion Engine** | `REQ-0014`--`REQ-0033` | 20 | `deap::ingest` | `E0100--E0118, E0131` |
| **Subsystem 3: Core Metamodel, Node Arena & AST Graph Engine** | `REQ-0034`--`REQ-0053` | 20 | `deap::core, deap::ast` | `E0201--E0214, E0229--E0233` |
| **Subsystem 4: Complete OMG SysML v2 / KerML Metamodel Lowering & Grammar** | `REQ-0054`--`REQ-0097` | 44 | `deap::kerml, deap::sysml` | `E0200, E0215--E0228, E0251--E0263, E0301--E0303, E0401--E0404` |
| **Subsystem 5: 7D Physical Metrology & Abstract Flow Conservation Networks** | `REQ-0098`--`REQ-0113` | 16 | `deap::units` | `E0220--E0227, E0262, E0264--E0266, E0304--E0307` |
| **Subsystem 6: Spatio-Temporal Dynamics & Discrete State Machine Solvers** | `REQ-0114`--`REQ-0127` | 14 | `deap::solvers` | `E0226, E0250--E0260, E0405` |
| **Subsystem 7: Formal Safety, Traceability & Regulatory Verification** | `REQ-0128`--`REQ-0144` | 17 | `deap::safety` | `E0130, E0406--E0422, E0440--E0451` |
| **Subsystem 8: Level 1C Interface Control Documents & Interconnect Contracts** | `REQ-0145`--`REQ-0158` | 14 | `deap::spec::icd` | `E0220, E0301, E0440--E0451` |
| **Subsystem 9: Downstream Specification Projections** | `REQ-0159`--`REQ-0174` | 16 | `deap::spec::projections` | `E0112, E0119, E0204, E0210, E0405, E0502--E0510` |
| **Subsystem 10: Multi-Target Code Generation, Simulation & Transport Bindings** | `REQ-0175`--`REQ-0189` | 15 | `deap::codegen` | `E0204, E0228, E0501--E0512` |
| **Subsystem 11: Standardized Compiler Diagnostic Error Catalog** | `REQ-0190`--`REQ-0194` | 5 | `deap::diagnostics` | `E0100--E0599` |
| **Subsystem 12: Compiler Performance, CLI, Assurance & Regression Inoculation** | `REQ-0195`--`REQ-0199` | 5 | `deap::cli` | `E0100--E0599` |
| **TOTAL COMPILER SPECIFICATION** | `REQ-0001`--`REQ-0199` | **199** | **All Core Modules & Pipelines** | `E0100`--`E0599` |

---

## Subsystem 1: System Vision, Bootstrapping & Foundational Invariants

**Scope & Objective**: Establishes the abstract MBSE compiler mandate, pure schema-driven execution, surjective lexical provenance, bitwise determinism, workspace sovereignty, polyrepo architecture, sovereign SSOT, zero-copy bump arena memory, and deterministic RFC 4122 UUIDv5 namespace hashing.

**Requirements Range**: `REQ-0001` through `REQ-0013` (13 Requirements)

### REQ-0001: Abstract MBSE Compiler Mandate & Pure Schema-Driven Execution
- **Normative Statement**: The compiler platform shall function as an abstract Model-Based Systems Engineering (MBSE) compiler, deriving all synthesized intermediate representations, verification models, and interface definitions deterministically from user-provided schema inputs while operating strictly on generic systems engineering primitives (Classifiers, Feature Usages, Abstract Ports, Directional Connectors, Mathematical Constraints, State Transitions, and Occurrence Lifecycles).
- **Formal Invariant**: Let $\mathcal{S}$ denote the set of input schema tokens and $\mathcal{K}_{\text{grammar}}$ denote the fixed vocabulary of compiler grammar keywords. The synthesized AST $\mathcal{A}$ satisfies:
$$
\forall \sigma \in \text{Symbols}(\mathcal{A}), \quad \sigma \in \text{Tokens}(\mathcal{S}) \cup \mathcal{K}_{\text{grammar}} \cup \text{Synthetic}(\mathcal{S})
$$
where synthetic symbols derive deterministically via RFC 4122 UUIDv5 topological path hashing.
The compiler pipeline execution is modeled as a deterministic mapping:
$$
\mathcal{C} : \mathcal{S} \longrightarrow \mathcal{M}_{\text{SysML2}}
$$
Complexity bound: The compilation pipeline shall exhibit strict linear time complexity $O(N)$ with respect to total input schema token count $N$.

---

### REQ-0002: Surjective Lexical Provenance Gate & Positive AST Provenance
- **Normative Statement**: The compiler shall enforce a surjective lexical provenance gate across all synthesized AST elements such that every generated classifier, port, connector, attribute, constraint, and action identifier establishes a verifiable derivation link back to a corresponding AST node within parsed schema source files or a deterministic synthetic topological parent anchor.
- **Formal Invariant**: Let $\text{Nodes}(\mathcal{A})$ be the set of nodes in synthesized AST $\mathcal{A}$, $\text{ASTNodes}(\mathcal{S})$ be the set of parsed schema source nodes, and $\text{TopologicalAnchors}(\mathcal{S})$ be the set of deterministic synthetic anchor paths. The provenance function $\Pi : \text{Nodes}(\mathcal{A}) \longrightarrow \text{ASTNodes}(\mathcal{S}) \cup \text{TopologicalAnchors}(\mathcal{S})$ satisfies:
$$
\forall n \in \text{Nodes}(\mathcal{A}), \quad \exists s \in \text{ASTNodes}(\mathcal{S}) \cup \text{TopologicalAnchors}(\mathcal{S}) \quad \text{such that} \quad \Pi(n) = s
$$
The compiler validates that $\Pi$ is surjective across all structural definitions in $\mathcal{A}$.

---

### REQ-0003: Bitwise Determinism & Zero Diff Churn Verification
- **Normative Statement**: The compiler pipeline shall guarantee bitwise deterministic emission across multiple execution invocations on identical input schemas such that repeated compilation passes against unchanged inputs produce bit-for-bit identical output artifacts.
- **Formal Invariant**: Let $\mathcal{E}$ be the compiler artifact emission function, and $\mathcal{I}$ be an arbitrary input configuration. For any two executions $t_1, t_2$:
$$
\text{SHA256}(\mathcal{E}(\mathcal{I}, t_1)) \equiv \text{SHA256}(\mathcal{E}(\mathcal{I}, t_2))
$$
All internal hash tables, symbol tables, and node registries shall enforce stable, deterministic iteration orders (e.g., via deterministic key ordering or explicit topological sorting before serialization).

---

### REQ-0004: Workspace Sovereignty & Dynamic Relative Path Resolution
- **Normative Statement**: The compiler platform shall operate in a completely self-contained, sovereign repository architecture where all filesystem operations, cross-module imports, schema references, and output artifact paths resolve dynamically using workspace-relative paths derived from the repository root.
- **Formal Invariant**: Let $\mathcal{R}$ denote the sovereign repository root path determined dynamically via `git rev-parse --show-toplevel` or explicit CLI `--root` argument. All resolved paths $P$ satisfy:
$$
P = \mathcal{R} \bowtie p_{\text{rel}}, \quad \text{where } p_{\text{rel}} \in \text{Path}(\mathcal{R})
$$
Hardcoded absolute machine paths, user home directory references, and external upstream repository URLs are strictly rejected during path validation.

---

### REQ-0005: Standalone Self-Contained Execution & Environment Independence
- **Normative Statement**: The compiler platform shall execute as a standalone, self-contained compiler binary that operates independently of host environment configuration, external service daemons, or implicit global filesystem state.
- **Formal Invariant**: Let $\mathcal{C}$ be the compiler executable and $\mathcal{E}$ the execution environment. The compilation artifact output $\mathcal{A}$ satisfies:
$$
\forall \mathcal{E}_1, \mathcal{E}_2, \quad \mathcal{C}(\mathcal{I}, \mathcal{E}_1) \equiv \mathcal{C}(\mathcal{I}, \mathcal{E}_2)
$$
where $\mathcal{I}$ is the complete input configuration and inputs are isolated from undeclared environment dependencies.

---

### REQ-0006: Incremental Compilation Dependency Tracking & AST Cache Invalidation
- **Normative Statement**: The compiler platform shall maintain fine-grained dependency tracking across compilation units to enable incremental compilation, invalidating and recomputing only AST subgraphs transitively affected by input schema modifications.
- **Formal Invariant**: Let $G = (V, E)$ be the compilation unit dependency DAG. For any modified input unit $u \in V$, the invalidated subgraph $\text{Invalidated}(u)$ satisfies:
$$
\text{Invalidated}(u) = \{ v \in V \mid u \to^* v \}
$$
All unimpacted compilation units $w \notin \text{Invalidated}(u)$ are reused directly from the compiler AST cache without re-parsing.

---

### REQ-0007: Multi-File Compilation Unit Resolution & Hierarchical Package Scoping
- **Normative Statement**: The compiler architecture shall resolve multi-file compilation units and enforce hierarchical package scoping across modular schema libraries without cross-module symbol collision or namespace pollution.
- **Formal Invariant**: Let $\mathcal{P}$ be the set of hierarchical packages and $\text{Symbols}(P)$ be the exported symbols of package $P \in \mathcal{P}$. For distinct packages $P_i \neq P_j$:
$$
\text{QualifiedNamespace}(P_i) \cap \text{QualifiedNamespace}(P_j) = \emptyset
$$
All cross-package symbol references require explicit, unambiguous qualified path imports.

---

### REQ-0008: Sovereign Single Source of Truth (SSOT) Multi-File AST Model
- **Normative Statement**: The multi-file SysML v2 / KerML AST synthesized from `schema/` shall serve as the sovereign Single Source of Truth (SSOT) for all architectural structures, interfaces, and constraints, from which all downstream representations (Epics, Features, ICDs, Simulation Models, and Source Code) function as formal projections.
- **Formal Invariant**: Let $\mathcal{A}_{\text{SSOT}}$ be the resolved AST model graph. For every downstream artifact $D_k$, there exists a projection function $\psi_k$:
$$
D_k = \psi_k(\mathcal{A}_{\text{SSOT}})
$$
Direct manual modification of downstream artifacts without corresponding upstream AST mutation is detected and flagged by bidirectional reconciliation gates.

---

### REQ-0009: Zero-Copy Bump Arena Memory Management
- **Normative Statement**: The compiler front-end and core AST engine shall utilize zero-copy memory management via contiguous bump allocation arenas for all parsed AST nodes, token streams, and intermediate representation graphs, borrowing string slices (`&str`) directly from memory-mapped source file buffers.
- **Formal Invariant**: Let $\mathcal{B}_{\text{file}}$ be a memory-mapped byte buffer of length $L$. An AST string token $T$ is represented as a slice reference:
$$
T = \&\mathcal{B}_{\text{file}}[s \dots s+l], \quad \text{where } 0 \le s < s+l \le L
$$
All string tokens during AST construction are allocated exclusively within the interner or borrowed from memory-mapped source buffers; node data structures reside exclusively in contiguous memory arenas (`typed-arena` or `bumpalo`).

---

### REQ-0010: Deterministic RFC 4122 UUIDv5 Topological Namespace Hashing
- **Normative Statement**: The compiler shall generate all synthetic entity identifiers, specification document anchors, and artifact unique keys exclusively from deterministic RFC 4122 UUIDv5 hashing seeded by fully qualified topological AST namespace paths.
- **Formal Invariant**: Let $\mathcal{N}_{\text{topological}}$ be the canonical fully qualified path of an element (e.g. `Package_0::Subsystem_Alpha::Classifier_Beta`) and $\text{NS}_{\text{DEAP}}$ be the fixed RFC 4122 namespace UUID. The generated UUIDv5 identifier $U$ satisfies:
$$
U = \text{UUIDv5}(\text{NS}_{\text{DEAP}}, \mathcal{N}_{\text{topological}}) = \text{Truncate}_{128}(\text{SHA1}(\text{NS}_{\text{DEAP}} \mathbin{\Vert} \mathcal{N}_{\text{topological}}))
$$
Properties: $U$ is invariant to compile timestamp, filesystem location, and execution host.

---

### REQ-0011: Deterministic Non-Panicking Execution Contract & Release Latency Bounds
- **Normative Statement**: Production release builds of the compiler platform shall strictly enforce a deterministic, non-panicking execution contract with guaranteed total-function termination and structured error propagation on invalid inputs, while bounding total compilation latency in optimized release configurations (`--release`) for baseline models up to 10,000 AST nodes to under 25 milliseconds evaluated on reference benchmark workloads isolated from CI test suites.
- **Formal Invariant**: For any input configuration $m \in \mathcal{M}$, compilation execution $\text{Compile}(m)$ is a total deterministic function satisfying:
$$
\text{Compile}(m) \in \mathcal{A} \cup \mathcal{D} \quad \wedge \quad \text{AbnormalTermination}(m) \equiv \text{false}
$$
Total execution latency $\Delta t$ measured via dedicated Release-mode benchmark harnesses satisfies:
$$
\Delta t \le 25 \text{ ms} \quad \text{for } |\text{Nodes}(\mathcal{A})| \le 10{,}000
$$

---

### REQ-0012: Bounded Work-Stealing Parallelism & Thread Isolation
- **Normative Statement**: All multi-threaded graph traversals, combinatorial safety calculations, and parallel artifact code generation shall execute through bounded work-stealing thread pools with parallel task execution strictly bounded within the configured worker thread pool of upper bound $N_{\text{max\_workers}}$ threads.
- **Formal Invariant**: Let $P$ denote the bounded worker pool initialized with thread count $N_{\text{threads}} = \min(C_{\text{logical}}, N_{\text{max\_workers}})$. All parallel operations satisfy:
$$
|P| \le N_{\text{max\_workers}}
$$
Workloads are partitioned into data-parallel stages with adaptive chunk sizing to prevent thread starvation and scheduling overhead.

---

### REQ-0013: Synchronization Token Error Recovery Architecture
- **Normative Statement**: All front-end schema and language parsers shall implement synchronization token error recovery to emit rich diagnostics, discard tokens up to the nearest synchronization boundary, and resume parsing to collect all subsequent errors in a single pass.
- **Formal Invariant**: Let $\mathcal{T}_{\text{sync}}$ be the designated set of synchronization tokens for grammar rule $R$. Upon syntax fault at token $t_k$:
$$
\text{SkipUntil}(\mathcal{T}_{\text{sync}}) = \{ t_i \mid k \le i < m, t_m \in \mathcal{T}_{\text{sync}} \}
$$
The parser advances to $t_{m+1}$ in parsing state $S_{\text{recovered}}$, accumulating diagnostic $D_k$ into the diagnostic sink:
$$
\text{Diagnostics} \leftarrow \text{Diagnostics} \cup \{ D_k \}
$$

---

## Subsystem 2: Universal Schema Ingestion Engine

**Scope & Objective**: Specifies the universal schema ingestion engine capable of parsing tabular CommonMark schemas, Protocol Buffers (Proto3), OMG IDL, OpenAPI, and generic Architecture Description Languages (ADLs) into canonical SysML v2 textual models with zero data loss, synchronization error recovery, and multi-file cryptographic digests.

**Requirements Range**: `REQ-0014` through `REQ-0033` (20 Requirements)

### REQ-0014: File Format Detection Engine by Extension & Magic Signatures
- **Normative Statement**: The ingestion engine shall classify input schema files into target schema formats using file extensions and content-based magic signatures across CommonMark Markdown tables, Protocol Buffers (`.proto`), OMG IDL (`.idl`), OpenAPI (`.json`/`.yaml`), and XML Schemas (`.xml`/`.xsd`).
- **Formal Invariant**: Let $F$ be an input file with extension $\text{ext}(F)$ and initial byte prefix $\text{head}(F, 512)$. The format classifier function $\Delta$ is defined as:
$$
\Delta(F) = \begin{cases}
\text{MarkdownTable}, & \text{if } \text{ext}(F) \in \{\text{".md"}, \text{".markdown"}\} \wedge \text{ContainsMarkdownTable}(\text{head}(F)) \\
\text{Protobuf}, & \text{if } \text{ext}(F) = \text{".proto"} \vee \text{ContainsPrefix}(\text{head}(F), \text{"syntax = \"proto"}) \\
\text{OmgIdl}, & \text{if } \text{ext}(F) = \text{".idl"} \vee \text{ContainsKeyword}(\text{head}(F), \text{"module"}) \\
\text{OpenApi}, & \text{if } \text{ext}(F) \in \{\text{".json"}, \text{".yaml"}\} \wedge \text{ContainsKeys}(\text{head}(F), \{\text{"openapi"}, \text{"swagger"}\}) \\
\text{XmlSchema}, & \text{if } \text{ext}(F) \in \{\text{".xml"}, \text{".xsd"}\} \wedge \text{ContainsXmlRoot}(\text{head}(F)) \\
\text{Unknown}, & \text{otherwise}
\end{cases}
$$

---

### REQ-0015: Event-Driven CommonMark Table Lexer & Token Streaming
- **Normative Statement**: The ingestion engine shall parse CommonMark Markdown tables containing component declarations, interfaces, attributes, and constraints using an explicit pushdown automaton that eliminates regular expressions and catastrophic backtracking.
- **Formal Invariant**: The Markdown lexer is modeled as an event stream $\mathcal{S}_{\text{events}} = \langle e_1, e_2, \dots, e_n \rangle$, where $e_i \in \{ \text{Start(Table)}, \text{Start(TableHead)}, \text{Start(TableRow)}, \text{Start(TableCell)}, \text{Text}(s), \text{End}(...) \}$.
Parsing complexity is bounded strictly to $O(N)$ where $N$ is input byte length, eliminating super-linear regular expression evaluation.

---

### REQ-0016: Synchronization Token Recovery on Table Delimiter Boundaries
- **Normative Statement**: The CommonMark table parser shall implement synchronization token recovery on table delimiter boundaries (`|`, `\n`) such that when a cell contains unexpected formatting or malformed data, the parser records a diagnostic and resynchronizes at the next pipe delimiter or newline boundary.
- **Formal Invariant**: Let $C_j$ be cell $j$ in row $R_i$. If lexical parsing of $C_j$ fails:
$$
\text{State} \leftarrow \text{RecoverToNextDelimiter}(\text{\'|\'}, \text{\'\\n\'})
$$
The parser increments the error counter, retains valid cells $C_1, \dots, C_{j-1}$, and resumes analysis at $C_{j+1}$.

---

### REQ-0017: Dynamic Semantic Header Key Normalization & Order-Independent Binding
- **Normative Statement**: The table ingestion engine shall match column headers in an order-independent manner by normalizing header strings (case folding, trimming punctuation, stripping stop-words) to bind schema attributes dynamically to table columns.
- **Formal Invariant**: Let $H$ be a raw column header string. The normalization function $\eta(H)$ is defined as:
$$
\eta(H) = \text{Lowercase}(\text{StripPunctuation}(\text{Trim}(H)))
$$
The column-to-field binding $\beta$ maps $\eta(H)$ against a dictionary of canonical attribute keys $\mathcal{K}_{\text{canonical}}$:
$$
\beta(H) = k \in \mathcal{K}_{\text{canonical}} \iff \eta(H) \in \text{Aliases}(k)
$$
Column ordering in the source Markdown file is arbitrary; bindings resolve dynamically based on semantic aliases.

---

### REQ-0018: Multi-Line Table Cell Block Token Preservation & Normalization
- **Normative Statement**: The table ingestion engine shall preserve multi-line cell content, nested bullet points, and code spans within table cells without dropping formatting or truncating text, normalizing embedded newlines (`<br>`, `\n`) into canonical whitespace-delimited block tokens.
- **Formal Invariant**: Let $C_{\text{raw}}$ be the raw cell string containing HTML break tags or escaped linefeeds. The block normalizer $\Phi_{\text{block}}$ satisfies:
$$
\Phi_{\text{block}}(C_{\text{raw}}) = \text{ReplaceAll}(C_{\text{raw}}, \text{"<br\\s*/?>"}, \text{"\\n"})
$$
Nested list items inside cells are parsed into an ordered sequence of sub-item tokens preserving cell text, bullet items, and code spans.

---

### REQ-0019: Table Row-to-Entity Structural Mapping & Identifier Sanitization
- **Normative Statement**: The ingestion engine shall map each valid table row to a corresponding intermediate representation entity while sanitizing raw entity names into valid SysML v2 / KerML basic identifiers using deterministic replacement of invalid characters.
- **Formal Invariant**: Let $S_{\text{raw}}$ be the raw string identifier from the table row. The sanitization function $\sigma_{\text{id}}$ satisfies:
$$
\sigma_{\text{id}}(S_{\text{raw}}) = \begin{cases}
S_{\text{raw}}, & \text{if } S_{\text{raw}} \in \text{BasicName} \\
\text{SanitizeIdentifier}(S_{\text{raw}}), & \text{otherwise}
\end{cases}
$$
Where `SanitizeIdentifier` replaces non-alphanumeric characters with underscores (`_`) and prefixes leading numeric characters with `id_`:
$$
\sigma_{\text{id}}(\text{"123-Alpha (Beta)"}) = \text{"id_123_Alpha_Beta_"}
$$

---

### REQ-0020: Disambiguation of Array Indexing Syntax in Tabular Schemas
- **Normative Statement**: The ingestion engine shall disambiguate array indexing syntax in tabular schemas, decomposing bracketed identifiers into distinct base identifiers and integer index qualifiers without lexical backtracking.
- **Formal Invariant**: Let $S$ be an identifier conforming to lexical grammar rule $S \to \text{Ident} \ "[" \ \text{Index} \ "]"$. The disambiguation operator $\theta_{\text{array}}$ decomposes $S$ into:
$$
\theta_{\text{array}}(S) = \begin{cases}
\langle \text{base}(S), \text{index}(S) \rangle, & \text{if } S \in \mathcal{L}(\text{IndexedIdentifier}) \\
\langle S, \bot \rangle, & \text{otherwise}
\end{cases}
$$

---

### REQ-0021: Tabular Schema Ingestion for Structural Parts & Component Assemblies
- **Normative Statement**: The ingestion engine shall parse tabular schemas specifying structural parts and component assemblies into `IngestedPart` intermediate entities, extracting part names, types, multiplicity intervals `[min..max]`, structural containment hierarchies, and owned sub-components.
- **Formal Invariant**: Multiplicity strings (e.g. `1`, `0..1`, `1..*`) are parsed into exact numeric lower and upper bounds $(l, u)$, where $u = \infty$ represents unbounded multiplicity, satisfying $0 \le l \le u$.

---

### REQ-0022: Tabular Schema Ingestion for Directed Ports & Structural Interfaces
- **Normative Statement**: The ingestion engine shall parse tabular schemas specifying ports and structural interfaces into `IngestedPort` intermediate entities, extracting port identifiers, owning parts, port directions (`in`, `out`, `inout`), payload types, and conjugated interface markers (`~`).
- **Formal Invariant**: Port directions conform strictly to the direction enumeration $\text{Dir} \in \{\text{In}, \text{Out}, \text{InOut}\}$, and conjugated ports map direction according to involution $\tau_{\text{conj}}(\text{In}) = \text{Out}$, $\tau_{\text{conj}}(\text{Out}) = \text{In}$, and $\tau_{\text{conj}}(\text{InOut}) = \text{InOut}$.

---

### REQ-0023: Tabular Schema Ingestion for Attributes, Data Types & Numerical Envelopes
- **Normative Statement**: The ingestion engine shall parse tabular schemas defining attributes, data types, default values, engineering units, and numerical bounds into `IngestedAttr` intermediate entities where numerical envelopes are extracted as real intervals.
- **Formal Invariant**: For each attribute with lower bound $L$ and upper bound $U$, the numerical envelope enforces the invariant $L \le U$.

---

### REQ-0024: Tabular Schema Ingestion for Formal Constraints & Operational Envelopes
- **Normative Statement**: The ingestion engine shall parse tabular schemas defining formal constraints, safety conditions, and operational envelopes into `IngestedConstraint` entities, capturing constraint expressions, formal invariant types (`assert`, `assume`), and severity classifications.
- **Formal Invariant**: Constraint text is preserved verbatim for downstream Boolean AST parsing and formal verification, with formal invariant classification $\text{Type} \in \{\text{Assert}, \text{Assume}\}$ and severity $\text{Sev} \in \{\text{Critical}, \text{Degraded}, \text{Advisory}\}$.

---

### REQ-0025: Tabular Schema Ingestion for Topological Connections & Interconnects
- **Normative Statement**: The ingestion engine shall parse tabular schemas defining connections and interconnects between ports into `IngestedConnection` intermediate entities, extracting source and destination endpoints using fully qualified port paths.
- **Formal Invariant**: Each connection endpoint path must contain at least two segments $(\text{owner}, \text{port})$, establishing directed edge $E = (P_{\text{src}}, P_{\text{tgt}})$ in the topological connection graph.

---

### REQ-0026: Tabular Schema Ingestion for Behaviors, Actions & State Transitions
- **Normative Statement**: The ingestion engine shall parse tabular schemas defining behavioral actions, activities, and state transitions into `IngestedAction` entities, capturing action inputs, outputs, preconditions, postconditions, and trigger events.
- **Formal Invariant**: Each behavioral action is modeled as an input-output transformation tuple $A = (\text{owner}, \mathcal{I}, \mathcal{O}, e_{\text{trigger}}, g_{\text{guard}})$ where $\mathcal{I}$ and $\mathcal{O}$ denote typed parameter sets.

---

### REQ-0027: Protocol Buffer (Proto3) AST Ingestion for Messages, Fields & RPCs
- **Normative Statement**: The ingestion engine shall provide a native Protocol Buffer (Proto3) parser that parses `.proto` schemas into intermediate schema IR, converting Protobuf messages to `IngestedPart` definitions, primitive fields to `IngestedAttr` properties, service RPCs to `IngestedAction` operations, and enums to classifier data types.
- **Formal Invariant**: Let $\mathcal{P}_{\text{proto}}$ be a parsed Protobuf file. The lowering transformation $\mathcal{T}_{\text{proto}}$ maps:
$$
\begin{aligned}
\text{message } M \{ \dots \} &\longmapsto \text{IngestedPart}(M) \\
\text{field } T \, f = i &\longmapsto \text{IngestedAttr}(f, \text{type}: T) \\
\text{rpc } R(A) \text{ returns } (B) &\longmapsto \text{IngestedAction}(R, \text{in}: A, \text{out}: B)
\end{aligned}
$$

---

### REQ-0028: OMG IDL AST Ingestion for Structs, Interfaces & Directional Parameters
- **Normative Statement**: The ingestion engine shall provide an OMG IDL parser that parses `.idl` interface specifications into intermediate schema IR, lowering IDL structs into data types, interfaces into component parts, and operations with directional parameters (`in`, `out`, `inout`) into typed action operations.
- **Formal Invariant**: Let $\mathcal{I}_{\text{idl}}$ be an IDL abstract syntax tree. The mapping $\mathcal{T}_{\text{idl}}$ satisfies:
$$
\begin{aligned}
\text{interface } I &\longmapsto \text{IngestedPart}(I, \text{is\_interface}: \text{true}) \\
\text{op}(in\, T_1\, p_1, out\, T_2\, p_2) &\longmapsto \text{IngestedAction}(\text{op}, \text{inputs}: [(p_1, T_1)], \text{outputs}: [(p_2, T_2)])
\end{aligned}
$$

---

### REQ-0029: OpenAPI (JSON/YAML) Schema Ingestion for Paths, Operations & Payloads
- **Normative Statement**: The ingestion engine shall provide an OpenAPI parser that parses OpenAPI 3.0/3.1 specifications into intermediate schema IR, mapping schema component objects to parts/data types, API paths to interface endpoints, and HTTP operations to actions with request/response payload schemas.
- **Formal Invariant**: Let $\mathcal{O}$ be an OpenAPI document. The mapping $\mathcal{T}_{\text{openapi}}$ satisfies:
$$
\begin{aligned}
\text{components/schemas/}S &\longmapsto \text{IngestedPart}(S) \\
\text{paths/}P/\text{get} &\longmapsto \text{IngestedAction}(\text{format!}("{}_{}", \text{"get"}, P))
\end{aligned}
$$

---

### REQ-0030: Architecture Description Language (ADL) AST Ingestion for Component Topologies
- **Normative Statement**: The ingestion engine shall provide a generic Architecture Description Language (ADL) XML parser that parses structural component descriptions into intermediate schema IR, mapping component prototypes to parts, provided/required ports to directed ports, and assembly connectors to connection links.
- **Formal Invariant**: The ADL parser maps component prototypes to `IngestedPart` entities, provided/required ports (P-Ports, R-Ports) to `IngestedPort` entities with directionality, and assembly connectors to `IngestedConnection` links.

---

### REQ-0031: Canonical SysML v2 Textual Model Emission (`schema/model.sysml`)
- **Normative Statement**: The ingestion engine shall provide a canonical SysML v2 textual emitter that synthesizes parsed intermediate schema IR entities into standard-compliant SysML v2 textual notation, writing the unified canonical model to `schema/model.sysml`.
- **Formal Invariant**: The emission function $\mathcal{E}_{\text{sysml}}$ translates intermediate entities into normative syntax:
$$
\begin{aligned}
\text{IngestedPackage}(P) &\Longrightarrow \text{"package "} \mathbin{\Vert} P \mathbin{\Vert} \text{" { ... }"} \\
\text{IngestedPart}(C) &\Longrightarrow \text{"part def "} \mathbin{\Vert} C \mathbin{\Vert} \text{" { ... }"} \\
\text{IngestedPort}(p) &\Longrightarrow \text{"port "} \mathbin{\Vert} p \mathbin{\Vert} \text(" : ") \mathbin{\Vert} T \mathbin{\Vert} \text(";") \\
\text{IngestedConstraint}(k) &\Longrightarrow \text{"assert constraint { "} \mathbin{\Vert} \text{expr} \mathbin{\Vert} \text{" };"}
\end{aligned}
$$

---

### REQ-0032: Deterministic Qualified-Name Symbol Sorting for Canonical Model Emission
- **Normative Statement**: The textual emitter shall sort all packages, classifiers, ports, attributes, and constraints strictly by alphabetical qualified name prior to emission to guarantee 100% deterministic, bit-for-bit identical text output and eliminate git diff churn across compilations.
- **Formal Invariant**: Let $\mathcal{D}$ be the list of declarations in an AST package. Prior to text emission:
$$
\mathcal{D}_{\text{sorted}} = \text{SortBy}(\mathcal{D}, \lambda d. \, \text{QualifiedName}(d))
$$
Where string ordering follows standard lexicographical ASCII byte comparison.

---

### REQ-0033: Multi-File Cryptographic Digest Computation (`.pipeline/schema-digest.json`)
- **Normative Statement**: The ingestion engine shall compute a multi-file cryptographic manifest recording SHA-256 content hashes, byte sizes, line counts, and AST entity counts for all input schema files and the emitted `schema/model.sysml`, writing the manifest atomically to `.pipeline/schema-digest.json`.
- **Formal Invariant**: The digest manifest contains an entry for every input file $F_i$:
$$
\text{Digest}(F_i) = \{ \text{path}: P_i, \text{sha256}: \text{Hex}(\text{SHA256}(F_i)), \text{bytes}: |F_i|, \text{nodes}: N_i \}
$$
The manifest also records the aggregate composite hash:
$$
\text{CompositeHash} = \text{SHA256}\left( \bigoplus_{i=1}^M \text{Digest}(F_i) \right)
$$

---

## Subsystem 3: Core Metamodel, Node Arena & AST Graph Engine

**Scope & Objective**: Defines the high-performance core metamodel, zero-copy bump allocator arena, generational node addressing, concurrent string interner, two-pass symbol hoisting, cyclic dependency detection, graph traversal APIs, context-bounded AST slicing (`query_slice`), and incremental compilation DAG invalidation.

**Requirements Range**: `REQ-0034` through `REQ-0053` (20 Requirements)

### REQ-0034: Contiguous Memory Lowering & Linear Allocation Complexity
- **Normative Statement**: The compiler core shall lower AST nodes (Packages, PartDefs, PortDefs, ActionDefs, ConstraintDefs) into contiguous memory representations with $O(1)$ index access and $O(N)$ traversal complexity, eliminating pointer indirection overhead and heap fragmentation.
- **Formal Invariant**: Ingested schemas lower into the AST representation in strict linear time $O(N)$ with contiguous buffer locality, providing $O(1)$ node index access:
$$
T_{\text{lower}}(N) \in O(N), \quad T_{\text{access}}(i) \in O(1)
$$

---

### REQ-0035: Deterministic Node Handle Addressing & Reference Safety
- **Normative Statement**: All references between AST nodes shall utilize compact, direct-indexed node handles with versioned validation to prevent dangling references and index-reuse hazards during AST transformations and incremental compilation.
- **Formal Invariant**: A node handle $h = \langle \text{index}, \text{version} \rangle$ uniquely identifies node $n \in \text{Nodes}(\mathcal{A})$ such that lookup $\text{Deref}(h)$ validates in $O(1)$ time:
$$
\text{Deref}(h) = \begin{cases} n, & \text{if } \text{version}(h) = \text{active\_version}(n) \\ \bot, & \text{otherwise (stale reference)} \end{cases}
$$

---

### REQ-0036: Concurrent String Interning & Scalar Symbol Deduplication Architecture
- **Normative Statement**: The core compiler platform shall intern all identifier strings, type names, docstrings, and qualified paths using a high-throughput concurrent string interner pool, mapping all string occurrences to compact scalar symbol handles ($\text{sizeof}(\sigma) \le 4\text{ bytes}$) with $O(1)$ constant-time scalar equality comparison. Slicing and copying bytes from memory-mapped source buffers into this global symbol interner pool represents the sole permitted architectural exception to zero-copy memory management.
- **Formal Invariant**:
$$
\text{intern}(s) = \sigma \in \text{SymbolId}, \quad \text{sizeof}(\sigma) \le 4 \text{ bytes}
$$
Equality comparisons across interned symbols execute in $O(1)$ constant time via integer scalar equality:
$$
\forall s_1, s_2 \in \mathcal{S}, \quad s_1 = s_2 \iff \text{intern}(s_1) == \text{intern}(s_2)
$$
Memory footprint: Replacing arbitrary-length string representations with compact scalar symbol handles reduces AST node memory consumption by greater than 60%.

---

### REQ-0037: Classifier Definition & Feature Usage Metamodel Typing Relations
- **Normative Statement**: The core metamodel shall establish a strict formal duality between classifier definitions (`ClassifierDef`) representing reusable types and feature usages (`FeatureUsage`) representing contextual usages of classifiers.
- **Formal Invariant**: Every structural element in the metamodel is partitioned into definitions and usages:
$$
\text{Elements} = \text{ClassifierDefs} \cup \text{FeatureUsages}, \quad \text{ClassifierDefs} \cap \text{FeatureUsages} = \emptyset
$$
with typing relation $\tau : \text{FeatureUsages} \longrightarrow \text{ClassifierDefs}.

---

### REQ-0038: Strongly Typed Port Directions (`in`, `out`, `inout`) & Directional Invariants
- **Normative Statement**: The metamodel shall enforce strongly typed port directionality (`in`, `out`, `inout`) on all port definitions and port usages, requiring connection bindings between ports to enforce strict directional compatibility invariants.
- **Formal Invariant**: Let $P_{\text{src}}$ and $P_{\text{tgt}}$ be connected ports. The directional compatibility relation $\sim_{\text{dir}}$ satisfies:
$$
P_{\text{src}} \sim_{\text{dir}} P_{\text{tgt}} \iff \begin{cases}
P_{\text{src}}.\text{dir} = \text{Out} \wedge P_{\text{tgt}}.\text{dir} = \text{In}, & \text{or} \\
P_{\text{src}}.\text{dir} = \text{In} \wedge P_{\text{tgt}}.\text{dir} = \text{Out}, & \text{or} \\
P_{\text{src}}.\text{dir} = \text{InOut} \wedge P_{\text{tgt}}.\text{dir} = \text{InOut} &
\end{cases}
$$
Direct connections between two `in` ports or two `out` ports at the same structural level are strictly invalid.

---

### REQ-0039: Flow Payload Binding & Stream Rate Multiplicity Validation
- **Normative Statement**: The metamodel shall bind flow payloads to specific data types and validate stream transmission rate multiplicities, requiring item flows traversing connectors to enforce payload type compatibility and transmission rate boundaries.
- **Formal Invariant**: Let $F$ be an item flow carrying payload type $\tau_F$ between $P_1$ and $P_2$. The flow typing rule requires:
$$
\tau_F :> P_1.\text{payload\_type} \quad \wedge \quad \tau_F :> P_2.\text{payload\_type}
$$
Flow rates specified in occurrences/second ($R_{\text{flow}}$) must satisfy channel bandwidth capacity ($C_{\text{channel}}$):
$$
R_{\text{flow}} \cdot \text{sizeof}(\tau_F) \le C_{\text{channel}}
$$

---

### REQ-0040: Two-Pass Symbol Hoisting & Lexical Scope Table Construction
- **Normative Statement**: The core AST engine shall execute a two-pass symbol resolution pipeline where Pass 1 hoists all package, classifier, and port definitions into a hierarchical lexical symbol table and Pass 2 resolves all cross-references, feature typings, connection endpoints, and constraint variable expressions.
- **Formal Invariant**: Let $\mathcal{A}$ be the raw AST. Pass 1 constructs the symbol table $\Gamma$:
$$
\Gamma = \text{Pass1}(\mathcal{A}) = \bigcup_{n \in \text{Defs}(\mathcal{A})} \{ \text{QualifiedName}(n) \mapsto \text{NodeId}(n) \}
$$
Pass 2 resolves references against $\Gamma$:
$$
\mathcal{A}_{\text{resolved}} = \text{Pass2}(\mathcal{A}, \Gamma)
$$
This two-pass architecture allows forward references and mutual recursion between classifiers without order dependency.

---

### REQ-0041: Lexical Scope Lookup & Fully Qualified Path Resolution (`::`)
- **Normative Statement**: The AST resolver shall implement lexical scope resolution using standard double-colon scoping (`::`) to search inward from local scopes through enclosing parent scopes up to the root namespace, respecting public and private package visibility rules.
- **Formal Invariant**: Let $\sigma$ be a symbol reference requested within lexical scope $S_i$. The lookup function $\text{Find}(\sigma, S_i)$ searches scopes recursively:
$$
\text{Find}(\sigma, S_i) = \begin{cases}
e, & \text{if } \exists e \in S_i \text{ such that } \text{symbol}(e) = \sigma \\
\text{Find}(\sigma, \text{parent}(S_i)), & \text{if } \text{parent}(S_i) \neq \bot \\
\bot, & \text{otherwise}
\end{cases}
$$

---

### REQ-0042: Circular Dependency & Metamodel Inheritance Cycle Detection
- **Normative Statement**: The AST engine shall implement a cycle detection algorithm using Tarjan's strongly connected components to detect circular specialization hierarchies (`specializes`, `:>`) and direct containment loops, rejecting any cycle at compile time.
- **Formal Invariant**: Let $G_{\text{inherit}} = (V, E)$ be the directed inheritance graph where $(u, v) \in E \iff u \text{ specializes } v$. The compiler verifies:
$$
\text{IsAcyclic}(G_{\text{inherit}}) \iff \forall v \in V, \quad v \notin \text{Descendants}(v)
$$
Composition containment graph $G_{\text{comp}}$ is similarly checked for strict acyclicity.

---

### REQ-0043: Multi-File Module Ingestion & Directory-to-Namespace Hierarchy Mapping
- **Normative Statement**: The compiler shall support multi-file models partitioned across directory hierarchies, deterministically mapping directory paths to nested SysML package namespaces such that a file located at `schema/packages/module_a/unit_b/storage.sysml` automatically binds to `package Packages::ModuleA::UnitB`.
- **Formal Invariant**: Let $P_{\text{rel}}$ be the file path relative to `schema/`. The namespace mapping function $\Omega_{\text{ns}}$ decomposes $P_{\text{rel}}$:
$$
\Omega_{\text{ns}}(p_1 / p_2 / \dots / p_k.\text{sysml}) = \text{SymbolId}("P_1::P_2::\dots::P_k")
$$
Where each path component is converted to TitleCase identifier syntax.

---

### REQ-0044: Lossless AST Serialization & Deserialization (JSON & CBOR Formats)
- **Normative Statement**: The AST engine shall provide high-performance, lossless serialization and deserialization of the compiled model AST to and from minified JSON and binary CBOR formats while preserving all node IDs, spans, attributes, constraints, and provenance metadata.
- **Formal Invariant**: For a compiled model AST $\mathcal{A}$, the serialization $\mathcal{S}$ and deserialization $\mathcal{D}$ round-trip satisfies:
$$
\mathcal{D}(\mathcal{S}(\mathcal{A})) \cong \mathcal{A}
$$
Deser performance: Deserializing a 100,000-node model from CBOR binary format shall execute in under 15 milliseconds.

---

### REQ-0045: Immutable AST Graph Traversal Engine with Bounded Linear Complexity
- **Normative Statement**: The AST engine shall provide an immutable graph traversal engine that visits nodes in topological, depth-first, or breadth-first order with strictly bounded $O(V + E)$ linear time complexity.
- **Formal Invariant**: Graph traversal over AST graph $G = (V, E)$ visits all reachable vertices and directed edges satisfying:
$$
T_{\text{traversal}}(G) \le c \cdot (|V| + |E|)
$$

---

### REQ-0046: Mutable AST Transformation & In-Place Rewrite Engine
- **Normative Statement**: The AST engine shall provide a mutable transformation pass engine for AST lowering, desugaring passes, optimization rewrites, and semantic enrichments while preserving topological integrity.
- **Formal Invariant**: In-place mutation preserves topological validity and validates modified node versions upon mutation to invalidate stale external handles in $O(1)$ time per node mutation.

---

### REQ-0047: Graph-Theoretic AST Representation (`AstModelGraph` over `petgraph`)
- **Normative Statement**: The compiler core shall build a bidirectional directed property graph representing structural containment, feature typings, port connections, generalizations, allocations, and dependency relations across AST nodes.
- **Formal Invariant**: The model graph is defined as a directed multigraph $G = (V, E)$:
$$
V = \text{Nodes}(\mathcal{A}), \quad E \subseteq V \times V \times \text{EdgeKind}
$$
Where $\text{EdgeKind} \in \{ \text{Contains}, \text{Specializes}, \text{ConnectsTo}, \text{FlowsTo}, \text{Constrains} \}$.

---

### REQ-0048: Topological Sort Dependency Scheduling (Tarjan SCC & Kahn Algorithms)
- **Normative Statement**: The AST graph engine shall provide a breadth-first search (BFS) shortest path query engine (`shortest_path`) to discover connection topologies, flow routes, and allocation paths between arbitrary model elements.
- **Formal Invariant**: Let $G = (V, E)$ be the dependency DAG. The topological sort algorithm produces an ordered sequence $\mathcal{L} = \langle v_1, v_2, \dots, v_n \rangle$ satisfying:
$$
\forall (u, v) \in E, \quad \text{Index}(u, \mathcal{L}) < \text{Index}(v, \mathcal{L})
$$
Complexity: $O(|V| + |E|)$ time and $O(|V|)$ auxiliary space.

---

### REQ-0049: Context-Bounded AST Slicing (`query_slice`) for Token-Isolated Subagents
- **Normative Statement**: The AST graph engine shall implement depth-bounded semantic AST slicing (`ast_slice`) to extract self-contained subgraphs surrounding a target element for focused LLM reasoning, code generation, and micro-verification.
- **Formal Invariant**: Let $n_{\text{target}} \in V$ be a target node and $k$ be a traversal depth bound. The slice function $\text{Slice}(n_{\text{target}}, k)$ extracts subgraph $G_{\text{slice}} = (V_{\text{slice}}, E_{\text{slice}})$:
$$
V_{\text{slice}} = \{ v \in V \mid \text{dist}(n_{\text{target}}, v) \le k \} \cup \text{RequiredTypes}(V_{\text{slice}})
$$
Token reduction metric: The slice shall achieve greater than 85% reduction in serialized token volume compared to full-model ingestion.

---

### REQ-0050: AST Slice Serialization Contract with Reified Dependency Envelopes
- **Normative Statement**: The AST slicing engine shall serialize extracted slices according to a strict contract containing a reified dependency envelope that includes all referenced type definitions, unit systems, and constraint declarations required to evaluate the sliced component in isolation.
- **Formal Invariant**: Every symbol referenced within sliced subgraph $G_{\text{slice}}$ is defined either within $G_{\text{slice}}$ or within the reified dependency envelope $\text{Deps}(G_{\text{slice}})$, guaranteeing closed, standalone validity.

---

### REQ-0051: Incremental Compilation Cache Invalidation via Module Dependency DAG
- **Normative Statement**: The compiler shall implement an incremental compilation caching system based on a module dependency DAG that computes 64-bit cryptographic hashes (XXH3) for each module and only re-analyzes and re-emits modules whose source code or upstream dependencies have changed.
- **Formal Invariant**: Let $M$ be a module with source hash $H_{\text{source}}(M)$ and dependency set $\text{Deps}(M)$. The module state hash $H_{\text{state}}(M)$ satisfies:
$$
H_{\text{state}}(M) = \text{XXH3}\left( H_{\text{source}}(M) \mathbin{\Vert} \bigoplus_{D \in \text{Deps}(M)} H_{\text{state}}(D) \right)
$$
If $H_{\text{state}}(M) == H_{\text{cached}}(M)$, the compiler reuses cached artifacts and bypasses analysis.

---

### REQ-0052: Memory-Mapped Diff Engine (`memmap2`) for Unmodified File Bypass
- **Normative Statement**: The persistence engine shall implement memory-mapped diffing (`memmap2`) against on-disk files prior to writing output artifacts, bypassing file writes when newly generated artifact content matches existing disk content byte-for-byte to preserve file modification timestamps (`mtime`) and prevent build system churn.
- **Formal Invariant**: Let $P$ be the target output path and $B_{\text{new}}$ be the newly generated output byte buffer. The emission rule evaluates:
$$
\text{ShouldWrite}(P, B_{\text{new}}) = \begin{cases}
\text{true}, & \text{if } \neg \text{FileExists}(P) \\
\text{false}, & \text{if } \text{MemMap}(P) == B_{\text{new}} \\
\text{true}, & \text{otherwise}
\end{cases}
$$

---

### REQ-0053: Tombstone Pruning Engine for Renamed & Orphaned AST Nodes
- **Normative Statement**: The persistence engine shall maintain a centralized manifest of generated artifacts (`CodegenManifest`) and execute automated tombstone pruning (`prune_tombstones`) so that when a SysML classifier is deleted or renamed, all previously generated artifacts derived from that element are cleanly pruned from disk.
- **Formal Invariant**: Let $\mathcal{A}_{\text{active}}$ be the set of active generated file paths, and $\mathcal{A}_{\text{manifest}}$ be the set recorded in the previous compilation manifest. The set of orphaned artifacts to prune $\mathcal{T}_{\text{prune}}$ satisfies:
$$
\mathcal{T}_{\text{prune}} = \mathcal{A}_{\text{manifest}} \setminus \mathcal{A}_{\text{active}}
$$
The persistence engine safely unlinks each file $f \in \mathcal{T}_{\text{prune}}$ and removes empty parent directories.

---

## Subsystem 4: Complete OMG SysML v2 / KerML Metamodel Lowering & Grammar

**Scope & Objective**: Provides exhaustive, normative grounding in the official OMG KerML and SysML v2 release specifications (Release 2026-08, `KerML-textual-bnf.kebnf`, `SysML-textual-bnf.kebnf`), covering all kernel root elements, core classifiers, feature typings, expressions, behaviors, occurrences, standard libraries (`Base`, `ScalarValues`, `Collections`, `ControlFunctions`), and quantities (`ISQ`, `SI`), with formal subtyping lattice and C3 linearization (NP-3).

**Requirements Range**: `REQ-0054` through `REQ-0097` (44 Requirements)

### REQ-0054: KerML Root, Element, Relationship & Annotation Abstract Syntax
- **Normative Statement**: The metamodel shall define the foundational KerML Kernel abstract syntax root hierarchy as a rooted directed multigraph of semantic elements $\mathcal{E}$, directed relationships $\mathcal{R}$, and non-intrusive metadata annotations $\mathcal{M}$, providing monotonic identity preservation and structural containment without circular ownership.
- **Formal Invariant**: An element $e \in \mathcal{E}$ possesses a unique handle $\text{id}(e) \in \text{NodeHandle}$. A relationship $r \in \mathcal{R}$ is an element with source projection $\text{source}(r) \subseteq \mathcal{E}$ and target projection $\text{target}(r) \subseteq \mathcal{E}$ such that for directed non-reflexive relations:
$$
\text{source}(r) \neq \emptyset \wedge \text{target}(r) \neq \emptyset \wedge (\text{source}(r) \cap \text{target}(r) = \emptyset)
$$
Ownership relation $\mathcal{O} \subset \mathcal{E} \times \mathcal{E}$ forms a strict directed tree: $\forall e \in \mathcal{E}, |\text{parent}(e)| \le 1$ and $(e, e') \in \mathcal{O}^+ \implies e \neq e'$ (strict acyclicity). Annotations $\alpha \in \mathcal{M}$ map $e \mapsto \mathcal{D}$ without altering the algebraic type denotation $\llbracket e \rrbracket$.
Complexity bound: Arena allocation and node dereferencing execute in $O(1)$ time; relationship endpoint validation operates in $O(|\mathcal{R}|)$ deterministic linear time.

---

### REQ-0055: KerML Namespace, Membership, OwningMembership & Qualified Naming
- **Normative Statement**: The semantic model shall represent naming environments as formal `Namespace` scopes composed of `Membership` bindings that partition into owning memberships (`OwningMembership`) governing lifecycle containment and non-owning reference memberships, enforcing lexical uniqueness and deterministic qualified name resolution.
- **Formal Invariant**: A namespace $N \in \mathcal{N}$ defines a finite partial map from scalar symbol handles to member elements:
$$
\mu_N : \text{SymbolId} \rightharpoonup \mathcal{E}
$$
Owning memberships $\mathcal{M}_{\text{own}}$ satisfy the bijection constraint: each owned element has exactly one owning membership:
$$
\forall e \in \mathcal{E}_{\text{owned}}, \quad |\{ m \in \mathcal{M}_{\text{own}} \mid \text{member}(m) = e \}| = 1
$$
Qualified name recurrence $\text{QN} : \mathcal{E} \to \text{Sequence}\langle \text{SymbolId} \rangle$:
$$
\text{QN}(e) = \begin{cases}
[\text{name}(e)], & \text{if } \text{owner}(e) = \bot \\
\text{QN}(\text{owner}(e)) \mathbin{\Vert} [\text{name}(e)], & \text{otherwise}
\end{cases}
$$
Uniqueness invariant: $\forall m_1, m_2 \in \text{memberships}(N), \text{name}(m_1) = \text{name}(m_2) \implies \text{member}(m_1) = \text{member}(m_2)$.
Lookup complexity: Symbol resolution within local namespace executes in $O(1)$ amortized time via interned symbol handles.

---

### REQ-0056: KerML Import Declaration Semantics (Public, Private, All, Filtered)
- **Normative Statement**: The scoping engine shall evaluate namespace import declarations as relational projections over exported membership sets, parameterizing visibility across a two-point lattice $\mathcal{V} = \{ \text{Private} < \text{Public} \}$ and supporting recursive wildcard and predicate-filtered member imports with deterministic shadow precedence.
- **Formal Invariant**: Let $N_{\text{src}}$ be the imported namespace and $N_{\text{tgt}}$ be the target namespace. An import declaration $I = (N_{\text{src}}, V, \phi)$ with visibility $V \in \mathcal{V}$ and filter predicate $\phi : \mathcal{M} \to \mathbb{B}$ induces the imported membership set:
$$
\mathcal{M}_{\text{imp}} = \{ m \in \text{memberships}(N_{\text{src}}) \mid \text{is\_public}(m) \wedge \phi(m) \}
$$
Recursive wildcard imports (`::**`) compute the reflexive-transitive closure:
$$
\mathcal{M}_{\text{rec}}(N) = \bigcup_{N' \in \text{SubNamespaces}^*(N)} \text{memberships}(N')
$$
Visibility re-export: Members imported with $V = \text{Public}$ join the public interface of $N_{\text{tgt}}$, whereas $V = \text{Private}$ restricts visibility strictly to $N_{\text{tgt}}$ internal scope.
Shadow precedence: Local declarations strictly shadow imported symbols: $\text{Find}(s, N_{\text{tgt}}) = \mu_{N_{\text{tgt}}}^{\text{local}}(s)$ if defined, else $\mu_{N_{\text{tgt}}}^{\text{imported}}(s)$.

---

### REQ-0057: KerML Core Classifiers: Type, Classifier, DataType, Class, Structure
- **Normative Statement**: The metamodel shall formalize the foundational classifier hierarchy into a bounded subtyping poset $(\text{Classifiers}, \le)$ rooted at `Type`, partitioning classifiers into identity-free structural value types (`DataType`) and extensional identity-bearing stateful entities (`Class`, `Structure`) under set-theoretic denotational semantics.
- **Formal Invariant**: The taxonomic hierarchy forms a partial order satisfying:
$$
\text{Structure} \le \text{Class} \le \text{Classifier} \le \text{Type}
$$
Denotational semantics: Each type $T$ denotes an instance set $\llbracket T \rrbracket$. Specialization $C_1 \le C_2$ denotes subset inclusion:
$$
C_1 \le C_2 \iff \llbracket C_1 \rrbracket \subseteq \llbracket C_2 \rrbracket
$$
Identity duality: For instances $a, b \in \llbracket \text{DataType} \rrbracket$, equivalence is purely structural value congruence ($a \equiv_{\text{val}} b$), whereas for $u, v \in \llbracket \text{Class} \rrbracket$, equivalence requires extensional object token identity ($\text{id}(u) = \text{id}(v)$).
Complexity bound: Specialization verification along single-inheritance paths executes in $O(1)$ depth-index comparison; multi-inheritance topological reachability executes in deterministic $O(V + E)$ time.

---

### REQ-0058: KerML Association, AssociationStructure & Link Semantics
- **Normative Statement**: The semantic lowering engine shall formalize multi-ary relations as `Association` and `AssociationStructure` classifiers possessing $k \ge 2$ participant end features, specifying relational constraints, bidirectional navigability, and fiber cardinality bounds over instantiated `Link` tuples.
- **Formal Invariant**: An association $A$ over participant classifiers $C_1, \dots, C_k$ defines end projections $\pi_i : \llbracket A \rrbracket \to \llbracket C_i \rrbracket$ with declared multiplicity intervals $\mu_i = [l_i, u_i]$ where $l_i \in \mathbb{N}_0, u_i \in \mathbb{N}_0 \cup \{ \infty \}$. Each instantiated link $L \in \llbracket A \rrbracket$ is an extensional tuple:
$$
L = (o_1, \dots, o_k) \in \prod_{i=1}^k \llbracket C_i \rrbracket
$$
Multiplicity invariants enforce fiber bounds: For every participant instance $x \in \llbracket C_j \rrbracket$:
$$
l_i \le |\{ L \in \llbracket A \rrbracket \mid \pi_j(L) = x \}| \le u_i, \quad \forall i \neq j
$$
`AssociationStructure` combines relational association semantics with structural composition and behavioral occurrence lifecycles.

---

### REQ-0059: KerML Interaction & Step Abstract Syntax Semantics
- **Normative Statement**: The behavioral lowering engine shall formalize communications between occurrences as `Interaction` classifiers specializing both `Behavior` and `Association`, modeling message passing, flow exchanges, and causal precedence across constituent `Step` executions.
- **Formal Invariant**: An interaction $I$ defines an occurrence poset $(\mathcal{S}_I, \prec)$ where $\mathcal{S}_I \subset \text{Steps}$ and $\prec$ is a strict partial order of causal precedence:
$$
s_1 \prec s_2 \implies \tau_{\text{end}}(s_1) \le \tau_{\text{start}}(s_2)
$$
Message causality: Every message transfer step $s_{\text{transfer}} = (e_{\text{send}}, e_{\text{recv}}, \delta_{\text{payload}})$ satisfies:
$$
\tau(e_{\text{send}}) < \tau(e_{\text{recv}}) \wedge \llbracket \delta_{\text{payload}} \rrbracket \in \llbracket \text{type}(s_{\text{transfer}}) \rrbracket
$$
Causal consistency: The directed acyclic precedence graph $G = (\mathcal{S}_I, \prec)$ contains no directed cycles, verifiable in $O(|\mathcal{S}_I| + |\prec|)$ topological sorting time.

---

### REQ-0060: KerML Core Features: Feature, Parameter, Step & FeatureTyping Semantics
- **Normative Statement**: The metamodel shall model properties, behavioral invocations, and parameters as typed `Feature` elements bound to owning classifiers via `FeatureTyping` relations, formalizing value projection mappings, directionality, and multiplicity intervals.
- **Formal Invariant**: A feature $f$ owned by classifier $C$ induces an evaluation projection:
$$
\pi_f : \llbracket C \rrbracket \longrightarrow \mathcal{P}(\llbracket \tau(f) \rrbracket)
$$
where $\tau(f) \in \text{Types}$ denotes the declared feature type. Multiplicity interval $\mu(f) = [m_{\min}, m_{\max}]$ constrains fiber cardinality:
$$
\forall x \in \llbracket C \rrbracket, \quad m_{\min} \le |\pi_f(x)| \le m_{\max}
$$
Parameter directionality $\text{dir}(p) \in \{ \text{In}, \text{Out}, \text{InOut} \}$ governs information flow across behavioral boundaries. All feature access and multiplicity checks validate in deterministic $O(1)$ time per instance.

---

### REQ-0061: KerML Subsetting Relationship (`:>`) Lowering & Co-variance Invariants
- **Normative Statement**: The lowering engine shall formalize feature subsetting (`:>`) as value-set inclusion within the subtyping semi-lattice, enforcing co-variant type specialization and upper-multiplicity narrowing under polynomial-time subtyping constraint satisfaction (**NP-3**).
- **Formal Invariant**: Let $f_{\text{sub}}$ subset $f_{\text{sup}}$ ($f_{\text{sub}} :> f_{\text{sup}}$). For every instance $x \in \llbracket C \rrbracket$:
$$
\pi_{f_{\text{sub}}}(x) \subseteq \pi_{f_{\text{sup}}}(x)
$$
Co-variant typing constraint:
$$
\tau(f_{\text{sub}}) \le \tau(f_{\text{sup}})
$$
Multiplicity interval constraint:
$$
\mu(f_{\text{sub}}).m_{\max} \le \mu(f_{\text{sup}}).m_{\max} \wedge \mu(f_{\text{sub}}).m_{\min} \le \mu(f_{\text{sup}}).m_{\max}
$$
NP-3 Tractable Subclass: Structural subtyping constraint checking over subsetting chains reduces to monotonic poset reachability, solvable in deterministic $O(V + E)$ time without backtracking.

---

### REQ-0062: KerML Redefinition Relationship (`:>>`) Lowering & Type Conformance
- **Normative Statement**: The lowering engine shall formalize feature redefinition (`:>>`) as contextual slot replacement over multiple inheritance graphs, enforcing monotonic C3 linearization, subtyping conformance, and multiplicity interval tightening within the bounded meet-semilattice $(\text{Types}, \le)$ (**NP-3**).
- **Formal Invariant**: Let $f_{\text{redef}}$ redefine inherited feature $f_{\text{orig}}$ ($f_{\text{redef}} :>> f_{\text{orig}}$) in specialized classifier $C$.
Monotonic C3 Linearization: The inheritance resolution order for classifier $C$ with direct parents $P_1, \dots, P_n$ satisfies:
$$
\text{C3}(C) = [C] \mathbin{\Vert} \text{merge}(\text{C3}(P_1), \dots, \text{C3}(P_n), [P_1, \dots, P_n])
$$
proving that $(\text{Types}, \le)$ forms a bounded meet-semilattice where $\tau_1 \wedge \tau_2 = \inf \{ \tau_1, \tau_2 \}$.
Type and multiplicity bounds:
$$
\begin{aligned}
\tau(f_{\text{redef}}) &\le \tau(f_{\text{orig}}) \\
\mu(f_{\text{redef}}) &\subseteq \mu(f_{\text{orig}}) \iff [l_{\text{redef}}, u_{\text{redef}}] \subseteq [l_{\text{orig}}, u_{\text{orig}}]
\end{aligned}
$$
Complexity bound: C3 linearization and redefinition conformance check execute in deterministic polynomial time $O(V + E)$, eliminating cyclic inheritance and backtrack explosion.

---

### REQ-0063: KerML Conjugation Relationship (`~`) Lowering & Port Inversion
- **Normative Statement**: The lowering engine shall formalize port and interface conjugation (`~`) as an algebraic involution over the direction algebra $\mathcal{D} = \{ \text{In}, \text{Out}, \text{InOut} \}$, inverting flow orientations while preserving structural payload typing, invariant constraints, and multiplicity bounds within the subtyping lattice (**NP-3**).
- **Formal Invariant**: Direction inversion operator ${\sim} : \mathcal{D} \to \mathcal{D}$ is an algebraic involution defined by:
$$
{\sim}(\text{In}) = \text{Out}, \quad {\sim}(\text{Out}) = \text{In}, \quad {\sim}(\text{InOut}) = \text{InOut}
$$
Involution property:
$$
\forall d \in \mathcal{D}, \quad {\sim}({\sim}d) \equiv d \implies {\sim}({\sim}P) \equiv P
$$
For a conjugated port $\widetilde{P} = {\sim}P$:
$$
\text{features}(\widetilde{P}) = \{ f' \mid \exists f \in \text{features}(P), \, \text{name}(f') = \text{name}(f) \wedge \tau(f') = \tau(f) \wedge \text{dir}(f') = {\sim}\text{dir}(f) \}
$$
Payload preservation: Conjugation strictly preserves internal data payload schemas, invariant constraints, and multiplicities: $\mu(\widetilde{P}) \equiv \mu(P)$.
Complexity bound: Port conjugation evaluates structurally in deterministic linear time $O(|\text{features}(P)|)$ with zero memory reallocation.

---

### REQ-0064: KerML Disjoining, Differencing, Intersecting & Unioning Type Algebra
- **Normative Statement**: The type system shall implement a Boolean algebra over type denotations, providing set-theoretic type operators (`unioning`, `intersecting`, `differencing`, `disjoining`) to construct compound classifiers and enforce compile-time disjointness constraints.
- **Formal Invariant**: Let $T_1, T_2 \in \text{Types}$ with semantic denotations $\llbracket T_1 \rrbracket, \llbracket T_2 \rrbracket \subseteq \mathcal{U}$. The type algebra operators evaluate as:
$$
\begin{aligned}
\llbracket T_1 \cup T_2 \rrbracket &= \llbracket T_1 \rrbracket \cup \llbracket T_2 \rrbracket \quad (\text{unioning}) \\
\llbracket T_1 \cap T_2 \rrbracket &= \llbracket T_1 \rrbracket \cap \llbracket T_2 \rrbracket \quad (\text{intersecting}) \\
\llbracket T_1 \setminus T_2 \rrbracket &= \llbracket T_1 \rrbracket \setminus \llbracket T_2 \rrbracket \quad (\text{differencing}) \\
T_1 \perp T_2 &\iff \llbracket T_1 \rrbracket \cap \llbracket T_2 \rrbracket = \emptyset \quad (\text{disjoining})
\end{aligned}
$$
Subtyping consistency:
$$
T_1 \le T_2 \iff \llbracket T_1 \rrbracket \subseteq \llbracket T_2 \rrbracket \iff \llbracket T_1 \setminus T_2 \rrbracket = \emptyset
$$
Disjointness enforcement: If $T_1 \perp T_2$ and $x : T_1$, asserting $x : T_2$ emits a fatal compile-time diagnostic in $O(1)$ lattice lookup.
Complexity bound: Compound type operations over the finite classifier poset evaluate in $O(|\text{Types}|)$ deterministic time.

---

### REQ-0065: KerML Expressions: Expression, Literal, OperatorExpression & Invocations
- **Normative Statement**: The expression engine shall lower KerML expressions into an immutable, strongly typed abstract evaluation tree supporting primitive literals, operator applications, feature selections, and function invocations with static type checking and referential transparency.
- **Formal Invariant**: An expression $E$ is evaluated under variable environment $\Gamma$ and store $\sigma$:
$$
\llbracket \Gamma \vdash E : T \rrbracket \implies \text{eval}(E, \sigma) \in \llbracket T \rrbracket
$$
Operator typing rules enforce signature matching: For binary operator $\odot \in \{ +, -, *, /, \land, \lor, ==, <, \le \}$:
$$
\frac{\Gamma \vdash E_1 : T_1 \quad \Gamma \vdash E_2 : T_2 \quad (T_1, T_2) \in \text{dom}(\text{op}_\odot)}{\Gamma \vdash E_1 \odot E_2 : \text{codom}(\text{op}_\odot)}
$$
Evaluation of pure expressions is strictly side-effect free: $\sigma_{\text{post}} \equiv \sigma_{\text{pre}}$.
Complexity bound: Type inference and syntax validation over expression trees of size $N$ execute in deterministic linear time $O(N)$.

---

### REQ-0066: KerML Functions: Function, Parameter Directions & Return Typing
- **Normative Statement**: The functional lowering engine shall formalize `Function` classifiers as pure mathematical morphisms from input parameter domains to output result codomains, enforcing strict referential transparency, immutable argument bindings, and total deterministic evaluation.
- **Formal Invariant**: A function $F$ with input signature $\mathbf{x} = (x_1: T_1, \dots, x_k: T_k)$ and return type $T_{\text{ret}}$ defines a mathematical mapping:
$$
\llbracket F \rrbracket : \prod_{i=1}^k \llbracket T_i \rrbracket \longrightarrow \llbracket T_{\text{ret}} \rrbracket
$$
Referential transparency invariant:
$$
\forall \mathbf{a}, \mathbf{b} \in \prod_{i=1}^k \llbracket T_i \rrbracket, \quad \mathbf{a} = \mathbf{b} \implies \llbracket F \rrbracket(\mathbf{a}) = \llbracket F \rrbracket(\mathbf{b})
$$
Side-effect freedom: $\text{Reads}(F) \subseteq \{ x_1, \dots, x_k \} \wedge \text{Writes}(F) = \emptyset$.
Compilation bound: Pure functions with non-recursive expression bodies evaluate with $O(1)$ stack allocation overhead.

---

### REQ-0067: KerML Occurrences: OccurrenceDefinition & OccurrenceUsage Semantics
- **Normative Statement**: The spatio-temporal engine shall formalize dynamic systems and physical entities as `OccurrenceDefinition` and `OccurrenceUsage` elements, assigning four-dimensional world-line extents $\mathcal{W} \subseteq \mathbb{R}^3 \times \mathbb{R}$ with strictly bounded temporal intervals.
- **Formal Invariant**: Each occurrence $o \in \llbracket \text{Occurrence} \rrbracket$ is mapped to a spatio-temporal manifold:
$$
\mathcal{W}(o) \subseteq \mathbb{R}^3 \times \mathbb{R}, \quad \text{temporal\_extent}(o) = [t_{\text{start}}, t_{\text{end}}] \subset \mathbb{R}
$$
where $t_{\text{start}} \le t_{\text{end}}$.
Temporal containment: If occurrence $o_1$ is a sub-occurrence of $o_2$ ($o_1 \subseteq_{\text{occ}} o_2$):
$$
\mathcal{W}(o_1) \subseteq \mathcal{W}(o_2) \implies [t_{\text{start}}(o_1), t_{\text{end}}(o_1)] \subseteq [t_{\text{start}}(o_2), t_{\text{end}}(o_2)]
$$
Complexity bound: Temporal interval bounds validation executes in $O(1)$ interval arithmetic comparisons.

---

### REQ-0068: KerML PortionKind, TimeSlice, Snapshot & EventOccurrence Semantics
- **Normative Statement**: The temporal lowering engine shall formalize occurrence decomposition operators, lowering `snapshot`, `time slice`, and `event occurrence` constructs into rigorous geometric intersections over 4D occurrence world-lines.
- **Formal Invariant**: Let $O$ be an occurrence with extent $\mathcal{W}(O)$.
$$
\begin{aligned}
\text{Snapshot}(O, t_0) &= \mathcal{W}(O) \cap \{ (\mathbf{x}, t) \in \mathbb{R}^3 \times \mathbb{R} \mid t = t_0 \} \\
\text{TimeSlice}(O, t_1, t_2) &= \mathcal{W}(O) \cap \{ (\mathbf{x}, t) \in \mathbb{R}^3 \times \mathbb{R} \mid t_1 \le t \le t_2 \} \\
\text{EventOccurrence}(e) &= \{ (\mathbf{x}, t) \in \mathcal{W}(O) \mid t = t_e \wedge \Phi_{\text{trigger}}(\mathbf{x}, t_e) = \text{true} \}
\end{aligned}
$$
Degeneracy bound: Snapshots and event occurrences have zero Lebesgue measure in the time dimension ($\Delta t = 0$), whereas time slices enforce non-negative duration ($t_2 - t_1 \ge 0$).
Complexity bound: Temporal slicing operators execute in $O(1)$ geometric constraint evaluations.

---

### REQ-0069: KerML Behaviors: Performance, Execution & ActionUsage Semantics
- **Normative Statement**: The behavioral lowering engine shall formalize `Behavior` classifiers and `Step` executions as `Performance` occurrences over time, enforcing contract pre-conditions, post-conditions, and discrete lifecycle state transitions.
- **Formal Invariant**: A performance $P$ executes over temporal interval $[t_{\text{start}}, t_{\text{end}}]$ with discrete lifecycle state:
$$
\sigma_{\text{perf}}(t) \in \{ \text{Unstarted}, \text{Executing}, \text{Suspended}, \text{Completed}, \text{Terminated} \}
$$
Contractual Hoare triples over state space $\Sigma$:
$$
\{ \text{Pre}(x) \} \quad P \quad \{ \text{Post}(x, y) \}
$$
satisfying: $\forall s \in \Sigma, \text{Pre}(s(t_{\text{start}})) = \text{true} \implies \text{Post}(s(t_{\text{end}})) = \text{true}$.
Deterministic execution: Performance lifecycle state transitions follow guarded steps, validating contract compliance in $O(1)$ evaluation per step boundary.

---

### REQ-0070: SysML v2 Package & Subsystem Model Organization Grammar
- **Normative Statement**: The model organization engine shall structure SysML v2 models into modular `package` hierarchies, formalizing visibility boundaries, package imports, and encapsulation boundaries as an acyclic package dependency graph.
- **Formal Invariant**: The package dependency graph $G_{\text{pkg}} = (\mathcal{P}, \mathcal{D}_{\text{imp}})$ is a directed acyclic graph:
$$
(P_1, P_2) \in \mathcal{D}_{\text{imp}} \iff P_1 \text{ imports } P_2
$$
Acyclicity constraint: $\forall P \in \mathcal{P}, (P, P) \notin \mathcal{D}_{\text{imp}}^+$.
Encapsulation: Visibility modifier $v \in \{ \text{public}, \text{private} \}$ controls symbol export:
$$
\text{ExportedSymbols}(P) = \{ s \in \text{Symbols}(P) \mid \text{visibility}(s) = \text{public} \}
$$
Complexity bound: Acyclicity and export boundary validation execute in $O(|\mathcal{P}| + |\mathcal{D}_{\text{imp}}|)$ topological sorting time.

---

### REQ-0071: SysML v2 PartDefinition (`part def`) & PartUsage (`part`) Lowering
- **Normative Statement**: The structural compiler shall formalize `part def` as reusable structural classifiers specializing KerML `Class` and `Structure`, and `part` usages as owned composite features with strict existential lifetime dependencies, default multiplicity $[1..1]$, and hierarchical sub-assembly containment.
- **Formal Invariant**: In the SysML v2 metamodel, `part def` inherits structural and stateful classification:
$$
\text{PartDef} \le \text{Structure} \le \text{Class}
$$
Composite ownership: For a part usage $u$ owned by part definition $D$, the composite relation $\mathcal{C}_{\text{part}} \subset \text{PartDef} \times \text{PartUsage}$ enforces existential lifetime binding:
$$
\forall x \in \llbracket D \rrbracket, \quad \text{Destroy}(x) \implies \forall y \in \pi_u(x), \, \text{Destroy}(y)
$$
Multiplicity interval defaults to exact singleton $\mu(u) = [1, 1]$ when omitted.
Structural containment: The assembly containment graph is an acyclic directed tree with $O(1)$ parent navigation.

---

### REQ-0072: SysML v2 PortDefinition (`port def`) & DirectedPort Usage Lowering
- **Normative Statement**: The compiler shall formalize `port def` as interaction point classifiers specializing KerML `Structure`, and `port` usages as directed boundary interfaces possessing explicit directionality (`in`, `out`, `inout`), payload typing, and conjugate instantiation capabilities.
- **Formal Invariant**: A port definition $P \le \text{Structure}$ defines an interface protocol. A port usage $p$ declared on part $C$ satisfies:
$$
p : \tau_P, \quad \text{dir}(p) \in \{ \text{In}, \text{Out}, \text{InOut} \}
$$
Conjugate port typing: Declaring $p : {\sim}P$ binds port $p$ to the conjugated interface with inverted directional features:
$$
\forall f \in \text{features}(P), \quad \text{dir}(\pi_f(p)) = {\sim}\text{dir}(f)
$$
Boundary encapsulation: External connections to part $C$ must terminate exclusively at declared port usages $\text{ports}(C)$, forbidding direct internal feature bypass.
Complexity bound: Port type resolution and directional feature binding evaluate in $O(1)$ symbol table lookup.

---

### REQ-0073: SysML v2 ItemDefinition (`item def`) & ItemUsage (`item`) Lowering
- **Normative Statement**: The data and flow modeling engine shall formalize `item def` as structural classifiers specializing KerML `Structure`, and `item` usages as physical, energetic, or informational payloads flowing across interconnection topologies with value or token identity semantics.
- **Formal Invariant**: An item definition satisfies:
$$
\text{ItemDef} \le \text{Structure}
$$
Classification duality: Items are partitioned into pure value payloads ($\text{ItemDef} \le \text{DataType}$, immutable without identity) and discrete physical/token payloads ($\text{ItemDef} \le \text{Class}$, tracking unique token identity $\text{id}(e)$).
Conservation property: For conservative flow items, total payload quantity is conserved across continuous flow topologies:
$$
\sum \text{inflow} = \sum \text{outflow}
$$
Complexity bound: Item typing and value duality classification validate in deterministic $O(1)$ type comparison.

---

### REQ-0074: SysML v2 ConnectionDefinition (`connection def`) & ConnectionUsage Lowering
- **Normative Statement**: The interconnect engine shall formalize `connection def` as relational association structures and `connection` usages as topological connectors binding two or more port endpoints, enforcing endpoint type compatibility such that the source port type conforms to the conjugate of the target port type.
- **Formal Invariant**: A connection $C$ between port endpoints $p_1$ and $p_2$ specializes KerML `AssociationStructure`:
$$
\text{ConnectionDef} \le \text{AssociationStructure}
$$
Endpoint Compatibility Invariant: The connection $C = (p_1, p_2)$ is well-typed if and only if endpoint types satisfy:
$$
\text{type}(p_1) \le {\sim}\text{type}(p_2)
$$
Directional flow legality:
$$
\text{dir}(p_1) = \text{Out} \implies \text{dir}(p_2) \in \{ \text{In}, \text{InOut} \}
$$
Scope validation: Both endpoints $p_1, p_2$ must resolve to visible port usages within the common enclosing component or across peer component boundaries in $O(1)$ symbol lookup.

---

### REQ-0075: SysML v2 InterfaceDefinition (`interface def`) & InterfaceUsage Lowering
- **Normative Statement**: The protocol engine shall formalize `interface def` as contractual association structures specifying dual complementary end-roles, and `interface` usages as protocol bindings between communicating parts requiring exact conjugate role duality.
- **Formal Invariant**: An interface definition $I$ defines exactly two complementary end-roles $\text{ends}(I) = (e_1, e_2)$. The interface dual end-role invariant enforces:
$$
\text{ends}(I) = (e_1, e_2) \implies \tau(e_2) \equiv {\sim}\tau(e_1)
$$
Interface usage binding: An interface usage $u$ binding actual port instances $(p_1, p_2)$ to $(e_1, e_2)$ satisfies:
$$
\text{type}(p_1) \le \tau(e_1) \wedge \text{type}(p_2) \le \tau(e_2) \implies \text{type}(p_1) \le {\sim}\text{type}(p_2)
$$
Protocol adherence: All message exchanges and item flows across interface usage $u$ conform to the temporal interaction constraints declared on $I$.
Complexity bound: Dual end-role conjugation and subtyping checks evaluate in deterministic $O(1)$ time per interface binding.

---

### REQ-0076: SysML v2 ItemFlow (`flow`) & Streaming Direction Lowering
- **Normative Statement**: The flow modeling engine shall formalize `flow` usages as directed streaming transfers of matter, energy, or data payloads traversing connectors between port endpoints, enforcing directional compatibility, item subtyping, and rate multiplicity bounds.
- **Formal Invariant**: An item flow $F = (p_{\text{src}}, p_{\text{tgt}}, I_{\text{payload}})$ connecting source port $p_{\text{src}}$ to target port $p_{\text{tgt}}$ with payload item type $I_{\text{payload}}$ satisfies:
$$
\begin{aligned}
\text{dir}(p_{\text{src}}) &\in \{ \text{Out}, \text{InOut} \} \\
\text{dir}(p_{\text{tgt}}) &\in \{ \text{In}, \text{InOut} \} \\
I_{\text{payload}} &\le \text{payload\_type}(p_{\text{src}}) \wedge I_{\text{payload}} \le \text{payload\_type}(p_{\text{tgt}})
\end{aligned}
$$
Streaming rate bound: Declared flow rate $R_{\text{flow}}$ (transfers/second) must satisfy connector bandwidth capacity:
$$
R_{\text{flow}} \cdot \text{size}(I_{\text{payload}}) \le \text{Capacity}(C)
$$
Complexity bound: Item flow directionality and subtyping validation evaluate in deterministic $O(1)$ time.

---

### REQ-0077: SysML v2 AllocationDefinition (`allocation def`) & AllocationUsage Lowering
- **Normative Statement**: The architecture engine shall formalize `allocation def` and `allocate` usages as a bipartite mapping relation from behavioral action nodes to structural classifier nodes, preventing reflexive or cross-domain allocation violations.
- **Formal Invariant**: Let $\text{ActionNodes}$ be the set of behavioral activity/action nodes and $\text{ClassifierNodes}$ be the set of structural component nodes. The set of allocations $\text{Allocations} \subseteq \text{Nodes} \times \text{Nodes}$ forms a bipartite relation:
$$
\forall (a, c) \in \text{Allocations}, \quad a \in \text{ActionNodes} \wedge c \in \text{ClassifierNodes} \wedge c \notin \text{ActionNodes}
$$
Bipartite property: The allocation graph $G_{\text{alloc}} = (V_A \cup V_C, E_{\text{alloc}})$ satisfies $V_A \cap V_C = \emptyset$ where $E_{\text{alloc}} \subseteq V_A \times V_C$.
Allocation consistency: Allocating an action $a$ to structural component $c$ requires that all input and output ports of $a$ map to corresponding ports on $c$.
Complexity bound: Bipartite verification and structural mapping validate in deterministic linear time $O(|E_{\text{alloc}}|)$.

---

### REQ-0078: SysML v2 ActionDefinition (`action def`) & ActionUsage (`action`) Lowering
- **Normative Statement**: The behavioral compiler shall formalize `action def` as behavioral process classifiers specializing KerML `Behavior` and `OccurrenceDefinition`, and `action` usages as discrete executable steps within control and data flow graphs supporting deterministic step sequencing, parameters, and concurrency.
- **Formal Invariant**: In the SysML v2 metamodel, `action def` specializes behavioral occurrences:
$$
\text{ActionDef} \le \text{Behavior} \le \text{OccurrenceDefinition}
$$
An action usage $a$ contains a directed workflow DAG $G_{\text{flow}} = (V_{\text{steps}}, E_{\text{ctrl}} \cup E_{\text{data}})$ where control edges $E_{\text{ctrl}}$ enforce sequence orderings and data edges $E_{\text{data}}$ carry parameter bindings.
Step execution lifecycle satisfies:
$$
\forall s \in V_{\text{steps}}, \quad \text{State}(s) \in \{ \text{Waiting}, \text{Ready}, \text{Executing}, \text{Completed} \}
$$
A step transitions to `Ready` when all incoming control tokens and required data parameters are present.
Complexity bound: Acyclicity and step dependency validation execute in deterministic linear time $O(|V_{\text{steps}}| + |E|)$ via topological sorting.

---

### REQ-0079: SysML v2 StateDefinition (`state def`), StateUsage (`state`) & ParallelState
- **Normative Statement**: The statechart engine shall formalize `state def`, `state`, and `parallel state` usages as hierarchical state machine classifiers specializing KerML `Behavior`, supporting composite state nesting and orthogonal concurrent regions with Cartesian state spaces.
- **Formal Invariant**: In the metamodel, `state def` specializes KerML `Behavior`:
$$
\text{StateDef} \le \text{Behavior} \le \text{OccurrenceDefinition}
$$
Hierarchical nesting: States form a tree $(S, \sqsubseteq)$ where $s_1 \sqsubset s_2$ denotes that $s_1$ is a sub-state of composite state $s_2$.
Orthogonal parallel state: A parallel state $S_{\text{par}}$ contains $k \ge 2$ orthogonal regions $R_1, \dots, R_k$ such that the active state configuration is a Cartesian product vector:
$$
\mathbf{s} \in \prod_{i=1}^k \text{States}(R_i)
$$
Orthogonal synchronization: Transitions crossing between parallel states synchronize through explicit fork and join constructs.
Complexity bound: State hierarchy depth and ancestor chain lookups evaluate in $O(\text{depth})$ bounded time.

---

### REQ-0080: SysML v2 TransitionUsage (`transition`) with Triggers, Guards & Effects
- **Normative Statement**: The statechart compiler shall formalize `transition` usages as discrete event-triggered edges between source and target states, enforcing inner-first depth priority for conflict resolution between ancestor and descendant transitions and orthogonal fork-join synchronization.
- **Formal Invariant**: A transition is a 5-tuple $t = (s_{\text{src}}, s_{\text{tgt}}, e_{\text{trigger}}, g_{\text{guard}}, a_{\text{effect}})$.
Conflict Precedence Invariant: Let $t_1, t_2$ be two simultaneously enabled conflicting transitions. Precedence is determined by inner-first source state depth:
$$
\begin{aligned}
\text{Enabled}(t_1) \wedge \text{Enabled}(t_2) \wedge \text{Conflicting}(t_1, t_2) &\implies \\
\text{Priority}(t_1) > \text{Priority}(t_2) &\iff \text{Depth}(t_1.s_{\text{src}}) > \text{Depth}(t_2.s_{\text{src}})
\end{aligned}
$$
where $\text{Depth}(s)$ denotes tree depth in the state hierarchy from root.
Transition firing step: When $e_{\text{trigger}}$ arrives and $g_{\text{guard}}(\sigma) = \text{true}$:
1. Exit states from $s_{\text{src}}$ up to Least Common Ancestor $\text{LCA}(s_{\text{src}}, s_{\text{tgt}})$.
2. Execute transition effect action $a_{\text{effect}}$.
3. Enter states down to $s_{\text{tgt}}$.
Complexity bound: Conflict resolution and LCA state path computation execute in $O(\text{depth})$ deterministic time.

---

### REQ-0081: SysML v2 EntryAction, DoAction & ExitAction State Lifecycle Hooks
- **Normative Statement**: The state machine engine shall formalize state lifecycle actions (`entry`, `do`, `exit`) as temporal occurrence hooks bound to state activation, execution, and deactivation intervals, guaranteeing atomic entry/exit execution and interruptible do-activity execution.
- **Formal Invariant**: For state $S$ with entry action $A_{\text{entry}}$, do activity $A_{\text{do}}$, and exit action $A_{\text{exit}}$, during state residence interval $[t_{\text{entry}}, t_{\text{exit}}]$:
$$
t_{\text{entry}} \le \tau_{\text{start}}(A_{\text{entry}}) \le \tau_{\text{end}}(A_{\text{entry}}) \le \tau_{\text{start}}(A_{\text{do}}) < \tau_{\text{end}}(A_{\text{do}}) \le \tau_{\text{start}}(A_{\text{exit}}) \le \tau_{\text{end}}(A_{\text{exit}}) \le t_{\text{exit}}
$$
Atomicity: $A_{\text{entry}}$ and $A_{\text{exit}}$ are run-to-completion and non-preemptible ($\Delta t \to 0$ in logical time).
Preemption: Any transition firing out of state $S$ immediately aborts active execution of $A_{\text{do}}$ before invoking $A_{\text{exit}}$.
Complexity bound: State lifecycle scheduling executes in deterministic $O(1)$ dispatch time per phase transition.

---

### REQ-0082: SysML v2 CalculationDefinition (`calc def`) & CalculationUsage Lowering
- **Normative Statement**: The mathematical modeling engine shall formalize `calc def` and `calc` usages as pure functional mathematical expressions specializing KerML `Function`, computing deterministic scalar or tensor output results from input argument vectors without system state mutation.
- **Formal Invariant**: In SysML v2, `calc def` specializes KerML `Function`:
$$
\text{CalcDef} \le \text{Function}
$$
A calculation evaluates an expression $y = f(\mathbf{x})$:
$$
f : \prod_{i=1}^m T_i \longrightarrow T_{\text{out}}
$$
Purity and side-effect freedom:
$$
\forall \mathbf{x} \in \text{dom}(f), \quad \Delta \text{State} \equiv \emptyset \wedge f(\mathbf{x}) = f(\mathbf{x})
$$
Complexity bound: Evaluation of a DAG of non-recursive calculations of size $N$ executes in deterministic topological order in $O(N)$ time.

---

### REQ-0083: SysML v2 ConstraintDefinition (`constraint def`) & ConstraintUsage Lowering
- **Normative Statement**: The verification compiler shall formalize `constraint def` and `constraint` usages as Boolean predicate functions specializing KerML `Function`, asserting invariant logical propositions over parameter vectors that must evaluate to `true` across all admissible system configurations.
- **Formal Invariant**: A constraint definition specializes KerML `Function` with a Boolean codomain:
$$
\text{ConstraintDef} \le \text{Function} \longrightarrow \mathbb{B}
$$
For a constraint usage $C$ binding parameters $\mathbf{x} = (x_1, \dots, x_k)$, the invariant asserts:
$$
\forall \sigma \in \Sigma_{\text{valid}}, \quad \llbracket C \rrbracket(\sigma(\mathbf{x})) \equiv \text{true}
$$
Failure semantics: Evaluation of $\llbracket C \rrbracket(\sigma(\mathbf{x})) = \text{false}$ signals a constraint violation event with diagnostic binding of failing parameter coordinates.
Complexity bound: Evaluating constraint expressions over grounded parameter vectors executes in $O(1)$ stack operations per constraint node.

---

### REQ-0084: SysML v2 AssertConstraintUsage (`assert constraint`) Lowering
- **Normative Statement**: The SysML v2 lowering engine shall lower `assert constraint` usages into `AssertConstraintNode` entities to declare non-negotiable safety and operational invariants that must hold at runtime, generating runtime assertions and formal proof obligations.
- **Formal Invariant**: An `assert constraint` usage binds a constraint expression $P$ to a component context $C$:
$$
\text{assert constraint } P \implies \square P \quad (\text{always } P \text{ holds})
$$
In contrast to general constraints, `assert constraint` triggers compiler verification obligations and runtime safety monitors.

---

### REQ-0085: SysML v2 RequirementDefinition (`requirement def`) & RequirementUsage Lowering
- **Normative Statement**: The SysML v2 lowering engine shall lower `requirement def` and `requirement` usages into `RequirementDefNode` and `RequirementUsageNode` entities to specify formal text specifications, requirement IDs, and formal subject elements.
- **Formal Invariant**: A SysML `requirement` $R$ is lowered to a canonical `RequirementNode`:
$$
R = \langle \text{id}: \text{SymbolId}, \text{text}: \text{String}, \text{subject}: \text{NodeId} \cup \{\bot\}, \text{assumes}: \text{Sequence}<\text{Expr}>, \text{requires}: \text{Sequence}<\text{Expr}> \rangle
$$
Requirements model the contract that system realization elements must satisfy.

---

### REQ-0086: SysML v2 SatisfyRequirementUsage (`satisfy requirement`) Traceability
- **Normative Statement**: The SysML v2 lowering engine shall lower `satisfy requirement` usages into `SatisfyRequirementNode` entities to model formal allocations establishing that a structural part or behavioral action satisfies a specified requirement.
- **Formal Invariant**: A `satisfy` relationship links a system element $E$ to a requirement $R$:
$$
\text{satisfy } R \text{ by } E;
$$
The compiler records a directed realization edge $E \xrightarrow{\text{satisfies}} R$ in `AstModelGraph`.

---

### REQ-0087: SysML v2 VerificationCaseDefinition (`verification def`) & VerificationUsage
- **Normative Statement**: The SysML v2 lowering engine shall lower `verification def` and `verification` usages into `VerificationDefNode` and `VerificationUsageNode` entities to specify test, simulation, analysis, or inspection methods that verify requirements.
- **Formal Invariant**: A `verification def` specializes KerML `Behavior`. A `verify` relationship binds verification case $V$ to requirement $R$:
$$
\text{verify } R \text{ by } V;
$$
Verification cases return a `Verdict` result: $\text{Verdict} \in \{ \text{Pass}, \text{Fail}, \text{Inconclusive} \}$.

---

### REQ-0088: SysML v2 ViewDefinition (`view def`), ViewUsage & Viewpoint Lowering
- **Normative Statement**: The SysML v2 lowering engine shall lower `view def`, `view`, `viewpoint def`, and `viewpoint` usages into `ViewDefNode` and `ViewpointDefNode` entities to define structured queries and projections over the AST model graph according to stakeholder concerns.
- **Formal Invariant**: A `viewpoint` specifies stakeholder concerns and model filter criteria. A `view` conforms to a viewpoint and defines an `expose` set:
$$
\text{view } V \text{ satisfies } VP \{ \text{expose } P_1, P_2; \}
$$

---

### REQ-0089: SysML v2 Expose Filtering & Viewpoint Conformance Grammar
- **Normative Statement**: The SysML v2 lowering engine shall implement `expose` statements and viewpoint conformance checking, filtering model elements exposed by a view according to declared viewpoint concerns.
- **Formal Invariant**: Let $\mathcal{A}$ be the complete model graph and $E_{\text{view}}$ be the expose filter expressions. The rendered view model $\mathcal{A}_{\text{view}}$ satisfies:
$$
\mathcal{A}_{\text{view}} = \{ n \in \mathcal{A} \mid \exists e \in E_{\text{view}} \text{ such that } \text{MatchesFilter}(n, e) \}
$$

---

### REQ-0090: SysML v2 MetadataDefinition (`metadata def`) & Semantic Annotation Usage (`@`)
- **Normative Statement**: The SysML v2 lowering engine shall lower `metadata def` and semantic metadata annotations (`@AnnotationName`) into `MetadataDefNode` and `MetadataUsageNode` entities, attaching custom typed attributes, engineering standards markers, and traceability tags to AST elements.
- **Formal Invariant**: A metadata annotation binds an annotated element $e \in \text{Nodes}(\mathcal{A})$ to a metadata definition $M$ with typed attribute assignments $\mathcal{V} = \{ (a_i, v_i) \}$, attaching cleanly to any AST node without mutating underlying metamodel semantics.

---

### REQ-0091: KerML Standard Library: `Base` Package & Primitive Equality Lowering
- **Normative Statement**: The compiler shall pre-load and bind the normative KerML `Base` standard library package, providing root semantic definitions for `Anything`, `Element`, `Relationship`, and primitive equality (`==`).
- **Formal Invariant**: The `Base` package establishes universal top-types:
$$
\forall T \in \text{KerMLTypes}, \quad T \le \text{Anything}
$$
Primitive equality `==` evaluates value equality for data values and identity equality for objects:
$$
a == b \iff \begin{cases}
\text{val}(a) = \text{val}(b), & \text{if } a, b \in \text{DataValue} \\
\text{id}(a) = \text{id}(b), & \text{if } a, b \in \text{Object}
\end{cases}
$$

---

### REQ-0092: Canonical Scalar Type Lowering & Precision Preservation
- **Normative Statement**: The KerML lowering engine shall map primitive KerML scalar types (Boolean, Integer, Real, String) into canonical target scalar representations while preserving semantic value precision.
- **Formal Invariant**: Canonical scalar type mappings:
$$
\begin{aligned}
\text{ScalarValues::Boolean} &\longleftrightarrow \mathbb{B} \quad (\text{boolean}) \\
\text{ScalarValues::Integer} &\longleftrightarrow \mathbb{Z}_{64} \quad (\text{64-bit signed integer}) \\
\text{ScalarValues::Real} &\longleftrightarrow \mathbb{R}_{64} \quad (\text{IEEE 754 64-bit floating point}) \\
\text{ScalarValues::String} &\longleftrightarrow \text{SymbolId}
\end{aligned}
$$
Subtyping: $\text{Positive} \le \text{Natural} \le \text{Integer} \le \text{Real}$.

---

### REQ-0093: KerML Standard Library: `Collections` Package (Set, Sequence, OrderedSet, Bag)
- **Normative Statement**: The compiler shall pre-load and bind the normative KerML `Collections` standard library package, supporting collection types (`Set`, `Sequence`, `OrderedSet`, `Bag`) and their functional operations.
- **Formal Invariant**: Collection types parameterize over element type $T$: `Collection<T>`. Collection kinds enforce uniqueness and ordering:
$$
\begin{aligned}
\text{Set}<T> &: \text{Unique} = \text{true}, \quad \text{Ordered} = \text{false} \\
\text{Sequence}<T> &: \text{Unique} = \text{false}, \quad \text{Ordered} = \text{true} \\
\text{OrderedSet}<T> &: \text{Unique} = \text{true}, \quad \text{Ordered} = \text{true} \\
\text{Bag}<T> &: \text{Unique} = \text{false}, \quad \text{Ordered} = \text{false}
\end{aligned}
$$

---

### REQ-0094: KerML Standard Library: `ControlFunctions` Package (Decision, Merge, Fork, Join)
- **Normative Statement**: The compiler shall pre-load and bind the normative KerML `ControlFunctions` standard library package, lowering control flow primitives (`Decision`, `Merge`, `Fork`, `Join`, `Loop`) for action execution graphs.
- **Formal Invariant**: Control functions govern execution token flow in behavioral action models:
$$
\begin{aligned}
\text{Fork} &: 1 \text{ incoming token} \longrightarrow N \text{ parallel outgoing tokens} \\
\text{Join} &: N \text{ incoming tokens} \longrightarrow 1 \text{ outgoing token} (\text{all must arrive}) \\
\text{Decision} &: 1 \text{ incoming token} \longrightarrow 1 \text{ outgoing token} (\text{selected by guard}) \\
\text{Merge} &: N \text{ incoming tokens} \longrightarrow 1 \text{ outgoing token} (\text{first arrival passes})
\end{aligned}
$$

---

### REQ-0095: SysML v2 Quantities Library: `Quantities` & Measurement Scale Lowering
- **Normative Statement**: The compiler shall pre-load and bind the normative SysML v2 `Quantities` standard library package, lowering measurement scales, quantity dimensions, and numerical value types.
- **Formal Invariant**: A `Quantity` $Q$ consists of a numerical magnitude $v \in \mathbb{R}$ and a measurement unit $u \in \text{Unit}$:
$$
Q = v \cdot u
$$
Measurement scales classify units into `RatioScale` (absolute zero, supports multiplication) and `IntervalScale` (arbitrary zero, e.g. Celsius).

---

### REQ-0096: SysML v2 Quantities Library: `ISQ` & `ISQBase` Dimension Systems
- **Normative Statement**: The compiler shall pre-load and bind the normative SysML v2 `ISQ` and `ISQBase` standard library packages, defining the International System of Quantities dimensions and derived quantity spaces.
- **Formal Invariant**: Every quantity kind in the ISQ corresponds to a unique dimensional vector in $\mathbb{Z}^7$:
$$
\text{dim}(Q) = [M]^\alpha [L]^\beta [T]^\gamma [I]^\delta [\Theta]^\epsilon [N]^\zeta [J]^\eta, \quad \alpha,\beta,\gamma,\delta,\epsilon,\zeta,\eta \in \mathbb{Z}
$$
Derived ISQ dimensions (Effort, Action, Energy, Power) are defined via integer combinations of base dimensions.

---

### REQ-0097: SysML v2 Quantities Library: `SI` Base & Derived Unit Definitions
- **Normative Statement**: The compiler shall pre-load and bind the normative SysML v2 `SI` and `SIPrefixes` standard library packages, defining SI base units, derived units, and metric scale prefixes.
- **Formal Invariant**: Every SI unit $U$ is defined relative to the coherent base units:
$$
1 \text{ Unit} = c \cdot \text{kg}^\alpha \cdot \text{m}^\beta \cdot \text{s}^\gamma \cdot \text{A}^\delta \cdot \text{K}^\epsilon \cdot \text{mol}^\zeta \cdot \text{cd}^\eta, \quad c \in \mathbb{R}^+
$$
Where $c$ is the scaling factor (e.g. $c = 10^3$ for `kilometer`, $c = 10^{-3}$ for `millimeter`).

---

## Subsystem 5: 7D Physical Metrology & Abstract Flow Conservation Networks

**Scope & Objective**: Defines the rigorous $\mathbb{Q}^7$ rational vector space for 7D physical dimensions ($[M]^\alpha [L]^\beta [T]^\gamma [I]^\delta [\Theta]^\epsilon [N]^\zeta [J]^\eta$), static dimensional homogeneity validation, exact rational arithmetic, composite unit reduction, conservative and non-conservative physical flows, conjugate variable pairs, Kirchhoff flow and potential laws, operational parametric envelopes, and switched flow mixed complementarity (NP-6).

**Requirements Range**: `REQ-0098` through `REQ-0113` (16 Requirements)

### REQ-0098: Formal $\\mathbb{Q}^7$ Rational Vector Space over SI Base Dimensions
- **Normative Statement**: The metrology engine shall model all physical dimensions as a formal 7-dimensional vector space over the field of rational numbers $\mathbb{Q}^7$ where basis vectors correspond strictly to the 7 SI base quantities: Mass ($M$), Length ($L$), Time ($T$), Base Flow Quantity ($I$), Thermodynamic Temperature ($\Theta$), Amount of Substance ($N$), and Luminous Intensity ($J$).
- **Formal Invariant**: A physical dimension $\mathbf{d} \in \mathbb{Q}^7$ is represented as a rational 7-tuple:
$$
\mathbf{d} = (\alpha, \beta, \gamma, \delta, \epsilon, \zeta, \eta) \in \mathbb{Q}^7
$$
The zero vector $\mathbf{0} = (0, 0, 0, 0, 0, 0, 0)$ represents pure dimensionless quantities. Addition in $\mathbb{Q}^7$ models quantity multiplication; scalar multiplication by $k \in \mathbb{Q}$ models exponentiation to power $k$.

---

### REQ-0099: Base Dimension Tuple Representation & Generalized Conjugate Power Pairs
- **Normative Statement**: The metrology engine shall represent physical dimensions internally as irreducible rational exponent tuples $[M]^\alpha [L]^\beta [T]^\gamma [I]^\delta [\Theta]^\epsilon [N]^\zeta [J]^\eta \in \mathbb{Q}^7$, enforcing that generalized Across ($e$, potential) and Through ($f$, flow) conjugate variable pairs have dimensional products evaluating identically to Power ($[M] [L]^2 [T]^{-3}$).
- **Formal Invariant**: The rational dimensional vector is formalized as $\mathbf{d} = (\alpha, \beta, \gamma, \delta, \epsilon, \zeta, \eta) \in \mathbb{Q}^7$, where each component is represented as an irreducible rational pair $(p, q)$ satisfying $q > 0$ and $\gcd(|p|, q) = 1$. For any conjugate interface pair with Across potential $e$ and Through flow $f$:
$$
\mathbf{d}_e + \mathbf{d}_f \equiv \mathbf{d}_{\text{Power}} = (1, 2, -3, 0, 0, 0, 0) \in \mathbb{Q}^7
$$
where each rational exponent coordinate satisfies closure under dimensional addition.

---

### REQ-0100: Exact Rational Exponent Arithmetic & Kirchhoff Continuity Conservation
- **Normative Statement**: The metrology engine shall compute all dimensional algebra operations using exact rational arithmetic without floating-point representations, and synthesize generalized Kirchhoff conservation constraints enforcing flow continuity ($\sum f = 0$) at junctions and potential loop conservation ($\sum \Delta e = 0$) across closed topological cycles.
- **Formal Invariant**: For two rational exponents $\frac{a}{b}$ and $\frac{c}{d}$:
$$
\frac{a}{b} + \frac{c}{d} = \frac{a \cdot d + c \cdot b}{b \cdot d}, \quad \frac{a}{b} \cdot \frac{c}{d} = \frac{a \cdot c}{b \cdot d}
$$
For every conservative junction $J$ with incident through flows $f_k$ and incidence orientation $\sigma_k \in \{+1, -1\}$, and every fundamental cycle $\mathcal{L}$ with potential differences $\Delta e_j$:
$$
\sum_{k \in \text{Incident}(J)} \sigma_k \cdot f_k = 0, \quad \sum_{j \in \text{Edges}(\mathcal{L})} \Delta e_j = 0
$$
enforcing exact dimensional scaling and topological flow conservation.

---

### REQ-0101: Static Dimensional Homogeneity Validation for Additive Expressions ($A \\pm B$)
- **Normative Statement**: The type checker shall enforce static dimensional homogeneity on all additive and comparative expressions ($A + B$, $A - B$, $A == B$, $A < B$, etc.) by requiring operands to possess identically equal dimensional vectors in $\mathbb{Q}^7$.
- **Formal Invariant**: Let $A$ and $B$ be expression AST nodes with inferred dimensions $\mathbf{d}_A, \mathbf{d}_B \in \mathbb{Q}^7$. The homogeneity rule enforces:
$$
\text{expr} = A \pm B \implies \mathbf{d}_A \equiv \mathbf{d}_B
$$
The result dimension is identical to the operand dimension: $\mathbf{d}_{A \pm B} = \mathbf{d}_A$.

---

### REQ-0102: Multiplicative Dimensional Exponent Addition & Subtraction ($A \\cdot B, A / B$)
- **Normative Statement**: The metrology engine shall compute the dimensional vectors of multiplicative expressions ($A \cdot B$) and division expressions ($A / B$) by vector addition and subtraction in $\mathbb{Q}^7$.
- **Formal Invariant**: For expressions $A$ and $B$ with dimensions $\mathbf{d}_A, \mathbf{d}_B$:
$$
\mathbf{d}_{A \cdot B} = \mathbf{d}_A + \mathbf{d}_B, \quad \mathbf{d}_{A / B} = \mathbf{d}_A - \mathbf{d}_B
$$
Unit conversion scaling: Multiplicative scale factors $c_A$ and $c_B$ combine as $c_{A \cdot B} = c_A \cdot c_B$.

---

### REQ-0103: Dimensionless Constraint Enforcement for Transcendental Arguments ($\\sin, \\cos, \\exp, \\ln$)
- **Normative Statement**: The type checker shall enforce that all arguments to transcendental and trigonometric functions ($\sin, \cos, \tan, \exp, \ln, \log_{10}$) evaluate to the dimensionless vector $\mathbf{0} \in \mathbb{Q}^7$, with the result of the function likewise evaluating to dimensionless.
- **Formal Invariant**: Let $f_{\text{trans}} \in \{ \sin, \cos, \tan, \exp, \ln \}$ and $E$ be the argument expression:
$$
\text{expr} = f_{\text{trans}}(E) \implies \mathbf{d}_E \equiv \mathbf{0} = (0, 0, 0, 0, 0, 0, 0)
$$
Result dimension: $\mathbf{d}_{\text{expr}} = \mathbf{0}$.

---

### REQ-0104: Rational Power Evaluation for Fractional Exponents ($A^{p/q}$)
- **Normative Statement**: The metrology engine shall compute dimensions for power expressions ($A^k$) where $k = \frac{p}{q} \in \mathbb{Q}$ is a rational constant, multiplying the base dimensional vector by scalar $k$.
- **Formal Invariant**: For expression $A$ with dimension $\mathbf{d}_A$ raised to rational power $k = \frac{p}{q}$:
$$
\mathbf{d}_{A^k} = k \cdot \mathbf{d}_A = \left( k \alpha, k \beta, k \gamma, k \delta, k \epsilon, k \zeta, k \eta \right)
$$
Rational division requirement: If $k$ is non-integer, each coordinate $k \cdot x$ must evaluate to a valid reduced fraction.

---

### REQ-0105: Switched & Piecewise Conservative Flow Networks & Linear Complementarity Solvers (NP-6)
- **Normative Statement**: The metrology engine shall partition conservative flow networks into continuous linear subgraphs solved via sparse LU factorization in $O(V^3)$ and hybrid switched piecewise junctions formulated as a Linear Complementarity Problem (LCP) / Mixed Complementarity Problem (MCP), solved via Lemke's complementary pivot algorithm with finite iteration cutoff $\kappa_{\text{pivot}}$.
- **Formal Invariant**: Complexity Class: **NP-complete** (Linear Complementarity Problem LCP / Mixed Complementarity Problem MCP).
Continuous linear subgraphs satisfy:
$$
\mathbf{K} \mathbf{e} = \mathbf{f}_{\text{ext}}
$$
where $\mathbf{K} \in \mathbb{R}^{n \times n}$ is the generalized conductance matrix and $\mathbf{e}$ is the node potential vector, solved via sparse LU factorization in $O(V^3)$.
Hybrid switched junctions are formulated as an LCP:
$$
\mathbf{w} - \mathbf{M} \mathbf{z} = \mathbf{q}, \quad \mathbf{w} \ge \mathbf{0}, \quad \mathbf{z} \ge \mathbf{0}, \quad \mathbf{w}^T \mathbf{z} = 0
$$
where $\mathbf{z}$ represents switch activation states and $\mathbf{w}$ represents complementary slack variables, solved via Lemke's complementary pivot algorithm with iteration cutoff $N_{\text{pivot}} \le \kappa_{\text{pivot}}$.

---

### REQ-0106: Conservative vs Non-Conservative Flow Network Classification
- **Normative Statement**: The flow solver shall classify all port connections and item flows into either Conservative flows (governed by generalized Kirchhoff conservation laws over Across and Through conjugate variable pairs in $\mathbb{Q}^7$) or Non-Conservative flows (unidirectional signal, discrete event, or continuous informational streams).
- **Formal Invariant**: Let $\text{Flows}$ be the set of item flows:
$$
\text{Flows} = \text{ConservativeFlows} \cup \text{NonConservativeFlows}, \quad \text{ConservativeFlows} \cap \text{NonConservativeFlows} = \emptyset
$$
Conservative flows participate in topological junction and loop constraint synthesis; non-conservative flows evaluate as unilateral directed functional dependencies.

---

### REQ-0107: Generalized Conjugate Variable Pair Modeling (Effort $\\times$ Flow = Power)
- **Normative Statement**: The metrology engine shall model physical domain interfaces using generalized conjugate power variable pairs consisting of an Across variable ($e$, Effort/Potential) and a Through variable ($f$, Flow/Rate) whose dimensional product evaluates to Power ($[M] [L]^2 [T]^{-3}$).
- **Formal Invariant**: For any conservative physical domain $D$, the conjugate variables satisfy:
$$
\mathbf{d}_{e} + \mathbf{d}_{f} \equiv \mathbf{d}_{\text{Power}} = (1, 2, -3, 0, 0, 0, 0) \in \mathbb{Q}^7
$$
Generalized conjugate domain formulations:
- Potential Conjugate: Across Potential ($e: M L^2 T^{-3} I^{-1}$) $\times$ Through Flow Rate ($f: I$) = Power ($M L^2 T^{-3}$)
- Dynamic Motion Conjugate: Across Effort ($e: M L T^{-2}$) $\times$ Through Rate ($f: L T^{-1}$) = Power ($M L^2 T^{-3}$)
- Volumetric Conjugate: Across Generalized Potential ($e: M L^{-1} T^{-2}$) $\times$ Through Volumetric Rate ($f: L^3 T^{-1}$) = Power ($M L^2 T^{-3}$)

---

### REQ-0108: Generalized Kirchhoff Flow Law ($\\sum \\text{Through} = 0$) at Conservative Junctions
- **Normative Statement**: The network solver shall synthesize generalized Kirchhoff Flow Law equations at all conservative junction nodes such that the algebraic sum of all through variables (flow rates) entering and exiting a conservative topological junction sums to zero at every instant.
- **Formal Invariant**: Let $J$ be a conservative junction connected to flow branches $k = 1, \dots, m$ with through variables $f_k$ and incidence orientation $\sigma_k \in \{ +1, -1 \}$:
$$
\sum_{k=1}^m \sigma_k \cdot f_k(t) = 0, \quad \forall t \ge 0
$$
This formulation enforces generalized Kirchhoff flow continuity ($\sum f = 0$) and conservative flux conservation across topological junctions.

---

### REQ-0109: Generalized Kirchhoff Potential Law ($\\oint \\text{Across} = 0$) across Closed Loops
- **Normative Statement**: The network solver shall synthesize generalized Kirchhoff Potential Law equations across all closed topological loops in conservative networks such that the algebraic sum of across variables (effort/potential differences) around any closed topological path sums to zero.
- **Formal Invariant**: Let $\mathcal{L}$ be a fundamental cycle in the network graph with directed edges $e_1, \dots, e_p$ having effort differences $\Delta e_j$:
$$
\sum_{j=1}^p \Delta e_j(t) = 0, \quad \forall t \ge 0
$$
This formulation enforces generalized potential loop conservation ($\sum \Delta e = 0$) and relative potential difference closure across fundamental network cycles.

---

### REQ-0110: Flow Conservation Network Incidence Matrix Construction & Rank Verification
- **Normative Statement**: The flow solver shall construct the structural incidence matrix $\mathbf{A} \in \{-1, 0, 1\}^{n \times b}$ representing $n$ junctions and $b$ branches, verifying matrix rank and calculating fundamental cut-set and cycle matrices to establish system solvability.
- **Formal Invariant**: The incidence matrix element $A_{ij}$ is defined as:
$$
A_{ij} = \begin{cases}
+1, & \text{if branch } j \text{ leaves junction } i \\
-1, & \text{if branch } j \text{ enters junction } i \\
0, & \text{otherwise}
\end{cases}
$$
Solvability invariant: For a connected network with $n$ nodes, $\text{rank}(\mathbf{A}) = n - 1$.

---

### REQ-0111: Abstract Power Product Balance ($\\sum P_{\\text{in}} = \\sum P_{\\text{out}} + \\frac{dE}{dt}$)
- **Normative Statement**: The flow network solver shall verify the overarching power product balance across closed conservative network assemblies, ensuring that total input power equals total output power plus the rate of internal energy storage and dissipation.
- **Formal Invariant**: For component boundary $\Omega$ with external ports $k = 1, \dots, m$ and internal energy states $E_{\text{internal}}$:
$$
\sum_{k=1}^m P_k(t) = \frac{d}{dt} E_{\text{internal}}(t) + P_{\text{dissipated}}(t), \quad \text{where } P_{\text{dissipated}}(t) \ge 0
$$
Passive systems enforce the passivity condition: $\int_0^T \sum P_k(t) \, dt \ge -E_{\text{initial}}$.

---

### REQ-0112: Parametric Operational Envelopes & Closed Interval $[v_{\\min}, v_{\\max}]$ Validation
- **Normative Statement**: The metrology engine shall validate system parameters and operating signals against declared operational envelopes specified as closed real intervals $[v_{\min}, v_{\max}] \subset \mathbb{R}$ accompanied by engineering units.
- **Formal Invariant**: Let $x$ be an attribute or signal with operational envelope $\mathcal{E}_x = [v_{\min}, v_{\max}]$ and operating point $v_{\text{nom}}$. The compiler verifies:
$$
v_{\min} \le v_{\text{nom}} \le v_{\max}
$$
At compile time, static constant values and initial states are checked for membership: $v_{\text{init}} \in \mathcal{E}_x$.

---

### REQ-0113: Static Boundary Value Analysis & Parametric Tolerance Envelope Verification
- **Normative Statement**: The metrology engine shall perform static boundary value analysis over parametric constraint intervals, verifying that tolerance envelopes around operational parameters satisfy design safety bounds.
- **Formal Invariant**: For an output signal $y = f(x_1, \dots, x_k)$ where each input parameter has tolerance $x_i \in [x_{i,0} - \delta_i, x_{i,0} + \delta_i]$:
$$
y_{\max} = \max_{\mathbf{x} \in \prod [x_{i,0} \pm \delta_i]} f(\mathbf{x}), \quad y_{\min} = \min_{\mathbf{x} \in \prod [x_{i,0} \pm \delta_i]} f(\mathbf{x})
$$
The compiler verifies: $[y_{\min}, y_{\max}] \subseteq [Y_{\text{lower\_limit}}, Y_{\text{upper\_limit}}]$.

---

## Subsystem 6: Spatio-Temporal Dynamics & Discrete State Machine Solvers

**Scope & Objective**: Specifies spatio-temporal occurrence interval bounds, Allen's 13 qualitative interval relations axiomatic solver and ORD-Horn tractable subclass (NP-1), path consistency propagation, directed causal precedence DAGs, hierarchical state machines, event dispatching, guard disjointness verification, reachability analysis via Bounded Model Checking (NP-5), livelock detection, failsafe fallback transitions, and state history restoration.

**Requirements Range**: `REQ-0114` through `REQ-0127` (14 Requirements)

### REQ-0114: Spatio-Temporal Occurrence Lifecycles & Temporal Interval Bounds $[t_{\\text{start}}, t_{\\text{end}}]$
- **Normative Statement**: The dynamics solver shall assign explicit temporal interval bounds $[t_{\text{start}}, t_{\text{end}}]$ to all occurrence lifecycles, action executions, and state occupancies, enforcing temporal non-negativity and duration consistency.
- **Formal Invariant**: An occurrence interval $I = [t_s, t_e]$ satisfies:
$$
t_s \le t_e, \quad \text{duration}(I) = t_e - t_s \ge 0
$$
For discrete events, $t_s = t_e$ (duration 0). For continuous states and actions, $t_s < t_e$.

---

### REQ-0115: Allen's 13 Qualitative Interval Relations Axiomatic Algebraic Solver
- **Normative Statement**: The dynamics solver shall implement an axiomatic constraint solver for Allen's 13 qualitative temporal interval relations (`before`, `after`, `meets`, `met-by`, `overlaps`, `overlapped-by`, `starts`, `started-by`, `during`, `contains`, `finishes`, `finished-by`, `equals`).
- **Formal Invariant**: Let $X = [x_s, x_e]$ and $Y = [y_s, y_e]$ be two temporal intervals. The 13 mutually exclusive relations are defined by endpoint ordering constraints:
$$
\begin{aligned}
X \text{ before } Y &\iff x_e < y_s \\
X \text{ meets } Y &\iff x_e = y_s \\
X \text{ overlaps } Y &\iff x_s < y_s < x_e < y_e \\
X \text{ starts } Y &\iff x_s = y_s \wedge x_e < y_e \\
X \text{ during } Y &\iff y_s < x_s \wedge x_e < y_e \\
X \text{ finishes } Y &\iff y_s < x_s \wedge x_e = y_e \\
X \text{ equals } Y &\iff x_s = y_s \wedge x_e = y_e
\end{aligned}
$$
Along with the 6 inverse relations (`after`, `met-by`, `overlapped-by`, `started-by`, `contains`, `finished-by`).

---

### REQ-0116: Temporal Relation Composition Table & Path Consistency Constraint Propagation
- **Normative Statement**: The dynamics solver shall implement path consistency constraint propagation using Allen's $13 \times 13$ interval relation composition table to deduce implied temporal relationships between indirect intervals and detect latent temporal conflicts.
- **Formal Invariant**: Given temporal constraints $R(X, Y)$ and $R(Y, Z)$, the composition operator $\circ$ deduces allowable relations for $R(X, Z)$:
$$
R(X, Z) \subseteq R(X, Y) \circ R(Y, Z)
$$
The path consistency algorithm iteratively computes transitive closures until a stable fixed point is reached:
$$
R(X_i, X_j) \leftarrow R(X_i, X_j) \cap \left( R(X_i, X_k) \circ R(X_k, X_j) \right), \quad \forall i, j, k
$$

---

### REQ-0117: Allen's Interval Algebra Temporal Consistency & ORD-Horn SMT Solver (NP-1)
- **Normative Statement**: The temporal solver shall enforce temporal consistency over occurrence lifecycles by restricting static constraint propagation to the ORD-Horn tractable subclass (Nebel & Bürckert, 1995) guaranteeing $O(N^3)$ polynomial-time path consistency, while delegating general temporal networks to an SMT difference logic solver (QF_RDL) with an explicit step budget $\kappa_{\text{temporal}}$.
- **Formal Invariant**: Complexity Class: **NP-complete** for general networks (*Vilain & Kautz, 1986*).
For qualitative intervals within the ORD-Horn tractable subclass $\mathcal{H}_{\text{ORD}}$, path consistency computes in $O(N^3)$:
$$
\forall i, j, k \in \mathcal{O}, \quad R(i, k) \leftarrow R(i, k) \cap (R(i, j) \circ R(j, k))
$$
General non-ORD-Horn temporal networks are compiled to difference logic constraints ($t_j - t_i \le c_{ij}$) and solved via a QF_RDL theory solver with step limit:
$$
\text{Steps}(\text{Solve}) \le \kappa_{\text{temporal}}
$$

---

### REQ-0118: Directed Causal Precedence DAG Construction & Cycle Detection
- **Normative Statement**: The compiler shall construct a directed causal precedence graph $G_{\text{prec}} = (V, E)$ for all action executions and state transitions, asserting strict acyclicity to guarantee deadlock-free execution sequences.
- **Formal Invariant**: In $G_{\text{prec}}$, vertices represent action executions and directed edges $(u, v) \in E$ represent causal precedence ($u \prec v$). The solver verifies:
$$
\text{Acyclic}(G_{\text{prec}}) \iff \forall v \in V, \quad v \notin \text{Reach}(v, G_{\text{prec}})
$$

---

### REQ-0119: Action Step Sequence Execution Semantics & Fork-Join Concurrency
- **Normative Statement**: The compiler shall lower behavioral action sequences, fork nodes, and join nodes into parallel execution DAGs while enforcing token conservation across parallel branches and validating that all joined paths terminate prior to post-join action dispatch.
- **Formal Invariant**: Let $N_{\text{fork}}$ fork into parallel paths $P_1, \dots, P_k$ that synchronize at $N_{\text{join}}$. The join synchronization rule satisfies:
$$
t_{\text{start}}(N_{\text{join}}) = \max_{i \in \{1 \dots k\}} t_{\text{end}}(P_i)
$$
Token conservation: The number of tokens consumed by the join node equals the branch fan-out $k$.

---

### REQ-0120: Hierarchical State Machine (Statechart) Containment & Orthogonal Regions
- **Normative Statement**: The state machine compiler shall model hierarchical statecharts supporting nested composite states, parent-child state containment, and orthogonal parallel regions with independent active sub-states.
- **Formal Invariant**: A state machine configuration $C$ is a tree of active states:
$$
C \subseteq \text{States}, \quad s \in C \implies \text{ancestors}(s) \subset C
$$
For an orthogonal state $S_{\text{orth}}$ with regions $R_1, \dots, R_m$, an active configuration must contain exactly one active leaf state in each region:
$$
S_{\text{orth}} \in C \implies \forall i \in \{1 \dots m\}, \quad |C \cap \text{States}(R_i)| = 1
$$

---

### REQ-0121: State Transition Trigger Event Dispatching & Event Queue Semantics
- **Normative Statement**: The state machine engine shall implement run-to-completion (RTC) event dispatching semantics with a FIFO event queue such that external signal receptions, call triggers, and time events are queued and processed sequentially without interrupt re-entrancy.
- **Formal Invariant**: The event queue $Q = \langle e_1, e_2, \dots, e_p \rangle$ is processed in discrete RTC steps:
$$
\text{RTCStep}(C, e) \longrightarrow C'
$$
Where configuration $C'$ is completely established and all entry/exit actions terminate before the next event $e_{i+1}$ is dequeued.

---

### REQ-0122: Deterministic Transition Guard Disjointness Verification ($G_1 \\wedge G_2 \\equiv \\text{false}$)
- **Normative Statement**: The state machine compiler shall verify that outgoing transitions from any state triggered by the same event have mutually disjoint guard conditions whose logical conjunction evaluates to identically false ($G_1 \wedge G_2 \equiv \text{false}$), guaranteeing deterministic state changes.
- **Formal Invariant**: Let $T_1$ and $T_2$ be two transitions exiting state $S$ on identical trigger $e$ with guards $G_1$ and $G_2$. The determinism check requires:
$$
\text{UNSAT}(G_1 \wedge G_2) \iff \neg \exists \mathbf{x} \text{ such that } G_1(\mathbf{x}) = \text{true} \wedge G_2(\mathbf{x}) = \text{true}
$$
The compiler verifies guard disjointness via an integrated SMT-LIB2 decision procedure.

---

### REQ-0123: Complete State Machine Reachability Analysis & Dead State Diagnostics
- **Normative Statement**: The state machine compiler shall perform an exhaustive reachability analysis across the complete state space, flagging any declared state lacking an execution path from the initial state as a dead state.
- **Formal Invariant**: Let $S_0$ be the initial state and $\delta : \text{States} \times \text{Events} \times \text{Guards} \longrightarrow \text{States}$ be the transition function. The reachable state set $\mathcal{R}$ is the transitive closure:
$$
\mathcal{R} = \mu X. \left( \{ S_0 \} \cup \{ s' \in \text{States} \mid \exists s \in X, \, \exists e \text{ such that } s' \in \delta(s, e) \} \right)
$$
Dead states: $\mathcal{D}_{\text{dead}} = \text{States} \setminus \mathcal{R}$.

---

### REQ-0124: Discrete State Machine Reachability, Deadlock & Livelock in Orthogonal Regions (NP-5)
- **Normative Statement**: The state machine compiler shall verify reachability, deadlock freedom, and livelock absence across $K$ concurrent orthogonal regions via Bounded Model Checking (BMC), unrolling transition relations into propositional SAT constraints with a depth cutoff $k \le k_{\text{max}}$, mitigating the PSPACE-complete state space explosion.
- **Formal Invariant**: Complexity Class: **PSPACE-complete** for $K$ orthogonal regions ($|S| = \prod_{i=1}^K |S_i|$), NP-complete for bounded depth $k$.
The Bounded Model Checking formula unrolled to depth $k$ is:
$$
\Phi_k = I(s_0) \wedge \left( \bigwedge_{t=0}^{k-1} T(s_t, s_{t+1}) \right) \wedge \neg \text{Safe}(s_k)
$$
where $I(s_0)$ is the initial configuration predicate, $T(s_t, s_{t+1})$ is the composite transition relation across orthogonal regions, and $\text{Safe}(s_k)$ asserts absence of deadlocks and livelock non-progress loops:
$$
\text{Safe}(s) \equiv \exists s', \, T(s, s') \wedge \neg \text{LivelockCycle}(s)
$$
Satisfiability of $\Phi_k$ produces an execution trace refuting the safety invariant within depth bound $k \le k_{\text{max}}$.

---

### REQ-0125: Failsafe Fallback Transitions & High-Priority Preemptive Evacuation
- **Normative Statement**: The state machine compiler shall enforce that every operational state has a defined, high-priority failsafe fallback transition to a designated safe state upon occurrence of a critical fault event, preempting all internal nominal transitions.
- **Formal Invariant**: Let $S_{\text{nominal}}$ be an active state and $e_{\text{fault}}$ be a critical fault event. There must exist a transition:
$$
T_{\text{failsafe}} = (S_{\text{nominal}}, S_{\text{safe}}, e_{\text{fault}}, \text{true}, A_{\text{safing}})
$$
Priority rule: $\text{priority}(T_{\text{failsafe}}) > \text{priority}(T_{\text{nominal}})$, ensuring deterministic preemptive evacuation to the safe state.

---

### REQ-0126: State History Pseudostates (Shallow & Deep History) Restoration Semantics
- **Normative Statement**: The state machine compiler shall implement Shallow History (`[H]`) and Deep History (`[H*]`) pseudostate semantics, enabling interrupted composite states to restore their previous active sub-state configurations upon re-entry.
- **Formal Invariant**: Let $S_{\text{comp}}$ be a composite state with recorded exit configuration $C_{\text{last}}$.
- Shallow History ($[H]$): Enters the most recently active immediate child state $s \in C_{\text{last}} \cap \text{Children}(S_{\text{comp}})$, executing its initial transition for any deeper nesting.
- Deep History ($[H*]$): Fully restores the entire active configuration subtree: $C_{\text{restored}} = C_{\text{last}}$.

---

### REQ-0127: State Machine Simulation Stepper & Trace Log Generation
- **Normative Statement**: The compiler core shall provide a deterministic state machine simulation stepper that executes statecharts step-by-step against simulated event traces, producing structured JSON execution logs detailing state entries, exits, guard evaluations, and action executions.
- **Formal Invariant**: Given initial configuration $C_0$ and event sequence $\vec{e} = \langle e_1, \dots, e_m \rangle$, the stepper computes:
$$
\text{Trace}(\vec{e}) = \langle (C_0, e_1, C_1, A_1), (C_1, e_2, C_2, A_2), \dots, (C_{m-1}, e_m, C_m, A_m) \rangle
$$
Simulation execution is completely deterministic and reproducible across repeated runs.

---

## Subsystem 7: Formal Safety, Traceability & Regulatory Verification

**Scope & Objective**: Specifies the formal safety verification compiler, covering the 7-tier traceability DAG, upward and downward completeness gates, witness completeness, Merkle root verification attestation, Hierarchical Control Structure (HCS) extraction, STPA minimal hazard cut-sets (NP-4), combinatorial UCA expansion via bounded work-stealing thread pools, automated Boolean invariant synthesis, quantitative FMECA RPN scoring, Run-Time Assurance (RTA) simplex/duplex switching, smooth state transition blending, and Control Barrier Functions (CBFs).

**Requirements Range**: `REQ-0128` through `REQ-0144` (17 Requirements)

### REQ-0128: 7-Tier Bipartite Traceability DAG Architecture
- **Normative Statement**: The safety compiler shall construct a 7-tier bipartite traceability DAG linking requirements, design elements, interfaces, constraints, hazards, safety invariants, and verification witnesses across the entire system specification.
- **Formal Invariant**: The 7 tiers are formally ordered:
$$
T_1 (\text{Mission Requirements}) \longrightarrow T_2 (\text{System Requirements}) \longrightarrow T_3 (\text{Architectural Classifiers}) \longrightarrow T_4 (\text{Ports \& Interfaces}) \longrightarrow T_5 (\text{Safety Invariants}) \longrightarrow T_6 (\text{Realization Code}) \longrightarrow T_7 (\text{Verification Witnesses})
$$
where traceability edges satisfy $E_{\text{trace}} \subseteq \bigcup_{i=1}^6 (T_i \times T_{i+1})$.

---

### REQ-0129: Upward Allocation Completeness Gate ($\forall \text{Req}, \exists \text{Element}$)
- **Normative Statement**: The safety compiler shall enforce an upward allocation completeness gate asserting that every declared system requirement allocates to at least one architectural element or safety invariant in the traceability DAG.
- **Formal Invariant**: The upward allocation relation satisfies:
$$
\forall r \in \mathcal{R}_{\text{system}}, \quad \exists e \in \mathcal{E}_{\text{architecture}} \cup \mathcal{I}_{\text{safety}} \quad \text{such that } (r, e) \in E_{\text{trace}}
$$

---

### REQ-0130: Downward Realization Completeness Gate ($\forall \text{Element}, \exists \text{Req}$)
- **Normative Statement**: The safety compiler shall enforce a downward realization completeness gate asserting that every architectural element traces backward to at least one parent requirement.
- **Formal Invariant**: The downward realization relation satisfies:
$$
\forall e \in \mathcal{E}_{\text{architecture}}, \quad \exists r \in \mathcal{R}_{\text{system}} \quad \text{such that } (r, e) \in E_{\text{trace}}
$$

---

### REQ-0131: Verification Witness Completeness Gate ($\forall \text{Req}, \exists \text{Witness}$)
- **Normative Statement**: The safety compiler shall enforce a verification witness completeness gate asserting that every requirement has at least one formally linked verification witness in the traceability graph.
- **Formal Invariant**: The verification link relation satisfies:
$$
\forall r \in \mathcal{R}_{\text{all}}, \quad \exists w \in \mathcal{W}_{\text{verification}} \quad \text{such that } (r, w) \in E_{\text{verify}}
$$

---

### REQ-0132: Extraneous Node Detection & Dead Code Elimination in Safety Contexts
- **Normative Statement**: The safety compiler shall detect and eliminate extraneous AST nodes and unreferenced behaviors that lack traceability paths to verified mission requirements or safe operational states.
- **Formal Invariant**: Let $G = (V, E)$ be the traceability DAG and $R_{\text{root}} \subset V$ be the root mission requirements; an element $v \in V$ is retained if and only if:
$$
\text{Reachable}(R_{\text{root}}, v) \equiv \text{true}
$$

---

### REQ-0133: Cryptographic Merkle Root Attestation for End-to-End Verification Graphs
- **Normative Statement**: The safety compiler shall compute a cryptographic Merkle root hash over the entire 7-tier traceability DAG to guarantee tamper-proof audit trails and deterministic verification attestation.
- **Formal Invariant**: For a tree node $u$ with ordered children $\langle v_1, \dots, v_k \rangle$:
$$
H(u) = \text{Hash}\left(\text{Data}(u) \,\|\, H(v_1) \,\|\, \dots \,\|\, H(v_k)\right)
$$
yielding top-level graph attestation digest $H_{\text{root}} = H(\text{DAG})$.

---

### REQ-0134: Hierarchical Control Structure (HCS) AST Extraction & Controller-Process Topology
- **Normative Statement**: The safety compiler shall extract a formal Hierarchical Control Structure topology from the AST model graph, identifying controlling entities, execution interfaces, controlled processes, observation interfaces, control action flows, and state feedback observation flows.
- **Formal Invariant**: An abstract Hierarchical Control Structure topology is formalized as:
$$
\text{HCS} = (C, E, P, O, \mathcal{U}, \mathcal{Y})
$$
where $C$ denotes controlling entities, $E$ denotes execution interfaces, $P$ denotes controlled processes, $O$ denotes observation interfaces, $\mathcal{U} \subseteq C \times E \times P$ denotes control action flows, and $\mathcal{Y} \subseteq P \times O \times C$ denotes state feedback observation flows.

---

### REQ-0135: STPA Minimal Hazard Cut-Sets & Unsafe Control Action Minimization (NP-4)
- **Normative Statement**: The safety compiler shall solve the minimal hazard cut-set problem by determining the minimal hitting set of safety constraints covering all identified system hazards across candidate unsafe control actions, utilizing greedy logarithmic approximation or bounded Min-Unsat reductions with timeout $\kappa_{\text{safety}}$.
- **Formal Invariant**: Complexity Class: **NP-complete** (Equivalent to Minimal Hitting Set / Hypergraph Transversal).
Let $\mathcal{H}$ be the family of hazard scenarios where each hazard $H_i \in \mathcal{H}$ requires mitigation by at least one safety constraint in candidate set $\mathcal{C}$. The minimal hitting set $C^* \subseteq \mathcal{C}$ satisfies:
$$
\forall H_i \in \mathcal{H}, \quad C^* \cap H_i \ne \emptyset, \quad \min |C^*|
$$
The greedy approximation algorithm constructs $C_{\text{greedy}}$ guaranteeing:
$$
|C_{\text{greedy}}| \le (1 + \ln |\mathcal{H}|) \cdot |C^*|
$$
Under exact verification mode, the problem is formulated as Min-Unsat with execution timeout bound $t_{\text{solve}} \le \kappa_{\text{safety}}$.

---

### REQ-0136: STPA Combinatorial Unsafe Control Action Tensor Expansion & Pruning
- **Normative Statement**: The safety compiler shall execute a combinatorial tensor expansion ($U = A \times G \times S_{\text{context}}$) across control actions, universal STPA guide words, and operational context states, evaluating candidate hazard contexts using a bounded work-stealing worker pool ($P_{\text{workers}} \le N_{\text{cores}}$) while strictly prohibiting unbounded dynamic thread allocation.
- **Formal Invariant**: Let $A = \{ a_1, \dots, a_m \}$ be the set of control actions, $G = \{ g_1, g_2, g_3, g_4 \}$ be the universal guide words, and $S_{\text{context}}$ be the operational context states:
$$
U = A \times G \times S_{\text{context}} = \{ (a, g, s) \mid a \in A, \, g \in G, \, s \in S_{\text{context}} \}
$$
Task scheduling across candidate tensor $U$ evaluates hazard contexts in parallel:
$$
\forall (a, g, s) \in U, \quad \text{EvaluateContext}(a, g, s) \implies \text{WorkerPoolExecution}(P)
$$
satisfying tensor cardinality $|U| = 4 \cdot |A| \cdot |S_{\text{context}}|$ and active worker pool constraint $T_{\text{active}} \le P_{\text{workers}} \le N_{\text{cores}}$.

---

### REQ-0137: Automated Boolean Safety Invariant Synthesis from Hazard Scenarios
- **Normative Statement**: The safety compiler shall synthesize formal Boolean safety invariants from identified unsafe control action scenarios by generating the logical negation of confirmed hazardous states as invariant predicates.
- **Formal Invariant**: Let $H(\mathbf{x}) \equiv \text{true}$ define a hazardous system condition over state vector $\mathbf{x}$; the synthesized safety invariant $\mathcal{I}_{\text{safe}}$ satisfies:
$$
\mathcal{I}_{\text{safe}}(\mathbf{x}) \equiv \neg H(\mathbf{x})
$$

---

### REQ-0138: Structured `ConstraintExpr` AST Invariant Generation with De Morgan Normalization
- **Normative Statement**: The safety compiler shall construct invariants as strongly-typed constraint expression AST structures, applying De Morgan's laws and algebraic normalization to emit clean Conjunctive Normal Form representations.
- **Formal Invariant**: An invariant expression $\phi$ is normalized to Conjunctive Normal Form:
$$
\phi = \bigwedge_{i=1}^m \bigvee_{j=1}^{k_i} l_{ij}
$$
via equivalence-preserving De Morgan transformations $\neg(A \wedge B) \equiv (\neg A \vee \neg B)$ and $\neg(A \vee B) \equiv (\neg A \wedge \neg B)$.

---

### REQ-0139: FMECA Failure Mode Synthesis across 4 Universal Dimensions (Interface, State, Action, Resource)
- **Normative Statement**: The safety compiler shall synthesize Failure Mode, Effects, and Criticality Analysis records across the four universal failure dimensions of Interface, State, Action, and Resource for every architectural component.
- **Formal Invariant**: For every component $C$, failure modes are generated across the Cartesian product space:
$$
\mathcal{F}(C) = \{ (c, d, m) \mid c \in \text{Elements}(C), \, d \in \{ \text{Interface}, \text{State}, \text{Action}, \text{Resource} \}, \, m \in \text{FailureKinds}(d) \}
$$

---

### REQ-0140: Quantitative Risk Priority Number (RPN) Integer Scoring Engine ($RPN = S \times O \times D$)
- **Normative Statement**: The safety compiler shall compute quantitative Risk Priority Numbers for all synthesized failure modes by calculating integer scores based on Severity, Occurrence, and Detection ratings.
- **Formal Invariant**: For each failure mode $f$ with integer ratings $S(f), O(f), D(f) \in [1, 10]$:
$$
RPN(f) = S(f) \times O(f) \times D(f), \quad RPN(f) \in [1, 1000]
$$
where critical failure modes satisfy $S(f) \ge 9 \vee RPN(f) \ge 200$.

---

### REQ-0141: Run-Time Assurance (RTA) Simplex/Duplex Architecture Pattern Synthesis
- **Normative Statement**: The safety compiler shall synthesize Run-Time Assurance simplex and duplex architectural patterns generating an advanced controller, a verified recovery controller, an invariant safety monitor, and switching logic.
- **Formal Invariant**: The Run-Time Assurance architecture governs control output according to:
$$
\mathbf{u}(t) = \begin{cases}
\mathbf{u}_{\text{complex}}(t), & \text{if } \mathcal{M}(\mathbf{x}(t)) \equiv \text{Safe} \\
\mathbf{u}_{\text{recovery}}(t), & \text{if } \mathcal{M}(\mathbf{x}(t)) \equiv \text{Unsafe}
\end{cases}
$$
where online monitor $\mathcal{M}$ checks state envelope bounds and barrier conditions.

---

### REQ-0142: Smooth State Transition Blending & $C^1$-Continuity Bounds
- **Normative Statement**: The safety compiler shall synthesize smooth state transition interpolation functions for run-time assurance switching logic, smoothly interpolating control output signals $\mathbf{u}(t)$ across switching duration $T_{\text{switch}}$ to enforce $C^1$-continuity bounds and eliminate signal transients.
- **Formal Invariant**: Let $\tau = \frac{t - t_{\text{switch}}}{T_{\text{switch}}} \in [0, 1]$; the blended control output signal $\mathbf{u}_{\text{blend}}(t)$ satisfies:
$$
\mathbf{u}_{\text{blend}}(t) = (1 - \lambda(\tau)) \cdot \mathbf{u}_{\text{complex}}(t) + \lambda(\tau) \cdot \mathbf{u}_{\text{recovery}}(t)
$$
where blending function $\lambda(\tau) = 3\tau^2 - 2\tau^3$ satisfies boundary conditions:
$$
\begin{aligned}
\lambda(0) = 0, \quad \lambda(1) = 1, \quad \left.\frac{d\lambda}{d\tau}\right|_{\tau=0} = 0, \quad \left.\frac{d\lambda}{d\tau}\right|_{\tau=1} = 0
\end{aligned}
$$
guaranteeing continuous derivative matching and $C^1$-continuity ($\mathbf{u}_{\text{blend}} \in C^1$) across switching boundaries.

---

### REQ-0143: Control Barrier Function (CBF) Forward Invariance Contract Formulation
- **Normative Statement**: The safety compiler shall formulate Control Barrier Function forward invariance contracts for critical state constraints, enforcing that the synthesized control law maintains forward invariance of the declared safe set.
- **Formal Invariant**: For a safe set $\mathcal{C} = \{ \mathbf{x} \mid h(\mathbf{x}) \ge 0 \}$ with continuously differentiable function $h(\mathbf{x})$:
$$
\sup_{\mathbf{u} \in U} \left[ \nabla h(\mathbf{x}) \cdot f(\mathbf{x}, \mathbf{u}) + \alpha(h(\mathbf{x})) \right] \ge 0, \quad \forall \mathbf{x} \in \mathcal{C}
$$
where $\alpha$ is an extended class $\mathcal{K}$ function guaranteeing $\mathbf{x}(0) \in \mathcal{C} \implies \forall t \ge 0, \, \mathbf{x}(t) \in \mathcal{C}$.

---

### REQ-0144: Declarative Pluggable Regulatory Safety Profiles Engine
- **Normative Statement**: The safety compiler shall implement a declarative, pluggable regulatory safety profiles engine that defines domain-specific severity classifications, hazard log schemas, and verification checklists without modifying the core metamodel.
- **Formal Invariant**: A regulatory safety profile is formalized as a declarative tuple:
$$
\mathcal{P} = (\text{id}, \mathcal{S}_{\text{levels}}, \mathcal{A}_{\text{required}}, \mathcal{R}_{\text{rules}})
$$
applied dynamically via compiler configuration while maintaining metamodel invariance $\text{Metamodel}(\mathcal{A}) = \text{Metamodel}(\mathcal{A} \mid \mathcal{P})$.

---

## Subsystem 8: Level 1C Interface Control Documents & Interconnect Contracts

**Scope & Objective**: Defines the automated synthesis of Level 1C Interface Control Documents (ICD 01 and ICD 02), $N^2$ system interface matrices, multi-dimensional bin packing channel allocation (NP-2), the canonical 10-column Master Signal Flow Dictionary, port definition rosters, connection binding rosters, dangling port gates, schedulability analysis (RMS, EDF), and protocol framing overheads.

**Requirements Range**: `REQ-0145` through `REQ-0158` (14 Requirements)

### REQ-0145: Automated $N^2$ System Interface Matrix Construction & Topology Indexing
- **Normative Statement**: The ICD engine shall automatically construct the $N^2$ System Interface Matrix representing all component interactions across the architectural model, placing internal component identifiers on diagonal cells and cataloging directed interface contracts in off-diagonal cells.
- **Formal Invariant**: The $N^2$ matrix $\mathbf{M} \in \mathcal{P}(\text{Interfaces})^{N \times N}$ over $N$ architectural subsystems satisfies:
$$
M_{ij} = \{ c \in \text{Connections} \mid \text{source}(c) \in S_i \wedge \text{target}(c) \in S_j \}, \quad i \ne j
$$
with diagonal entries defining component containment boundaries:
$$
M_{ii} = S_i
$$
Complexity bound: Matrix construction exhibits deterministic polynomial time complexity $O(N^2 + |C|)$ where $N$ is the subsystem count and $|C|$ is the connection count.

---

### REQ-0146: $N^2$ Interface Symmetry & Directed Flow Antisymmetry Verification
- **Normative Statement**: The ICD engine shall verify topological consistency across the $N^2$ System Interface Matrix, ensuring bidirectional interconnect channels exhibit topological symmetry and directed item flows exhibit anti-symmetry between endpoints unless explicitly declared as opposing conjugate flows.
- **Formal Invariant**: Let $M_{ij}$ denote the interface set between subsystems $S_i$ and $S_j$. Bidirectional interconnects $c \in \text{Interconnects}$ and directed item flows $f \in \text{ItemFlows}$ satisfy:
$$
\begin{aligned}
c \in M_{ij} &\iff c \in M_{ji} \\
f \in M_{ij} &\implies f \notin M_{ji} \quad \wedge \quad (\exists f' \in M_{ji} \implies \text{IsConjugateFlow}(f, f'))
\end{aligned}
$$
Emitting diagnostic E0220 if an undeclared flow asymmetry or inconsistent interconnect endpoint is detected.
Complexity bound: Verification executes in deterministic polynomial time $O(N^2)$ over the $N \times N$ matrix.

---

### REQ-0147: Structural Allocation, Interconnect Clustering & Logical Channel Multiplexing (NP-2)
- **Normative Statement**: The ICD allocation engine shall map logical signal flows into shared physical/logical interconnect channels and partition high-density subsystem interactions to minimize inter-subsystem matrix bandwidth. Because multi-resource channel allocation is equivalent to Multi-Dimensional Vector Bin Packing and Generalized Assignment (strongly NP-hard), the compiler shall implement a dual-mode allocation strategy: a deterministic polynomial-time First-Fit Decreasing (FFD) approximation heuristic for standard compilation, and a 0-1 Integer Linear Program (ILP) formulation with bounded branch-and-bound exploration cutoff $\kappa_{\text{alloc}}$ for constrained optimization.
- **Formal Invariant**: Let $\mathcal{A}$ be the set of signal flows to allocate, each with $K$-dimensional resource demand vector $\mathbf{w}_i = (w_{i1}, \dots, w_{iK})$ (representing bandwidth, message rate, priority weight), and let $\mathcal{C}$ be the set of available logical channels with capacity vector $\mathbf{C}_j = (C_{j1}, \dots, C_{jK})$.
The polynomial-time First-Fit Decreasing (FFD) heuristic sorts flows by decreasing generalized volume $V(i) = \sum_{k=1}^K \frac{w_{ik}}{C_{\text{norm},k}}$ and assigns each flow to the first channel satisfying all capacity dimensions, guaranteeing the asymptotic approximation bound:
$$
\text{Cost}(\text{FFD}) \le \frac{11}{9}\text{OPT} + \frac{6}{9}
$$
Under constrained scheduling regimes, the allocation engine formulates and solves the 0-1 Integer Linear Program (ILP):
$$
\begin{aligned}
\min \quad & \sum_{j \in \mathcal{C}} y_j \\
\text{subject to} \quad & \sum_{i \in \mathcal{A}} w_{ik} x_{ij} \le C_{jk} y_j, \quad \forall j \in \mathcal{C}, \, \forall k \in \{1, \dots, K\} \\
& \sum_{j \in \mathcal{C}} x_{ij} = 1, \quad \forall i \in \mathcal{A} \\
& x_{ij} \in \{0, 1\}, \quad \forall i \in \mathcal{A}, \, \forall j \in \mathcal{C} \\
& y_j \in \{0, 1\}, \quad \forall j \in \mathcal{C}
\end{aligned}
$$
where $x_{ij} = 1$ denotes allocation of flow $i$ to channel $j$, and $y_j = 1$ indicates channel $j$ is active. Branch-and-bound exploration is strictly bounded by step cutoff $\kappa_{\text{alloc}}$; upon exceeding $\kappa_{\text{alloc}}$, the solver falls back to the deterministic FFD solution and emits diagnostic W0445.
Complexity Class: Strongly NP-hard; Tractable FFD heuristic terminates in $O(N \log N + K \cdot N \cdot |\mathcal{C}|)$.

---

### REQ-0148: Master Signal Flow Dictionary: Canonical 10-Column Structural Specification
- **Normative Statement**: The ICD engine shall synthesize the canonical Master Signal Flow Dictionary adhering strictly to a standardized 10-column structural specification format, extracting every declared signal, flow property, and item flow from the AST model without ungrounded placeholder tokens or synthetic fallbacks.
- **Formal Invariant**: Every record in the Master Signal Flow Dictionary is formalized as an authoritative 10-tuple:
$$
\sigma = \langle \text{ID}, S_{\text{src}}, P_{\text{src}}, S_{\text{tgt}}, P_{\text{tgt}}, \tau_{\text{payload}}, u_{\text{unit}}, f_{\text{rate}}, v_{\text{failsafe}}, \pi_{\text{protocol}} \rangle
$$
where:
- $\text{ID} \in \text{String}$ is the unique deterministic signal identifier.
- $S_{\text{src}} \in \text{Subsystems}$ is the source subsystem classifier.
- $P_{\text{src}} \in \text{Ports}$ is the originating port definition on $S_{\text{src}}$.
- $S_{\text{tgt}} \in \text{Subsystems}$ is the target subsystem classifier.
- $P_{\text{tgt}} \in \text{Ports}$ is the destination port definition on $S_{\text{tgt}}$.
- $\tau_{\text{payload}} \in \text{Types}$ is the fully qualified AST payload data type.
- $u_{\text{unit}} \in \mathbb{Q}^7$ is the rational dimensional vector per ISO/IEC 80000.
- $f_{\text{rate}} \in \mathbb{R}^+$ is the transmission frequency rate ($f_{\text{rate}} > 0$).
- $v_{\text{failsafe}} \in \text{Domain}(\tau_{\text{payload}})$ is the validated default state upon communication loss.
- $\pi_{\text{protocol}} \in \text{Protocols}$ is the transport framing and serialization specification.
Field Completeness: $\forall \sigma \in \text{Dictionary}, \, \text{FieldCount}(\sigma) = 10 \wedge \forall k \in \{1,\dots,10\}, \sigma[k] \ne \bot$.
Complexity bound: Dictionary extraction runs in $O(|F|)$ where $|F|$ is the total number of flow connections in the AST.

---

### REQ-0149: Port Definition Rosters & Hierarchical Port Type Binding
- **Normative Statement**: The ICD engine shall generate exhaustive Port Definition Rosters cataloging every declared port definition and usage across component hierarchies, documenting directionality, structural types, protocol specifications, conjugation status, and nested port features.
- **Formal Invariant**: The port definition roster indexes all port instances:
$$
\text{Roster}_{\text{ports}} = \{ \langle p, \text{owner}(p), \text{dir}(p), \text{type}(p), \text{protocol}(p), \text{is\_conjugated}(p) \rangle \mid p \in \text{Ports} \}
$$
where $\text{dir}(p) \in \{\text{In}, \text{Out}, \text{InOut}\}$, and conjugation preserves type isomorphism while inverting flow directionality:
$$
\text{is\_conjugated}(p) = \text{true} \implies \text{dir}(p) = {\sim}\text{dir}(\text{base\_def}(p))
$$
Hierarchy Invariant: For any nested port $p_{\text{child}} \in \text{features}(p_{\text{parent}})$, the ownership relation satisfies:
$$
\text{owner}(p_{\text{child}}) = p_{\text{parent}} \wedge \text{owner}(p_{\text{parent}}) \in \text{Components}
$$
Complexity bound: Roster synthesis executes in deterministic linear time $O(|P|)$ with respect to total port declarations $|P|$.

---

### REQ-0150: Connection Binding Rosters, Serialization Layout & Bitfield Packing
- **Normative Statement**: The ICD engine shall synthesize Connection Binding Rosters mapping each logical signal connection to logical port endpoints, transport channels, and multiplexed stream identifiers. For every serialized payload, the engine shall compute exact binary wire layouts, enforcing deterministic byte alignment, explicit padding insertion, endianness preservation (Big-Endian vs Little-Endian), and bitfield packing rules without compiler-dependent layout ambiguities.
- **Formal Invariant**: Let $C \in \text{Connections}$ connect source port $p_s$ to target port $p_t$. The connection binding is formalized as:
$$
\text{Binding}(C) = \langle C, \text{ChannelID}, p_s, p_t, \text{DataRate}, \Pi_{\text{protocol}}, \Lambda_{\text{layout}} \rangle
$$
where $\Lambda_{\text{layout}}$ defines the binary wire serialization layout over constituent payload fields $\langle \phi_1, \dots, \phi_m \rangle$:
$$
\begin{aligned}
\text{Offset}(\phi_1) &= 0 \\
\text{Offset}(\phi_{i+1}) &= \text{Offset}(\phi_i) + \text{BitWidth}(\phi_i) + \text{PadBits}(\phi_i, \text{Align}(\phi_{i+1})) \\
\text{PadBits}(\phi_i, A) &= \left( A - ((\text{Offset}(\phi_i) + \text{BitWidth}(\phi_i)) \pmod A) \right) \pmod A
\end{aligned}
$$
Endianness preservation guarantees byte-order transformation $\mathcal{E} : \text{NativeBytes} \to \text{WireBytes}$ satisfying declared protocol endianness ($\text{Endianness} \in \{\text{BigEndian}, \text{LittleEndian}\}$). Bitfield packing groups contiguous sub-word bits within boundaries $\lfloor \text{BitOffset} / W \rfloor = \lfloor (\text{BitOffset} + \text{BitWidth} - 1) / W \rfloor$ for storage word width $W \in \{8, 16, 32, 64\}$.
Complexity bound: Serialization layout synthesis executes in deterministic linear time $O(\sum_{C} |\text{Fields}(C)|)$.

---

### REQ-0151: Dangling Port Gate & Unconnected Interface Compile-Time Failure
- **Normative Statement**: The ICD engine shall enforce a strict compile-time dangling port gate requiring every non-optional component boundary port to either connect to a valid destination endpoint or carry an explicit termination marker (`IsTerminated(p)`), failing closed with diagnostic E0220 if an unconnected boundary port is identified.
- **Formal Invariant**: For all mandatory ports $\mathcal{P}_{\text{mandatory}} \subseteq \text{Ports}$:
$$
\forall p \in \mathcal{P}_{\text{mandatory}}, \quad (\exists c \in \text{Connections}, \, p \in \text{endpoints}(c)) \vee \text{IsTerminated}(p) \equiv \text{true}
$$
Compiler gate enforcement:
$$
\exists p \in \mathcal{P}_{\text{mandatory}} \text{ s.t. } \text{Unconnected}(p) \wedge \neg\text{IsTerminated}(p) \implies \text{EmitDiagnostic}(\text{E0220}, p) \wedge \text{HaltPipeline}()
$$
Complexity bound: Evaluated in deterministic linear time $O(|P| + |C|)$ where $|P|$ is port count and $|C|$ is connection count.

---

### REQ-0152: SI Unit Verification in $\mathbb{Q}^7$ Rational Metric Space across Signal Flows
- **Normative Statement**: The ICD engine shall verify that engineering units assigned to signals in the Master Signal Flow Dictionary match the dimensional vectors of connected ports in the $\mathbb{Q}^7$ rational metric space, preventing dimensional inconsistency across inter-component flows and failing closed with diagnostic E0301 upon any dimensional mismatch.
- **Formal Invariant**: Let $u = [d_L, d_M, d_T, d_I, d_\Theta, d_N, d_J]^T \in \mathbb{Q}^7$ denote the dimensional exponent vector over the 7 SI base dimensions. For any signal flow $\sigma$ connecting source port $P_{\text{src}}$ to target port $P_{\text{tgt}}$:
$$
\text{dim}(u_\sigma) = \text{dim}(P_{\text{src}}.\text{unit}) = \text{dim}(P_{\text{tgt}}.\text{unit}) \in \mathbb{Q}^7
$$
Dimensional mismatch detection:
$$
\text{dim}(P_{\text{src}}.\text{unit}) \ne \text{dim}(P_{\text{tgt}}.\text{unit}) \implies \text{EmitDiagnostic}(\text{E0301}, \sigma) \wedge \text{HaltPipeline}()
$$
Complexity bound: Dimensional verification executes in deterministic linear time $O(|F|)$ where $|F|$ is total signal flow count, evaluating vector equality in $O(1)$ per flow.

---

### REQ-0153: Failsafe Default Value Domain Validity & Boundary Assertion Gate
- **Normative Statement**: The ICD engine shall enforce that the declared failsafe default value for every signal lies strictly within the valid type domain of the destination port data type and satisfies all downstream safety invariants, preventing uninitialized states, division by zero, or illegal mode triggers upon telemetry loss.
- **Formal Invariant**: For failsafe default value $v_{\text{failsafe}}$ of signal $\sigma$ with target type $\tau$ and downstream safety invariant predicate $\mathcal{I}_{\text{safe}}$:
$$
v_{\text{failsafe}} \in \text{Domain}(\tau) \quad \wedge \quad \mathcal{I}_{\text{safe}}(v_{\text{failsafe}}) \equiv \text{true}
$$
Safety invariant boundary enforcement:
$$
(v_{\text{failsafe}} \notin \text{Domain}(\tau)) \vee (\neg\mathcal{I}_{\text{safe}}(v_{\text{failsafe}})) \implies \text{EmitDiagnostic}(\text{E0440}, \sigma) \wedge \text{HaltPipeline}()
$$
Complexity bound: Domain membership and predicate checking executes in deterministic linear time $O(|F|)$ over total signal count $|F|$.

---

### REQ-0154: Logical Channel Bandwidth Utilization & Capacity Budgeting
- **Normative Statement**: The ICD engine shall compute aggregate bandwidth utilization for multiplexed communication channels and logical pathways, asserting that aggregate traffic under maximum periodic and aperiodic transmission bursts does not exceed allocated channel capacity limits.
- **Formal Invariant**: For communication channel $B$ carrying multiplexed signals $\sigma_1, \dots, \sigma_k$ with payload bit sizes $L_i$, protocol framing overhead bits $H_i$, and transmission rates $f_i$:
$$
\text{Bandwidth}(B) = \sum_{i=1}^k (L_i + H_i) \cdot f_i \le C_{\text{max}}(B) \cdot \rho_{\text{limit}}
$$
where $C_{\text{max}}(B)$ is the maximum channel throughput and $\rho_{\text{limit}} \in (0, 1]$ is the safety capacity factor (default $\rho_{\text{limit}} = 0.70$).
Capacity overflow detection:
$$
\text{Bandwidth}(B) > C_{\text{max}}(B) \cdot \rho_{\text{limit}} \implies \text{EmitDiagnostic}(\text{E0442}, B)
$$
Complexity bound: Channel bandwidth summation executes in deterministic linear time $O(|B| + |F|)$ where $|B|$ is channel count and $|F|$ is signal flow count.

---

### REQ-0155: Rate Monotonic Scheduling (RMS) Schedulability Bound Verification
- **Normative Statement**: The ICD engine shall perform Rate Monotonic Scheduling analysis for periodic signal transmission tasks over interconnect buses, verifying that total resource utilization does not exceed the Liu & Layland schedulability bound or passing exact response-time analysis.
- **Formal Invariant**: For $n$ periodic transmission tasks $\tau_1, \dots, \tau_n$ with transmission durations $C_i$ and periods $T_i$:
$$
U = \sum_{i=1}^n \frac{C_i}{T_i} \le n \left( 2^{1/n} - 1 \right)
$$
with asymptotic bound $\lim_{n \to \infty} U \le \ln(2) \approx 0.693$.
If $U > n(2^{1/n} - 1)$, the engine executes exact iterative Response Time Analysis (RTA):
$$
R_i^{(k+1)} = C_i + \sum_{j \in \text{hp}(i)} \left\lceil \frac{R_i^{(k)}}{T_j} \right\rceil C_j
$$
terminating when $R_i^{(k+1)} = R_i^{(k)} \le T_i$ (schedulable) or $R_i^{(k+1)} > T_i$ (unschedulable, emitting diagnostic E0443).
Complexity bound: Utilization bound verified in $O(n)$ time; iterative RTA completes in pseudo-polynomial time $O(n \cdot \max(T_i))$.

---

### REQ-0156: Earliest Deadline First (EDF) Dynamic Schedulability Verification
- **Normative Statement**: The ICD engine shall perform Earliest Deadline First dynamic schedulability analysis for transmission tasks, verifying that total resource utilization satisfies the exact schedulability bound ($U \le 1.0$) for implicit deadline tasks, or evaluating the Processor Demand Criterion (PDC) for constrained deadline systems.
- **Formal Invariant**: For periodic transmission tasks with relative deadlines equal to periods ($D_i = T_i$):
$$
U = \sum_{i=1}^n \frac{C_i}{T_i} \le 1.0
$$
For tasks with constrained deadlines ($D_i < T_i$), the engine evaluates the Processor Demand Criterion (PDC) over the synchronous busy period $L^*$:
$$
\forall t \in \mathcal{D}, \quad h(t) = \sum_{i=1}^n \max\left(0, \left\lfloor \frac{t - D_i}{T_i} \right\rfloor + 1\right) C_i \le t
$$
where $\mathcal{D} = \{ k T_i + D_i \le L^* \mid k \in \mathbb{N}, 1 \le i \le n \}$.
Schedulability violation detection:
$$
(\exists t \in \mathcal{D} \text{ s.t. } h(t) > t) \implies \text{EmitDiagnostic}(\text{E0444}, \text{TaskSet})
$$
Complexity bound: Implicit deadline bound checked in $O(n)$ linear time; constrained deadline PDC evaluated in pseudo-polynomial time $O(|\mathcal{D}| \cdot n)$.

---

### REQ-0157: Protocol Framing Overhead Calculation & Header Serialization Penalty
- **Normative Statement**: The ICD engine shall calculate protocol framing overheads including headers, trailers, check sequences, alignment padding, and bit-stuffing penalties to compute exact channel transmission occupancy and framing efficiency across heterogeneous transport profiles.
- **Formal Invariant**: Total frame length $L_{\text{frame}}$ for payload length $L_{\text{payload}}$ under transport protocol profile $\Pi$ satisfies:
$$
L_{\text{frame}} = L_{\text{header}} + L_{\text{payload}} + L_{\text{trailer}} + \Delta_{\text{padding}}(L_{\text{payload}}) + \Delta_{\text{stuffing}}(L_{\text{payload}})
$$
where framing efficiency $\eta_{\text{framing}}$ and channel occupancy duration $\tau_{\text{occupancy}}$ over channel bit rate $R_{\text{bus}}$ are computed via:
$$
\begin{aligned}
\eta_{\text{framing}} &= \frac{L_{\text{payload}}}{L_{\text{frame}}} \\
\tau_{\text{occupancy}} &= \frac{L_{\text{frame}}}{R_{\text{bus}}}
\end{aligned}
$$
Complexity bound: Calculated in deterministic $O(1)$ constant time per frame profile, yielding $O(|F|)$ over the complete flow catalog.

---

### REQ-0158: Worst-Case Execution Time (WCET) Propagation across Interconnect Latency Paths
- **Normative Statement**: The ICD engine shall propagate Worst-Case Execution Times (WCET) and transport latencies along end-to-end signal communication paths, asserting that total propagation latency does not exceed the maximum allowable response deadline for every critical system chain.
- **Formal Invariant**: For an abstract communication path $\pi = \langle v_1, e_1, v_2, \dots, v_k \rangle$ traversing acquisition ($t_{\text{acquire}}$), computational nodes ($t_{\text{compute}}$), interconnect transport ($t_{\text{transport}}$), and actuation ($t_{\text{actuate}}$):
$$
t_{\text{end\_to\_end}}(\pi) = t_{\text{acquire}} + \sum_{i=1}^k t_{\text{compute}}(v_i) + \sum_{j=1}^{k-1} t_{\text{transport}}(e_j) + t_{\text{actuate}} \le T_{\text{deadline}}(\pi)
$$
Latency deadline violation detection:
$$
t_{\text{end\_to\_end}}(\pi) > T_{\text{deadline}}(\pi) \implies \text{EmitDiagnostic}(\text{E0451}, \pi) \wedge \text{HaltPipeline}()
$$
Complexity bound: Critical path latency propagation evaluates in deterministic $O(|V| + |E|)$ linear time over the directed communication DAG.

---

## Subsystem 9: Downstream Specification Projections

**Scope & Objective**: Defines the downstream specification projection engine that projects the sovereign AST Single Source of Truth into Agile specifications (`docs/epics/`, `docs/features/`, `docs/user-stories/`, `docs/use-cases/`), enforcing UUIDv5 frontmatter anchors, bottom-up DAG scheduling, the 3-layer Definition of Done, Mermaid class diagrams with ancestor containment, Gherkin BDD synthesis (Patterns A, B, C), and realization matrices.

**Requirements Range**: `REQ-0159` through `REQ-0174` (16 Requirements)

### REQ-0159: Deterministic RFC 4122 UUIDv5 Document Anchors for Specification Artifacts
- **Normative Statement**: The downstream projection engine shall inject deterministic RFC 4122 UUIDv5 identifier anchors into the YAML frontmatter of every generated specification artifact, seeded bijectively by the canonical fully qualified topological path of the originating AST node and the fixed compiler namespace UUID.
- **Formal Invariant**: The frontmatter identity anchor is computed via RFC 4122 UUIDv5 SHA-1 hashing over the canonical path:
$$
\text{UUID}_{\text{doc}} = \text{UUIDv5}(\text{NAMESPACE\_DEAP}, \text{CanonicalTopologicalPath}(\text{ASTNode}))
$$
guaranteeing persistent, collision-free identity across regenerative compilation cycles:
$$
\text{CanonicalPath}(A_1) = \text{CanonicalPath}(A_2) \iff \text{UUID}_{\text{doc}}(A_1) = \text{UUID}_{\text{doc}}(A_2)
$$
Complexity bound: Evaluated in deterministic linear time $O(L)$ with respect to canonical path byte length $L$.

---

### REQ-0160: Bottom-Up Feature-First Dependency Ordering & DAG Scheduling
- **Normative Statement**: The downstream projection engine shall sort and synthesize specification features in strict topological order according to their underlying AST dependency DAG, scheduling leaf features prior to composite features to eliminate forward reference gaps in downstream validation.
- **Formal Invariant**: For the feature dependency DAG $\mathcal{G} = (\mathcal{F}, \mathcal{E}_{\text{dep}})$:
$$
(f_a, f_b) \in \mathcal{E}_{\text{dep}} \implies \text{Order}(f_a) < \text{Order}(f_b)
$$
Acyclicity verification:
$$
\text{IsAcyclic}(\mathcal{G}) \equiv \text{true} \quad (\text{Cycles emit diagnostic E0203})
$$
Complexity bound: Topological sorting and cycle detection executes in deterministic linear time $O(|V| + |E|)$ via Kahn's algorithm.

---

### REQ-0161: Epics Projection: Structural Decomposition & Subsystem Capability Mapping
- **Normative Statement**: The downstream projection engine shall synthesize high-level Epic specifications by partitioning the model graph along top-level subsystem boundaries and projecting formal Subsystem Capability Allocations mapping every SysML v2 `capability def` block to its owning subsystem.
- **Formal Invariant**: Each Epic $E_k$ represents an exact partition of the AST capability space:
$$
\bigcup_{k=1}^m E_k = \mathcal{M}_{\text{capabilities}}, \quad E_i \cap E_j = \emptyset \quad (\forall i \ne j)
$$
where each capability allocation row maps:
$$
\text{Allocation}(c) = \langle \text{CapabilityName}, \text{SubsystemPackage}, \text{DescriptionObjective} \rangle
$$
Complexity bound: Model partitioning and capability table synthesis executes in deterministic linear time $O(|C| + |S|)$ where $|C|$ is capability count and $|S|$ is subsystem count.

---

### REQ-0162: Epics Projection: System Architecture Diagrams & Streaming Artifact Sink Interface
- **Normative Statement**: The downstream projection engine shall synthesize system-level UML class and component architecture diagrams within Epic specifications, illustrating structural containment and interconnected interfaces, while emitting all generated projection artifacts directly through a streaming artifact sink interface that guarantees strict $O(1)$ streaming memory overhead relative to total emitted documentation size.
- **Formal Invariant**: For every diagram edge $(u, v)$ rendered in the projected architecture:
$$
\exists c \in \text{Connections}(\text{AST}) \cup \text{Containments}(\text{AST}) \quad \text{such that } \text{endpoints}(c) = \{u, v\}
$$
Streaming memory overhead guarantee:
$$
M_{\text{streaming\_sink}} \le O(1) \text{ relative to emitted artifact size } |A|
$$
verifying that generated specification documents are streamed incrementally to downstream writer sinks without buffering unbounded document collections in resident memory.
Complexity bound: Architecture diagram emission executes in deterministic $O(|V| + |E|)$ time with $O(1)$ auxiliary buffer memory.

---

### REQ-0163: Epics Projection: High-Level Macro Statechart Diagrams & Operational Scenarios
- **Normative Statement**: The downstream projection engine shall synthesize high-level macro statechart diagrams within Epic specifications, projecting top-level operational states, guard conditions, and mode transitions from AST state machines while preserving behavioral reachability relations and bisimulation equivalence.
- **Formal Invariant**: The projected macro state machine $M_{\text{epic}} = (S, S_0, \Sigma, \delta)$ preserves the behavioral reachability relation of the underlying AST state definition:
$$
\forall s, s' \in S, \quad s \xrightarrow{\sigma} s' \iff \exists \tau \in \text{Transitions}(\text{AST}) \text{ realizing } (s, \sigma, s')
$$
Behavioral equivalence guarantees weak bisimulation between AST state dynamics and projected macro state transitions:
$$
M_{\text{AST}} \sim_{\text{bisim}} M_{\text{epic}}
$$
Complexity bound: State abstraction and macro diagram generation executes in deterministic linear time $O(|S_{\text{states}}| + |T_{\text{transitions}}|)$.

---

### REQ-0164: Feature Projection: 3-Layer Definition of Done Mandatory Structural Enforcement
- **Normative Statement**: The downstream projection engine shall synthesize Feature specifications strictly enforcing the 3-Layer Definition of Done: Layer 1 (Domain State & Data Model), Layer 2 (Logic & State Management), and Layer 3 (Presentation & Machine Interface Binding), rejecting any specification containing unbound placeholders or unmapped layers.
- **Formal Invariant**: Every generated Feature specification must provide concrete content for:
$$
\text{Feature}(F) = \text{Layer}_1(F) \cup \text{Layer}_2(F) \cup \text{Layer}_3(F)
$$
where:
- $\text{Layer}_1(F)$ defines domain attributes, structural types, measurement units, and range constraints.
- $\text{Layer}_2(F)$ defines state machines, operations, action signatures, and transition guards.
- $\text{Layer}_3(F)$ defines visual layout hierarchies, machine-to-machine APIs, or hardware register maps.
Completeness gate:
$$
\exists \ell \in \{1, 2, 3\} \text{ s.t. } (\text{IsEmpty}(\text{Layer}_\ell(F)) \vee \text{ContainsPlaceholder}(\text{Layer}_\ell(F))) \implies \text{EmitDiagnostic}(\text{E0230}, F) \wedge \text{RejectSpec}()
$$
Complexity bound: Structural completeness verification executes in deterministic linear time $O(|\text{ASTNodes}(F)|)$.

---

### REQ-0165: Feature Layer 1: Domain State, Data Models & Primitive Structural Typing
- **Normative Statement**: Feature specifications shall document Layer 1 by detailing domain attributes, structural types, measurement units, default values, and operational range constraints derived exhaustively from AST part definitions and item definitions.
- **Formal Invariant**: For each attribute $a \in \text{Attributes}(F)$, Layer 1 enforces complete typing and constraint specification:
$$
a = \langle \text{Name}, \tau_{\text{type}}, u_{\text{unit}}, [\min, \max], v_{\text{default}}, \text{access} \rangle
$$
where:
- $\tau_{\text{type}}$ maps to standard UML primitives (`String`, `Integer`, `Real`, `Boolean`) or defined classifiers.
- $u_{\text{unit}} \in \mathbb{Q}^7$ is the verified dimensional vector.
- $[\min, \max]$ defines explicit numerical domain bounds.
- $v_{\text{default}} \in \text{Domain}(\tau_{\text{type}})$ is the verified default value.
- $\text{access} \in \{\text{ReadOnly}, \text{Configurable}\}$.
Completeness: Zero untyped attributes permitted ($\forall a \in \text{Attributes}(F), \, \tau_{\text{type}}(a) \ne \bot$).
Complexity bound: Attribute extraction runs in deterministic linear time $O(|\text{Attributes}(F)|)$.

---

### REQ-0166: Feature Layer 2: Logic, Dynamic Operations & Hierarchical State Machines
- **Normative Statement**: Feature specifications shall document Layer 2 by formalizing operational statecharts, transition guards, event triggers, and algorithmic logic from AST action and behavior definitions, ensuring 100% typed operation parameter signatures with explicit directions.
- **Formal Invariant**: Every state transition $t \in \text{Transitions}(F)$ maps to a formal transition quadruple:
$$
t = \langle s_{\text{source}}, e_{\text{trigger}}, g_{\text{guard}}, s_{\text{target}} \rangle
$$
and every operation $op \in \text{Operations}(F)$ defines a fully-typed signature:
$$
op = \langle \text{Name}, \langle (p_1, \text{dir}_1, \tau_1), \dots, (p_k, \text{dir}_k, \tau_k) \rangle, \tau_{\text{return}} \rangle
$$
where $\text{dir}_i \in \{\text{In}, \text{Out}, \text{InOut}\}$ and $\tau_i \in \text{Types}$, conforming to SysML v2 `action def` parameters for downstream embedded code synthesis.
Complexity bound: Operation signature and statechart lowering executes in deterministic linear time $O(|\text{Operations}| + |\text{Transitions}|)$.

---

### REQ-0167: Feature Layer 3: Presentation, Visual Layout & Machine Interface Binding
- **Normative Statement**: Feature specifications shall document Layer 3 by providing concrete interface bindings across visual layout hierarchies, machine-to-machine payload schemas, or hardware register interface endpoints without unbound placeholders, strictly conforming to the Logical User & Machine Interface (LUMI) specification.
- **Formal Invariant**: Every Layer 3 binding specification $\beta \in \text{Bindings}(F)$ maps to a valid canonical interface component category:
$$
\beta \in \{\text{VisualUI}, \text{MachineAPI}, \text{HardwareRegister}\}
$$
satisfying the multi-channel schema locator contract:
$$
\text{Binding}(\beta) = \langle \text{Channel}, \text{Category}, \text{TargetHandler}, \text{TargetContainer}, \text{DataSourceBinding} \rangle
$$
where `DataSourceBinding` is an authoritative schema locator beginning with `/`, `schema:`, or `provider:`, or explicitly set to `Unbound (Deferred to Implementation Profile)`. Fallback strings such as raw `N/A` are strictly prohibited.
Complexity bound: Layer 3 binding validation executes in deterministic linear time $O(|\text{Bindings}(F)|)$.

---

### REQ-0168: Feature Class Diagram Emission with Ancestor Containment & No Isolated Classes
- **Normative Statement**: The downstream projection engine shall synthesize Mermaid class diagrams for every Feature, illustrating complete ancestor containment hierarchies from the root container down to the target node and verifying that zero disconnected or isolated classes are emitted.
- **Formal Invariant**: For emitted class diagram graph $\mathcal{G} = (\mathcal{V}, \mathcal{E})$ representing feature $F$:
$$
\forall v \in \mathcal{V}, \quad \text{degree}(v) \ge 1 \quad \wedge \quad \text{IsConnected}(\mathcal{G}) \equiv \text{true}
$$
Ancestor containment path completeness: Let $\pi = \langle c_0, c_1, \dots, c_k \rangle$ be the containment path from root container $c_0$ to target entity $c_k$:
$$
\forall i \in \{0, \dots, k-1\}, \quad (c_i, c_{i+1}) \in \mathcal{E} \quad \text{with relationship } c_i *-- c_{i+1}
$$
Isolated class violation detection:
$$
\exists v \in \mathcal{V} \text{ s.t. } \text{degree}(v) = 0 \implies \text{EmitDiagnostic}(\text{E0231}, v) \wedge \text{HaltPipeline}()
$$
Complexity bound: Graph connectivity and degree verification executes in deterministic linear time $O(|V| + |E|)$.

---

### REQ-0169: User Stories Projection: Deterministic Gherkin BDD Synthesis from AST Constraints
- **Normative Statement**: The downstream projection engine shall synthesize User Story specifications with deterministic Gherkin Given-When-Then scenarios derived directly from AST constraint blocks, pre/post-conditions, and invariant assertions, eliminating manual narrative drift.
- **Formal Invariant**: A synthesized BDD scenario formalizes the constraint contract:
$$
\text{Scenario} = \langle \text{Given}(P_{\text{pre}}), \text{When}(A_{\text{action}}), \text{Then}(Q_{\text{post}}) \rangle
$$
where $P_{\text{pre}} \wedge A_{\text{action}} \implies Q_{\text{post}}$ is a valid logical entailment over the model state vector:
$$
\forall \sigma \in \text{States}, \quad P_{\text{pre}}(\sigma) \wedge \text{Exec}(A_{\text{action}}, \sigma, \sigma') \implies Q_{\text{post}}(\sigma')
$$
Traceability: Every generated scenario links bijectively to an owning Feature and AST constraint node ID.
Complexity bound: Gherkin scenario generation runs in deterministic linear time $O(|C_{\text{constraints}}|)$.

---

### REQ-0170: User Story BDD Patterns: Pattern A, Pattern B, and Pattern C Synthesis
- **Normative Statement**: The downstream projection engine shall classify and structure synthesized BDD scenarios into three canonical patterns: Pattern A for synchronous display and embedded protocol messages, Pattern B for real-time discrete event control and statechart transitions, and Pattern C for decoupled operator consoles and asynchronous APIs.
- **Formal Invariant**: Every synthesized scenario $\Sigma$ is partitioned into exactly one canonical 3-layer semantic BDD template:
$$
\Sigma \in \{\text{Pattern}_A, \text{Pattern}_B, \text{Pattern}_C\}
$$
where:
- $\text{Pattern}_A$ (Synchronous Embedded Protocol / Display):
  `Given [Domain Input Parameter Buffer State], When [Binary Command Message Received], Then [Widget State & Display Kernel Render Updated]`
- $\text{Pattern}_B$ (Real-Time Discrete Control / Safety Statechart):
  `Given [Domain State Vector / Discrete Event], When [Safety Statechart FSM Transition Triggered], Then [Actuator Command / Output Signal Generated]`
- $\text{Pattern}_C$ (Decoupled Operator Console / Asynchronous API):
  `Given [Console Domain Model State], When [Operator Action Initiated], Then [ViewModel State & GUI Component Binding Updated]`
Negative testing mandate: For every asserted constraint, at least one negative boundary or invalid trigger scenario is synthesized.
Complexity bound: Pattern classification and template synthesis executes in deterministic $O(1)$ constant time per scenario.

---

### REQ-0171: User Stories Projection: Boundary Value Analysis (BVA) Scenario Synthesis
- **Normative Statement**: The downstream projection engine shall synthesize Boundary Value Analysis (BVA) test scenarios for all bounded parameters in the model, generating nominal, lower boundary, upper boundary, and off-nominal test evaluation points to verify robust edge-case handling.
- **Formal Invariant**: For any attribute $x$ bounded by numerical domain interval $[L, U]$ with precision $\epsilon$:
$$
\text{BVAPoints}([L, U]) = \{ L - \epsilon, \, L, \, L + \epsilon, \, v_{\text{nom}}, \, U - \epsilon, \, U, \, U + \epsilon \}
$$
Equivalence partitioning validation enforces:
$$
\begin{aligned}
\forall v \in \{ L, L + \epsilon, v_{\text{nom}}, U - \epsilon, U \}, \quad & \text{Valid}(v) \equiv \text{true} \implies \text{AssertSuccess}() \\
\forall v \in \{ L - \epsilon, U + \epsilon \}, \quad & \text{Valid}(v) \equiv \text{false} \implies \text{AssertRejection}()
\end{aligned}
$$
Complexity bound: Evaluated in deterministic $O(1)$ constant time per bounded parameter, synthesizing exactly 7 canonical test vectors per interval.

---

### REQ-0172: Use Cases Projection: Operational Flows, Primary Path & Step Traversal
- **Normative Statement**: The downstream projection engine shall synthesize Use Case specifications modeling end-to-end operational workflows with participating actors, preconditions, postconditions, and sequential step traversals derived directly from AST interaction and activity models.
- **Formal Invariant**: A projected Use Case $U$ formalizes an operational sequence:
$$
U = \langle \text{Actors}, \text{Preconditions}, \langle s_1, s_2, \dots, s_k \rangle, \text{Postconditions} \rangle
$$
where each sequential step $s_i$ corresponds to an AST action invocation or inter-actor message transfer:
$$
s_i = \langle i, \text{Actor}_{\text{initiator}}, \text{ActionSignature}, \text{TargetEntity}, \text{StateDelta} \rangle
$$
satisfying monotonic step ordering:
$$
\forall i \in \{1, \dots, k-1\}, \quad \text{StepIndex}(s_{i+1}) = \text{StepIndex}(s_i) + 1
$$
Complexity bound: Operational flow synthesis executes in deterministic linear time $O(|S_{\text{steps}}|)$ with respect to total action steps.

---

### REQ-0173: Use Cases Projection: Alternate Flows & Exception Handler Branching
- **Normative Statement**: Every generated Use Case shall specify Alternate Flows and Exception Flows branching from specific primary flow step indices to handle operational contingencies, communication losses, and observation interface anomalies, guaranteeing that all exception branches terminate in verified failsafe states.
- **Formal Invariant**: An alternate or exception branch $B$ branching from primary step index $k$ satisfies:
$$
B = \langle k, \text{BranchCondition}, \langle b_1, \dots, b_m \rangle, s_{\text{terminal}} \rangle
$$
where exception branches satisfy the failsafe termination invariant:
$$
s_{\text{terminal}} \in S_{\text{failsafe}} \subseteq S_{\text{states}}
$$
Branch point validity:
$$
1 \le k \le \text{Length}(\text{PrimaryFlow}) \quad (\text{Invalid branch points emit diagnostic E0232})
$$
Complexity bound: Branch synthesis and validity checking executes in deterministic linear time $O(|B_{\text{branches}}|)$.

---

### REQ-0174: Bidirectional Specification Realization Matrix Synthesis & Markdown Tasklists
- **Normative Statement**: The projection engine shall synthesize bidirectional realization matrices and structured Markdown tasklists linking Epics to Features, Features to User Stories, and User Stories to Use Cases.
- **Formal Invariant**: The realization mapping is formalized as an incidence matrix:
$$
\mathbf{R} \in \{0, 1\}^{|\text{Specs}| \times |\text{ASTNodes}|}, \quad R_{ij} = 1 \iff \text{Spec}_i \text{ realizes } \text{Node}_j
$$

---

## Subsystem 10: Multi-Target Code Generation, Simulation & Transport Bindings

**Scope & Objective**: Specifies the high-performance multi-target code generation engine, defining the LUMI Intermediate Representation (LUMI IR) with SSA basic blocks, Kempe graph coloring register allocation and instruction scheduling (NP-7), streaming artifact sinks (`ArtifactSink`), manifest-driven persistence (`CodegenManifest`), fixed-step numerical solvers (Euler, RK4), linear state-space solvers, ROS2 node/topic emitters, OMG DDS IDL/CDR serializers, MISRA C99 runtimes, freestanding C++20, and formal proof obligations.

**Requirements Range**: `REQ-0175` through `REQ-0189` (15 Requirements)

### REQ-0175: LUMI Intermediate Representation (LUMI IR): SSA Basic Blocks & Control Flow Graph
- **Normative Statement**: The code generation engine shall lower AST behaviors, statecharts, and constraints into a strongly-typed Static Single Assignment intermediate representation structured as a directed control flow graph of basic blocks.
- **Formal Invariant**: A LUMI IR function is represented as a Control Flow Graph $\mathcal{G} = (\mathcal{B}, \mathcal{E}_{\text{cfg}})$ where each basic block $B \in \mathcal{B}$ satisfies the SSA invariant:
$$
\forall v \in \text{SSAVariables}(\mathcal{G}), \quad |\text{Def}(v)| = 1
$$

---

### REQ-0176: LUMI IR Memory Semantics: Typed Allocations, Immutability & Value Semantics
- **Normative Statement**: The LUMI IR memory model shall enforce strict value semantics, typed slot allocations, immutable bindings, and explicit side-effect modeling to enable safe target lowering.
- **Formal Invariant**: Memory operations in LUMI IR obey single-ownership value semantics:
$$
\text{Aliases}(r) = \emptyset \quad (\forall r \in \text{ValueRegisters})
$$
guaranteeing race-free parallel emission and verification.

---

### REQ-0177: Streaming Artifact Sink Interface & Bounded Memory IO Emission
- **Normative Statement**: The code emission engine shall stream synthesized artifacts directly through abstract writer sinks to eliminate batch-collected in-memory buffering spikes.
- **Formal Invariant**: The streaming emission pipeline satisfies a strict constant memory overhead upper bound:
$$
M_{\text{streaming}} \le O(1) \text{ relative to emitted artifact size } |A|
$$

---

### REQ-0178: Manifest-Driven File Persistence (`CodegenManifest`) with XXH3 Content Fingerprinting
- **Normative Statement**: The code emission engine shall track and persist artifacts through a content-addressed manifest using XXH3 hashing, skipping disk writes for unchanged artifacts to guarantee deterministic, idempotent builds.
- **Formal Invariant**: For an artifact at path $p$ with content bytes $B$:
$$
\text{WriteSkipped}(p) \iff \text{XXH3}(B) = \text{ManifestHash}(p)
$$

---

### REQ-0179: Continuous-Time Numerical Solvers: Discrete Fixed-Step Euler Integration
- **Normative Statement**: The simulation engine shall synthesize discrete fixed-step Forward Euler numerical integration blocks for continuous-time dynamical system models.
- **Formal Invariant**: For continuous state derivative $\dot{\mathbf{x}} = f(\mathbf{x}, \mathbf{u})$ and fixed timestep $\Delta t$:
$$
\mathbf{x}_{k+1} = \mathbf{x}_k + \Delta t \cdot f(\mathbf{x}_k, \mathbf{u}_k)
$$
with truncation error $O(\Delta t)$.

---

### REQ-0180: Continuous-Time Numerical Solvers: 4th-Order Runge-Kutta (RK4) Integration Engine
- **Normative Statement**: The simulation engine shall synthesize 4th-Order Runge-Kutta integration solvers for high-precision simulation of non-linear continuous-time dynamics.
- **Formal Invariant**: For dynamical system $\dot{\mathbf{x}} = f(t, \mathbf{x})$ and step size $h$:
$$
\begin{aligned}
\mathbf{k}_1 &= f(t_n, \mathbf{x}_n) \\
\mathbf{k}_2 &= f\left(t_n + \frac{h}{2}, \mathbf{x}_n + \frac{h}{2}\mathbf{k}_1\right) \\
\mathbf{k}_3 &= f\left(t_n + \frac{h}{2}, \mathbf{x}_n + \frac{h}{2}\mathbf{k}_2\right) \\
\mathbf{k}_4 &= f(t_n + h, \mathbf{x}_n + h\mathbf{k}_3) \\
\mathbf{x}_{n+1} &= \mathbf{x}_n + \frac{h}{6}(\mathbf{k}_1 + 2\mathbf{k}_2 + 2\mathbf{k}_3 + \mathbf{k}_4)
\end{aligned}
$$
exhibiting local truncation error $O(h^5)$ and global error $O(h^4)$.

---

### REQ-0181: Linear State-Space Matrix Evaluation ($\dot{x} = Ax + Bu, y = Cx + Du$)
- **Normative Statement**: The simulation engine shall evaluate continuous and discrete linear state-space representations derived from structural and behavioral AST parameters.
- **Formal Invariant**: Continuous state-space evaluation obeys:
$$
\begin{aligned}
\dot{\mathbf{x}}(t) &= \mathbf{A}\mathbf{x}(t) + \mathbf{B}\mathbf{u}(t) \\
\mathbf{y}(t) &= \mathbf{C}\mathbf{x}(t) + \mathbf{D}\mathbf{u}(t)
\end{aligned}
$$
where $\mathbf{A} \in \mathbb{R}^{n \times n}$, $\mathbf{B} \in \mathbb{R}^{n \times m}$, $\mathbf{C} \in \mathbb{R}^{p \times n}$, and $\mathbf{D} \in \mathbb{R}^{p \times m}$.

---

### REQ-0182: ROS2 Node Architecture Emission: Publishers, Subscribers & QoS Profiles
- **Normative Statement**: The code generation engine shall synthesize idiomatic ROS2 C++ nodes from component specifications, generating publishers, subscriptions, service servers, and Quality of Service profiles matching interface timing.
- **Formal Invariant**: Each emitted ROS2 endpoint maps directly to an AST port definition:
$$
\text{ROS2Endpoint}(P) = \langle \text{Topic}(P), \text{MsgType}(P), \text{QoS}(\text{Reliability}, \text{Durability}, \text{HistoryDepth}) \rangle
$$

---

### REQ-0183: OMG DDS IDL Schema Generation & CDR Binary Serialization Codecs
- **Normative Statement**: The code generation engine shall translate AST data structures into standard OMG DDS Interface Definition Language schemas and generate Common Data Representation serialization codecs.
- **Formal Invariant**: Binary CDR wire serialization aligns data elements to natural type boundaries:
$$
\text{Offset}(\text{field}_i) \equiv 0 \pmod{\min(8, \text{sizeof}(\text{type}_i))}
$$

---

### REQ-0184: Freestanding Zero-Allocation C++20 Header/Source Code Emission
- **Normative Statement**: The code generation engine shall emit freestanding, zero-allocation C++20 source and header files for real-time safety critical execution environments without standard library heap dependencies.
- **Formal Invariant**: Generated C++20 translation units satisfy zero-dynamic-allocation guarantees:
$$
\text{HeapCalls}(T) = \emptyset, \quad \forall T \in \text{GeneratedSourceUnits}
$$

---

### REQ-0185: High-Integrity Embedded C99 Source Code Generation with Static Memory Layout
- **Normative Statement**: The code generation engine shall emit high-integrity, MISRA C99-compliant source code with static memory layouts, bounded loop iterations, and explicit fixed-width integer types.
- **Formal Invariant**: All data structures possess static, compile-time provable memory footprints:
$$
\text{sizeof}(\text{ComponentState}) = K \in \mathbb{N}, \quad \text{DynamicAllocationCount} \equiv 0
$$

---

### REQ-0186: Freestanding RTOS Memory-Mapped Register Header Generation
- **Normative Statement**: The code generation engine shall synthesize freestanding memory-mapped I/O register definition headers from interconnect nodes with compile-time base offsets, bitfield structs, and volatile accessors.
- **Formal Invariant**: Every register definition maps to a strongly-typed volatile structure with exact address offsets:
$$
\text{RegAddress}(R) = \text{BaseOffset} + \Delta_{\text{register}}, \quad \text{sizeof}(R) \in \{1, 2, 4, 8\} \text{ bytes}
$$

---

### REQ-0187: Formal Verification Script Emission: Proof Obligation Synthesis (`.m`)
- **Normative Statement**: The code generation engine shall emit formal verification proof obligation scripts targeting verification engines, generating assertion scripts with algebraic parenthesization to guarantee precedence preservation.
- **Formal Invariant**: Every invariant predicate $\psi$ is emitted as an assertion proof obligation:
$$
\text{Emit}(\psi) = \text{AssertObligation}\left(\text{Parenthesize}(\psi)\right)
$$
ensuring syntax tree isomorphism between AST constraints and solver scripts.

---

### REQ-0188: SMT-LIB2 / Z3 First-Order Constraint Encoding & Proof Framework Generation
- **Normative Statement**: The code generation engine shall translate formal AST constraints into standard SMT-LIB2 benchmark scripts targeting first-order satisfiability modulo theories solvers.
- **Formal Invariant**: Safety verification asserts the negation of the invariant $\mathcal{I}_{\text{safe}}$:
$$
\text{UNSAT}(\text{Model} \wedge \neg \mathcal{I}_{\text{safe}}) \iff \text{Valid}(\mathcal{I}_{\text{safe}})
$$
proving universal invariant satisfaction across all reachable states.

---

### REQ-0189: Atomic In-Place File Overwrite & APFS/NTFS Metadata Lock Serialization Prevention
- **Normative Statement**: The file persistence engine shall perform atomic in-place file overwrites when updating changed artifacts, bypassing temporary sibling file creation and rename operations that cause directory metadata lock serialization.
- **Formal Invariant**: File updates preserve existing filesystem inodes and parent directory metadata:
$$
\text{Update}(p, B) = \text{OpenFile}(p, \text{O\_WRONLY} \mid \text{O\_TRUNC}).\text{write}(B)
$$
avoiding simultaneous rename lock contention during parallel emission.

---

## Subsystem 11: Standardized Compiler Diagnostic Error Catalog

**Scope & Objective**: Specifies the standardized compiler diagnostic catalog (`E0100` through `E0599`), rich source-mapped error reporting with exact byte spans, synchronization recovery tokens, error accumulation, unified diagnostic taxonomy across all 5 compiler pipeline stages, bidirectional reverse-sync prose gates, non-destructive markdown reconciliation, and zero-drift model synchronization.

**Requirements Range**: `REQ-0190` through `REQ-0194` (5 Requirements)

### REQ-0190: Rich Source-Mapped Diagnostic Reporting with Byte Spans, Synchronization Tokens & Error Accumulation
- **Normative Statement**: The compiler diagnostic engine shall emit structured source-mapped diagnostic records containing source byte spans, severity tiers, synchronization recovery tokens, and contextual ASCII code snippets for all compilation errors and warnings, accumulating up to a configurable maximum of diagnostic records across parsing and semantic analysis phases rather than terminating on first fault.
- **Formal Invariant**: A diagnostic record $D$ is formally defined as a 6-tuple:
$$
D = \langle c, s, p, [b_{\text{start}}, b_{\text{end}}), \mu, \sigma \rangle
$$
where error code $c \in [100, 599]$, severity tier $s \in \{\text{Fatal}, \text{Error}, \text{Warning}, \text{Info}\}$, $p$ is the source artifact path, $[b_{\text{start}}, b_{\text{end}}) \subset \mathbb{N}$ denotes the half-open byte interval in the source buffer, $\mu$ provides structured remediation guidance, and $\sigma \in \Sigma_{\text{sync}}$ denotes the synchronization token enabling diagnostic recovery. The error accumulation state $\mathcal{D}_k$ at step $k$ evolves monotonically:
$$
\mathcal{D}_{k+1} = \begin{cases}
\mathcal{D}_k \cup \{ D_{k+1} \}, & \text{if } |\mathcal{D}_k| < K_{\text{max\_errors}} \\
\mathcal{D}_k, & \text{otherwise}
\end{cases}
$$
guaranteeing bounded heap allocation with saturation limit $K_{\text{max\_errors}} \ge 100$.

---

### REQ-0191: Standardized Compiler Diagnostic Taxonomy, Source-Mapping & Recovery Architecture
- **Normative Statement**: The compiler diagnostic engine shall partition all compiler diagnostics into a standardized, mutually disjoint architectural taxonomy spanning Ingestion and Lexical errors (`E0100`--`E0199`), Metamodel and Typing errors (`E0200`--`E0299`), Metrology and Flow Conservation errors (`E0300`--`E0399`), Spatio-Temporal and Safety errors (`E0400`--`E0499`), and Backend, Emission and Reverse-Synchronization errors (`E0500`--`E0599`), attaching precise source-mapping spans, severity tiers, and automated diagnostic recovery suggestions across all error families.
- **Formal Invariant**: All compiler diagnostics $e \in \mathcal{E}$ are partitioned into mutually disjoint architectural ranges:
$$
\begin{aligned}
\mathcal{E}_{\text{ingest}} &= \{ e \in \mathcal{E} \mid 100 \le \text{code}(e) \le 199 \} \\
\mathcal{E}_{\text{type}} &= \{ e \in \mathcal{E} \mid 200 \le \text{code}(e) \le 299 \} \\
\mathcal{E}_{\text{metrology}} &= \{ e \in \mathcal{E} \mid 300 \le \text{code}(e) \le 399 \} \\
\mathcal{E}_{\text{dynamics}} &= \{ e \in \mathcal{E} \mid 400 \le \text{code}(e) \le 499 \} \\
\mathcal{E}_{\text{backend}} &= \{ e \in \mathcal{E} \mid 500 \le \text{code}(e) \le 599 \}
\end{aligned}
$$
satisfying partition completeness:
$$
\mathcal{E} = \mathcal{E}_{\text{ingest}} \cup \mathcal{E}_{\text{type}} \cup \mathcal{E}_{\text{metrology}} \cup \mathcal{E}_{\text{dynamics}} \cup \mathcal{E}_{\text{backend}}
$$
and pairwise disjointness:
$$
\forall j, k \in \{ \text{ingest}, \text{type}, \text{metrology}, \text{dynamics}, \text{backend} \}, \quad j \ne k \implies \mathcal{E}_j \cap \mathcal{E}_k = \emptyset
$$
Every diagnostic $e \in \mathcal{E}$ binds an automated recovery suggestion mapping $\mu : \mathcal{E} \to \mathcal{T}_{\text{remediation}}$ providing machine-readable suggested diff replacements.

---

### REQ-0192: Bidirectional Reverse-Sync Prose Gate: Tri-State Reconciliation & Prose Protection
- **Normative Statement**: The reverse synchronization engine shall implement a tri-state reconciliation prose gate classifying entities as exact matches, renames, or unauthorized prose entities to protect schema-derived models from ungrounded modifications while preserving user-authored prose.
- **Formal Invariant**: When reconciling an entity $E_{\text{doc}}$ from a modified markdown document against AST arena $\mathcal{A}$:
$$
\text{Classify}(E_{\text{doc}}, \mathcal{A}) = \begin{cases}
\text{ExactMatch}(n), & \text{if } \exists n \in \mathcal{A} \text{ such that } \text{id}(E_{\text{doc}}) = \text{id}(n) \wedge \text{name}(E_{\text{doc}}) = \text{name}(n) \\
\text{Renamed}(n), & \text{if } \exists n \in \mathcal{A} \text{ such that } \text{id}(E_{\text{doc}}) = \text{id}(n) \wedge \text{name}(E_{\text{doc}}) \ne \text{name}(n) \\
\text{NewProseEntity}, & \text{if } \neg \exists n \in \mathcal{A} \text{ such that } \text{id}(E_{\text{doc}}) = \text{id}(n)
\end{cases}
$$
The reconciliation mutation action $\alpha$ is governed by:
$$
\alpha(c) = \begin{cases}
\text{PreserveExisting}(n), & \text{if } c = \text{ExactMatch}(n) \\
\text{UpdateIdentifier}(n, \text{name}(E_{\text{doc}})), & \text{if } c = \text{Renamed}(n) \\
\text{RejectUnauthorizedEntity}(\text{E0502}), & \text{if } c = \text{NewProseEntity}
\end{cases}
$$
prohibiting ungrounded entity injection into the sovereign AST.

---

### REQ-0193: Non-Destructive Markdown Parser & Memory-Mapped AST Mutation Engine
- **Normative Statement**: The reverse synchronization engine shall parse and reconcile modified Markdown documents non-destructively, updating schema-mapped entities while preserving user-authored prose, notes, formatting, and unmapped commentary blocks byte-for-byte intact.
- **Formal Invariant**: Let $D_{\text{orig}}$ denote the ordered sequence of lexical blocks $\{ B_1, B_2, \dots, B_m \}$ partitioned into schema-mapped blocks $\mathcal{B}_{\text{schema}}$ and unmapped prose blocks $\mathcal{B}_{\text{prose}}$. The non-destructive reconciliation operator $\mathcal{R}_{\text{md}}(D_{\text{orig}}, \Delta_{\text{AST}}) = D_{\text{updated}} = \{ B'_1, B'_2, \dots, B'_m \}$ satisfies:
$$
B'_i = \begin{cases}
\text{MutateNode}(B_i, \Delta_{\text{AST}}), & \text{if } B_i \in \mathcal{B}_{\text{schema}} \\
B_i, & \text{if } B_i \in \mathcal{B}_{\text{prose}}
\end{cases}
$$
preserving all unmapped human prose blocks byte-for-byte:
$$
\forall B_i \in \mathcal{B}_{\text{prose}}, \quad \text{SHA256}(B'_i) \equiv \text{SHA256}(B_i)
$$

---

### REQ-0194: Artifact Drift Detection & Zero-Divergence Bijective Model Synchronization
- **Normative Statement**: The compiler platform shall implement an automated drift verification engine asserting zero divergence between authoritative source schemas in `schema/` and all downstream synthesized artifacts across the workspace, emitting diagnostic error family `E05xx` on structural or value mismatch.
- **Formal Invariant**: Let $\mathcal{A}_{\text{schema}}$ be the AST parsed from `schema/` and $\mathcal{A}_{\text{artifacts}}$ be the AST reconstructed from all on-disk artifacts across the workspace. Zero divergence is formalized as a bijective isomorphism:
$$
\text{Drift}(\mathcal{A}_{\text{schema}}, \mathcal{A}_{\text{artifacts}}) = 0 \iff \mathcal{A}_{\text{schema}} \cong \mathcal{A}_{\text{artifacts}}
$$
where there exists a bijection $\psi : \text{Nodes}(\mathcal{A}_{\text{schema}}) \to \text{Nodes}(\mathcal{A}_{\text{artifacts}})$ satisfying:
$$
\forall u, v \in \text{Nodes}(\mathcal{A}_{\text{schema}}), \quad (u, v) \in \mathcal{E}_{\text{schema}} \iff (\psi(u), \psi(v)) \in \mathcal{E}_{\text{artifacts}}
$$
and property equality:
$$
\forall u \in \text{Nodes}(\mathcal{A}_{\text{schema}}), \quad \text{Properties}(u) = \text{Properties}(\psi(u))
$$

---

## Subsystem 12: Compiler Performance, CLI, Assurance & Regression Inoculation

**Scope & Objective**: Defines the unified headless CLI architecture, performance assurance gates (< 25 ms execution latency, < 100 MB RSS memory budget for 10,000 AST nodes), formal proof obligations over decidable SMT fragments QF_LRA, QF_LIA, QF_UF (NP-8), property-based fuzzing and generative metamodel mutation frameworks, and 4-pass semantic parity verification.

**Requirements Range**: `REQ-0195` through `REQ-0199` (5 Requirements)

### REQ-0195: Unified Headless CLI Architecture & Deterministic Subcommand Interface
- **Normative Statement**: The compiler platform shall provide a unified, headless command-line interface dispatching deterministic subcommands with standard Unix exit codes and structured JSON output streams for automated pipeline execution.
- **Formal Invariant**: The CLI entry point acts as a pure deterministic mapping over command-line arguments $\mathbf{a} \in \mathcal{A}_{\text{args}}$ and isolated execution environment $\mathbf{e} \in \mathcal{E}_{\text{env}}$:
$$
\text{CLI}(\mathbf{a}, \mathbf{e}) \longrightarrow (\text{ExitCode} \in \{0, 1\}, \, \text{Stdout}, \, \text{Stderr})
$$
where:
$$
\text{ExitCode} = \begin{cases}
0, & \text{if } |\mathcal{D}_{\text{fatal}}| = 0 \wedge |\mathcal{D}_{\text{error}}| = 0 \\
1, & \text{if } |\mathcal{D}_{\text{fatal}}| + |\mathcal{D}_{\text{error}}| > 0
\end{cases}
$$
and all output payloads are deterministically formatted with zero dependency on interactive TTY devices.

---

### REQ-0196: Performance Assurance Gates: Execution Latency (< 25 ms) & Peak Memory RSS (< 100 MB RSS)
- **Normative Statement**: The compiler platform shall enforce dual performance assurance gates bounding total compilation execution latency to under 25 milliseconds and peak memory consumption to under 100 megabytes Resident Set Size (RSS) for models containing up to 10,000 AST nodes in optimized release configurations (`--release`) evaluated under dedicated benchmark harnesses isolated from CI logic tests.
- **Formal Invariant**: For any reference model topology $\mathcal{A}$ with $|\text{Nodes}(\mathcal{A})| \le 10{,}000$, execution latency $\Delta t$ and peak resident memory $\text{RSS}_{\text{peak}}$ satisfy:
$$
\begin{aligned}
\Delta t(\mathcal{A}) &< 25.0 \text{ ms} \\
\text{RSS}_{\text{peak}}(\mathcal{A}) &< 104{,}857{,}600 \text{ bytes} \quad (100.0 \text{ MB})
\end{aligned}
$$
evaluated on isolated dedicated benchmarking environments.

---

### REQ-0197: NP-8: Formal Proof Obligations & Invariant Contract Satisfiability via Decidable SMT Fragments
- **Normative Statement**: The formal verification engine shall synthesize proof obligations from mathematical invariants and contract assertions, enforcing strict syntactic guardrails that restrict proof obligations strictly to decidable SMT fragments (Quantifier-Free Linear Real Arithmetic `QF_LRA`, Quantifier-Free Linear Integer Arithmetic `QF_LIA`, and Quantifier-Free Uninterpreted Functions `QF_UF`) with bounded solver step budgets.
- **Formal Invariant**: Complexity class: **NP-complete** for quantifier-free decidable fragments via DPLL(T) solver architectures; undecidable for general first-order logic with non-linear arithmetic. The syntactic admissibility function $\text{Admissible}(\phi)$ enforces:
$$
\text{Admissible}(\phi) \iff \text{Theory}(\phi) \in \{ \text{QF\_LRA}, \text{QF\_LIA}, \text{QF\_UF} \} \wedge \text{Quantifiers}(\phi) = \emptyset
$$
Non-linear terms ($x \cdot y$) and alternating quantifiers ($\forall, \exists$) are rejected at the syntactic front-end with diagnostic `E0406`. Bounded solver exploration enforces step cutoff $\kappa_{\text{smt}}$:
$$
\text{Verify}(\phi) \longrightarrow \{ \text{Satisfied}, \text{Unsatisfiable}(\text{ProofWitness}), \text{Timeout}(\kappa_{\text{smt}}) \}
$$
where $\kappa_{\text{smt}} \le 100{,}000$ conflict steps.

---

### REQ-0198: Property-Based Fuzzing & Generative Metamodel Mutation for AST Invariant Preservation
- **Normative Statement**: The compiler test suite shall implement property-based fuzzing and generative metamodel mutation generators synthesizing arbitrary valid and mutated schema models to prove panic-free total execution and AST invariant preservation across the entire input space.
- **Formal Invariant**: For any generated input model $m \in \mathcal{M}^*$, compiler execution $\mathcal{C}$ is a total deterministic mapping producing either a valid synthesized AST $\mathcal{A}$ or a non-empty set of diagnostic errors $\mathcal{D}$:
$$
\mathcal{C}(m) \in \mathcal{A} \cup \mathcal{D} \quad \wedge \quad \text{AbnormalTermination}(m) \equiv \text{false}
$$
guaranteeing that either a valid AST $\mathcal{A}$ is produced satisfying all structural invariants:
$$
\forall n \in \text{Nodes}(\mathcal{A}), \quad \text{ValidateInvariants}(n) \equiv \text{true}
$$
or a non-empty set of structured diagnostics $\mathcal{D} \ne \emptyset$ is returned, with zero uncaught exceptions, segment faults, or panics.

---

### REQ-0199: 4-Pass Semantic Parity Verification Framework (Frontmatter, Graph Topology, Tables, Numerical Tolerances)
- **Normative Statement**: The compiler platform shall provide a 4-Pass Semantic Parity Verification Framework evaluating semantic equivalence across YAML frontmatter keys, Mermaid graph topology isomorphism, Markdown table cells, and numerical floating-point tolerances.
- **Formal Invariant**: The 4-pass verification relation $\Phi$ asserts conjunctive equivalence across all four semantic facets:
$$
\Phi(\text{Doc}_A, \text{Doc}_B) = \Phi_{\text{Frontmatter}} \wedge \Phi_{\text{Topology}} \wedge \Phi_{\text{Table}} \wedge \Phi_{\text{Numeric}}
$$
where:
$$
\begin{aligned}
\Phi_{\text{Frontmatter}} &\iff \text{Keys}(\text{FM}_A) = \text{Keys}(\text{FM}_B) \wedge (\forall k \in \text{Keys}(\text{FM}_A), \, \text{FM}_A[k] = \text{FM}_B[k]) \\
\Phi_{\text{Topology}} &\iff \mathcal{G}_A \cong \mathcal{G}_B \quad (\text{graph isomorphism over nodes and directed edges}) \\
\Phi_{\text{Table}} &\iff \text{Shape}(T_A) = \text{Shape}(T_B) \wedge (\forall (r, c), \, \text{Cell}_A(r, c) = \text{Cell}_B(r, c)) \\
\Phi_{\text{Numeric}} &\iff \forall (v_A, v_B), \, \frac{|v_A - v_B|}{\max(|v_A|, |v_B|, 10^{-12})} < 10^{-6}
\end{aligned}
$$

---
