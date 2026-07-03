# Ritick Sethi — Portfolio

AGV/AMR automation-focused portfolio. React + Vite + Tailwind, with a live
simulated AGV operations dashboard, career timeline, project showcase,
skills grid, and recommendations carousel.

Live site: https://riticksethi6.github.io/Website/
Repo: https://github.com/Riticksethi6/Website

## Run locally to check everything

```bash
cd /Users/riticksethi/Desktop/portfolio
npm install        # only needed once, or after pulling dependency changes
npm run dev
```
Open the URL it prints (usually http://localhost:5173) and go through each section:

- **Hero** — name, rotating role titles, stat counters, LinkedIn link
- **Dashboard** (`#dashboard`) — live-updating AGV fleet simulation, KPIs, throughput chart, fleet table
- **Story** (`#timeline`) — career history, click each entry to expand highlights
- **Projects** (`#projects`) — project cards; check links open the right URLs
- **Skills** (`#skills`) — skill/domain groupings
- **Recommendations** — testimonial carousel (auto-rotates every 5s, arrows/dots to navigate)
- **Contact** (`#contact`) — email/LinkedIn/GitHub links point to the right destinations

Resize the window / use browser dev tools device mode to check the mobile nav (hamburger menu) and responsive layout.

## Preview the production build

Dev mode and the built site can differ slightly (minification, base path). To check the exact thing that gets deployed:

```bash
npm run build && npm run preview
```
Open http://localhost:4173 — this serves the real `dist/` output with the `/Website/` base path, same as the live GitHub Pages URL.

## Deploy changes

Once you're happy with edits:

```bash
git add -A
git commit -m "describe your change"
git push                 # updates the source on the main branch
npm run deploy           # builds and publishes dist/ to the gh-pages branch (live site)
```

The live URL updates ~30–60 seconds after `npm run deploy` finishes.

See [DEPLOY.md](DEPLOY.md) for full GitHub Pages setup details (custom domain, etc).
