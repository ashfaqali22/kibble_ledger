# Bangladesh Pet Food — The Scale Decision

Static executive strategy microsite. Plain HTML/CSS/JS, no build step, no framework.

## Files

- `index.html` — page markup
- `styles.css` — all styling (design tokens, layout, responsive breakpoints)
- `script.js` — scroll-reveal and number count-up (progressive enhancement; page is fully readable with JS disabled)

## Run locally

Open `index.html` directly in a browser, or serve the folder with any static server, e.g.:

```
npx serve .
```

## Deploy to Vercel

No configuration needed — Vercel auto-detects a static site.

**Via GitHub (recommended):**
1. Push this folder to a GitHub repository.
2. In the Vercel dashboard: New Project → Import the repository → Deploy.
   Framework preset: "Other" / static — no build command, no output directory override needed.

**Via Vercel CLI** (requires Node.js installed):
```
npm i -g vercel
vercel
```

## Notes

- Responsive from ~320px mobile up through 1920px desktop; primary target is 1366–1920px per the executive-pre-read use case.
- All commercial figures are labeled inline as Research fact / Derived calculation / Management scenario — see `index.html` for the underlying source notes.
