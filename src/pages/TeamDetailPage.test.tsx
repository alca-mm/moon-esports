import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import TeamDetailPage from './TeamDetailPage';
import { teams } from '../data/teams';

// TeamDetailPage reads the :slug param and looks the team up via getTeamBySlug.
// We mount it behind the same route shape used in AppRouter and drive the URL
// with MemoryRouter (read-only use of the real data to get a guaranteed-valid slug).
function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/teams/:slug" element={<TeamDetailPage />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe('TeamDetailPage', () => {
  it('renders the matching team name and roster for a known slug', () => {
    const team = teams[0];
    const player = team.players[0];

    renderAt(`/teams/${team.slug}`);

    // The team name is rendered as the page <h1> (it also appears as a footer
    // link, so we target the heading role to disambiguate).
    expect(
      screen.getByRole('heading', { name: team.name, level: 1 }),
    ).toBeInTheDocument();
    // Roster members render through PlayerCard (gamertag shown more than once).
    expect(screen.getAllByText(player.gamertag).length).toBeGreaterThan(0);
  });

  it('renders the safe "Team nicht gefunden" fallback for an unknown slug', () => {
    renderAt('/teams/__this-slug-does-not-exist__');

    // Regression guard: an unknown slug must show the in-page 404 fallback,
    // NOT crash on an undefined team.
    expect(
      screen.getByRole('heading', { name: 'Team nicht gefunden' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Dieses Team existiert nicht.')).toBeInTheDocument();
  });
});
