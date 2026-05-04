type LinkItem = {
  href: string;
  title: string;
  text: string;
};

export default function RelatedLinks({ links }: { links: LinkItem[] }) {
  return (
    <section className="section related-section">
      <div className="container">
        <div className="section-head centered-head">
          <span className="section-kicker">También te puede interesar</span>
          <h2>Servicios relacionados</h2>
        </div>

        <div className="related-grid">
          {links.map((item) => (
            <a href={item.href} className="related-card" key={item.href}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span>Ver servicio</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
