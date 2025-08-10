import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Shugur Relay Docs',
  tagline: 'A reliable, developer‑friendly Nostr relay',
  favicon: 'img/favicon.ico',

  url: 'https://docs.relay.shugur.net',
  baseUrl: '/',

  organizationName: 'Shugur-Network',
  projectName: 'relay-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/Shugur-Network/relay-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/shugur-social-card.jpg',
      navbar: {
        title: 'Shugur Relay',
        logo: {
          alt: 'Shugur Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://relay.shugur.net',
            label: 'Connect',
            position: 'right',
          },
          {
            href: 'https://status.relay.shugur.net',
            label: 'Status',
            position: 'right',
          },
          {
            href: 'https://github.com/Shugur-Network/relay',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
              {
                label: 'Self-Hosting',
                to: '/docs/self-hosting',
              },
            ],
          },
          {
            title: 'Service',
            items: [
              {
                label: 'Connect to Relay',
                href: 'https://relay.shugur.net',
              },
              {
                label: 'Status Page',
                href: 'https://status.relay.shugur.net',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Shugur-Network/relay',
              },
              {
                label: 'Company',
                href: 'https://shugur.com',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Shugur`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
