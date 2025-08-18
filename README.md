# Shugur Relay Documentation

This repository contains the documentation for Shugur Relay, built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build).

## Features

- **Mermaid Diagrams**: Interactive diagrams rendered using Playwright and rehype-mermaid
- **Responsive Design**: Mobile-first documentation with Starlight theme
- **Search**: Full-text search powered by Pagefind
- **Dark/Light Mode**: Automatic theme switching

## Development

### Prerequisites

- Node.js 18+ (specified in `.nvmrc`)
- npm or yarn

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```
   
   This will automatically install Playwright browsers via the postinstall script.

2. **Start development server:**
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:4321` (or next available port).

3. **Build for production:**
   ```bash
   npm run build
   ```

### Mermaid Diagrams

The documentation uses Mermaid diagrams that are rendered at build time using Playwright. The setup includes:

- **rehype-mermaid**: Astro plugin for Mermaid rendering
- **Playwright**: Browser automation for diagram rendering
- **Automatic Installation**: Browsers are installed via postinstall script

## Deployment

### Netlify

The site is configured for Netlify deployment with:

- **Custom Build Script**: `scripts/build.sh` handles the build process
- **Playwright Integration**: Browsers are installed during dependency installation
- **Optimized Build**: Only Chromium browser is installed to reduce build time

### Build Process

1. **Dependencies**: npm installs packages and Playwright browsers
2. **Build Script**: `./scripts/build.sh` runs the Astro build
3. **Output**: Static files are generated in the `dist/` directory

## Configuration Files

- **`netlify.toml`**: Netlify deployment configuration
- **`astro.config.mjs`**: Astro configuration with Mermaid plugin
- **`package.json`**: Dependencies and build scripts
- **`.nvmrc`**: Node.js version specification
- **`.npmrc`**: NPM configuration for Playwright

## Troubleshooting

### Build Issues

- **Playwright Browsers**: Ensure browsers are installed via `npx playwright install chromium`
- **Node Version**: Use Node.js 18+ as specified in `.nvmrc`
- **Dependencies**: Clear `node_modules` and reinstall if needed

### Local Development

- **Port Conflicts**: If port 4321 is in use, Astro will automatically use the next available port
- **File Watching**: The dev server automatically reloads when files change

## Contributing

1. Make changes to the `.mdx` files in `src/content/docs/`
2. Test locally with `npm run dev`
3. Ensure the build passes with `npm run build`
4. Commit and push changes

## License

This documentation is part of the Shugur Relay project.
