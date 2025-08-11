# Shugur Documentation Hub

This is the centralized documentation website for all Shugur projects, built with [Docusaurus](https://docusaurus.io/).

## Website Structure

- **Homepage**: `docs.shugur.com` - Landing page with project tiles
- **Relay Documentation**: `docs.shugur.com/relay/` - Shugur Relay documentation
- **Future Projects**: Additional project docs will be added as new routes

## Local Development

```bash
npm install
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Project Structure

```
├── docs/                  # Relay documentation markdown files
├── src/
│   ├── pages/
│   │   ├── index.js      # Main landing page with project tiles
│   │   └── index.module.css
│   └── css/
│       └── custom.css    # Global styles
├── static/               # Static assets
└── docusaurus.config.js  # Site configuration
```

## Adding New Projects

To add a new project to the documentation hub:

1. Add a new tile to the `ProjectTiles` array in `src/pages/index.js`
2. Configure the new documentation route in `docusaurus.config.js`
3. Add the documentation files in a new subdirectory

## Content Structure (Relay)

```
docs/
├── intro.md (Overview)
├── getting-started.md (Quick start)
├── endpoints.md (WebSocket API)
├── supported-nips.md (NIP compatibility)
├── rate-limits.md (Policies)
├── policies.md (Service policies)
├── self-hosting.md (Installation guides)
├── reliability.md (SLO, status)
├── roadmap.md (Future features)
└── changelog.md (Version history)
```

## Deployment

The site is configured to deploy to `docs.shugur.com` and serves as the central hub for all Shugur project documentation.
