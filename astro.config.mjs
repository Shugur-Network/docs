import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import logoUrl from './src/assets/shugur-logo-full.svg?url';

export default defineConfig({
  site: 'https://docs.shugur.com',
  output: 'static',
  build: {
    assets: '_astro',
    // Enable build optimizations
    inlineStylesheets: 'auto',
  },
  // Enable optimizations
  compressHTML: true,
  integrations: [
    starlight({
      title: '',
      favicon: '/favicon.ico',
      // Ensure head is always an array to avoid runtime errors in Starlight Head component
      head: [],
      components: {
        Head: './src/components/Head.astro',
        SiteTitle: './src/components/SiteTitle.astro',
      },
      logo: {
        src: logoUrl,
        alt: 'Shugur Logo',
        href: 'https://shugur.com',
        replacesTitle: true
      },
      social: {
        github: 'https://github.com/Shugur-Network/relay'
      },
      sidebar: [
        {
          label: 'Introduction',
          items: [
            { label: 'Welcome', link: '/' }
          ]
        },
        {
          label: 'Core Concepts',
          items: [
            { label: 'Nostr Concepts', link: '/concepts' },
            { label: 'Architecture', link: '/architecture' }
          ]
        },
        {
          label: 'Getting Started',
          items: [
            { label: 'Getting Started', link: '/getting-started' }
          ]
        },
        {
          label: 'Installation',
          items: [
            { label: 'Installation Guide', link: '/installation' },
            { label: 'Quick Start', link: '/quick-start' },
            { label: 'Docker Standalone', link: '/docker-standalone' },
            { label: 'Docker Distributed', link: '/docker-distributed' },
            { label: 'Bare Metal', link: '/bare-metal' }
          ]
        },
        {
          label: 'Configuration',
          items: [
            { label: 'Configuration', link: '/configuration' }
          ]
        },
        {
          label: 'Operations',
          items: [
            { label: 'Performance', link: '/performance' },
            { label: 'Troubleshooting', link: '/troubleshooting' }
          ]
        },
        {
          label: 'API',
          items: [
            { label: 'API Reference', link: '/api' }
          ]
        }
      ],
      customCss: [
        './src/styles/custom.scss'
      ],
      editLink: {
        baseUrl: 'https://github.com/Shugur-Network/relay-docs/edit/main/'
      }
    })
  ]
});
