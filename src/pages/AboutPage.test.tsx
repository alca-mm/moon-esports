import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

// Smoke test: AboutPage must render the main page heading, the "Was uns antreibt"
// values section heading (via SectionHeading), and all four value card titles.
// Regressions pinned: heading text, section label, and value grid content.
describe('AboutPage', () => {
  it('renders the page heading, values section heading, and all four value titles', () => {
    render(
      <MemoryRouter>
        <AboutPage />
      </MemoryRouter>,
    );

    // Page h1 – disambiguated via level from any nav/footer text
    expect(
      screen.getByRole('heading', { name: 'Über Moon Esports', level: 1 }),
    ).toBeInTheDocument();

    // SectionHeading renders the title as h2
    expect(
      screen.getByRole('heading', { name: 'Was uns antreibt', level: 2 }),
    ).toBeInTheDocument();

    // All four value card titles must be in the DOM
    expect(screen.getByText('Leistung')).toBeInTheDocument();
    expect(screen.getByText('Teamgeist')).toBeInTheDocument();
    expect(screen.getByText('Entwicklung')).toBeInTheDocument();
    expect(screen.getByText('Integrität')).toBeInTheDocument();
  });
});
