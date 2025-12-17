# Actionable Tasks for Physical AI & Humanoid Robotics Book

**Feature**: `001-physical-ai-book`
**Generated**: 2025-12-13

This document outlines the dependency-ordered tasks required to implement the "Physical AI & Humanoid Robotics" Docusaurus book.

## Phase 1: Project Setup

These tasks initialize the Docusaurus project and configure the basic environment.

- [X] T001 Initialize Docusaurus project in the repository root.
- [X] T002 Configure `docusaurus.config.js` with book title, theme settings, and GitHub Pages deployment options.
- [X] T003 [P] Create `src/css/custom.css` and override Infima CSS variables to implement the golden/black/white theme as per `research.md`.
- [X] T004 [P] Set up `sidebars.js` with the planned module and chapter structure.

- [ ] T005 [P] Install testing dependencies: `jest`, `playwright`, `markdownlint`, `lychee-link-checker`, `axe-core`.
- [ ] T006 Configure `package.json` with scripts for linting, link checking, and accessibility testing.

## Phase 2: Foundational Content & Structure

These tasks create the core structure and standalone chapters of the book.

- [ ] T007 Create the main `docs/intro.md` file.
- [ ] T008 [P] Create the standalone chapter `docs/importance-of-physical-ai.md`.
- [ ] T009 [P] Create the standalone chapter `docs/hardware-requirements.md` and format the content as a table.
- [ ] T010 Create the directory structure for the four modules: `docs/01-module-ros2`, `docs/02-module-digital-twin`, `docs/03-module-ai-robot-brain`, `docs/04-module-vla-pipeline`.
- [ ] T011 Create a custom 404 page in `src/pages/404.js` that includes search and navigation links.

## Phase 3: User Story 1 - Student Learning Robotics

**Goal**: A robotics student can learn the fundamentals of ROS 2.
**Independent Test**: A user can clone the repo, run the ROS 2 examples, and see the expected output. The theme switcher must be functional.

- [ ] T012 [US1] Create `docs/01-module-ros2/week-1.md` with introductory content for ROS 2.
- [ ] T013 [US1] Create a "hello world" ROS 2 Python example in a dedicated folder, e.g., `examples/ros2/hello_world`.
- [ ] T014 [US1] Embed the "hello world" example into `docs/01-module-ros2/week-1.md` using a custom MDX component.
- [ ] T015 [US1] Write an automated test for the "hello world" ROS 2 example.
- [ ] T016 [P] [US1] Write a Playwright E2E test to verify the theme switcher functionality.

## Phase 4: User Story 2 - Engineer Prototyping a Digital Twin

**Goal**: An engineer can build a basic digital twin using Gazebo.
**Independent Test**: A user can run the Gazebo simulation and verify that it subscribes to ROS 2 topics. The site must be responsive on mobile.

- [ ] T017 [US2] Create `docs/02-module-digital-twin/gazebo-integration.md` with content for Gazebo integration.
- [ ] T018 [US2] Create a Gazebo simulation example in `examples/gazebo/robot_arm_sim` that subscribes to ROS 2 topics.
- [ ] T019 [US2] Embed the Gazebo example into `docs/02-module-digital-twin/gazebo-integration.md`.
- [ ] T020 [US2] Write an automated test for the Gazebo simulation example.
- [ ] T021 [P] [US2] Write a Playwright E2E test to verify mobile responsiveness.

## Phase 5: Polish & Deployment

These tasks focus on quality checks and setting up continuous deployment.

- [ ] T022 Set up a GitHub Actions workflow for continuous integration: build, lint, and run all tests on every push.
- [ ] T023 Add a step to the GitHub Actions workflow to run the `lychee-link-checker`.
- [ ] T024 Add a step to the GitHub Actions workflow to run `axe` accessibility tests.
- [ ] T025 Configure the GitHub Actions workflow to deploy the built site to GitHub Pages on merge to the main branch.
- [ ] T026 Perform a final review of all content for clarity, correctness, and consistency.

## Dependencies

- **US1** can be implemented independently.
- **US2** depends on the foundational knowledge from **US1**.

## Parallel Execution

- Within each phase, tasks marked with `[P]` can be worked on in parallel.
- **US1** and foundational content (Phase 2) can be developed in parallel to some extent.

## Implementation Strategy

The project will be delivered incrementally, starting with the MVP scope.

- **MVP**: Complete Phase 1, Phase 2, and Phase 3 (User Story 1). This will provide a functional book with the first module, delivering immediate value.
