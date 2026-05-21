import PageShell from '../components/layout/PageShell';
import HeroSection from '../components/sections/HeroSection';
import TeamPreviewSection from '../components/sections/TeamPreviewSection';
import AboutPreviewSection from '../components/sections/AboutPreviewSection';
import ContactCtaSection from '../components/sections/ContactCtaSection';

export default function HomePage() {
  return (
    <PageShell>
      <HeroSection />
      <div className="divider" />
      <TeamPreviewSection />
      <div className="divider" />
      <AboutPreviewSection />
      <div className="divider" />
      <ContactCtaSection />
    </PageShell>
  );
}
