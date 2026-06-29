import { render, screen } from '@testing-library/react';
import SectionHeading from './SectionHeading';

// Smoke test: SectionHeading is a pure presentational component (no router needed).
// Regressions pinned: the title always renders as an h2, and optional label/sub
// props are only rendered when supplied.
describe('SectionHeading', () => {
  it('renders the title as an h2 heading', () => {
    render(<SectionHeading title="Mein Titel" />);
    expect(
      screen.getByRole('heading', { name: 'Mein Titel', level: 2 }),
    ).toBeInTheDocument();
  });

  it('renders optional label and sub text when provided', () => {
    render(<SectionHeading label="LABEL" title="T" sub="SUBTEXT" />);
    expect(screen.getByText('LABEL')).toBeInTheDocument();
    expect(screen.getByText('SUBTEXT')).toBeInTheDocument();
  });
});
