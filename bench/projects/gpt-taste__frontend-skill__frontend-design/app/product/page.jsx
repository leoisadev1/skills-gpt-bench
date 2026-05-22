import Link from "next/link";
import { ArrowRight, Check, PackageCheck } from "lucide-react";
import { MotionFrame } from "../components/MotionFrame";

const variants = [
  ["Type 42 Core", "Black anodized body, 40mm fixed lens, all-weather sling.", "$2,840"],
  ["Type 42 Field", "Sealed brass controls, 40mm lens, field case, two batteries.", "$3,480"],
  ["Type 42 Survey", "Titanium top plate, geotag module, high-capacity back, hard case.", "$4,260"],
];

const materials = [
  ["Anodized alloy", "Matte shell with sealed edges for wet field work.", "linear-gradient(135deg, #1d1b19, #5f5b54)"],
  ["Brass controls", "Glove-readable dials that patina without losing grip.", "linear-gradient(135deg, #7b542f, #d4a05d)"],
  ["Pebbled grip", "Replaceable side panels for cold or dusty sites.", "linear-gradient(135deg, #312922, #7b6b5d)"],
  ["Sapphire glass", "Low-glare cover over finder, display, and top meter.", "linear-gradient(135deg, #c4d4cf, #596c68)"],
];

const specs = [
  ["Sensor", "42 MP stacked field-calibrated CMOS"],
  ["Lens mount", "Fixed Meridian 40mm f/2.2 or sealed M-bayonet adapter"],
  ["Weather rating", "IP64 body, IP66 controls, -10 C to 45 C operation"],
  ["Storage", "Dual UHS-II SD slots with mirrored capture option"],
  ["Power", "Two 2,800 mAh field cells, USB-C direct charge"],
  ["Weight", "742 g body only, 1,040 g with field kit"],
];

const accessories = ["Waxed field roll", "Weather hood", "Dual battery sleeve", "Calibration card"];

export default function ProductPage() {
  return (
    <main className="product-page overflow-safe">
      <MotionFrame />
      <nav className="product-nav" aria-label="Meridian product">
        <Link href="/product" className="brand-lockup">
          <span className="brand-mark">42</span>
          <span>Meridian Type 42</span>
        </Link>
        <Link href="/" className="dark-button">
          Routes <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </nav>

      <section className="product-hero" aria-labelledby="product-title">
        <div className="product-heading">
          <h1 id="product-title">A field camera built like survey equipment.</h1>
          <p>
            Meridian Type 42 is for buyers who need a durable body, precise controls, and a configuration that matches the terrain before the first assignment.
          </p>
          <div className="hero-actions">
            <a className="dark-button" href="#configure">
              Choose configuration <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="ghost-button" href="#specs" style={{ color: "#181614", borderColor: "rgba(24,22,20,.24)" }}>
              Compare specs
            </a>
          </div>
        </div>
        <div className="camera-stage motion-scale" aria-label="Meridian Type 42 field camera">
          <div className="camera-object" aria-hidden="true" />
        </div>
      </section>

      <section className="product-section" aria-labelledby="variant-title">
        <div className="section-heading" style={{ color: "#181614" }}>
          <h2 id="variant-title">Compare the Type 42 variants.</h2>
          <p style={{ color: "#60564f" }}>
            Pick the body and kit level by how much weather sealing, location data, and field carry hardware the assignment demands.
          </p>
        </div>
        <div className="variant-grid">
          {variants.map(([name, copy, price], index) => (
            <article className={index === 1 ? "variant-card featured motion-rise" : "variant-card motion-rise"} key={name}>
              <h3>{name}</h3>
              <p>{copy}</p>
              <span className="price">{price}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="product-section" aria-labelledby="material-title">
        <div className="section-heading" style={{ color: "#181614" }}>
          <h2 id="material-title">Materials you can inspect before buying.</h2>
          <p style={{ color: "#60564f" }}>
            The camera feels tangible because the purchase path exposes finish, grip, glass, and serviceable components.
          </p>
        </div>
        <div className="material-grid">
          {materials.map(([name, copy, swatch]) => (
            <article className="material-card motion-scale" key={name}>
              <div className="material-swatch" style={{ "--swatch": swatch }} />
              <h3>{name}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="specs" className="product-section" aria-labelledby="spec-title">
        <div className="specs-config-grid">
          <div>
            <div className="section-heading" style={{ display: "block", color: "#181614", marginBottom: 24 }}>
              <h2 id="spec-title">Technical specifications.</h2>
            </div>
            <table className="spec-table">
              <tbody>
                {specs.map(([name, value]) => (
                  <tr key={name}>
                    <th scope="row">{name}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <aside id="configure" className="config-panel" aria-labelledby="config-title">
            <h2 id="config-title">Build your kit</h2>
            <p>Current selection: Type 42 Field, graphite body, fixed 40mm lens, field roll included.</p>
            <h3>Finish</h3>
            <div className="option-row" role="group" aria-label="Finish options">
              <button type="button" className="active">Graphite</button>
              <button type="button">Sand</button>
            </div>
            <h3>Lens</h3>
            <div className="option-row" role="group" aria-label="Lens options">
              <button type="button" className="active">40mm fixed</button>
              <button type="button">M adapter</button>
            </div>
            <a className="button" href="mailto:sales@meridian.example">
              Request availability
            </a>
          </aside>
        </div>
      </section>

      <section className="product-section" aria-labelledby="accessory-title">
        <div className="section-heading" style={{ color: "#181614" }}>
          <h2 id="accessory-title">Included accessories.</h2>
          <p style={{ color: "#60564f" }}>Each item has a clear job in the field kit, from weather handling to calibration checks.</p>
        </div>
        <div className="accessory-grid">
          {accessories.map((item) => (
            <article className="accessory-card motion-rise" key={item}>
              <PackageCheck size={28} aria-hidden="true" />
              <h3>{item}</h3>
              <p>
                <Check size={16} aria-hidden="true" /> Included with Type 42 Field and Survey configurations.
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
