# my-articles

Interactive articles and visualizations, published via GitHub Pages.

## Live site

**https://username.github.io** ← replace with your actual URL after setup

## Structure

```
├── index.html                        # Homepage — article listing
├── articles/
│   └── claude-token-waste/
│       ├── index.html                # Full interactive article
│       ├── article.md                # Prose source (edit this)
│       └── diagrams/                 # SVG diagrams (edit these)
├── _shared/
│   ├── style.css                     # Shared styles
│   └── nav.js                        # Shared nav component
└── .github/workflows/
    └── pages.yml                     # Auto-deploy on push
```

## How to add a new article

1. Copy `articles/claude-token-waste/` → `articles/your-article-slug/`
2. Edit `article.md` — prose, frontmatter metadata, diagram filenames
3. Replace SVGs in `diagrams/` with your new diagrams
4. Update `index.html` at the root to add the new article card
5. `git add . && git commit -m "add: your article title" && git push`
6. GitHub Actions deploys automatically in ~30 seconds

## First-time GitHub Pages setup

1. Go to your repo → **Settings** → **Pages**
2. Source: **Deploy from a branch** → branch: `main`, folder: `/ (root)`
3. Save — your site appears at `https://username.github.io`

## Editing articles

Always edit `article.md` (prose source) and the SVG files in `diagrams/`.
The `index.html` in each article folder is the rendered interactive version —
rebuild it from `article.md` when prose changes significantly.

## Cross-posting

When posting to LinkedIn or Medium, copy prose from `article.md`.
Add at the top: *"Interactive version with live charts: [your github.io URL]"*
GitHub is the canonical URL; platforms are mirrors.
