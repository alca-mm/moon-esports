import PageShell from '../components/layout/PageShell';
import TeamCard from '../components/teams/TeamCard';
import SectionHeading from '../components/ui/SectionHeading';
import { teams } from '../data/teams';

export default function TeamsPage() {
  return (
    <PageShell>
      <div className="page-hero">
        <div className="container">
          <span className="page-hero__eyebrow">League of Legends · DACH</span>
          <h1 className="page-hero__title">Unsere Teams</h1>
          <p className="page-hero__sub">
            Drei Kader auf verschiedenen Leistungsebenen – verbunden durch dieselben
            Werte und denselben Antrieb.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionHeading
            label="Alle Teams"
            title="Von Rising bis Prime"
            sub="Jedes Team steht für eine andere Stufe des Wettbewerbs – aber alle tragen das Moon-Esports-Trikot mit Stolz."
          />
          <div className="teams-grid">
            {teams.map((team) => (
              <TeamCard key={team.id} team={team} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
