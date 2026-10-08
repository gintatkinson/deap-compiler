# DEAP Compiler: System Requirements Skeleton

**Document ID:** `SKELETON-DEAP-COMPILER-001`  
**Classification:** Sovereign Clean-Room Backlog Seed Specification  
**Status:** Authoritative 120-Requirement Backlog Seed Authority  
**Standard Compliance:** INCOSE Systems Engineering Handbook / IEEE 29148  

---

## 1. System Vision & Foundational Invariants

### REQ-001: Abstract MBSE Compiler Mandate
The compiler must operate exclusively as an abstract, domain-agnostic translation, semantic verification, and code synthesis pipeline across formal systems engineering primitives: Classifiers, Ports, Connectors, Rational Dimensional Exponents, Kirchhoff Flow Networks, and Temporal Intervals.

### REQ-002: Zero Hardcoded Domain Concepts Invariant
The compiler platform, intermediate representations, verification engines, and templates are strictly forbidden from embedding or assuming domain-specific concepts (no aerospace, automotive, medical, defense, maritime, or robotics concepts). All entities, signals, physical bounds, and units must derive deterministically from user-supplied schemas.

### REQ-003: Bijective Lexical Provenance Gate
Every emitted identifier, classifier, port, attribute, numeric literal, and physical unit must establish a direct, machine-verifiable derivation link to an input schema AST node or an OMG SysML v2 / KerML standard grammar keyword:
$$
\forall \text{symbol} \in \text{SynthesizedAST},\quad \text{symbol} \in \text{SourceSchemaTokens} \cup \text{SysML2GrammarKeywords}
$$
Synthesis of ungrounded symbols or speculative extrapolation constitutes a fatal compiler defect (`E0101_UNGROUNDED_SYMBOL`).

### REQ-004: Bitwise Determinism & Zero Diff Churn
For identical input schemas and configuration flags, the compiler output must be 100% bitwise reproducible across all operating systems, CPU architectures, and execution runs:
$$
\text{SHA256}(\text{Run}_A) \equiv \text{SHA256}(\text{Run}_B)
$$
All symbol tables, AST traversals, and code emitters must enforce strict topological sorting with alphabetical tie-breaking to guarantee 0 bytes diff churn.

### REQ-005: Workspace Sovereignty & Relative Path Resolution
All source code, configuration, documentation, scripts, and entitlements must use workspace-relative paths (`.`, `./...`) or environment-derived paths. Hardcoded machine paths are strictly prohibited across all codebase tiers.

### REQ-006: Clean Landing Zone Invariant
The root platform distribution landing zones (`schema/`, `docs/epics/`, `docs/features/`, `docs/user-stories/`, `docs/use-cases/`) must contain strictly `.gitkeep` placeholders. Concrete project models reside exclusively in downstream workspaces.

### REQ-007: Polyrepo Tier Partitioning
The platform must enforce strict architectural separation across three tiers:
1. *Tier 1: Sovereign Upstream Platform:* Pure compiler engines, zero domain concepts.
2. *Tier 2: Applied Downstream Engineering Proving Ground:* Concrete engineering schemas, incremental crate validation.
3. *Tier 3: Decommissioned Negative Oracle:* 418 tracked issues, 32 fatal defects used strictly as a negative test oracle.

### REQ-008: Stage 0 to Stage 2 Bootstrapping Strategy
The compiler must support a formal 3-stage self-hosting lifecycle:
1. *Stage 0 (The Bootstrap):* Clean-room manual/agentic implementation of core compiler engines from this SRS.
2. *Stage 1 (Self-Ingestion):* Native binary ingests its own architectural schema to synthesize SysML v2 models.
3. *Stage 2 (Sovereign Autonomy):* Automated verification against the 4-Pass Semantic Parity Gate.

### REQ-009: SysML v2 / KerML AST as Sovereign SSOT
The multi-file SysML v2 / KerML AST is the sole, unambiguous Single Source of Truth (SSOT). All Markdown specifications, test stubs, and ICDs are read-only projections.

### REQ-010: Zero-Copy Memory Safety Invariant
All compiler engines must be implemented enforcing memory safety and zero-copy memory management throughout AST lowerings and traversals.

---

## 2. Schema Ingestion & Grammar Parsers

### REQ-011: Deterministic Tabular Schema Parsing
The ingestion engine must parse tabular schemas in deterministic linear time $O(N)$ with zero catastrophic backtracking, implementing synchronization token error recovery to accumulate multiple syntax and structural diagnostics without halting on first fault (Inoculation against Defect #407).

### REQ-012: Dynamic Semantic Header Key Binding
Table column extraction must bind by normalized semantic header keys (case-insensitive, whitespace-trimmed, punctuation-stripped), never by ordinal column index. Tables with reordered columns must produce identical AST structures (Inoculation against Defect #395).

### REQ-013: Multi-Line Table Cell Block Preservation
Table cells containing embedded newlines, bulleted lists, or Markdown styling must be preserved as cohesive block tokens prior to attribute lowering (Inoculation against Defect #394).

### REQ-014: Structural Namespace Hierarchy Mapping
Heading levels in structured documents must map directly to the AST containment hierarchy:
- Level 1: Top-level `Package` (System / Module boundary).
- Level 2: Subsystem / Composite `Classifier` (`part def`).
- Level 3: Component / Leaf `Classifier` or `Action` (`action def`).

### REQ-015: Standardized Components / Parts Table Schema
Must recognize and lower the Components Table schema: `Name` | `Classifier` | `Multiplicity` | `Description` | `Allocation`.

### REQ-016: Standardized Ports & Interfaces Table Schema
Must recognize and lower the Ports Table schema: `Port Name` | `Direction` (`[in]`, `[out]`, `[inout]`) | `Signal Type` | `Protocol` | `Rate / Interval`.

### REQ-017: Standardized Attributes & Parametric Envelope Table Schema
Must recognize and lower the Attributes Table schema: `Parameter Name` | `Type` | `Min` | `Max` | `Nominal` | `Unit` | `Tolerance`.

### REQ-018: Standardized Constraints Table Schema
Must recognize and lower the Constraints Table schema: `Constraint ID` | `Category` (`Safety`, `Operational`, `Performance`) | `Predicate Expression` | `Severity`.

### REQ-019: Standardized Topological Connections Table Schema
Must recognize and lower the Connections Table schema: `Connection ID` | `Source Port` | `Target Port` | `Flow Item` | `Latency Max` | `Bandwidth Min`.

### REQ-020: Standardized Behaviors / Actions Table Schema
Must recognize and lower the Actions Table schema: `Action ID` | `Precondition / Trigger` | `Inputs` | `Outputs` | `Postcondition` | `Performer`.

### REQ-021: Protocol Buffers Schema Ingestion
Must support feature-gated ingestion of Protocol Buffers schemas, mapping messages to structural classifiers, enums to enumerations, and services to port interfaces.

### REQ-022: Interface Definition Language (IDL) Ingestion
Must support feature-gated ingestion of OMG IDL definitions, mapping modules to packages, structs to item definitions, and interfaces to port definitions.

### REQ-023: OpenAPI Specification Ingestion
Must support feature-gated ingestion of OpenAPI 3.x schemas, mapping endpoint paths to action definitions and JSON schemas to attribute types.

### REQ-024: Architecture Description Language (AUTOSAR) Ingestion
Must support feature-gated ingestion of AUTOSAR component definitions, mapping Software Components to classifiers and Sender-Receiver / Client-Server interfaces to SysML v2 ports.

### REQ-025: Out-of-Process Ingestion Plugin Protocol
Must support standalone external reader binaries communicating via a standardized JSON Intermediate Representation over standard I/O for proprietary customer formats.

---

## 3. Core Metamodel & Intermediate Representation (IR)

### REQ-026: Zero-Copy Node Arena Allocation
All AST nodes must be allocated in a generational memory arena, eliminating individual deallocation overhead and heap fragmentation.

### REQ-027: Generational Node Handles
Nodes must be referenced via Copy-able generational index handles (`NodeId`, `PackageId`, `ClassifierId`, `PortId`, `AttrId`), preventing raw pointer invalidation and dangling references.

### REQ-028: High-Throughput String Interning
All identifiers, symbol names, and namespace paths must be interned upon first encounter, enabling $O(1)$ symbol comparisons and cache-coherent identifier tables. Copying string bytes from the input buffer into the global interner pool during the initial lexical pass is expected and the sole permitted exception to the zero-copy invariant.

### REQ-029: Explicit ClassifierDef vs FeatureUsage Typing
The IR must strictly differentiate between definitions and instance usages via distinct types (`ClassifierDef::PartDef` vs `FeatureUsage::PartUsage`), inoculating against Defect #422.

### REQ-030: Strongly-Typed PortDirection Enum
Ports must support explicit directional semantics: `PortDirection::In`, `PortDirection::Out`, `PortDirection::InOut`, with strict preservation across serialization passes (Inoculation against Defect #414).

### REQ-031: Hierarchical Port Blocks & Protocol Preservation
Nested port attributes (baud rates, parity, timeout parameters) must be preserved with 100% fidelity in the node arena (Inoculation against Defect #416).

### REQ-032: First-Class ItemFlow Defs & Payload Typed Handles
SysML v2 item flows must reference typed payload definitions in the arena, preventing empty flow serialization (Inoculation against Defect #418).

### REQ-033: Typed Action Parameters & Directional Signatures
Action and operation parameters must include explicit directional modes (`in`, `out`, `inout`) and type indices (Inoculation against Defect #419).

### REQ-034: First-Class Algebraic Constraint Expression Tree
Constraints must be represented as structured algebraic expression AST trees throughout all compiler passes, preventing string collapse (Inoculation against Defect #420).

### REQ-035: Two-Pass Symbol Hoisting & Global Binding
Symbol resolution must execute in two passes: declaration hoisting followed by topological connector/allocation binding (Inoculation against Defect #417).

### REQ-036: Cycle Detection & Graph Acyclicity
Module dependencies must be analyzed using cycle detection algorithms, isolating circular dependencies with actionable diagnostic cycles.

### REQ-037: Multi-File Directory-to-Namespace Package Mapping
The compiler must map directory trees directly to SysML v2 package namespaces, supporting clean multi-model separation.

### REQ-038: Incremental Compilation Cache Invalidation
Compilation units must be cached using cryptographic content digests, invalidating only downstream dependent nodes when a source file changes.

### REQ-039: Lossless AST Serialization Schema
The compiler must serialize and deserialize the entire AST to machine-readable formats without losing node identities, spans, or algebraic expression trees.

### REQ-040: Context-Bounded AST Slicing for Subagents
Must provide an AST query engine capable of extracting isolated subgraphs under 3,500 tokens for context-bounded subagent dispatches (Inoculation against Defect #376).

---

## 4. 7D Physical Metrology & Abstract Flow Conservation

### REQ-041: Formal 7D Rational Vector Space $\mathbb{Q}^7$ over SI Units
Every physical quantity must be typed by a 7D rational exponent vector over base SI dimensions:
$$
[Q] = [M]^\alpha [L]^\beta [T]^\gamma [I]^\delta [\Theta]^\epsilon [N]^\zeta [J]^\eta,\quad \alpha,\beta,\gamma,\delta,\epsilon,\zeta,\eta \in \mathbb{Q}
$$
Inoculation against Defect #398 (silent unit dropping).

### REQ-042: Exact Rational Arithmetic
Dimensional exponents must be stored as exact rational pairs (numerator, denominator in $\mathbb{Q}$), preventing floating-point precision drift.

### REQ-043: Composite Physical Unit Reduction Algebra
Must support algebraic reduction of composite units to base SI exponents using rational vector algebra.

### REQ-044: Static Dimensional Homogeneity Validation
Addition and subtraction expressions ($A \pm B$) must require exact dimensional identity ($[A] \equiv [B]$). Mismatches must trigger `E0201_DIMENSIONAL_HOMOGENEITY_VIOLATION`.

### REQ-045: Dimensional Multiplication and Division Algebra
Multiplication and division must compute vector addition ($[A \times B] = [A] + [B]$) and subtraction ($[A / B] = [A] - [B]$) in $\mathbb{Q}^7$.

### REQ-046: Dimensionless Restriction on Transcendental Arguments
All transcendental functions ($\sin, \cos, \tan, \exp, \ln$) must enforce that input arguments are strictly dimensionless ($[0,0,0,0,0,0,0]$).

### REQ-047: Dimensional Scale Factor Normalization
Scaled units (prefixes $\text{k-}, \text{m-}, \mu\text{-}$) must be normalized via exact rational scaling factors during AST lowering.

### REQ-048: Generalized Physical Flow Classification
All port flow items must be formally classified as either *Conservative* (energy/matter-preserving physical flows) or *Non-Conservative* (discrete information/telemetry signals).

### REQ-049: Conjugate Physical Variable Pairs
Conservative flows must define conjugate Across ($\Delta \Psi$) and Through ($\Phi$) variable pairs across arbitrary physical domains.

### REQ-050: Generalized Kirchhoff Flow Law (KFL)
At every conservative topological junction, the sum of Through variables must balance to zero:
$$
\sum_{k=1}^N \Phi_k = 0
$$

### REQ-051: Generalized Kirchhoff Potential Law (KPL)
Across any closed loop of connected conservative ports, the sum of potential differences must equal zero:
$$
\sum_{\text{loop}} \Delta \Psi_k = 0
$$

### REQ-052: Abstract Power Product Balance
The compiler must verify that the product of conjugate Across and Through variables has the formal dimension of Power:
$$
[\Delta \Psi] + [\Phi] \equiv [M]^1 [L]^2 [T]^{-3}
$$

### REQ-053: Parametric Operating Interval Validation
The compiler must verify that nominal operating parameters reside strictly within defined range bounds ($V_{min} \le V_{nom} \le V_{max}$).

### REQ-054: Tolerance Interval Arithmetic
Attributes declaring tolerances ($V \pm \delta$) must be checked for interval validity ($V - \delta \ge V_{min} \land V + \delta \le V_{max}$).

### REQ-055: External Environmental Envelope Integration
Must support bounding interval checks against external environmental envelope constraints defined in input schemas.

---

## 5. Temporal Algebra & Discrete State Dynamics

### REQ-056: First-Class Spatio-Temporal Occurrences
Temporal behaviors must be modeled as formal occurrences with explicit lifetime interval durations:
$$
I = [t_{start}, t_{end}],\quad t_{start} \le t_{end}
$$

### REQ-057: Temporal Interval Duration Bounds
Every action must define minimum, nominal, and maximum execution durations ($[D_{min}, D_{max}]$) with dimensional unit $[T]^1$.

### REQ-058: Allen's 13 Qualitative Interval Relations Solver
The engine must verify all 13 canonical Allen interval relations between actions and states:
$$
\text{Relations} = \{\text{before}, \text{after}, \text{meets}, \text{met-by}, \text{overlaps}, \text{overlapped-by}, \text{during}, \text{contains}, \text{starts}, \text{started-by}, \text{finishes}, \text{finished-by}, \text{equals}\}
$$

### REQ-059: Temporal Contradiction & Deadlock Detection
Contradictory interval relationships (e.g. Action $A$ finishing before Action $B$ starts while requiring $B$'s output) must trigger `E0205_TEMPORAL_CONTRADICTION`.

### REQ-060: Causality & Precedence Graph Verification
Action sequence networks must form a valid Directed Acyclic Graph (DAG) respecting causal flow.

### REQ-061: Discrete State Machine Metamodel
Must support formal state machines: states, events, guards, entry/exit actions, and deterministic transition edges.

### REQ-062: Action Execution Step Binding & Performer Decoupling
Action definitions must remain structurally decoupled from allocated performer parts via explicit execution step allocations (Inoculation against Defect #415).

### REQ-063: State Reachability Analysis
Every declared state in a statechart must be reachable from the initial state via a valid event-trigger sequence; unreachable states trigger `E0206_UNREACHABLE_STATE`.

### REQ-064: Deterministic Guard Disjointness Verification
Multiple transitions originating from the same state on the same trigger event must have mutually disjoint guard predicates:
$$
\text{Guard}_1 \land \text{Guard}_2 \equiv \text{False}
$$

### REQ-065: Failsafe State Fallback Transition Enforcement
Every safety-critical state machine must define an unconditional transition path to a designated failsafe state upon fault detection.

---

## 6. Automated Safety, Reliability & Regulatory Disciplines

### REQ-066: Bipartite Traceability Directed Acyclic Graph (DAG)
The compiler must construct an immutable Traceability DAG linking Goals, Epics, Features, Requirements, Classifiers, Actions, Ports, Verification Tests, and Hazards.

### REQ-067: Upward Traceability Completeness Invariant
0 orphan requirements. Every leaf requirement must trace to an upstream capability or stakeholder need.

### REQ-068: Downward Realization Completeness Invariant
0 unimplemented requirements. Every requirement must allocate to at least one physical classifier, port, or action.

### REQ-069: Verification & Witness Completeness Invariant
100% of functional requirements and safety constraints must trace to a verified test or formal proof witness.

### REQ-070: Extraneous Functionality & Dead Code Elimination Invariant
The compiler must flag all unlinked ports, unused subparts, and unreferenced signals as unauthorized extraneous functionality (`E0405_EXTRANEOUS_FUNCTIONALITY`).

### REQ-071: Cryptographic Merkle Root Attestation & Audit Proof Bundling
The compiler must compute a SHA256 Merkle root hash across the AST and Traceability DAG, bundling signed audit proofs for regulatory compliance.

### REQ-072: Hierarchical Control Structure (HCS) Derivation
Must automatically synthesize an HCS directed graph from the topological connection network, classifying Controllers, Actuators, Controlled Processes, and Sensors.

### REQ-073: Combinatorial Unsafe Control Action (UCA) Synthesis
For every control action in the HCS, must synthesize UCAs across the 4 universal STPA guide words (Not providing; Providing; Too early/late/wrong order; Stopped too soon / applied too long).

### REQ-074: Automated Synthesis of Boolean Safety Invariants
Every synthesized UCA must generate a formal boolean mitigation invariant serialized as an assert constraint block.

### REQ-075: Parallelized Evaluation of Combinatorial Hazard Expansions
STPA Cartesian expansion must execute across a bounded, work-stealing thread pool (e.g., `rayon`), evaluating $\ge 10^4$ combinations in $< 100\text{ ms}$. Unbounded manual thread spawning is strictly banned (Inoculation against Defect #388, #389).

### REQ-076: Abstract Safety Hazard Verification Gate
The compiler shall verify that 100% of declared safety hazard nodes in the AST trace to at least one formal mitigation constraint (`assert constraint`) and a verified witness test.

### REQ-077: Run-Time Assurance Simplex/Duplex Architecture Modeling
Must support Run-Time Assurance (RTA) modeling, partitioning execution between a primary complex controller and a verified safety fallback controller.

### REQ-078: Control Barrier Function (CBF) Safety Envelope Monitoring
Must verify that RTA safety interlocks evaluate valid Control Barrier Functions $h(x) \ge 0$ along system state trajectories.

### REQ-079: Cubic Hermite Polynomial Bumpless Transfer Synthesis
When transferring control authority between controllers, the compiler must synthesize a $C^1$-continuous cubic Hermite blending function:
$$
h(s) = 3s^2 - 2s^3, \quad s = \frac{t - t_0}{T_{transfer}}
$$
guaranteeing continuous control signal derivative continuity ($\dot{h}(0) = \dot{h}(1) = 0$) with zero step discontinuity.

### REQ-080: Pluggable Declarative Regulatory Profiles
Regulatory verification must be governed by declarative external profile specifications (DO-178C, ARP4761, ISO 26262, IEC 62304).

---

## 7. Interface Control Document (ICD Level 1C) Synthesis

### REQ-081: Automated System Interface Matrix ($N^2$ Diagram)
Must synthesize an $N \times N$ matrix representing all directed interactions between declared subsystems.

### REQ-082: Master Signal Flow Dictionary (The Canonical 10-Column Contract)
Must synthesize an exhaustive signal dictionary containing exactly 10 canonical columns:
1. `Signal Identifier`
2. `Source Endpoint`
3. `Destination Endpoint`
4. `Physical Quantity & Dimension` ($\mathbb{Q}^7$)
5. `Base SI Unit`
6. `Data Type & Bit Width`
7. `Minimum Envelope` ($V_{min}$)
8. `Maximum Envelope` ($V_{max}$)
9. `Periodicity / Update Rate`
10. `Failsafe Domain Default Value`

### REQ-083: Port Definition Roster Table Synthesis
Must generate a comprehensive table of all declared ports, directionality, signal types, and protocols.

### REQ-084: Connection Binding Roster Table Synthesis
Must generate a comprehensive table of all topological connections, source/target ports, and latency/bandwidth allocations.

### REQ-085: Port Parity & Dangling Interface Verification Gate
Every `out` port must bind to at least one compatible `in` port. Dangling interfaces trigger `E0301_DANGLING_PORT`.

### REQ-086: Logical Channel Schedulability & Bandwidth Verification Gate
The aggregate bit rate of signals mapped to a shared physical channel must not exceed channel capacity:
$$
\sum_{i=1}^M \text{Rate}_i \le \text{Bandwidth}_{max}
$$

### REQ-087: Failsafe Default Domain Validity Gate
The defined failsafe default value of any signal must reside strictly within its qualified physical interval:
$$
V_{failsafe} \in [V_{min}, V_{max}]
$$

### REQ-088: Protocol Framing Overhead & Schedulability Computation
Must compute header, parity, and framing overhead for declared digital communication protocols.

### REQ-089: End-to-End Latency Deadline Verification
Must verify that signal transmission latency across connector chains does not violate timing deadlines:
$$
\sum \Delta t_{hop} \le \text{Deadline}_{max}
$$

### REQ-090: Deterministic Electrical/Telemetry Harness Assignment Projections
Must project abstract logical connector topologies into concrete pin-out and harness assignment rosters.

---

## 8. Downstream Specification Projection & Output Contracts

### REQ-091: Epics Projection
Top-level `Package` declarations must project into Epic specifications with Deterministic UUIDv5 anchors (seeded by the node's fully qualified topological path), executive summary, boundaries, and child Feature inventories.

### REQ-092: Bottom-Up Feature-First Dependency Lifecycle
Specification generation must follow a strict bottom-up lifecycle: Features must be resolved and anchored before parent Epics are synthesized (Inoculation against Defect #359).

### REQ-093: Topological Ordering of Specification Trees
Subpackages and child entities must be compiled prior to parent aggregates to eliminate circular cross-references (Inoculation against Defect #360).

### REQ-094: Features Projection
`Classifier` (`part def`) nodes must project into Feature specifications embedding the mandatory 3-Layer Definition of Done.

### REQ-095: 3-Layer DoD Layer 1: Domain State & Data Model
Must specify attributes, physical parameters, dimensions in $\mathbb{Q}^7$, operating envelopes, and data structures. Writing `N/A` is strictly prohibited.

### REQ-096: 3-Layer DoD Layer 2: Logic & State Management
Must specify state machines, transition triggers, temporal intervals, operational constraints, and algorithmic control logic. Writing `N/A` is strictly prohibited.

### REQ-097: 3-Layer DoD Layer 3: Presentation & Actuator Interface Binding
Must specify concrete bindings to operator presentation widgets (gauges, alarms) or physical actuator drive signals. Writing `N/A` is strictly prohibited.

### REQ-098: User Stories Projection
Must generate Agile User Stories conforming to `As a [Role], I need [Capability], So that [Goal]`, anchored to parent Features and Deterministic UUIDv5.

### REQ-099: Deterministic Given-When-Then BDD Synthesis from Constraints
Constraints and attribute envelopes must compile deterministically into Given-When-Then BDD scenarios:
- **Given:** State variable $X \in [V_{min}, V_{max}]$.
- **When:** Input port receives trigger signal $S$.
- **Then:** Output port emits response $R$ within deadline $\Delta t \le T_{max}$.

### REQ-100: BDD Boundary Value Analysis Scenarios
Every parameter envelope must generate four deterministic test cases: Nominal, Minimum boundary, Maximum boundary, and Out-of-bounds fault injection.

### REQ-101: Use Cases Projection
Action definitions must project into Use Cases with Actors, Preconditions, Primary Nominal Flow, Alternative/Exception Flows, and Guaranteed Postconditions.

### REQ-102: Native SysML v2 Multi-File Textual Lowering
Must emit clean, modular SysML v2 textual syntax (`.sysml`), with 1 file per package/subsystem and standard KerML imports.

### REQ-103: KerML Standard Library Binding
Must bind standard KerML libraries (`ISQ::*`, `SI::*`) for physical dimensions and units.

### REQ-104: Non-Destructive Incremental Markdown Reconciliation
Re-generating Markdown specifications must use an incremental memory-mapped diff engine that preserves human prose outside generated fences (Inoculation against Defect #412).

### REQ-105: Mandatory UUIDv5 Frontmatter Identity Anchors
All generated Markdown specifications must embed immutable Deterministic UUIDv5 identity anchors in YAML frontmatter (seeded by the node's fully qualified topological path), preventing feature annihilation during entity renames and preserving bitwise determinism (Inoculation against Defect #312).

---

## 9. Concurrency, Assurance & Quality Gates

### REQ-106: Rich Source-Mapped Diagnostics with Spans
Diagnostics must be emitted citing file paths, line/column spans, highlighted source snippets, and actionable remediation advice.

### REQ-107: Standardized Compiler Error Code Catalog
Must implement the standardized error catalog:
- `E0100`--`E0199`: Ingestion & Syntax Errors
- `E0200`--`E0299`: Metamodel, Typing & Dimensional Errors
- `E0300`--`E0399`: Interface, Topology & Connection Errors
- `E0400`--`E0499`: Safety, Traceability & Regulatory Profile Errors
- `E0500`--`E0599`: Code Generation & Emission Errors

### REQ-108: Reverse-Sync Prose Gate
Unanchored prose entities detected during reverse parsing must be strictly rejected unless explicit compiler authorization flags are provided (Inoculation against Defect #259).

### REQ-109: Artifact Synchronization Integrity
The compiler shall detect, flag, and reject any divergence or desynchronization between input schemas and generated downstream artifacts (Inoculation against Defect #357).

### REQ-110: Deterministic Serialization Ordering
All internal serialization dictionaries must enforce strict deterministic ordering and generational handle sorting, eliminating hash-randomized git churn (Inoculation against Defect #356).

### REQ-111: Strict Architectural Diagram Syntax Formatting
AST diagram emitters must enforce valid diagram headers, matching closing fences, double-quoted labels for special characters, and zero unquoted colons in relationship labels (Inoculation against Defects #333, #283).

### REQ-112: Zero Unicode Em Dash Invariant across all Outputs
All emitted documentation, code comments, and CLI outputs must contain zero Unicode em dashes (`\u2014`). ASCII `--` or `-` must be used exclusively.

### REQ-113: Dedicated Isolated Delimiters for Math Expressions
All display equations must use isolated `$$` fences on dedicated lines; multi-line equations must use `\begin{aligned} ... \end{aligned}`.

### REQ-114: Processing Latency Gate
Ingestion and compilation latency must not exceed 25 ms per 1,000 AST nodes on standard workstation hardware. This gate must be evaluated exclusively in compiled Release mode (`--release`) via dedicated benchmarking harnesses (e.g., `criterion`), isolated from CI logic tests.

### REQ-115: Bounded Memory Consumption Gate
Peak memory consumption (RSS) must remain under 100 MB for models with up to 10,000 AST nodes, evaluated exclusively in compiled Release mode (`--release`) via dedicated benchmarking harnesses, isolated from CI logic tests (Inoculation against Defect #390).

### REQ-116: Strict Synthetic-Only Test Fixtures (Ground Zero Purity)
Internal compiler test suites must NEVER import or reference customer domain assets. All tests must execute against synthetic mathematical schemas (`Package_Alpha`, `Classifier_1`, `Port_A`, `param_x = 42.0 [M]`).

### REQ-117: Property-Based Fuzz Testing
Parser and metrology engines must be validated via property-based fuzz testing, generating millions of arbitrary AST permutations to prove absence of panics.

### REQ-118: 4-Pass Semantic Parity Gate
Must support running shadow parity assertions against the decommissioned legacy oracle to prove 100% semantic equivalence without runtime crashes.

### REQ-119: Headless CLI Non-Zero Exit Code & Panic-Free Contract
The compiler must operate cleanly in headless CI/CD environments, returning exit code 0 on success and non-zero on any gate violation. All production compiler library code must be 100% panic-free (`.unwrap()` and `.expect()` strictly banned).

### REQ-120: Automated Defect Inoculation Regression Suite
The test suite must include dedicated regression tests specifically verifying inoculation against all 32 fatal defects of DEAP01.
