import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

// Smoke test: HomePage composes several sections inside PageShell (Navbar + Footer
// both use router links), so it must render inside a Router without crashing and
// expose stable anchor content from the hero and the team-preview section.
describe('HomePage', () => {
  it('renders the hero subtitle and the team-preview heading without crashing', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    // Hero copy is a stable anchor for the landing section.
    expect(screen.getByText(/Drei Teams\. Eine Vision\./)).toBeInTheDocument();
    // Team preview section heading proves the data-driven section mounted.
    expect(
      screen.getByRole('heading', { name: 'Drei Kader. Eine Organisation.' }),
    ).toBeInTheDocument();
  });
});
