import Link from "next/link";
import {
  Aperture,
  ArrowRight,
  BatteryCharging,
  Box,
  Check,
  Layers3,
  Ruler,
  Shield,
  SlidersHorizontal,
  SunMedium,
} from "lucide-react";

const variants = [
  { name: "Survey Black", price: "$2,840", detail: "Hard anodized shell, matte brass controls" },
  { name: "Dune Graphite", price: "$2,960", detail: "Ceramic-coated body for desert glare" },
  { name: "Glacier White", price: "$3,120", detail: "Cold-weather seals and bright field marks" },
];

const specs = [
  ["Lens mount", "Meridian M bayonet, sealed"],
  ["Sensor", "42 MP field-stabilized CMOS"],
  ["Body", "Magnesium lattice with rubberized grip"],
  ["Weather rating", "IP64 dust and splash resistant"],
  ["Battery", "Dual pack, 910 frames per charge"],
  ["Weight", "730 g body only"],
];

const accessories = [
  "Waxed canvas field wrap",
  "Two battery packs",
  "Brass cold shoe range tab",
  "Weather-sealed USB-C tether",
  "Lens cloth and calibration card",
];

const materials = [
  {
    icon: Layers3,
    title: "Magnesium lattice",
    text: "Rigid inner frame with replaceable outer panels.",
  },
  {
    icon: Shield,
    title: "Weather seals",
    text: "Four perimeter gaskets around ports and mount.",
  },
  {
    icon: SunMedium,
    title: "Glare control",
    text: "Micro-etched top plate and hooded status glass.",
  },
  {
    icon: Aperture,
    title: "Mechanical feedback",
    text: "Detented rings for aperture and exposure modes.",
  },
];

function CameraVisual() {
  return (
    <div className="camera-stage" aria-label="Meridian Type 42 camera visual">
      <div className="camera-shadow" aria-hidden="true" />
      <div className="camera-body">
        <div className="camera-top">
          <span />
          <span />
          <b />
        </div>
        <div className="camera-lens">
          <i />
          <em />
        </div>
        <div className="camera-grip" />
        <div className="camera-plate">TYPE 42</div>
      </div>
      <div className="material-swatch swatch-brass">brass</div>
      <div className="material-swatch swatch-rubber">sealed grip</div>
    </div>
  );
}

export default function ProductPage() {
  return (
    <main className="product-page">
      <header className="product-nav">
        <Link href="/">Benchmark routes</Link>
        <span>Meridian Instruments</span>
      </header>

      <section className="product-hero" aria-labelledby="product-title">
        <div className="product-copy">
          <p className="eyebrow">Field camera / weather-sealed system</p>
          <h1 id="product-title">Meridian Type 42</h1>
          <p>
            A compact field camera for survey crews, conservation teams, and
            remote documentation work where material trust matters as much as
            image quality.
          </p>
          <div className="product-actions">
            <a className="button button-primary" href="#configure">
              Choose configuration
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-ghost product-ghost" href="#specs">
              Compare specs
            </a>
          </div>
        </div>
        <CameraVisual />
      </section>

      <section className="variant-section" id="configure" aria-labelledby="variant-title">
        <div>
          <p className="eyebrow">Variants</p>
          <h2 id="variant-title">Choose the finish built for your field conditions.</h2>
        </div>
        <div className="variant-grid">
          {variants.map((variant, index) => (
            <button
              type="button"
              className="variant-card"
              aria-pressed={index === 0}
              key={variant.name}
            >
              <span className={`finish-chip finish-${index}`} aria-hidden="true" />
              <strong>{variant.name}</strong>
              <small>{variant.detail}</small>
              <b>{variant.price}</b>
            </button>
          ))}
        </div>
      </section>

      <section className="materials-section" aria-labelledby="materials-title">
        <div className="materials-copy">
          <p className="eyebrow">Material inspection</p>
          <h2 id="materials-title">Tangible by design, not decorative.</h2>
          <p>
            Every touch point is legible with gloves: raised aperture ridges,
            inset exposure marks, rubberized side grip, and brass controls that
            develop a field patina.
          </p>
        </div>
        <div className="materials-grid">
          {materials.map((material) => {
            const Icon = material.icon;
            return (
            <article className="material-card" key={material.title}>
              <Icon size={22} aria-hidden="true" />
              <h3>{material.title}</h3>
              <p>{material.text}</p>
            </article>
            );
          })}
        </div>
      </section>

      <section className="product-detail-grid" id="specs" aria-label="Specifications and included accessories">
        <article className="spec-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">Specifications</p>
              <h2>Type 42 body</h2>
            </div>
            <Ruler size={20} aria-hidden="true" />
          </div>
          <dl className="spec-list">
            {specs.map(([term, desc]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{desc}</dd>
              </div>
            ))}
          </dl>
        </article>

        <article className="accessory-panel">
          <div className="panel-heading">
            <div>
              <p className="eyebrow">In the field case</p>
              <h2>Included accessories</h2>
            </div>
            <Box size={20} aria-hidden="true" />
          </div>
          <ul className="accessory-list">
            {accessories.map((item) => (
              <li key={item}>
                <Check size={16} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </article>

        <aside className="purchase-panel" aria-labelledby="purchase-title">
          <SlidersHorizontal size={22} aria-hidden="true" />
          <h2 id="purchase-title">Configured kit</h2>
          <p>Survey Black body, 42 MP sensor, field wrap, dual battery pack.</p>
          <div className="price-row">
            <span>Estimated total</span>
            <strong>$2,840</strong>
          </div>
          <div className="ship-row">
            <BatteryCharging size={16} aria-hidden="true" />
            Ships with charged packs and calibration card
          </div>
          <button className="button button-primary" type="button">
            Reserve configuration
          </button>
        </aside>
      </section>
    </main>
  );
}
