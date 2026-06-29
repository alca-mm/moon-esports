import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import AboutPreviewSection from './AboutPreviewSection';

// Smoke test: AboutPreviewSection renders the section heading, all four stat labels,
// and the "Unsere Geschichte" CTA link. MemoryRouter required for Button→Link.
// Regressions pinned: section title, stat label text, and CTA link presence.
describe('AboutPreviewSection', () => {
  it('renders the section heading, all stat labels, and the history CTA link', () => {
    render(
      <MemoryRouter>
        <AboutPreviewSection />
      </MemoryRouter>,
    );

    // SectionHeading title rendered as h2
    expect(
      screen.getByRole('heading', { name: 'Mehr als ein Esports-Team.', level: 2 }),
    ).toBeInTheDocument();

    // All four stat labels below the introductory copy
    expect(screen.getByText('Aktive Teams')).toBeInTheDocument();
    expect(screen.getByText('Spieler')).toBeInTheDocument();
    expect(screen.getByText('Gegründet')).toBeInTheDocument();
    expect(screen.getByText('Region')).toBeInTheDocument();

    // CTA link to the full About page
    expect(
      screen.getByRole('link', { name: 'Unsere Geschichte' }),
    ).toBeInTheDocument();
  });
});
