import Link from "next/link";
import { BenchIcon } from "../../components/BenchIcon";
import { ScrollTheatre } from "../../components/ScrollTheatre";
import { SiteNav, benchmarkLinks } from "../../components/SiteNav";

const variants = [
  ["Type 42 Field", "28mm fixed", "Sealed magnesium", "$2,840"],
  ["Type 42 Survey", "35mm fixed", "Titanium top plate", "$3,160"],
  ["Type 42 Archive", "28mm fixed", "Brass control dials", "$3,420"]
];

const specs = [
  ["Sensor", "42.6 MP stacked CMOS"],
  ["Weather seal", "IP54 rated body and ports"],
  ["Battery", "1,180 frames field cycle"],
  ["Weight", "612g with strap lugs"],
  ["Storage", "Dual CFexpress Type A"],
  ["Viewfinder", "5.76M dot OLED"]
];

export default function ProductPage() {
  return (
    <main className="site-shell product-shell">
      <ScrollTheatre surface="product" />
      <SiteNav brand="Meridian Type 42" links={benchmarkLinks} ctaHref="#configure" ctaLabel="Choose kit" />

      <section className="product-hero" aria-labelledby="product-title">
        <div className="product-copy">
          <p className="eyebrow">Field camera system</p>
          <h1 id="product-title">Meridian Type 42, built for weather and deliberate frames.</h1>
          <p>
            A sealed compact camera with tactile controls, long-haul battery behavior, and variant
            choices a field buyer can compare without hunting through spec sheets.
          </p>
        </div>
        <div className="camera-stage" data-gsap-scale>
          <div className="camera-object" aria-label="Meridian Type 42 camera illustration">
            <span className="camera-lens" />
            <span className="camera-prism" />
            <span className="camera-grip" />
          </div>
          <img
            src="https://picsum.photos/seed/meridian-camera-field/900/620"
            alt="Textured field material backdrop for the Meridian Type 42"
          />
        </div>
      </section>

      <section className="wide-section product-depth">
        <div className="section-heading">
          <p className="eyebrow">Compare variants</p>
          <h2>Three builds, one field body.</h2>
        </div>
        <div className="variant-table" data-gsap-scale>
          <table>
            <thead>
              <tr>
                <th>Variant</th>
                <th>Lens</th>
                <th>Material</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {variants.map((variant) => (
                <tr key={variant[0]}>
                  {variant.map((cell) => (
                    <td key={cell}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bento-grid product-bento" aria-label="Material and accessory details">
        <article className="bento-card material-card" data-gsap-scale>
          <h2>Materials you can judge by touch.</h2>
          <div className="swatch-row" aria-label="Material swatches">
            <span className="swatch graphite" />
            <span className="swatch moss" />
            <span className="swatch brass" />
          </div>
          <p>
            Graphite ceramic coating resists strap rash. The moss wrap grips in rain. Brass dials
            use deeper knurling for cold hands.
          </p>
        </article>
        <article className="bento-card specs-card" data-gsap-scale>
          <h2>Core specs</h2>
          <dl>
            {specs.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </article>
        <article className="bento-card accessory-card" data-gsap-scale>
          <BenchIcon name="Package" size={30} />
          <h2>Included accessories</h2>
          <ul>
            <li>Waxed canvas field wrap</li>
            <li>Dual battery sled with sealed caps</li>
            <li>Low-profile brass thumb rest</li>
            <li>Archive-grade USB-C tether cable</li>
          </ul>
        </article>
      </section>

      <section id="configure" className="configure-panel" aria-labelledby="configure-title">
        <div>
          <p className="eyebrow">Configuration</p>
          <h2 id="configure-title">Choose a camera for the work you actually do.</h2>
        </div>
        <form className="config-form">
          <fieldset>
            <legend>Finish</legend>
            {["Graphite ceramic", "Moss wrap", "Brass dial archive"].map((finish) => (
              <label key={finish}>
                <input type="radio" name="finish" defaultChecked={finish === "Graphite ceramic"} />
                <BenchIcon name="RadioButton" size={17} />
                {finish}
              </label>
            ))}
          </fieldset>
          <fieldset>
            <legend>Kit</legend>
            {["Body only", "Field kit", "Survey kit"].map((kit) => (
              <label key={kit}>
                <input type="radio" name="kit" defaultChecked={kit === "Field kit"} />
                <BenchIcon name="CheckCircle" size={17} />
                {kit}
              </label>
            ))}
          </fieldset>
          <Link className="button button-primary" href="/suite">
            Continue to suite <BenchIcon name="ArrowRight" size={18} />
          </Link>
        </form>
      </section>
    </main>
  );
}
