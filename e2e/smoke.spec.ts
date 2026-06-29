// Smoke tests for GitHub Pages SPA routing under the /moon-esports/ basename.
// All navigation uses absolute paths that include the basename because baseURL
// is the bare host (http://localhost:4173) and vite.config.ts sets base: '/moon-esports/'.

import { test, expect } from '@playwright/test';

test('home page loads under the /moon-esports/ basename', async ({ page }) => {
  await page.goto('/moon-esports/');
  // The hero renders the single page <h1> ("MOON ESPORTS"); scope to level 1 so
  // the assertion is unambiguous under Playwright strict mode (the page also has h2s).
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.getByText('Drei Teams. Eine Vision.')).toBeVisible();
  await expect(page).toHaveTitle(/Moon Esports/i);
});

test('teams list page loads', async ({ page }) => {
  await page.goto('/moon-esports/teams');
  await expect(page.getByRole('heading', { name: 'Unsere Teams', level: 1 })).toBeVisible();
});

test('team detail deep-link loads a real team', async ({ page }) => {
  await page.goto('/moon-esports/teams/mothlings');
  await expect(page.getByRole('heading', { name: 'MOON Mothlings', level: 1 })).toBeVisible();
});

test('unknown route shows the safe 404 fallback', async ({ page }) => {
  await page.goto('/moon-esports/this-route-does-not-exist');
  await expect(page.getByRole('heading', { name: 'Seite nicht gefunden' })).toBeVisible();
  await expect(page.getByText('404')).toBeVisible();
});

test('direct deep-link does not crash and shows navigation', async ({ page }) => {
  await page.goto('/moon-esports/teams/mothlings');
  await expect(page.getByRole('navigation', { name: 'Hauptnavigation' })).toBeVisible();
});
