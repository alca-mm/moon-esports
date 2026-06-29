# Moon Esports

Static marketing SPA for **Moon Esports**, a League of Legends esports organisation from the DACH region. The site presents three teams and their rosters. There is no backend and no API layer — all team data lives in `src/data/teams.ts`.

Live: <https://alca-mm.github.io/moon-esports/>

Version: **0.2.0**

---

## Tech Stack

| Concern | Tool |
|---|---|
| UI | React 19 |
| Routing | React Router DOM 7 |
| Language | TypeScript ~6 |
| Build / Dev server | Vite 8 |
| Unit / component tests | Vitest 4 + React Testing Library + jsdom |
| E2E tests | Playwright (Chromium) |
| Coverage | @vitest/coverage-v8 |
| Linting | ESLint 10 |
| Hosting | GitHub Pages (via GitHub Actions) |

---

## Project Structure

```
src/
  pages/           # Route-level pages
  │  HomePage, TeamsPage, TeamDetailPage, AboutPage,
  │  ContactPage, ImpressumPage, DatenschutzPage, NotFoundPage
  │
  components/
  │  layout/       # Navbar, Footer, PageShell
  │  sections/     # Hero, TeamPreview, AboutPreview, ContactCta
  │  teams/        # TeamCard, PlayerCard, RoleBadge
  │  ui/           # Button, SectionHeading
  │
  routes/
  │  AppRouter.tsx # React Router routes (basename="/moon-esports")
  │
  data/
  │  teams.ts      # Static team/player data, getTeamBySlug(),
  │                #   dev-time validateTeamsData() guard
  types/
     teams.ts      # Shared types: Team, Player, Role, …

e2e/               # Playwright smoke specs
public/            # Static assets (favicon, 404.html SPA redirect)
.github/workflows/
   deploy.yml      # CI: build + lint + test → GitHub Pages
```

---

## Getting Started

**Requirements:** Node 20+

```bash
npm install
```

For E2E tests, install the Playwright Chromium browser once:

```bash
npx playwright install chromium
```

No secrets or `.env` files are required — this is a purely static site.

---

## Development

```bash
npm run dev        # Start Vite dev server with HMR
```

---

## Testing

### Unit / Component Tests

```bash
npm test               # Run all Vitest tests (non-watching)
npm run test:watch     # Vitest in watch mode
```

### Coverage

```bash
npm run test:coverage  # Vitest run --coverage (V8)
```

Output is written to `coverage/` (gitignored). No coverage thresholds are enforced.

### E2E Tests

```bash
npm run test:e2e       # Playwright (Chromium), headless
npm run test:e2e:ui    # Playwright UI mode
```

---

## Type Checking

```bash
npm run typecheck   # tsc -b (no emit)
```

---

## Linting

```bash
npm run lint        # ESLint 10
```

---

## Build & Preview

```bash
npm run build      # tsc -b && vite build → dist/
npm run preview    # Serve the production build locally (vite preview)
```

---

## Deployment (GitHub Pages)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which:

1. Builds the project
2. Runs lint and tests
3. Publishes `dist/` to GitHub Pages

The app is served under the base path `/moon-esports/`. This basename is set in `vite.config.ts` (`base`) and in `AppRouter.tsx` (`basename`). Do not change these values.

Deep-link routing on GitHub Pages (SPA fallback) is handled by `public/404.html` together with a redirect snippet in `index.html`.

---

## Markdown / Docs Policy

Only the root `README.md` may be committed to the repository. The `.gitignore` ignores all other `*.md` files (via a `*.md` rule with a `!/README.md` negation). A guard in the deploy workflow fails the CI build if any Markdown file other than `./README.md` is present in the checkout.

Local change notes and analysis documents live under `docs/changes/*.md` and remain on disk only — they are never committed.
