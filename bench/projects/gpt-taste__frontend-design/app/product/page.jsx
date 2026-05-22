import { ArrowRight, Check, CircleDot, Crosshair, Ruler, Shield, SlidersHorizontal, Wrench } from "lucide-react";
import { BentoCard, FooterBand, InlineImage, RevealWords, SurfaceNav } from "../components/shared";

const variants = [
  { name: "Type 42 Field", body: "Sealed alloy", lens: "42mm f/2.8", use: "survey crews", price: "$1,840" },
  { name: "Type 42 Range", body: "Graphite composite", lens: "42mm f/2.8 range", use: "geology teams", price: "$2,120" },
  { name: "Type 42 Night", body: "Black anodized", lens: "42mm f/1.9", use: "low-light field notes", price: "$2,460" },
];

const specs = [
  ["Sensor", "Full-frame 42 MP field-calibrated CMOS"],
  ["Weather rating", "IP66 body seal, glove-safe mechanical doors"],
  ["Battery", "Two 18-hour cold-weather cells included"],
  ["Storage", "Dual sealed UHS-II slots with write lock"],
  ["Weight", "712 g body, 934 g with field lens"],
  ["Service", "5-year shutter and seal inspection plan"],
];

export default function ProductPage() {
  return (
    <main className="main-shell camera-page">
      <SurfaceNav
        brand="Meridian Type 42"
        cta={{ href: "#configure", label: "Configure" }}
        links={[
          { href: "#variants", label: "Variants" },
          { href: "#materials", label: "Materials" },
          { href: "#specs", label: "Specs" },
        ]}
        tone="dark"
      />

      <section className="product-hero">
        <div className="product-copy gsap-reveal">
          <h1>
            A field camera that feels like equipment, not a gadget. <InlineImage label="field terrain" seed="meridian-terrain" />
          </h1>
          <p>
            The Meridian Type 42 is built for buyers comparing real working instruments: sealed controls, tactile
            materials, serviceable accessories, and configuration choices that map to terrain instead of lifestyle copy.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#configure">
              Choose configuration
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button--secondary" href="#variants">
              Compare variants
            </a>
          </div>
        </div>
        <div className="camera-object media-zoom" aria-label="Meridian Type 42 camera illustration">
          <div className="camera-body">
            <div className="camera-top" />
            <div className="camera-grip" />
            <div className="camera-lens">
              <span />
              <b />
            </div>
            <div className="camera-plate">TYPE 42</div>
          </div>
          <div className="object-shadow" />
        </div>
      </section>

      <section className="variant-section" id="variants">
        <div className="section-heading gsap-reveal">
          <h2>Compare the working differences before choosing a finish.</h2>
          <p>Each Type 42 variant starts with the same serviceable chassis and diverges where field conditions matter.</p>
        </div>
        <div className="variant-table gsap-reveal" role="table" aria-label="Meridian Type 42 variant comparison">
          <div role="row">
            <span role="columnheader">Variant</span>
            <span role="columnheader">Body</span>
            <span role="columnheader">Lens</span>
            <span role="columnheader">Best for</span>
            <span role="columnheader">Price</span>
          </div>
          {variants.map((variant) => (
            <div role="row" key={variant.name}>
              <strong role="cell">{variant.name}</strong>
              <span role="cell">{variant.body}</span>
              <span role="cell">{variant.lens}</span>
              <span role="cell">{variant.use}</span>
              <b role="cell">{variant.price}</b>
            </div>
          ))}
        </div>
      </section>

      <section className="materials-section" id="materials">
        <div className="material-image media-zoom" aria-label="Camera material close-up" />
        <div className="material-copy gsap-reveal">
          <h2>Material decisions you can feel through gloves.</h2>
          <RevealWords text="The chassis uses a matte ceramic seal over bead-blasted alloy, raised brass indexing for cold hands, and replaceable rubber impact rails where field cameras actually get knocked." />
        </div>
      </section>

      <section className="product-depth" id="specs">
        <div className="bento-grid bento-grid--product">
          <BentoCard className="span-5" icon="sliders" title="Mechanical control stack">
            <p>Every exposure, focus, and write-lock control has a physical detent with visible status from above.</p>
          </BentoCard>
          <BentoCard className="span-7 spec-card" icon="gauge" title="Field specifications">
            <dl>
              {specs.map(([term, detail]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{detail}</dd>
                </div>
              ))}
            </dl>
          </BentoCard>
          <BentoCard className="span-4" icon="package" title="Included accessories">
            <ul className="check-list">
              {["Weather hood", "Two cold cells", "Field strap", "Dust door kit"].map((item) => (
                <li key={item}>
                  <Check size={17} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </BentoCard>
          <BentoCard className="span-4" icon="audit" title="Serviceable build">
            <p>Seal rails, battery doors, and grip plates are replaceable without shipping the camera overseas.</p>
          </BentoCard>
          <BentoCard className="span-4" icon="map" title="Terrain presets">
            <p>Profiles tune stabilization, shutter damping, and metadata fields for coast, desert, forest, and alpine work.</p>
          </BentoCard>
        </div>
      </section>

      <section className="configurator" id="configure">
        <div className="config-copy gsap-reveal">
          <h2>Choose the configuration that matches the assignment.</h2>
          <p>
            No fake urgency, no lifestyle filler. Select the body, lens, and kit based on weather exposure, carry time,
            and inspection needs.
          </p>
        </div>
        <div className="config-panel gsap-reveal" aria-label="Camera configuration options">
          <fieldset>
            <legend>Body</legend>
            {["Sealed alloy", "Graphite composite", "Black anodized"].map((item, index) => (
              <label key={item}>
                <input defaultChecked={index === 0} name="body" type="radio" />
                <span>{item}</span>
              </label>
            ))}
          </fieldset>
          <fieldset>
            <legend>Kit</legend>
            {["Survey standard", "Rangefinder kit", "Low-light kit"].map((item, index) => (
              <label key={item}>
                <input defaultChecked={index === 1} name="kit" type="radio" />
                <span>{item}</span>
              </label>
            ))}
          </fieldset>
          <div className="config-total">
            <span>Estimated kit</span>
            <strong>$2,320</strong>
          </div>
          <button className="button button--primary" type="button">
            Reserve build slot
          </button>
        </div>
      </section>

      <section className="field-icons" aria-label="Meridian camera buyer criteria">
        {[
          ["Measured", Ruler],
          ["Protected", Shield],
          ["Precise", Crosshair],
          ["Repairable", Wrench],
          ["Configurable", SlidersHorizontal],
          ["Field-ready", CircleDot],
        ].map(([label, Icon]) => (
          <div key={label}>
            <Icon size={22} aria-hidden="true" />
            <span>{label}</span>
          </div>
        ))}
      </section>

      <FooterBand
        action={{ href: "#configure", label: "Finalize Type 42" }}
        secondary={{ href: "/", label: "All benchmark routes" }}
        text="The product page keeps the buyer focused on variants, materials, included kit, and configuration decisions."
        title="A camera page built around the object."
      />
    </main>
  );
}
