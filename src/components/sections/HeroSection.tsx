import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__stars" aria-hidden="true" />

      <div className="hero__orb-wrap" aria-hidden="true">
        <div className="hero__orb" />
        <div className="hero__ring" />
        <div className="hero__ring-2" />
      </div>

      <div className="container">
        <div className="hero__content">
          <div className="hero__eyebrow anim-1">League of Legends · DACH</div>
          <h1 className="hero__title anim-2">
            <span className="hero__title-name">MOON</span>
            <span className="hero__title-org">ESPORTS</span>
          </h1>
          <p className="hero__subtitle anim-3">
            Drei Teams. Eine Vision. Wir entwickeln die nächste Generation
            professioneller LoL-Spieler in der DACH-Region.
          </p>
          <div className="hero__actions anim-4">
            <Button to="/teams" variant="primary">Unsere Teams</Button>
            <Button to="/about" variant="ghost">Mehr erfahren</Button>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
