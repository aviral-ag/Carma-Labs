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

This site is a **project site** deployed from the `Carma-Labs` repository.

- **GitHub URL:** `https://aviral-ag.github.io/Carma-Labs/`
- **Custom domain:** `https://carmalabs.info`

### Enable GitHub Pages

1. Go to the repo **Settings → Pages**.
2. Under **Build and deployment**, set the source to **Deploy from a branch**.
3. Select **Branch:** `main` and **Folder:** `/ (root)`.
4. Click **Save**.

### Custom domain — carmalabs.info

The `CNAME` file in this repo contains `carmalabs.info`. Complete setup in two places:

#### Step 1: GitHub

1. Open **[Settings → Pages](https://github.com/aviral-ag/Carma-Labs/settings/pages)**.
2. Under **Custom domain**, enter `carmalabs.info` and click **Save**.
3. Remove any old domain (e.g. `aviralag.com`) if it still appears.
4. Wait until GitHub shows **DNS check successful** (can take up to 24 hours).
5. Enable **Enforce HTTPS** once the certificate is ready.

#### Step 2: DNS (at your domain registrar)

Add these records for `carmalabs.info`:

**Apex domain (`carmalabs.info`)** — four **A** records on `@`:

| Type | Host | Value |
|------|------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

**Optional — `www` subdomain** — one **CNAME** record:

| Type | Host | Value |
|------|------|-------|
| CNAME | `www` | `aviral-ag.github.io` |

Do **not** CNAME the apex (`@`) to GitHub — use the A records above. Only `www` uses CNAME.

After DNS propagates, the site will be live at **https://carmalabs.info** (and optionally **https://www.carmalabs.info**).

## Project structure

```
├── index.html
├── courses.html
├── about.html
├── contact.html
├── CNAME
├── _config.yml
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/
└── README.md
```

All internal page links use relative paths (e.g. `./courses.html`) so navigation works both locally and on GitHub Pages.
