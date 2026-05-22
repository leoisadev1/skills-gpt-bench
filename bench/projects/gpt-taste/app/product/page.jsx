import Link from "next/link";
import { SiteNav } from "../../components/SiteNav";
import { benchmarkPrompts } from "../../lib/prompts";

const variants = [
  { name: "Field Black", price: "$2,850", finish: "Ceramic matte shell", lens: "42mm f/2.8 sealed prime" },
  { name: "Survey Silver", price: "$3,120", finish: "Brushed alloy top plate", lens: "42mm f/2.8 sealed prime" },
  { name: "Expedition Green", price: "$3,340", finish: "Textured mineral composite", lens: "42mm f/2.8 low-glare prime" },
];

const specs = [
  ["Sensor", "Full-frame 38MP field-tuned CMOS"],
  ["Weather sealing", "IP64 body, sealed command wheels"],
  ["Battery", "620 shots with cold-weather reserve"],
  ["Storage", "Dual UHS-II card slots"],
  ["Viewfinder", "5.8M dot OLED with red-light mode"],
  ["Weight", "642g with field grip"],
];

export default function ProductPage() {
  return (
    <main className="product-page overflow-guard">
      <SiteNav brand="Meridian Type 42" cta={{ href: "#configure", label: "Choose build" }} />

      <section className="product-hero section-shell">
        <div className="product-hero__copy">
          <h1>
            Meridian Type 42 gives field teams a camera that feels machined, sealed, and ready
            <span
              className="inline-image inline-image--camera"
              style={{ backgroundImage: "url(https://picsum.photos/seed/meridian-camera-material/320/160)" }}
              aria-hidden="true"
            />
          </h1>
          <p>{benchmarkPrompts.product}</p>
          <div className="hero-actions">
            <Link href="#variants" className="button button--primary">Compare variants</Link>
            <Link href="#specs" className="button button--ghost">Read specs</Link>
          </div>
        </div>
        <div className="camera-stage" data-gsap-image aria-label="Meridian Type 42 field camera rendering">
          <div className="camera-body">
            <span className="camera-lens" />
            <span className="camera-grip" />
            <span className="camera-plate" />
          </div>
        </div>
      </section>

      <section id="variants" className="section-shell variants-section">
        <div className="section-intro">
          <h2 data-reveal-words>Three bodies, one field system, each tuned for a different kind of buyer.</h2>
          <p>Compare finishes, optics, and handling without slipping into decorative product filler.</p>
        </div>
        <div className="variant-grid">
          {variants.map((variant) => (
            <article key={variant.name} className="variant-card group-card" data-stack-card>
              <div className="variant-card__image" data-gsap-image aria-hidden="true" />
              <h3>{variant.name}</h3>
              <strong>{variant.price}</strong>
              <p>{variant.finish}</p>
              <small>{variant.lens}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell materials-section">
        <div className="materials-copy">
          <h2>Inspect the materials before choosing a configuration.</h2>
          <p>
            The Type 42 is built around a tactile shell, glove-friendly controls, and serviceable field
            parts. Its layout helps a buyer understand what they will touch every day.
          </p>
        </div>
        <div className="material-accordion" aria-label="Material inspection">
          {[
            ["Top plate", "A single alloy slab with etched exposure scales and sealed dial wells."],
            ["Grip", "Replaceable mineral composite with a raised index ridge for wet conditions."],
            ["Lens ring", "Damped mechanical ring with a knurled texture that stays usable in gloves."],
            ["Door seals", "Orange service seals make wear visible before a shoot is compromised."],
          ].map(([title, body]) => (
            <article key={title} className="accordion-slice group-card">
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="specs" className="section-shell specs-section">
        <dl className="specs-table">
          {specs.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <aside className="accessory-panel" data-stack-card>
          <h2>Included in the field kit</h2>
          <ul>
            <li>Weather-sealed 42mm prime hood</li>
            <li>Two cold-rated battery packs</li>
            <li>Field grip, wrist strap, and card vault</li>
            <li>Foam-cut transit case with accessory rail</li>
          </ul>
        </aside>
      </section>

      <section id="configure" className="conversion-section product-config">
        <div>
          <h2>Choose a Meridian Type 42 build that matches the work.</h2>
          <p>Start with a body finish, add field accessories, and keep the comparison visible while you decide.</p>
        </div>
        <div className="config-actions" aria-label="Configuration choices">
          <button type="button">Field Black</button>
          <button type="button">Survey Silver</button>
          <button type="button">Expedition Green</button>
        </div>
      </section>
    </main>
  );
}
