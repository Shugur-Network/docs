/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    'getting-started',
    {
      type: 'category',
      label: 'Installation',
      collapsed: false,
      items: [
        'installation/installation',
        'installation/quick-start',
        'installation/docker-standalone',
        'installation/docker-distributed',
      ],
    },
    'bare-metal',
    'configuration',
    {
      type: 'category',
      label: 'Core Concepts',
      collapsed: false,
      items: [
        'concepts',
        'architecture',
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      collapsed: false,
      items: [
        'performance',
        'troubleshooting',
      ],
    },
    'api',
  ],
};

export default sidebars;
