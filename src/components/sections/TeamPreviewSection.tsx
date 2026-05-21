import { teams } from '../../data/teams';
import TeamCard from '../teams/TeamCard';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function TeamPreviewSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          label="Unsere Teams"
          title="Drei Kader. Eine Organisation."
          sub="Von der Nachwuchsförderung bis zur Prime League – Moon Esports steht auf jedem Level des Wettbewerbs."
        />
        <div className="teams-grid">
          {teams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
        <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
          <Button to="/teams" variant="ghost">Alle Teams ansehen</Button>
        </div>
      </div>
    </section>
  );
}
