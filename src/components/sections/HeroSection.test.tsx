import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import HeroSection from './HeroSection';

// Smoke test: HeroSection renders the eyebrow label, hero subtitle copy, and both
// CTA links. MemoryRouter is required because Button renders Link for the to prop.
// Regressions pinned: game/region label, tagline, and CTA link hrefs.
describe('HeroSection', () => {
  it('renders the eyebrow, subtitle, and both CTA links', () => {
    render(
      <MemoryRouter>
        <HeroSection />
      </MemoryRouter>,
    );

    // Game and region label above the hero title
    expect(screen.getByText('League of Legends · DACH')).toBeInTheDocument();

    // Hero tagline — matches the start of the longer subtitle paragraph
    expect(screen.getByText(/Drei Teams\. Eine Vision\./)).toBeInTheDocument();

    // Primary CTA links and their target routes
    const teamsLink = screen.getByRole('link', { name: 'Unsere Teams' });
    expect(teamsLink).toBeInTheDocument();
    expect(teamsLink.getAttribute('href')).toContain('/teams');

    const aboutLink = screen.getByRole('link', { name: 'Mehr erfahren' });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink.getAttribute('href')).toContain('/about');
  });
});
