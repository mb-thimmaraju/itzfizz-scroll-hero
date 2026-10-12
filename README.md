# itzfizz — Scroll-driven hero

Responsive scroll-driven hero animation built with Next.js, Tailwind CSS, GSAP, and ScrollTrigger. The car and road highlight move with scroll progress; the headline and impact cards reveal on load. The car artwork is inline SVG, so the page has no external image dependency.

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

The included GitHub Actions workflow builds and deploys the static export when changes are pushed to `main`. In the repository, set **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The repository name is automatically configured as the Pages base path.

- Repository: https://github.com/mb-thimmaraju/itzfizz-scroll-hero
- Live site: https://mb-thimmaraju.github.io/itzfizz-scroll-hero/
