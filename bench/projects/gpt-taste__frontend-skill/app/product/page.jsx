import { ArrowLink, MainNav, RouteFooter } from "../components/shared";

const variants = [
  ["Type 42 Field", "$3,840", "Weather-sealed body, 45mm rangefinder, graphite shell"],
  ["Type 42 Survey", "$4,260", "Titanium rails, calibrated scale back, dual plate kit"],
  ["Type 42 Alpine", "$4,780", "Insulated grip, brass controls, cold-rated shutter"]
];

const specs = [
  ["Sensor plane", "6x7 medium-format digital back ready"],
  ["Body", "Machined aluminum and sealed walnut laminate"],
  ["Lens mount", "M42 bayonet with field-lock collar"],
  ["Weight", "980g body, 1.32kg configured"],
  ["Battery", "22-hour metering pack"],
  ["Weather", "IP54 with sealed accessory port"]
];

const accessories = [
  "Graphite field case with compression strap",
  "Two plate adapters and lens cloth roll",
  "Weather hood, cable release, and spare grip"
];

export default function ProductPage() {
  return (
    <main className="page-light">
      <MainNav tone="light" active="/product" />

      <section className="wide-shell product-hero">
        <div className="product-copy" data-reveal>
          <p className="eyebrow">Meridian Type 42</p>
          <h1>Field camera control with materials you can feel.</h1>
          <p>
            The Type 42 is built for buyers comparing real configurations: body finish, rails, field accessories,
            metering kit, and weather behavior are visible before checkout.
          </p>
          <div className="hero-actions">
            <ArrowLink href="#configure" variant="dark">
              Choose configuration
            </ArrowLink>
            <ArrowLink href="/suite" variant="dark">
              View travel suite
            </ArrowLink>
          </div>
        </div>
        <div className="product-object" data-image-scale role="img" aria-label="Meridian Type 42 field camera" />
      </section>

      <section className="section-shell chapter" id="configure">
        <div className="config-grid">
          <aside className="config-panel" data-reveal>
            <h2>Choose the body that matches the field.</h2>
            <div className="variant-list" aria-label="Camera variants">
              {variants.map(([name, price, detail]) => (
                <button key={name} type="button">
                  <span>
                    <strong>{name}</strong>
                    <small>{detail}</small>
                  </span>
                  <strong>{price}</strong>
                </button>
              ))}
            </div>
            <div className="material-swatches" aria-label="Material swatches">
              <span style={{ background: "linear-gradient(135deg, #202624, #6f7670)" }} />
              <span style={{ background: "linear-gradient(135deg, #7b5b34, #d3b783)" }} />
              <span style={{ background: "linear-gradient(135deg, #201715, #8b6042)" }} />
            </div>
            <button type="button">Reserve Type 42 Field</button>
          </aside>

          <div className="detail-stack">
            <article className="detail-panel" data-stack-card>
              <h2>Materials</h2>
              <p>
                A bead-blasted aluminum core carries walnut laminate grip faces, a brass release collar, and
                replaceable rubber feet. Every contact point reads as a usable tool, not a render.
              </p>
            </article>
            <article className="detail-panel" data-stack-card>
              <h2>Specs</h2>
              <div className="spec-list">
                {specs.map(([label, value]) => (
                  <span key={label}>
                    {label}
                    <strong>{value}</strong>
                  </span>
                ))}
              </div>
            </article>
            <article className="detail-panel" data-stack-card>
              <h2>Included accessories</h2>
              <div className="spec-list">
                {accessories.map((item) => (
                  <span key={item}>
                    Included
                    <strong>{item}</strong>
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <RouteFooter
        title="Compare variants without leaving the object behind."
        body="The buying path keeps camera, material, specs, and accessory decisions in one stable layout."
        href="/suite"
        cta="Continue to Northstar Atlas"
        tone="light"
      />
    </main>
  );
}
