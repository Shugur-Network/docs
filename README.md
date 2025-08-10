# Shugur Relay Documentation

Documentation site for Shugur Relay at [docs.relay.shugur.net](https://docs.relay.shugur.net)

## Tech Stack

- Docusaurus 3
- React
- Markdown/MDX
- Deployed to docs.relay.shugur.net

## Development

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Building

```bash
npm run build
```

This generates static content into the `build` directory.

## Content Structure

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

This site deploys automatically to docs.relay.shugur.net when changes are pushed to main.

## Contributing

1. Edit documentation files in `docs/`
2. Test locally with `npm start`
3. Submit pull request
4. Changes deploy automatically after merge

## Writing Guidelines

- Use clear, concise language
- Include code examples where relevant
- Keep technical accuracy high
- Update version-specific information regularly
- Use consistent formatting and style
