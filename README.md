# Copilot Chat (Basic) — Bunzl Distribution

A single, unlisted training guide tailored for Bunzl Distribution, built with [Astro](https://astro.build) (static output) and deployed to GitHub Pages.

- Published page: `/guides/customer/bunzl`
- Print/PDF handouts: `/guides/customer/bunzl-handout/{executive,manager,ic,frontline,all}`
- The site root redirects to the guide.

## Local development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages. The custom domain is configured via
`public/CNAME`.
