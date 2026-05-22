import { ButtonLink, TopNav, icons } from "../components";

const variants = [
  ["42 Field", "Brass top plate", "35mm fixed", "$2,840"],
  ["42 Survey", "Titanium shell", "28mm wide", "$3,260"],
  ["42 Night", "Ceramic black", "50mm low light", "$3,580"]
];

const specs = [
  ["Sensor", "42 MP stacked CMOS"],
  ["Weather seal", "IP64 dust and spray"],
  ["Battery", "620 frames rated"],
  ["Storage", "Dual CFexpress Type A"],
  ["Weight", "612 g with strap lugs"]
];

export default function ProductPage() {
  const { Aperture, Camera, CheckCircle } = icons;

  return (
    <main className="product-page">
      <TopNav
        brand="Meridian Type 42"
        tone="light"
        links={[
          { href: "/landing", label: "Lumen" },
          { href: "/dashboard", label: "Harbor" },
          { href: "/suite", label: "Northstar" }
        ]}
        cta={{ href: "#configure", label: "Configure" }}
      />

      <section className="camera-hero">
        <div className="camera-copy" data-reveal>
          <p className="brand-kicker">Meridian Type 42</p>
          <h1>A field camera built for bad weather and exact choices.</h1>
          <p>
            Compare bodies, materials, optics, and accessories before choosing the kit that will live in your pack.
          </p>
          <div className="hero-actions">
            <ButtonLink href="#variants">Compare variants</ButtonLink>
            <ButtonLink href="#configure" variant="secondary">
              Choose kit
            </ButtonLink>
          </div>
        </div>
        <div className="camera-stage" aria-label="Meridian Type 42 field camera visual" data-scale>
          <div className="camera-strap" aria-hidden="true" />
          <div className="camera-body">
            <span className="camera-viewfinder" />
            <span className="camera-badge">M42</span>
            <span className="camera-lens">
              <span />
            </span>
            <span className="camera-grip" />
          </div>
          <div className="material-chip material-chip--brass">brass edge</div>
          <div className="material-chip material-chip--seal">sealed body</div>
        </div>
      </section>

      <section className="variant-section" id="variants">
        <div className="section-copy" data-reveal>
          <p className="eyebrow">Variants</p>
          <h2>Three builds, one mechanical core.</h2>
        </div>
        <div className="variant-table" data-reveal>
          {variants.map(([name, material, lens, price]) => (
            <article key={name}>
              <Camera size={22} weight="duotone" aria-hidden="true" />
              <strong>{name}</strong>
              <span>{material}</span>
              <span>{lens}</span>
              <b>{price}</b>
            </article>
          ))}
        </div>
      </section>

      <section className="materials-section">
        <div className="material-panel material-panel--image" data-scale />
        <div className="material-panel" data-reveal>
          <p className="eyebrow">Materials</p>
          <h2>Cold metal, raised controls, and a skin that can take dust.</h2>
          <p>
            The Type 42 uses a magnesium frame, replaceable grip wrap, brass wear points, and gasketed doors so field repair does not mean full retirement.
          </p>
        </div>
      </section>

      <section className="spec-accessory-grid">
        <div className="spec-panel" data-reveal>
          <h2>Specs</h2>
          <dl>
            {specs.map(([term, detail]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="accessory-panel" data-reveal>
          <h2>Included accessories</h2>
          {["Waxed canvas strap", "Weather cap set", "Field charger", "Calibration card"].map((item) => (
            <p key={item}>
              <CheckCircle size={18} weight="fill" aria-hidden="true" />
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="configure-section" id="configure" data-reveal>
        <div>
          <Aperture size={34} weight="duotone" aria-hidden="true" />
          <h2>Choose a Type 42 configuration.</h2>
          <p>Start with the Field body, swap lens modules, then add the accessory rail only if you need external meters.</p>
        </div>
        <form className="configurator">
          <label>
            Body finish
            <select defaultValue="brass">
              <option value="brass">Brass top plate</option>
              <option value="titanium">Titanium shell</option>
              <option value="ceramic">Ceramic black</option>
            </select>
            <span>Choose the exterior material and wear profile.</span>
          </label>
          <label>
            Lens module
            <select defaultValue="35">
              <option value="35">35mm fixed</option>
              <option value="28">28mm wide</option>
              <option value="50">50mm low light</option>
            </select>
            <span>Modules ship calibrated to the selected body.</span>
          </label>
          <button type="button">Save configuration</button>
        </form>
      </section>
    </main>
  );
}
