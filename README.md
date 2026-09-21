# Reyansh Education Library — Website

A library website for Reyansha Library 24/7 in Bokaro Steel City — a disciplined, 24/7 reading
room and study hall.
**Home · About · Membership · Facilities · Gallery · Contact**

## Stack

- **Frontend:** React + TypeScript + Vite + React Router, plain CSS (no framework)
- **Deployment:** GitHub → Netlify / Cloudflare Pages / Vercel
- **Domain:** reyansheducation.in (existing domain, pointed at the host)

## Project structure

```
src/
  components/   Header, Footer, Layout, Icon, Placeholder
  data/         content.ts — all site copy: facilities, membership plans, gallery, contact info
  pages/        one file (+ matching .css) per route
  index.css     design tokens, resets, shared classes (.btn, .card, .tag, .section, .reveal…)
  App.tsx       route definitions
  main.tsx      entry point, wraps App in <BrowserRouter>
```

All text content lives in `src/data/content.ts` — edit that file to change copy, add books,
categories, facilities, or update contact details, without touching component code.

Book cover / photo placeholders (`<Placeholder />`) are self-contained styled blocks, so the
site has no external image dependency. Swap them for real `<img>` tags once you have photos —
see "Adding real photos" below.

## Run it locally

Requires Node.js 18+.

```bash
npm install
npm run dev        # starts a dev server, usually http://localhost:5173
```

```bash
npm run build       # type-checks and builds to dist/
npm run preview      # serves the production build locally, to sanity-check before deploying
```

## Deploy

### Option A — Netlify

1. Push this project to a GitHub repository (see below).
2. In Netlify: **Add new site → Import an existing project → GitHub** → select the repo.
3. Build settings (Netlify auto-detects these from `netlify.toml`, already included):
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy. Netlify gives you a `*.netlify.app` URL immediately.
5. **Custom domain:** Site settings → Domain management → Add a domain → `reyansheducation.in`.
   Netlify will show DNS records (either an `A` record to Netlify's load balancer, or delegate
   DNS to Netlify's nameservers). Add those records with whoever currently manages the domain's
   DNS. HTTPS is provisioned automatically once DNS points at Netlify.

### Option B — Cloudflare Pages

1. Push to GitHub.
2. In Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git** → select the repo.
3. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy. The included `public/_redirects` file (copied into `dist` at build time) makes
   client-side routes like `/facilities` or `/gallery` work on direct visits and page refreshes.
5. **Custom domain:** Pages project → Custom domains → Add `reyansheducation.in`. If the domain's
   DNS is already on Cloudflare, this is a one-click add; otherwise Cloudflare will give you a
   CNAME record to add at your DNS provider.

### Option C — Vercel

1. Push to GitHub.
2. In Vercel: **Add New → Project** → import the repo. Vercel auto-detects Vite; the included
   `vercel.json` handles SPA routing so `/facilities`, `/gallery`, etc. don't 404 on refresh.
3. Deploy.
4. **Custom domain:** Project → Settings → Domains → Add `reyansheducation.in`. Vercel shows the
   `A` / `CNAME` records to add at your DNS provider.

### Pushing to GitHub (if you haven't yet)

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Adding real photos

Replace a `<Placeholder icon="book" label="…" />` with a normal image, e.g.:

```tsx
<img src="/images/reading-hall.jpg" alt="Reading hall, Reyansh Education Library" />
```

Drop image files into `public/images/` — anything in `public/` is served as-is at the site root.

## Editing content

- **Nav links:** `src/data/content.ts` → `nav`
- **Facility list:** `src/data/content.ts` → `facilities`
- **Gallery photos:** `src/data/content.ts` → `galleryImages` (files live in `public/gallery/`)
- **Membership plans & benefits:** `src/data/content.ts` → `membershipPlans`, `membershipBenefits`
- **Contact details:** `src/data/content.ts` → `contactDetails`

## Notes

- **WhatsApp is where form submissions go.** There's no backend, so the Contact form and every
  "Join Now" button on the Membership page use a WhatsApp "click to chat" link: the visitor's
  browser opens WhatsApp (app or web) with their message already typed in, and they tap send
  themselves — nothing is transmitted unless they do.
  - The number is set in one place: `src/data/content.ts` → `contactDetails.whatsappDigits`
    (currently `919431968777`, the library's real number). If it ever changes, update that field
    plus `contactDetails.phone` / `contactDetails.phoneSecondary` / `contactDetails.whatsapp`
    (the human-readable versions shown on the site) and `contactDetails.phoneDigits` (used by the
    sticky call button and the footer's `tel:` link).
  - The link-building logic lives in `src/utils/whatsapp.ts` if you want to change the message
    wording or behavior later.
- **Sticky call/WhatsApp buttons** sit in the bottom-right corner on every page
  (`src/components/StickyContact.tsx`) so a visitor on mobile can call or message in one tap.
- The map on the Contact page is a live Google Maps embed built from `contactDetails.mapsEmbedQuery`
  (no API key needed), with a "Get Directions" button that opens `contactDetails.directionsUrl`.
- Scroll-in animations use a small `<Reveal>` wrapper (`src/components/Reveal.tsx`) built on
  `IntersectionObserver` — no animation library. Wrap any new section's card grid in
  `<Reveal className="your-grid stagger">` to get the same fade-up-and-stagger effect; add just
  `<Reveal>` (no `stagger`) for a plain fade-up. Motion is automatically minimized for visitors
  with "reduce motion" turned on at the OS level.
- The logo lives in `public/brand/` — `logo-icon.png` (the reading-figure mark, used in the header
  and footer) and `logo-full.png` (the full wordmark, cropped from the file you provided). Replace
  either file to update the logo everywhere it's used.
- Real photos of the library live in `public/gallery/`, referenced from `galleryImages` in
  `src/data/content.ts`. Add a new file there and a matching entry in that array to add more
  photos to the Gallery page and the homepage preview strip.
