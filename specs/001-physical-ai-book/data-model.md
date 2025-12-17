# Data Model

This document defines the key entities and their relationships for the Physical AI & Humanoid Robotics book.

## 1. Book

The top-level entity representing the Docusaurus project.

-   **Fields**:
    -   `title`: The title of the book.
    -   `author`: The author(s) of the book.
    -   `version`: The version of the book.
-   **Relationships**:
    -   Has many `Modules`.

## 2. Module

A collection of chapters focused on a high-level topic.

-   **Fields**:
    -   `title`: The title of the module.
    -   `slug`: A unique identifier for the module, used in URLs.
    -   `order`: The order in which the module appears in the book.
-   **Relationships**:
    -   Belongs to a `Book`.
    -   Has many `Chapters`.
-   **State Transitions**: `draft` -> `review` -> `published` -> `archived`.

## 3. Chapter

A single Markdown file representing a section of the book.

-   **Fields**:
    -   `title`: The title of the chapter.
    -   `slug`: A unique identifier for the chapter, used in URLs.
    -   `order`: The order in which the chapter appears in a module.
    -   `content`: The Markdown content of the chapter.
-   **Relationships**:
    -   Belongs to a `Module`.
    -   Has many `Code Examples`.
-   **State Transitions**: `draft` -> `review` -> `published` -> `archived`.

## 4. Code Example

A self-contained, executable piece of code associated with a chapter.

-   **Fields**:
    -   `title`: A descriptive title for the code example.
    -   `language`: The programming language of the code (e.g., Python, C++).
    -   `code`: The code itself.
    -   `is_executable`: A boolean indicating if the code is meant to be run.
-   **Relationships**:
    -   Belongs to a `Chapter`.
