# Shugur Relay Documentation

This is the official documentation website for Shugur Relay, built with [Astro Starlight](https://starlight.astro.build/).

## About Shugur Relay

Shugur Relay is a enterprise grade Nostr relay built in Go with CockroachDB for distributed storage. It's designed for operators who need reliability, observability, and horizontal scale.

## Local Development

```bash
cd starlight
npm install
npm run dev
```

This starts the development server at `http://localhost:4321`. Most changes are reflected live without restarting the server.

## Build

```bash
cd starlight
npm run build
```

This generates static content into the `dist/` directory for deployment.

## Project Structure

```
starlight/
├── src/
│   ├── content/docs/     # Documentation markdown files
│   ├── components/       # Custom Astro components
│   ├── styles/           # Custom SCSS styles
│   └── assets/           # Images and static assets
├── astro.config.mjs      # Starlight configuration
└── package.json          # Dependencies and scripts
```

## Documentation Content

- **Introduction**: Welcome and overview
- **Core Concepts**: Nostr fundamentals and architecture
- **Installation**: Deployment guides (Docker, Kubernetes, bare metal)
- **Configuration**: Relay configuration and optimization
- **Operations**: Performance tuning and troubleshooting
- **API Reference**: WebSocket and HTTP API documentation

## Deployment

The site is configured for deployment to `docs.shugur.com` and serves comprehensive documentation for Shugur Relay operators and developers.
