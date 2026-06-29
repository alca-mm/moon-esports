import { defineConfig, devices } from '@playwright/test';

/**
 * E2E smoke configuration for the GitHub-Pages SPA.
 *
 * The app is served under the GitHub-Pages basename `/moon-esports/`, so the
 * webServer builds the production bundle and serves it with `vite preview`
 * (which honours `base: '/moon-esports/'` from vite.config.ts). Specs use
 * absolute paths that include the basename, e.g. `page.goto('/moon-esports/')`.
 *
 * Chromium only, non-watching, CI-friendly.
 */
const PORT = 4173;
const HOST = `http://localhost:${PORT}`;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['list']],
  use: {
    baseURL: HOST,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: `npm run build && npm run preview -- --port ${PORT} --strictPort`,
    url: `${HOST}/moon-esports/`,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
