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
          routeBasePath: '/',
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
        title: 'Shugur',
        logo: {
          alt: 'Shugur Logo',
          src: 'img/shugur-logo.svg',
        },
        items: [],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      footer: {
        style: 'dark',
        copyright: `
          <div style="
            display: flex; 
            align-items: center; 
            justify-content: space-between; 
            max-width: 80rem; 
            margin: 0 auto; 
            padding: 0 1.5rem;
            flex-wrap: wrap;
          ">
            <div style="
              display: flex; 
              justify-content: center; 
              order: 2;
              margin-bottom: 0;
            ">
              <a 
                href="https://github.com/Shugur-Network/Relay" 
                style="color: #9CA3AF; text-decoration: none; transition: color 0.15s ease-in-out;"
                onmouseover="this.style.color='#D1D5DB'"
                onmouseout="this.style.color='#9CA3AF'"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: middle;">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span class="sr-only">GitHub</span>
              </a>
            </div>
            <div style="
              order: 1; 
              margin: 0; 
              color: #9CA3AF; 
              font-size: 0.75rem; 
              line-height: 1.25rem;
            ">
              © ${new Date().getFullYear()} Shugur Relay. Built for the decentralized web.
            </div>
          </div>
          
          <style>
            @media (max-width: 767px) {
              .footer__bottom > div {
                flex-direction: column !important;
                text-align: center !important;
              }
              .footer__bottom > div > div:first-child {
                order: 1 !important;
                margin-bottom: 2rem !important;
              }
              .footer__bottom > div > div:last-child {
                order: 2 !important;
                text-align: center !important;
              }
            }
          </style>
        `,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
