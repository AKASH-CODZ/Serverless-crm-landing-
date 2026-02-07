import "@/styles/curated-services.css";

const services = [
  {
    title: "Runway Talent Curation",
    tagline: "Precision casting for fashion-forward brands.",
    image: "/assets/services/Our Curated Experiences/WhatsApp Image 2026-01-30 at 6.24.19 PM.jpeg",
  },
  {
    title: "Rising Voices Platform",
    tagline: "Where emerging artists rise.",
    image: "/assets/services/Our Curated Experiences/WhatsApp Image 2026-01-30 at 6.24.19 PM-2.jpeg",
  },
  {
    title: "Signature Live Experiences",
    tagline: "Curated moments. Elevated impact.",
    image: "/assets/services/Our Curated Experiences/WhatsApp Image 2026-01-30 at 6.24.19 PM-3.jpeg",
  },
  {
    title: "Brand Connect Studio",
    tagline: "Strategic collaborations that matter.",
    image: "/assets/services/Our Curated Experiences/WhatsApp Image 2026-01-30 at 6.24.20 PM.jpeg",
  },
  {
    title: "Talent Scouting & Discovery",
    tagline: "Unearthing the next generation of sound.",
    image: "/assets/services/Our Curated Experiences/WhatsApp Image 2026-01-30 at 6.24.20 PM-2.jpeg",
  },
  {
    title: "Creative Experience Management",
    tagline: "Designing experiences that leave a mark.",
    image: "/assets/services/Our Curated Experiences/WhatsApp Image 2026-01-30 at 6.24.20 PM-3.jpeg",
  },
];

export default function CuratedServices() {
  return (
    <section className="curated-services">
      <h2>Our Curated Experiences</h2>
      <p className="subtitle">
        Crafted at the intersection of fashion, talent, and culture.
      </p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="talent-card" key={index}>
            <div className="talent-card__image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="talent-card__content">
              <h3>{service.title}</h3>
              <p>{service.tagline}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}