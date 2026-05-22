import {
  Aperture,
  ArrowRight,
  BatteryCharging,
  CheckCircle,
  Crosshair,
  Drop,
  Ruler,
} from "@phosphor-icons/react/dist/ssr";

const variants = [
  ["Field Kit", "$2,840", "Weather-sealed body, 35mm prime, canvas wrap"],
  ["Survey Kit", "$3,460", "Rangefinder module, carbon grip, dual battery bay"],
  ["Archive Kit", "$4,120", "Macro rail, color target, sealed transport case"],
];

const specs = [
  ["Sensor", "42 MP stacked field sensor"],
  ["Body", "Magnesium shell with basalt composite rear plate"],
  ["Weather rating", "IP54 dust and spray resistance"],
  ["Storage", "Dual UHS-II card slots"],
  ["Weight", "684 g body only"],
  ["Operating range", "-12 C to 48 C"],
];

export default function ProductPage() {
  return (
    <main className="meridian-page">
      <nav className="product-nav" aria-label="Meridian product">
        <a href="#variants">Variants</a>
        <a href="#materials">Materials</a>
        <a href="#specs">Specs</a>
        <a href="#configure">Configure</a>
      </nav>

      <section className="product-hero" aria-labelledby="product-title">
        <div className="camera-stage" aria-label="Meridian Type 42 field camera" role="img">
          <div className="camera-body">
            <div className="camera-top" />
            <div className="camera-lens">
              <span />
              <i />
            </div>
            <div className="camera-grip" />
            <div className="camera-mark">42</div>
          </div>
          <div className="callout callout-one">
            <Aperture size={18} weight="duotone" aria-hidden="true" />
            42 MP field sensor
          </div>
          <div className="callout callout-two">
            <Drop size={18} weight="duotone" aria-hidden="true" />
            sealed magnesium body
          </div>
        </div>

        <div className="product-copy">
          <p className="eyebrow">Meridian Type 42</p>
          <h1 id="product-title">A field camera built for rough evidence work.</h1>
          <p>
            Compare kits, inspect the materials, and choose a configuration that
            matches documentation crews, survey teams, and archival field work.
          </p>
          <a className="primary-action compact" href="#configure">
            Choose configuration <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="variants" className="variant-section" aria-labelledby="variant-title">
        <div>
          <p className="eyebrow">Variants</p>
          <h2 id="variant-title">Three kits, one Type 42 body.</h2>
        </div>
        <div className="variant-table" role="table" aria-label="Meridian Type 42 variants">
          {variants.map(([name, price, details]) => (
            <article role="row" key={name}>
              <strong role="cell">{name}</strong>
              <span role="cell">{price}</span>
              <p role="cell">{details}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="materials" className="material-section" aria-labelledby="materials-title">
        <div>
          <p className="eyebrow">Materials</p>
          <h2 id="materials-title">Tactile choices, not cosmetic names.</h2>
        </div>
        <div className="material-grid">
          <article>
            <span className="swatch basalt" aria-hidden="true" />
            <h3>Basalt composite</h3>
            <p>Matte rear plate with light abrasion texture for cold-weather grip.</p>
          </article>
          <article>
            <span className="swatch brass" aria-hidden="true" />
            <h3>Bronzed controls</h3>
            <p>Knurled dials with firm detents for gloved exposure adjustments.</p>
          </article>
          <article>
            <span className="swatch canvas" aria-hidden="true" />
            <h3>Waxed canvas wrap</h3>
            <p>Replaceable wrap that softens contact against survey vests and cases.</p>
          </article>
        </div>
      </section>

      <section id="specs" className="spec-config-grid">
        <div className="spec-block" aria-labelledby="spec-title">
          <p className="eyebrow">Specs</p>
          <h2 id="spec-title">Measured for buyers comparing field loadouts.</h2>
          <dl>
            {specs.map(([term, value]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <aside id="configure" className="configure-block" aria-labelledby="config-title">
          <p className="eyebrow">Configure</p>
          <h2 id="config-title">Build your kit</h2>
          <form>
            <fieldset>
              <legend>Body finish</legend>
              <label>
                <input type="radio" name="finish" defaultChecked /> Graphite basalt
              </label>
              <label>
                <input type="radio" name="finish" /> Field olive
              </label>
            </fieldset>
            <fieldset>
              <legend>Included accessories</legend>
              <label>
                <input type="checkbox" defaultChecked /> Weather hood
              </label>
              <label>
                <input type="checkbox" defaultChecked /> Dual battery tray
              </label>
              <label>
                <input type="checkbox" /> Rangefinder module
              </label>
            </fieldset>
            <button type="button" className="primary-action compact">
              Reserve Type 42
            </button>
          </form>
        </aside>
      </section>

      <section className="accessory-strip" aria-label="Included accessories">
        {[
          [Crosshair, "calibration target"],
          [BatteryCharging, "two field batteries"],
          [Ruler, "macro measure rail"],
          [CheckCircle, "sealed transit case"],
        ].map(([Icon, label]) => (
          <span key={label}>
            <Icon size={18} weight="duotone" aria-hidden="true" />
            {label}
          </span>
        ))}
      </section>
    </main>
  );
}
