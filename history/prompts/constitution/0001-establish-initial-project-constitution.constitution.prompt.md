---
id: 0001
title: Establish Initial Project Constitution
stage: constitution
date: 2025-12-12
surface: agent
model: gemini
feature: none
branch: master
user: unknown
command: /sp.constitution
labels: [constitution, initialization, principles]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
tests:
 - none
---

## Prompt

/sp.constitution

## Project:
 The "Physical AI & Humanoid Robotics" book using Docusaurus and deploy it on GitHub Pages. 
The full book-production workflow will be executed using Spec-Kit Plus and the Gemini CLI. 
The book will include an integrated RAG-based chatbot built using OpenAI Agents, FastAPI, Neon Serverless Postgres, and Qdrant Cloud Free Tier.

## Core Principles:
- All technical claims (AI, robotics, ROS2, kinematics, sensing, RAG pipelines) must be verified from primary sources.
- Writing style must be beginner-friendly, direct, and reproducible.
- All code snippets (TypeScript, Python, FastAPI) must be fully executable and testable.
- Every module must follow the Spec-Kit Plus cycle: specify → plan → tasks → implement.
- ADR (architectural decisions) and PHR (prompt history) must be accurately maintained and fully traceable.

## Key Standards:
- physical, Robotics and AI content must be based strictly on verified documentation, research papers, and official specifications.
- The book’s frontend must be built exclusively with Docusaurus; no external frontend frameworks (Next.js/Vue/etc.) are allowed.
- Content must use MDX components and maintain a structured, readable, responsive layout.
- Layout must be modern, mobile-friendly, with clean spacing and readable typography.
- No buzzwords; only precise, grounded explanations.

## Theme Standards:
- Dark Theme: black background, gold primary color, white text.
- Light Theme: white background, gold primary color, black text.
- Themes must be implemented consistently through the Docusaurus configuration.

## RAG Chatbot Standards:
- The chatbot must answer only from book content or user-selected text.
- Zero-tolerance for hallucinations.
- Neon → FastAPI → Qdrant pipeline must be optimized for free-tier latency limits.
- Embeddings must be cost-efficient and reproducible.

## Constraints:
- Minimum 10 chapters covering physical AI, humanoid systems, ROS2, Nvidia Isaac Sim, Gazebo and unity, simulation, agents, Isaac Ros,vision language action (VLA) and sensor system.
- All claims must be fully traceable.
- Docusaurus build must be reproducible on any clean machine.

## Success Criteria:
- The book is published with a stable GitHub Pages deployment.
- The layout is fully responsive and modern across desktop and mobile.
- The chatbot correctly returns grounded answers restricted to selected text.
- Qdrant + Neon syncing remains stable.
- Each chapter passes verification, reproducibility, and clarity review.
- The full Spec-Kit Plus workflow record remains complete and traceable.

## Response snapshot

Successfully updated the project constitution at .specify/memory/constitution.md with the provided principles and standards. Created version 1.0.0.

## Outcome

- ✅ Impact: Established the foundational principles and standards for the project in a formal constitution document.
- 🧪 Tests: none
- 📁 Files: Modified 1 file: .specify/memory/constitution.md
- 🔁 Next prompts: Suggest creating a feature specification with /sp.specify.
- 🧠 Reflection: The initial user prompt provided a very detailed and well-structured set of principles, which made creating the constitution straightforward. The process of checking dependent files ensures alignment from the start.

## Evaluation notes (flywheel)

- Failure modes observed: The provided script to create PHR was a bash script, which is not available on windows. The agent successfully fell back to the native implementation.
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): Check for powershell equivalent scripts for commands.
