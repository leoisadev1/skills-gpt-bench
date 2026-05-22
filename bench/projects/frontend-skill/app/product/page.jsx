import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  Camera,
  Check,
  CircleDot,
  PackageCheck,
  Ruler,
  Shield,
} from "lucide-react";

const specs = [
  ["Body", "Sealed magnesium frame, 680g"],
  ["Sensor", "42MP full-frame field-tuned CMOS"],
  ["Lens mount", "Meridian M bayonet"],
  ["Weather rating", "IP56 dust and rain resistance"],
  ["Battery", "900-shot field cell, USB-C service port"],
];

const accessories = [
  "Waxed canvas field wrap",
  "Two high-density field cells",
  "Weather-sealed M42 adapter",
  "Printed exposure wheel guide",
];

const variants = [
  ["Trail", "$2,840", "Matte alloy, standard grip"],
  ["Survey", "$3,160", "Brass top plate, calibrated dials"],
  ["Archive", "$3,480", "Graphite shell, extended service plan"],
];

export default function ProductPage() {
  return (
    <main id="content" className="product-page">
      <nav className="product-nav" aria-label="Product navigation">
        <Link href="/" className="brand-mark dark">
          <Camera size={18} aria-hidden="true" />
          Meridian
        </Link>
        <Link href="#configure" className="text-link dark-link">
          Configure
        </Link>
      </nav>

      <section className="product-hero" aria-labelledby="product-title">
        <div className="product-media">
          <img
            src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1600&q=80"
            alt="A black field camera resting on a textured work surface"
          />
          <div className="material-strip" aria-label="Material highlights">
            <span>Magnesium</span>
            <span>Brass</span>
            <span>Graphite</span>
          </div>
        </div>
        <div className="product-summary">
          <p className="eyebrow">Field camera</p>
          <h1 id="product-title">Meridian Type 42</h1>
          <p>
            A sealed 42MP camera built for survey teams, archivists, and buyers
            who need the body, kit, and service plan to match the terrain.
          </p>
          <div className="product-actions">
            <a className="button primary product-button" href="#configure">
              Choose configuration <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button quiet-button" href="#specs">
              Compare specs
            </a>
          </div>
          <div className="tangible-facts" aria-label="Camera material facts">
            <span>
              <Shield size={18} aria-hidden="true" /> IP56 sealed
            </span>
            <span>
              <Ruler size={18} aria-hidden="true" /> 680g body
            </span>
            <span>
              <BatteryCharging size={18} aria-hidden="true" /> 900 shots
            </span>
          </div>
        </div>
      </section>

      <section className="variant-section" id="configure" aria-labelledby="configure-title">
        <div className="section-heading">
          <p className="eyebrow">Configure</p>
          <h2 id="configure-title">Choose the build that matches the assignment.</h2>
        </div>
        <form className="configuration-form">
          <fieldset>
            <legend>Variant</legend>
            <div className="variant-grid">
              {variants.map(([name, price, detail], index) => (
                <label className="variant-option" key={name}>
                  <input type="radio" name="variant" defaultChecked={index === 1} />
                  <span>
                    <strong>{name}</strong>
                    <small>{detail}</small>
                  </span>
                  <b>{price}</b>
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend>Finish</legend>
            <div className="finish-options">
              <label>
                <input type="radio" name="finish" defaultChecked />
                <span className="swatch graphite" aria-hidden="true" />
                Graphite
              </label>
              <label>
                <input type="radio" name="finish" />
                <span className="swatch brass" aria-hidden="true" />
                Weathered brass
              </label>
              <label>
                <input type="radio" name="finish" />
                <span className="swatch alloy" aria-hidden="true" />
                Matte alloy
              </label>
            </div>
          </fieldset>
          <button type="button" className="button primary checkout-button">
            Reserve Type 42 <PackageCheck size={18} aria-hidden="true" />
          </button>
        </form>
      </section>

      <section className="materials-section" aria-labelledby="materials-title">
        <div>
          <p className="eyebrow">Materials</p>
          <h2 id="materials-title">Tactile where hands meet weather.</h2>
          <p>
            Knurled brass dials are readable with gloves. The shell keeps a
            low-glare finish, while the grip uses replaceable textured panels
            for wet or dusty field days.
          </p>
        </div>
        <div className="material-samples" aria-label="Material samples">
          <span className="sample graphite">Graphite shell</span>
          <span className="sample brass">Brass dials</span>
          <span className="sample rubber">Field grip</span>
        </div>
      </section>

      <section className="specs-accessories" id="specs">
        <div className="spec-table-wrap">
          <p className="eyebrow">Specifications</p>
          <table>
            <tbody>
              {specs.map(([label, value]) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="accessory-list">
          <p className="eyebrow">Included</p>
          <h2>Field kit</h2>
          <ul>
            {accessories.map((item) => (
              <li key={item}>
                <Check size={18} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="stock-note">
            <CircleDot size={14} aria-hidden="true" /> Survey variant ships in
            seven business days.
          </p>
        </div>
      </section>
    </main>
  );
}
