# Research Findings

This document summarizes the research undertaken to resolve ambiguities and establish best practices for the Physical AI & Humanoid Robotics book project.

## 1. Docusaurus Testing Strategy

**Decision**: A multi-layered testing strategy will be adopted, including:
- **Linting**: Use `markdownlint` for content style and consistency.
- **Link Checking**: Use `lychee-link-checker` to find broken links in Markdown files.
- **Accessibility Testing**: Use `axe` with Playwright to run automated accessibility checks against the WCAG 2.1 AA standard.
- **E2E Testing**: Use Playwright to test critical user flows like theme switching and navigation.

**Rationale**: This combination of tools provides comprehensive coverage, from content quality to technical implementation, ensuring a high-quality and reliable website.

**Alternatives considered**: Manual testing was rejected as it is not scalable and is prone to human error.

## 2. Integration of Code Examples

**Decision**: Code examples for ROS2, Gazebo, and NVIDIA Isaac Sim will be presented in Docusaurus using MDX components. Specifically, a custom component will be created to render code blocks with a "copy" button and a clear label indicating the technology and version. For complex examples, a link to a separate GitHub repository or a self-contained ZIP file will be provided.

**Rationale**: MDX provides the flexibility to create rich, interactive components that improve the user experience. Separating complex examples into their own repositories keeps the book's repository clean and focused.

**Alternatives considered**: Simple Markdown code fences were considered but rejected as they lack the desired interactivity and metadata capabilities.

## 3. Docusaurus Theme Customization

**Decision**: The golden/black/white theme will be implemented using Docusaurus's swizzling feature. The `infima` CSS variables will be overridden in `src/css/custom.css` to apply the new color scheme. The dark and light mode toggle will be handled by the default Docusaurus theme switcher.

**Rationale**: Swizzling is the recommended approach for theme customization in Docusaurus. It allows for targeted changes without ejecting from the standard theme, making future upgrades easier.

**Alternatives considered**: Creating a completely new theme from scratch was rejected as it would be time-consuming and unnecessary for the scope of this project.
