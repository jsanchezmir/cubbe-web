# Cubbe Web

<p align="center">
  <img src="public/assets/icon/cubbe-mark.svg" alt="Cubbe icon" width="120" />
</p>

<p align="center">
  <strong>The public home of Cubbe.</strong><br />
  A calmer way to organize your home, storage, and shared spaces.
</p>

<p align="center">
  <a href="https://cubbe.app">Website</a> ·
  <a href="https://cubbe.app/support">Support</a> ·
  <a href="https://cubbe.app/privacy">Privacy</a>
</p>

## About Cubbe

Cubbe helps people keep track of what they own and where it lives. Organize belongings across addresses, locations, and boxes; add photos, descriptions, tags, and categories; then find the right item without searching through every box.

The AI assistant makes cataloging faster: take photos of your belongings and Cubbe suggests useful item details, descriptions, categories, and tags for you to review.

## What is in this repository?

| Route | Purpose |
| --- | --- |
| `/` | Marketing landing page |
| `/about` | About Jordi Sanchez |
| `/support` | Customer support and common questions |
| `/privacy` | Privacy policy |
| `/terms` | Terms of use |

## Design direction

- Minimal black, white, and lapis lazuli color system
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

The project is configured for a static export and deploys to Vercel from the `main` branch.

## Universal Link fallback

The `public/.well-known/apple-app-site-association` file connects
`cubbe.app` to the iOS app. If a user opens an app link without the app
installed, the custom `not-found` page provides an App Store download CTA.

After creating the Cubbe listing in App Store Connect, set
`NEXT_PUBLIC_APP_STORE_ID` in Vercel to the listing's numeric Apple ID. This
changes the CTA to the direct App Store URL and enables Apple's Smart App
Banner metadata. `NEXT_PUBLIC_APP_STORE_URL` can optionally override the URL
for a regional or alternate distribution link.

## Project details

- Framework: [Next.js](https://nextjs.org/)
- Hosting: [Vercel](https://vercel.com/)
- Owner: Jordi Sanchez
- Copyright: © 2026 Jordi Sanchez for Cubbe
