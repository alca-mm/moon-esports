interface SectionHeadingProps {
  label?: string;
  title: string;
  sub?: string;
  centered?: boolean;
}

export default function SectionHeading({ label, title, sub, centered = false }: SectionHeadingProps) {
  const style = centered ? { textAlign: 'center' as const } : undefined;
  return (
    <div className="section-heading" style={style}>
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {sub && <p className="section-heading__sub" style={centered ? { margin: '0 auto' } : undefined}>{sub}</p>}
    </div>
  );
}
