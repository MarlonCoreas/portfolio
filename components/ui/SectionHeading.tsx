type Props = { id: string; eyebrow: string; title: string; intro?: string; wide?: boolean };

export default function SectionHeading({ id, eyebrow, title, intro, wide = false }: Props) {
  return (
    <div className={`section-heading${wide ? " section-heading-wide" : ""}`} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <div>
        <h2 id={id}>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </div>
  );
}
