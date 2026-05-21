import { type Role } from '../../types/teams';

interface RoleBadgeProps {
  role: Role;
}

const roleLabels: Record<Role, string> = {
  Top:     'Top',
  Jungle:  'Jungle',
  Mid:     'Mid',
  ADC:     'ADC',
  Support: 'Support',
};

export default function RoleBadge({ role }: RoleBadgeProps) {
  return (
    <span className={`role-badge role-badge--${role}`}>
      {roleLabels[role]}
    </span>
  );
}
