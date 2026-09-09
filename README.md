# Cubbe Web

<p align="center">
  <img src="public/assets/icon/cubbe-mark.svg" alt="Cubbe icon" width="120" />
</p>

<p align="center">
  <strong>The public home of Cubbe.</strong><br />
  A calmer way to organize your home, storage, and shared spaces.
</p>

<p align="center">
  <a href="https://jsanchezmir.github.io/cubbe-web/">Website</a> ·
  <a href="https://jsanchezmir.github.io/cubbe-web/support">Support</a> ·
  <a href="https://jsanchezmir.github.io/cubbe-web/privacy">Privacy</a>
</p>

## About Cubbe

Cubbe helps people keep track of what they own and where it lives. Organize belongings across addresses, locations, and boxes; add photos, descriptions, tags, and categories; then find the right item without searching through every box.

The AI assistant makes cataloging faster: take photos of your belongings and Cubbe suggests useful item details, descriptions, categories, and tags for you to review.

## What is in this repository?

| Route | Purpose |
| --- | --- |
| `/` | Marketing landing page |
| `/support` | Customer support and common questions |
| `/privacy` | Privacy policy |
| `/terms` | Terms of use |

## Design direction

- Minimal black, white, and indigo color system
- Bricolage Grotesque for expressive headings
- Light mode by default, with a persistent light/dark theme selector
- Responsive layout for mobile and desktop
- Product screenshots used as the primary visual language

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production build

```bash
npm run build
```

The project is configured for a static export and deploys to GitHub Pages through [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

## Project details

- Framework: [Next.js](https://nextjs.org/)
- Hosting: [GitHub Pages](https://pages.github.com/)
- Owner: Jordi Sanchez
- Copyright: © 2026 Jordi Sanchez for Cubbe
