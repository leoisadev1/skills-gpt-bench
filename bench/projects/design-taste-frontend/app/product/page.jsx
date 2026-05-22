import { ProductConfigurator } from "../components/ProductConfigurator";
import { Icon } from "../components/Icon";
import { RouteNav } from "../components/RouteNav";

export default function ProductPage() {
  return (
    <main id="main-content" className="product-page">
      <RouteNav />
      <section className="product-hero">
        <div className="product-copy">
          <p className="eyebrow">Meridian Type 42</p>
          <h1>Field camera built like equipment, not a lifestyle prop.</h1>
          <p>
            Compare kits, inspect materials, review hard specs, and reserve a build that can survive
            wet bags, cold mornings, and awkward survey positions.
          </p>
          <div className="product-badges" aria-label="Primary attributes">
            <span>
              <Icon name="ShieldCheck" size={17} /> IP64 sealed
            </span>
            <span>
              <Icon name="Gauge" size={17} /> 1/1800 shutter
            </span>
            <span>
              <Icon name="Package" size={17} /> Five accessories
            </span>
          </div>
        </div>
        <div className="camera-stage" aria-label="Meridian Type 42 camera illustration">
          <div className="camera-body">
            <span className="camera-grip" />
            <span className="camera-lens">
              <i />
            </span>
            <span className="camera-rail" />
            <span className="camera-button" />
          </div>
          <div className="material-tags">
            <span>ceramic shell</span>
            <span>sealed dials</span>
            <span>indexed lens</span>
          </div>
        </div>
      </section>
      <ProductConfigurator />
    </main>
  );
}
