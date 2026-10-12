# itzfizz — Scroll-driven hero

A responsive, scroll-scrubbed car hero built with Next.js, Tailwind CSS, GSAP, and ScrollTrigger. The car and road highlight move with scroll progress; the headline and impact cards reveal on load. The car artwork is an inline SVG, so the page has no external image dependency.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build is exported to `out/` as a static site.

## Deploy to GitHub Pages

Push this project to a GitHub repository's `main` branch, then enable **Settings → Pages → GitHub Actions**. The included workflow builds and deploys the static export. The repository name is automatically used as the Pages base path.
