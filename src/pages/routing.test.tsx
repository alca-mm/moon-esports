import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import TeamsPage from './TeamsPage';
import NotFoundPage from './NotFoundPage';

// AppRouter uses <BrowserRouter basename="/moon-esports">, which is awkward to
// drive in jsdom (the default test URL "/" doesn't start with the basename).
// We therefore mirror the relevant route table with MemoryRouter to characterize
// the catch-all ("*") fallback and that a real path is NOT swallowed by it.
function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/teams" element={<TeamsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe('App routing (Routes composition)', () => {
  it('renders NotFoundPage for an unknown path via the "*" catch-all', () => {
    renderAt('/totally/unknown/path');

    expect(
      screen.getByRole('heading', { name: 'Seite nicht gefunden' }),
    ).toBeInTheDocument();
    // The catch-all must not accidentally render a real page.
    expect(
      screen.queryByRole('heading', { name: 'Unsere Teams' }),
    ).not.toBeInTheDocument();
  });

  it('renders the matched page (not the catch-all) for a known path', () => {
    renderAt('/teams');

    expect(
      screen.getByRole('heading', { name: 'Unsere Teams', level: 1 }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: 'Seite nicht gefunden' }),
    ).not.toBeInTheDocument();
  });
});
