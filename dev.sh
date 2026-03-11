#!/usr/bin/env bash
# ──────────────────────────────────────────────
# dev.sh — Start local dev server or preview build
# Usage:
#   ./dev.sh          → start dev server (hot reload)
#   ./dev.sh preview  → build + preview production output
#   ./dev.sh build    → build static site to ./build
# ──────────────────────────────────────────────

set -euo pipefail

# Ensure correct Node version
if command -v nvm &>/dev/null; then
  nvm use 22 2>/dev/null || nvm use default
fi

# Install deps if needed
if [ ! -d "node_modules" ]; then
  echo "📦 Installing dependencies..."
  npm install
fi

case "${1:-dev}" in
  dev)
    echo "🚀 Starting dev server at http://localhost:5173"
    npm run dev -- --open
    ;;
  preview)
    echo "🔨 Building static site..."
    npm run build
    echo "👀 Previewing build at http://localhost:4173"
    npm run preview -- --open
    ;;
  build)
    echo "🔨 Building static site to ./build"
    npm run build
    echo "✅ Done! Output in ./build"
    ;;
  *)
    echo "Usage: ./dev.sh [dev|preview|build]"
    exit 1
    ;;
esac
