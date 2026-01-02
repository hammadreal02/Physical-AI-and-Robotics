# Physical AI & Humanoid Robotics

This repository contains the source code for a Docusaurus-based documentation site covering Physical AI and Humanoid Robotics.

## Project Description

This project aims to provide a comprehensive guide and resources for understanding and implementing Physical AI and Humanoid Robotics. It includes modules on ROS2 Fundamentals, Digital Twin Integration, AI Robot Brains, and the Visual-Language-Action (VLA) Pipeline.

## Local Development

To set up and run the project locally, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/hammadreal02/Physical-AI-and-Robotics.git
    cd Physical-AI-and-Robotics
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run start
    ```
    This will start a local development server at `http://localhost:3000`.

4.  **Build the project:**
    To build the static production version of the site, run:
    ```bash
    NODE_OPTIONS="--no-webstorage" npm run build
    ```

## Deployment to GitHub Pages

This project is configured to be deployed to GitHub Pages.

**Note:** If you are deploying this project from scratch, ensure you have configured your GitHub Pages settings to serve from the `gh-pages` branch.

To deploy the site to GitHub Pages, run:
```bash
NODE_OPTIONS="--no-webstorage" GIT_USER="your-github-username" npm run deploy-gh
```
Replace `"your-github-username"` with your actual GitHub username.

## Live Site

The live version of this documentation can be accessed at:
[https://physicalaiandroboticsbook.vercel.app/](https://physicalaiandroboticsbook.vercel.app/)
