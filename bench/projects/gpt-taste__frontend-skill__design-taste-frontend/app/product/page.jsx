import { Aperture, ArrowRight, Backpack, BatteryCharging, Compass, DropHalf } from "@phosphor-icons/react/dist/ssr";
import { MagneticAnchor, ProductConfigurator, RevealWords } from "../components/Interactive";
import { SiteNav } from "../components/Navigation";

export default function ProductPage() {
  return (
    <main className="product-page overflow-guard">
      <SiteNav brand="Meridian Type 42" tone="light" />
      <section className="product-hero">
        <div className="product-copy">
          <p className="eyebrow">Meridian Type 42 field camera</p>
          <h1>A compact field body built for hard light, wet hands, and exact records.</h1>
          <p>
            Compare finishes, handle materials, weather sealing, and kit contents before choosing a build.
          </p>
          <MagneticAnchor href="#configure" className="button-dark">
            Configure Type 42 <ArrowRight size={18} weight="bold" aria-hidden="true" />
          </MagneticAnchor>
        </div>
        <div className="camera-stage" aria-label="Meridian Type 42 camera render">
          <div className="camera-object">
            <span className="camera-top" />
            <span className="camera-lens" />
            <span className="camera-grip" />
            <span className="camera-mark mono">42</span>
          </div>
        </div>
      </section>

      <section className="material-section section-space">
        <div className="section-copy">
          <p className="eyebrow">Materials</p>
          <h2>Built from touchable parts that make sense in the field.</h2>
        </div>
        <div className="material-grid">
          {[
            [DropHalf, "Weather shell", "Gasketed seams and drain channels protect the body in rain and salt air."],
            [Aperture, "Glass alignment", "The fixed 42mm assembly is shimmed for repeatable field notes."],
            [Compass, "Survey plate", "A rear reference plate keeps orientation marks visible with gloves on."],
            [BatteryCharging, "Power sled", "A lockable battery sled swaps without exposing the card bay."],
          ].map(([Icon, title, body]) => (
            <article className="material-item" key={title}>
              <Icon size={25} weight="duotone" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <ProductConfigurator />

      <section className="spec-section section-space">
        <div>
          <p className="eyebrow">Specs</p>
          <h2>Exact enough for buyers who compare line by line.</h2>
        </div>
        <dl className="spec-list">
          {[
            ["Sensor", "42.6 MP stabilized full-frame CMOS"],
            ["Lens mount", "Fixed weather-sealed 42mm f/2.4"],
            ["Body", "Magnesium alloy frame with ceramic coating"],
            ["Storage", "Dual UHS-II card bay with locked gasket"],
            ["Weight", "684 g body only"],
          ].map(([term, value]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="included-section section-space">
        <Backpack size={28} weight="duotone" aria-hidden="true" />
        <RevealWords
          className="reveal-statement product-reveal"
          text="Every Meridian Type 42 kit includes the field strap, weather hood, reference plate, dual battery sled, cloth wrap, and a printed calibration record."
        />
      </section>
    </main>
  );
}
