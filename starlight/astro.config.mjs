import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import logoUrl from './src/assets/shugur-logo.svg?url';

export default defineConfig({
  // Ensure the site root redirects to the docs welcome page during dev and build
  redirects: {
    '/': '/intro'
  },
  integrations: [
    starlight({
      title: 'Shugur Relay Docs',
      favicon: '/favicon.ico',
  // Ensure head is always an array to avoid runtime errors in Starlight Head component
  head: [],
      components: {
        Head: './src/components/Head.astro',
      },
      logo: {
        src: logoUrl,
        alt: 'Shugur'
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
            { label: 'Installation Guide', link: '/installation/installation' },
            { label: 'Quick Start', link: '/installation/quick-start' },
            { label: 'Docker Standalone', link: '/installation/docker-standalone' },
            { label: 'Docker Distributed', link: '/installation/docker-distributed' },
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
        baseUrl: 'https://github.com/Shugur-Network/relay-docs/edit/main/starlight/src/content/docs/'
      }
    })
  ]
});
