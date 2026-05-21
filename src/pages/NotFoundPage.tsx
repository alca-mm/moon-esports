import PageShell from '../components/layout/PageShell';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <PageShell>
      <div className="not-found">
        <div className="not-found__inner">
          <span className="not-found__code">404</span>
          <h1 className="not-found__title">Seite nicht gefunden</h1>
          <p className="not-found__sub">
            Diese Seite existiert nicht oder wurde verschoben.
          </p>
          <Button to="/" variant="primary">Zur Startseite</Button>
        </div>
      </div>
    </PageShell>
  );
}
