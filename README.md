# Carma Labs

Corporate sustainability and ESG courses platform — a static marketing site for professional education in environmental, social, and governance topics.

**Live site:** [carmalabs.info](https://carmalabs.info)

---

## Overview

Carma Labs helps professionals and organisations build practical ESG and sustainability capability through expert-led courses. This repository contains the full static website: home page, course catalog, about page, and contact form.

| Page | Description |
|------|-------------|
| [Home](index.html) | Hero, stats, featured courses, value proposition, CTA |
| [Courses](courses.html) | Filterable course catalog with 6 programmes |
| [About](about.html) | Mission, story, team, partner logos |
| [Contact](contact.html) | Contact form with client-side validation |

---

## Tech stack

- **HTML5** — semantic markup, no frameworks
- **CSS3** — custom design system (Inter, forest green palette)
- **Vanilla JavaScript** — mobile nav, course filters, form validation
- **GitHub Pages** — static hosting with custom domain

No build step, no backend, no dependencies.

---

## Design

- **Primary:** `#1A3C2E` (forest green)
- **Accent:** `#C8A94A` (gold)
- **Background:** `#F9F7F4` (warm off-white)
- **Font:** [Inter](https://fonts.google.com/specimen/Inter) (400, 500, 600)
- Sticky navigation, responsive hamburger menu, mobile-first layout

---

## Local development

The site must be served over HTTP. Do not open `index.html` directly from the file system.

```bash
git clone https://github.com/aviral-ag/Carma-Labs.git
cd Carma-Labs
./serve.sh
```

Open [http://localhost:8000](http://localhost:8000).

Alternative:

```bash
python3 -m http.server 8000
```

### Troubleshooting

| Problem | Fix |
|---------|-----|
| Connection refused | Run `./serve.sh` and keep the terminal open |
| Directory listing | Start the server from the repo root |
| Unstyled page | Hard-refresh (`Cmd+Shift+R`); use `http://localhost`, not `file://` |
| Port 8000 in use | Run `./serve.sh 8080` |

---

## Project structure

```
Carma-Labs/
├── index.html          # Home
├── courses.html        # Course catalog
├── about.html          # About & team
├── contact.html        # Contact form
├── CNAME               # Custom domain (carmalabs.info)
├── _config.yml         # GitHub Pages config
├── serve.sh            # Local dev server
├── assets/
│   ├── css/style.css   # Global styles & design system
│   ├── js/main.js      # Nav, filters, form validation
│   └── images/         # Image assets
└── README.md
```

All internal links use relative paths (e.g. `./courses.html`) so navigation works locally and on GitHub Pages.

---

## Deployment

This is a **GitHub Pages project site** (not a user site).

| URL | Purpose |
|-----|---------|
| [carmalabs.info](https://carmalabs.info) | Production (custom domain) |
| [aviral-ag.github.io/Carma-Labs](https://aviral-ag.github.io/Carma-Labs/) | GitHub Pages fallback |

### GitHub Pages settings

1. Go to **Settings → Pages**
2. **Source:** Deploy from branch
3. **Branch:** `main` / **Folder:** `/ (root)`
4. **Custom domain:** `carmalabs.info`
5. Wait for **DNS check successful**, then enable **Enforce HTTPS**

### DNS (Squarespace + Google Workspace)

Keep **Google Workspace MX and TXT records** for email. Replace Squarespace **website** defaults with GitHub records:

**A records** (host `@`):

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME** (optional, for `www`):

| Host | Points to |
|------|-----------|
| `www` | `aviral-ag.github.io` |

Do not CNAME the apex (`@`) to GitHub — use A records only.

---

## Features

- **Course filters** — filter catalog by category without page reload
- **Contact form** — validates name, email, organisation, and message; shows inline success message (no backend)
- **Responsive layout** — 3-column grids collapse to 2-column and single-column on smaller screens
- **Accessible nav** — ARIA labels, keyboard-friendly mobile menu

---

## License

© 2026 Carma Labs. All rights reserved.
