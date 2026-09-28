# abdullah-afaq.netlify.app

Source for my portfolio: **https://abdullah-afaq.netlify.app**

Vue 3 + Vite with vue-router, built as a static site and deployed on Netlify. No UI framework, no animation library.

- All case-study content lives in `src/data/projects.js`, so adding or editing a project is a data change.
- Design tokens (colors, type scale, spacing) live in `src/style.css`.
- `public/_redirects` sends every path to `index.html` so deep links work on Netlify.

```bash
npm install
npm run dev          # local dev server
npm test             # content, routing and page tests
npm run build        # production build to dist/
npm run check:dist   # post-build checks (images bundled, meta tags, redirects)
```
