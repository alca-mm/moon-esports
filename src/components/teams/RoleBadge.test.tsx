import { render, screen } from '@testing-library/react';
import { type Role } from '../../types/teams';
import RoleBadge from './RoleBadge';

describe('RoleBadge', () => {
  it('renders the label and role-specific class for a valid role', () => {
    const { container } = render(<RoleBadge role="Mid" />);

    expect(screen.getByText('Mid')).toBeInTheDocument();
    expect(container.querySelector('.role-badge--Mid')).not.toBeNull();
  });

  it('renders a badge for every supported role', () => {
    const roles: Role[] = ['Top', 'Jungle', 'Mid', 'ADC', 'Support'];

    for (const role of roles) {
      const { container, unmount } = render(<RoleBadge role={role} />);
      expect(container.querySelector(`.role-badge--${role}`)).not.toBeNull();
      unmount();
    }
  });
});
