# Sustainability Courses

Static website for a corporate sustainability and ESG courses platform. Built with pure HTML, CSS, and vanilla JavaScript — no build tools or backend required.

## Local development

This site **must be served over HTTP** — do not open `index.html` directly from Finder (the `file://` protocol will break navigation and assets).

### Quick start

From the project folder, run:

```bash
./serve.sh
```

Or manually (note the quotes — the folder name contains spaces):

```bash
cd "/Users/aviral/Carma Labs Website"
python3 -m http.server 8000
```

Then open **[http://localhost:8000](http://localhost:8000)** in your browser.

### Troubleshooting

| Problem | Fix |
|---------|-----|
| "Connection refused" at localhost | Run `./serve.sh` first — the server must stay running in Terminal |
| Directory listing instead of the site | You started the server from the wrong folder. Use `./serve.sh` which always uses the project root |
| Unstyled / blank page | Hard-refresh the browser (`Cmd+Shift+R`) and confirm the URL starts with `http://localhost`, not `file://` |
| Port 8000 in use | Run `./serve.sh 8080` and open `http://localhost:8080` instead |

If you use the **Live Server** VS Code/Cursor extension, open this folder as your workspace root and click "Go Live" — it will serve from `index.html` on port 8000.

## GitHub Pages deployment

This site is configured as a **project site**, not a user site.

- **Repository name:** `sustainability-courses` (or any name that is *not* `yourusername.github.io`)
- **Default URL:** `https://yourusername.github.io/sustainability-courses/`
- **Custom domain:** `courses.yourdomain.com` (configured via the `CNAME` file)

### Enable GitHub Pages

1. Push this repository to GitHub under the name `sustainability-courses`.
2. Go to the repo **Settings → Pages**.
3. Under **Build and deployment**, set the source to **Deploy from a branch**.
4. Select **Branch:** `main` and **Folder:** `/ (root)`.
5. Click **Save**.

GitHub will publish the site from the root of the `main` branch.

### Custom domain

When you have a real domain ready:

1. Create a `CNAME` file in the repo root containing your subdomain (e.g. `courses.yourdomain.com`).
2. In **Settings → Pages**, enter the same custom domain and save.
3. In your DNS provider, add a **CNAME** record pointing that subdomain to `yourusername.github.io`.

Until then, the site is served at the default GitHub Pages URL (no `CNAME` file needed).

## Project structure

```
├── index.html
├── courses.html
├── about.html
├── contact.html
├── _config.yml
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/
└── README.md
```

All internal page links use relative paths (e.g. `./courses.html`) so navigation works both locally and on GitHub Pages.
