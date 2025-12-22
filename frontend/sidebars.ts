import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'importance-of-physical-ai',
    {
      type: 'category',
      label: 'Module 01: ROS2 Fundamentals',
      link: {
        type: 'generated-index',
        title: 'ROS2 Fundamentals',
        description: 'Learn the basics of ROS2.',
        slug: '/category/ros2-fundamentals',
      },
      items: [
        'module-ros2/chapter-1',
        'module-ros2/chapter-2',
        'module-ros2/chapter-3',
        'module-ros2/chapter-4',
      ],
    },
    {
      type: 'category',
      label: 'Module 02: Digital Twin Prototyping',
      link: {
        type: 'generated-index',
        title: 'Digital Twin Prototyping',
        description: 'Build digital twins with Gazebo and other tools.',
        slug: '/category/digital-twin-prototyping',
      },
      items: [
        'module-digital-twin/gazebo-integration',
        'module-digital-twin/chapter-2',
        'module-digital-twin/chapter-3',
      ],
    },
    {
      type: 'category',
      label: 'Module 03: AI Robot Brains',
      link: {
        type: 'generated-index',
        title: 'AI Robot Brains',
        description: 'Develop intelligent control systems for robots.',
        slug: '/category/ai-robot-brains',
      },
      items: [
        'module-ai-robot-brain/chapter-1',
        'module-ai-robot-brain/chapter-2',
        'module-ai-robot-brain/chapter-3',
      ],
    },
    {
      type: 'category',
      label: 'Module 04: Visual Language & Action (VLA) Pipelines',
      link: {
        type: 'generated-index',
        title: 'Visual Language & Action (VLA) Pipelines',
        description: 'Explore VLA models for robotic perception and action.',
        slug: '/category/vla-pipelines',
      },
      items: [
        'module-vla-pipeline/chapter-1',
        'module-vla-pipeline/chapter-2',
        'module-vla-pipeline/chapter-3',
      ],
    },
    'hardware-requirements',
  ],
};

export default sidebars;
