# Shugur Relay Documentation

This is the official documentation website for Shugur Relay, built with [Astro Starlight](https://starlight.astro.build/).

## About Shugur Relay

Shugur Relay is an enterprise-grade Nostr relay built in Go with CockroachDB for distributed storage. It's designed for operators who need reliability, observability, and horizontal scale.

## Local Development

```bash
npm install
npm run dev
```

This starts the development server at `http://localhost:4321`. Most changes are reflected live without restarting the server.

## Build

```bash
npm run build
```

This generates static content into the `dist/` directory for deployment.

## Preview

```bash
npm run preview
```

Preview the built site locally before deployment.

## Project Structure

```text
/
├── src/
│   ├── content/
│   │   ├── docs/         # Documentation markdown files
│   │   └── i18n/         # Internationalization config
│   ├── components/       # Custom Astro components
│   ├── styles/           # Custom SCSS styles
│   └── assets/           # Images and static assets
├── design-system/        # Shugur design system tokens
├── public/               # Static assets
├── astro.config.mjs      # Starlight configuration
└── package.json          # Dependencies and scripts
```

## Documentation Content

- **Getting Started**: Quick start guide and introduction
- **Installation**: Deployment guides (Docker standalone/distributed, bare metal)
- **Configuration**: Relay configuration and optimization
- **Architecture**: System design and core concepts
- **Performance**: Tuning and monitoring guides
- **Troubleshooting**: Common issues and solutions
- **API Reference**: WebSocket and HTTP API documentation

## Features

- **Optimized Performance**: Lighthouse-optimized with font preloading and build optimizations
- **Design System Integration**: Uses Shugur design system with consistent branding
- **Responsive Design**: Mobile-first responsive layout
- **Edit Links**: Direct GitHub integration for community contributions
- **Search**: Built-in documentation search functionality

## Contributing

This documentation is open source. You can contribute by:

1. Editing pages directly via the "Edit page" links
2. Opening issues for content improvements
3. Submitting pull requests for new documentation

Edit links point to: `https://github.com/Shugur-Network/docs/edit/main/`

## Deployment

The site is deployed to production and serves comprehensive documentation for Shugur Relay operators and developers.
