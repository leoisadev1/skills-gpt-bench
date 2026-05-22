import Link from "next/link";
import {
  Aperture,
  ArrowRight,
  BatteryCharging,
  Box,
  Camera,
  Check,
  Ruler,
} from "lucide-react";

const variants = [
  ["Type 42 S", "Street kit", "28mm fixed", "$2,840"],
  ["Type 42 F", "Field kit", "28/50 dual", "$3,360"],
  ["Type 42 X", "Survey kit", "Sealed dual", "$3,920"],
];

const specs = [
  ["Sensor", "42 MP stacked monochrome + color capture"],
  ["Body", "Machined magnesium frame, basalt composite shell"],
  ["Weather", "IP56 seals with glove-safe mechanical dials"],
  ["Storage", "Dual CFexpress Type A, redundant field mode"],
  ["Power", "11 hours stills, 140 minutes continuous video"],
  ["Weight", "684 g with field grip and battery"],
];

const accessories = ["Waxed field wrap", "Two cold-rated batteries", "Lens hood set", "Calibration slate", "Weather-seal kit"];

export default function ProductPage() {
  return (
    <main className="product-page">
      <nav className="product-nav" aria-label="Meridian product navigation">
        <Link href="/" className="brand-lockup">
          <Camera size={20} aria-hidden="true" />
          <span>Meridian</span>
        </Link>
        <a href="#configure">Configure</a>
      </nav>

      <section className="product-hero" aria-labelledby="product-title">
        <div className="product-copy">
          <p className="eyebrow">Meridian Type 42 field camera</p>
          <h1 id="product-title">A mechanical field body for buyers who compare by touch.</h1>
          <p>
            Inspect the shell, choose the lens kit, and compare variants built for
            field documentation, survey travel, and long days away from power.
          </p>
          <a className="button product-button" href="#configure">
            Choose configuration <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="camera-stage" aria-label="Meridian Type 42 camera illustration">
          <div className="camera-shadow" />
          <div className="camera-body">
            <span className="camera-prism" />
            <span className="camera-dial left" />
            <span className="camera-dial right" />
            <span className="camera-plate">TYPE 42</span>
            <span className="camera-grip" />
            <span className="camera-lens">
              <span />
            </span>
          </div>
          <div className="material-strip" aria-label="Material swatches">
            <span title="Basalt composite" />
            <span title="Brushed magnesium" />
            <span title="Olive vulcan grip" />
          </div>
        </div>
      </section>

      <section className="variant-section" id="configure" aria-labelledby="variants-title">
        <div>
          <p className="eyebrow">Compare variants</p>
          <h2 id="variants-title">Pick the body around the field condition.</h2>
        </div>
        <div className="variant-grid">
          {variants.map(([name, kit, lens, price]) => (
            <article className="variant-card" key={name}>
              <span>{kit}</span>
              <h3>{name}</h3>
              <p>{lens}</p>
              <strong>{price}</strong>
              <button type="button">
                Select <Check size={15} aria-hidden="true" />
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="product-details" aria-label="Materials and specifications">
        <div className="materials-panel">
          <p className="eyebrow">Materials</p>
          <h2>Grip, shell, lens, and controls are built for field handling.</h2>
          <div className="material-callouts">
            <span><Aperture size={18} aria-hidden="true" /> Fluorine-coated glass</span>
            <span><Ruler size={18} aria-hidden="true" /> Raised dial indexing</span>
            <span><BatteryCharging size={18} aria-hidden="true" /> Cold-rated battery door</span>
          </div>
        </div>
        <div className="spec-table">
          {specs.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="included-section" aria-labelledby="included-title">
        <div>
          <p className="eyebrow">Included accessories</p>
          <h2 id="included-title">The field kit arrives ready to document, protect, and calibrate.</h2>
        </div>
        <ul>
          {accessories.map((item) => (
            <li key={item}>
              <Box size={16} aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
