import Link from "next/link";
import {
  Aperture,
  ArrowRight,
  Backpack,
  BatteryCharging,
  Camera,
  CheckCircle,
  SlidersHorizontal
} from "@phosphor-icons/react/ssr";

const specs = [
  ["Sensor", "42 MP stacked full-frame"],
  ["Weather seal", "IP56 field gasket"],
  ["Body", "Magnesium shell with basalt grip"],
  ["Storage", "Dual CFexpress Type B"],
  ["Battery", "740 exposures cold-rated"],
  ["Weight", "812 g body only"]
];

const accessories = ["Field strap", "Rain hood", "Graphite lens cap", "Dual charger", "Pelican insert"];

export default function ProductPage() {
  return (
    <main className="meridian-page overflow-guard">
      <header className="meridian-nav" data-reveal>
        <Link href="/" className="meridian-brand" aria-label="Go to benchmark index">
          <Camera size={24} weight="duotone" aria-hidden="true" />
          <span>Meridian Works</span>
        </Link>
        <nav aria-label="Product detail navigation">
          <Link href="#variants">Variants</Link>
          <Link href="#materials">Materials</Link>
          <Link href="#configure">Configure</Link>
        </nav>
      </header>

      <section className="product-hero">
        <div className="product-copy" data-reveal>
          <p className="quiet-label">Meridian Type 42 field camera</p>
          <h1>Built for field teams who need proof, not pampering.</h1>
          <p>
            Compare finishes, inspect the working materials, review practical specs, and choose a kit
            that can survive travel, dust, rain, and a week of hard notes.
          </p>
          <div className="hero-actions">
            <Link href="#configure" className="button button-dark">
              Choose configuration
              <ArrowRight size={18} weight="bold" aria-hidden="true" />
            </Link>
            <Link href="#materials" className="button button-light">Inspect materials</Link>
          </div>
        </div>
        <div className="camera-stage" aria-label="Meridian Type 42 camera visual" data-image-pulse>
          <div className="camera-body">
            <span className="camera-prism" />
            <span className="camera-lens" />
            <span className="camera-grip" />
            <span className="camera-mark">42</span>
          </div>
        </div>
      </section>

      <section className="variant-section" id="variants">
        <div className="section-heading" data-reveal>
          <p className="quiet-label">Variant comparison</p>
          <h2>Three bodies, one field system.</h2>
        </div>
        <div className="variant-grid">
          {[
            ["Obsidian field", "Low-reflection black shell for documentary work.", "$3,820"],
            ["Survey nickel", "Brushed alloy top plate with higher scratch visibility.", "$3,940"],
            ["Timber grip", "Warm composite grip and glove-safe controls.", "$4,120"]
          ].map(([name, body, price]) => (
            <article className="variant-card" key={name} data-stack-card>
              <div className="variant-swatch" />
              <h3>{name}</h3>
              <p>{body}</p>
              <strong>{price}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="material-section" id="materials">
        <div className="material-image" data-image-pulse />
        <div className="material-copy" data-reveal>
          <p className="quiet-label">Material inspection</p>
          <h2>Texture you can read before you buy.</h2>
          <div className="material-list">
            {[
              ["Basalt grip", "Fine-grain, glove-safe, replaceable after field wear."],
              ["Sealed dials", "Raised knurling with drain cuts around each control."],
              ["Matte top plate", "No polished surface where sun glare would punish focus."]
            ].map(([title, body]) => (
              <article key={title}>
                <CheckCircle size={19} weight="fill" aria-hidden="true" />
                <div>
                  <strong>{title}</strong>
                  <p>{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="spec-config" id="configure">
        <div className="spec-panel" data-reveal>
          <div className="panel-title">
            <Aperture size={20} weight="duotone" aria-hidden="true" />
            <h2>Specifications</h2>
          </div>
          <dl className="spec-list">
            {specs.map(([term, detail]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside className="config-panel" data-reveal aria-label="Camera configuration">
          <div className="panel-title">
            <SlidersHorizontal size={20} weight="duotone" aria-hidden="true" />
            <h2>Configure Type 42</h2>
          </div>
          <div className="choice-group" aria-label="Finish choices">
            <button type="button" className="is-selected">Obsidian field</button>
            <button type="button">Survey nickel</button>
            <button type="button">Timber grip</button>
          </div>
          <div className="kit-lines">
            <p><BatteryCharging size={18} weight="duotone" aria-hidden="true" /> Expedition battery kit included</p>
            <p><Backpack size={18} weight="duotone" aria-hidden="true" /> Field bag insert selected</p>
          </div>
          <ul className="accessory-list" aria-label="Included accessories">
            {accessories.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <button type="button" className="button button-dark">Reserve configuration</button>
        </aside>
      </section>
    </main>
  );
}
