#!/usr/bin/env bash
# Start a local dev server from the project root (handles paths with spaces).
cd "$(dirname "$0")"
PORT="${1:-8000}"

if ! command -v python3 >/dev/null 2>&1; then
  echo "Error: python3 is required but not installed."
  exit 1
fi

echo ""
echo "  Carma Labs — local dev server"
echo "  Open in your browser: http://localhost:${PORT}"
echo ""
echo "  Do NOT open index.html directly from Finder."
echo "  Always use the localhost URL above."
echo ""
echo "  Press Ctrl+C to stop."
echo ""

python3 -m http.server "$PORT"
