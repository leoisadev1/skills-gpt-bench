import { MainNav } from "./components/shared";
import { benchmarkBriefs, primaryRoutes } from "./lib/content";

const routeSummaries = {
  "/landing": "Compliance finance automation with a bold brand signal, proof, depth, and conversion.",
  "/dashboard": "A same-day logistics control room with live health, exceptions, capacity, and inspection.",
  "/product": "A tangible field-camera detail page for comparing variants, materials, specs, and accessories.",
  "/suite": "A cohesive Northstar Atlas mini-site with page-specific travel research workflows."
};

export default function HomePage() {
  return (
    <main className="page-dark index-page">
      <MainNav tone="dark" />
      <section className="wide-shell index-hero">
        <div data-reveal>
          <p className="eyebrow">GPT Taste plus Frontend Skill</p>
          <h1>Frontend benchmark surfaces.</h1>
        </div>
        <p data-reveal>
          Four production-shaped Next.js app-router routes built from the same prompt source, with one additional
          mini-site navigation branch for Northstar Atlas.
        </p>
      </section>

      <section className="wide-shell route-grid" aria-label="Benchmark routes">
        {primaryRoutes.map((route) => (
          <a key={route.href} className="route-tile" href={route.href} data-reveal>
            <span>{route.label}</span>
            <div>
              <h2>{route.href}</h2>
              <p>{routeSummaries[route.href]}</p>
            </div>
          </a>
        ))}
      </section>

      <section className="section-shell chapter" data-reveal>
        <p className="scrub-line" data-scrub-group>
          {benchmarkBriefs.landing.split(" ").slice(0, 18).map((word, index) => (
            <span key={`${word}-${index}`} data-scrub-word>
              {word}
            </span>
          ))}
        </p>
      </section>
    </main>
  );
}
