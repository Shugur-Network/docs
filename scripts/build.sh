#!/bin/bash
set -e

echo "Installing Playwright browsers..."
npx playwright install --with-deps chromium

echo "Building Astro site..."
npm run build

echo "Build completed successfully!"
