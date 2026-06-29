import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import TeamsPage from './TeamsPage';

// Smoke test: TeamsPage renders its hero title and maps the teams data into
// TeamCards. Guards against the page hero or the teams grid disappearing.
describe('TeamsPage', () => {
  it('renders the page title and at least one team card link', () => {
    render(
      <MemoryRouter>
        <TeamsPage />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', { name: 'Unsere Teams', level: 1 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Von Rising bis Prime' }),
    ).toBeInTheDocument();

    // Each TeamCard renders a "Mehr erfahren →" link; the grid must not be empty.
    const cardLinks = screen.getAllByRole('link', { name: /Mehr erfahren/ });
    expect(cardLinks.length).toBeGreaterThan(0);
  });
});
