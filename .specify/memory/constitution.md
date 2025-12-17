<!--
    SYNC IMPACT REPORT

    - Version change: none -> 1.0.0
    - Added Principles:
        - I. Veracity of Claims
        - II. Beginner-Friendly Writing
        - III. Executable & Testable Code
        - IV. Spec-Driven Development
        - V. Traceable Records
        - VI. Grounded Content
        - VII. Docusaurus-Exclusive Frontend
        - VIII. Structured MDX Content
        - IX. Modern & Responsive Layout
        - X. Precise Terminology
        - XI. Consistent Theming
        - XII. Scoped Chatbot Responses
        - XIII. Zero-Hallucination Tolerance
        - XIV. Optimized RAG Pipeline
        - XV. Reproducible Embeddings
    - Added Sections:
        - Constraints
        - Success Criteria
    - Removed Sections: None
    - Templates requiring updates:
        - [⚠ pending] .specify/templates/plan-template.md
        - [⚠ pending] .specify/templates/spec-template.md
        - [⚠ pending] .specify/templates/tasks-template.md
        - [⚠ pending] .specify/templates/commands/*.md
-->
# Physical AI & Humanoid Robotics Book Constitution

## Core Principles

### I. Veracity of Claims
All technical claims (AI, robotics, ROS2, kinematics, sensing, RAG pipelines) must be verified from primary sources.

### II. Beginner-Friendly Writing
Writing style must be beginner-friendly, direct, and reproducible.

### III. Executable & Testable Code
All code snippets (TypeScript, Python, FastAPI) must be fully executable and testable.

### IV. Spec-Driven Development
Every module must follow the Spec-Kit Plus cycle: specify → plan → tasks → implement.

### V. Traceable Records
ADR (architectural decisions) and PHR (prompt history) must be accurately maintained and fully traceable.

### VI. Grounded Content
Physical, Robotics and AI content must be based strictly on verified documentation, research papers, and official specifications.

### VII. Docusaurus-Exclusive Frontend
The book’s frontend must be built exclusively with Docusaurus; no external frontend frameworks (Next.js/Vue/etc.) are allowed.

### VIII. Structured MDX Content
Content must use MDX components and maintain a structured, readable, responsive layout.

### IX. Modern & Responsive Layout
Layout must be modern, mobile-friendly, with clean spacing and readable typography.

### X. Precise Terminology
No buzzwords; only precise, grounded explanations.

### XI. Consistent Theming
Dark Theme (black background, gold primary, white text) and Light Theme (white background, gold primary, black text) must be implemented consistently through the Docusaurus configuration.

### XII. Scoped Chatbot Responses
The chatbot must answer only from book content or user-selected text.

### XIII. Zero-Hallucination Tolerance
The RAG chatbot has zero-tolerance for hallucinations.

### XIV. Optimized RAG Pipeline
The Neon → FastAPI → Qdrant pipeline must be optimized for free-tier latency limits.

### XV. Reproducible Embeddings
Embeddings must be cost-efficient and reproducible.

## Constraints

- Minimum 10 chapters covering physical AI, humanoid systems, ROS2, Nvidia Isaac Sim, Gazebo and unity, simulation, agents, Isaac Ros,vision language action (VLA) and sensor system.
- All claims must be fully traceable.
- Docusaurus build must be reproducible on any clean machine.

## Success Criteria

- The book is published with a stable GitHub Pages deployment.
- The layout is fully responsive and modern across desktop and mobile.
- The chatbot correctly returns grounded answers restricted to selected text.
- Qdrant + Neon syncing remains stable.
- Each chapter passes verification, reproducibility, and clarity review.
- The full Spec-Kit Plus workflow record remains complete and traceable.

## Governance

This Constitution supersedes all other practices. Amendments require documentation, approval, and a migration plan.
All PRs and reviews must verify compliance with these principles.
Any deviation from these principles requires a formal ADR.

**Version**: 1.0.0 | **Ratified**: 2025-12-12 | **Last Amended**: 2025-12-12