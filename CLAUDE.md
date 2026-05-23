# Getting Promoted & Career Growth Workshop (Workshop 23)

Bilingual (Simplified Chinese primary, English subtitle) workshop slide deck and resource page for Chinatown Service Center. Workshop 23 in the 24-part CSC employment curriculum.

## Tech Stack
Vanilla HTML/CSS/JS — no build step, no framework. External `app.js` + `resources.js` (no inline scripts; CSP-tight).

## Structure
```
index.html       — 12-slide projection deck (click + keyboard navigation)
resources.html   — bilingual resource reference page (printable)
404.html         — bilingual 404 fallback
styles.css       — shared design system (CSS variables, typography, components)
print.css        — print-friendly styles for resources page
app.js           — slide nav, reveal logic, lang toggle (event-delegated, no inline handlers)
resources.js     — resources-page init (lang toggle, QR, SW reg)
404.js           — 404-page lang init
qrcode.min.js    — client-side QR code generator (local copy)
sw.js            — service worker (cache-first, offline; cross-origin skip)
_headers         — Cloudflare Pages security headers (CSP, allows Google Fonts)
robots.txt       — crawl rules
sitemap.xml      — sitemap with home + /resources
build.sh         — curated dist/ build script
tests/           — Playwright smoke tests on port 4833 (reuseExistingServer:false)
```

## Slides (12 total)
1. Title — 职场晋升 / Getting Promoted & Career Growth
2. Agenda — 表现 · 加薪 · 学习
3. How Performance Reviews Work — annual/quarterly + criteria
4. Self-Evaluation: Track Wins on phone (Notes app + rules)
5. **Activity:** What Counts as a Win? (two-phase: concrete vs vague)
6. Right Time to Ask — after big win / before review / NOT during layoffs
7. Script: How to Ask for a Raise — 3-step script
8. **Quiz:** True/False x3 (multi-phase: Q1 → Q2 → Q3)
9. Building Relationships with Supervisor — small talk / volunteer / reliability
10. Continuing Education — LACCD, LAUSD adult, Google certs, employer aid
11. Stay vs Look Elsewhere — 6 reasons each
12. CSC Services + Resources QR

## Navigation
- Click anywhere → advance (regular slides)
- Arrow keys ← → also navigate
- Interactive slides 5 & 8 require reveal before advancing

## Visual Design
Deep charcoal + gold palette — distinct from suite siblings.
- `--bg: #fafaf9`, `--primary: #1f2937`, `--accent: #d4a017`
- Header is dark charcoal with gold accent text
- Cards: 8px border-radius; activity cards: 12px

## Bilingual
- localStorage key: `cg_lang`
- `body.zh` toggles `.en` / `.zh` spans via CSS
- `html[lang]` updated on toggle AND init

## Deployment
Cloudflare Pages → `career-growth-workshop.pages.dev`
- `./build.sh` → curated `dist/`
- `wrangler pages deploy dist --project-name career-growth-workshop --branch main`
- Bump `CACHE` version in `sw.js` before each redeploy

## Tests
Playwright smoke tests cover all-12-slide nav, language toggle persistence, activity gate, quiz Q1→Q2→Q3, home button.
Run: `NODE_PATH=~/.local/share/playwright-test/node_modules npx playwright test`
