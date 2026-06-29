import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Button from './Button';

// Smoke test: Button polymorphically renders a <Link>, <a>, or <button> depending on
// props. Regressions pinned: correct element type per prop combination, base class
// presence, variant/size class application, and external link security attributes.
describe('Button', () => {
  it('renders a router Link with btn classes when given a to prop', () => {
    render(
      <MemoryRouter>
        <Button to="/teams">Go</Button>
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: 'Go' });
    expect(link).toBeInTheDocument();
    expect(link.className).toContain('btn');
    expect(link.className).toContain('btn--primary');
  });

  it('renders an external anchor with security attributes when given href', () => {
    render(<Button href="https://example.com">Ext</Button>);
    const link = screen.getByRole('link', { name: 'Ext' });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders a button element by default', () => {
    render(<Button onClick={() => {}}>Click</Button>);
    expect(screen.getByRole('button', { name: 'Click' })).toBeInTheDocument();
  });

  it('applies btn--ghost class for ghost variant', () => {
    render(
      <Button variant="ghost" onClick={() => {}}>
        Ghost
      </Button>,
    );
    expect(screen.getByRole('button', { name: 'Ghost' }).className).toContain(
      'btn--ghost',
    );
  });

  it('applies btn--sm class for sm size', () => {
    render(
      <Button size="sm" onClick={() => {}}>
        Small
      </Button>,
    );
    expect(screen.getByRole('button', { name: 'Small' }).className).toContain(
      'btn--sm',
    );
  });
});
