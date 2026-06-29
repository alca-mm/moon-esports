import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import TeamPreviewSection from './TeamPreviewSection';
import { teams } from '../../data/teams';

// Smoke test: TeamPreviewSection is data-driven from src/data/teams.ts. It must
// render a TeamCard for each team in the data array. MemoryRouter required for Link.
// Regressions pinned: section heading, first team name, "Alle Teams ansehen" link,
// and one "Mehr erfahren →" link per team.
describe('TeamPreviewSection', () => {
  it('renders the section heading, every team card, and the footer CTA', () => {
    render(
      <MemoryRouter>
        <TeamPreviewSection />
      </MemoryRouter>,
    );

    // SectionHeading title rendered as h2
    expect(
      screen.getByRole('heading', {
        name: 'Drei Kader. Eine Organisation.',
        level: 2,
      }),
    ).toBeInTheDocument();

    // The first team name confirms at least one TeamCard mounted from data
    expect(screen.getByText(teams[0].name)).toBeInTheDocument();

    // "Alle Teams ansehen" CTA link at the bottom of the section
    expect(
      screen.getByRole('link', { name: 'Alle Teams ansehen' }),
    ).toBeInTheDocument();

    // Each TeamCard renders a "Mehr erfahren →" link — one per team in data
    const teamLinks = screen.getAllByText('Mehr erfahren →');
    expect(teamLinks).toHaveLength(teams.length);
  });
});
