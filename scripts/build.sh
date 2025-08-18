#!/bin/bash
set -e

# Playwright browsers are already installed via the postinstall script in package.json
# This avoids the need to install system dependencies during the build process
echo "Playwright browsers already installed via postinstall script"
echo "Building Astro site..."
npm run build

echo "Build completed successfully!"
