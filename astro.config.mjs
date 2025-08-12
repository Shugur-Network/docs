import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import logoUrl from './src/assets/shugur-logo.svg?url';

export default defineConfig({
  site: 'https://docs.relay.shugur.com',
  output: 'static',
  build: {
    assets: '_astro'
  },
  redirects: {
    '/': '/intro'
  },
  integrations: [
    starlight({
      title: 'Shugur',
      favicon: '/favicon.ico',
      // Ensure head is always an array to avoid runtime errors in Starlight Head component
      head: [],
      components: {
        Head: './src/components/Head.astro',
        SiteTitle: './src/components/SiteTitle.astro',
      },
      logo: {
        src: logoUrl,
        alt: 'Shugur Logo'
      },
      social: {
        github: 'https://github.com/Shugur-Network/relay'
      },
      sidebar: [
        {
          label: 'Introduction',
          items: [
            { label: 'Welcome', link: '/intro' }
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
        baseUrl: 'https://github.com/Shugur-Network/relay-docs/edit/main/src/content/docs/'
      }
    })
  ]
});
