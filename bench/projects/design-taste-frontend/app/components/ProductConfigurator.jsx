"use client";

import { useMemo, useState } from "react";
import { accessories, materials, productVariants } from "../../lib/content";
import { Icon } from "./Icon";

export function ProductConfigurator() {
  const [variantId, setVariantId] = useState(productVariants[0].id);
  const [material, setMaterial] = useState(materials[0]);
  const [includeCareKit, setIncludeCareKit] = useState(true);

  const selected = useMemo(
    () => productVariants.find((variant) => variant.id === variantId) ?? productVariants[0],
    [variantId]
  );
  const basePrice = Number(selected.price.replace(/[^\d]/g, ""));
  const totalPrice = includeCareKit ? basePrice + 420 : basePrice;

  const kitNote =
    selected.id === "archive" && material === "Weathered olive"
      ? "Archive calibration ships sooner with graphite or titanium."
      : "";

  return (
    <div className="product-configurator">
      <section className="variant-panel" aria-labelledby="variant-title">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Choose configuration</p>
            <h2 id="variant-title">Variants built for field work</h2>
          </div>
          <Icon name="Camera" size={24} />
        </div>
        <div className="variant-grid">
          {productVariants.map((variant) => (
            <button
              key={variant.id}
              type="button"
              className="variant-card"
              aria-pressed={variantId === variant.id}
              onClick={() => setVariantId(variant.id)}
            >
              <span>
                <strong>{variant.name}</strong>
                <em>{variant.price}</em>
              </span>
              <small>{variant.body}</small>
            </button>
          ))}
        </div>
      </section>

      <section className="material-panel" aria-labelledby="materials-title">
        <p className="eyebrow">Materials</p>
        <h2 id="materials-title">Touch points and weathering</h2>
        <div className="material-strip" role="group" aria-label="Select material">
          {materials.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={material === item}
              onClick={() => setMaterial(item)}
            >
              <span className={`swatch swatch--${item.toLowerCase().split(" ")[0]}`} />
              {item}
            </button>
          ))}
        </div>
        {kitNote ? (
          <p className="field-error" role="alert">
            {kitNote}
          </p>
        ) : (
          <p className="field-help">Finish affects grip temperature, scratch visibility, and glare.</p>
        )}
      </section>

      <section className="spec-panel" aria-labelledby="specs-title">
        <p className="eyebrow">Specs</p>
        <h2 id="specs-title">Current selection</h2>
        <dl className="spec-list">
          <div>
            <dt>
              <Icon name="Aperture" size={18} /> Optics
            </dt>
            <dd>{selected.lens}</dd>
          </div>
          <div>
            <dt>
              <Icon name="Scales" size={18} /> Body
            </dt>
            <dd>{selected.body}</dd>
          </div>
          <div>
            <dt>
              <Icon name="BatteryCharging" size={18} /> Runtime
            </dt>
            <dd>{selected.runtime}</dd>
          </div>
          <div>
            <dt>
              <Icon name="Ruler" size={18} /> Weight
            </dt>
            <dd>{selected.weight}</dd>
          </div>
        </dl>
      </section>

      <aside className="purchase-panel" aria-labelledby="purchase-title">
        <div>
          <p className="eyebrow">Included</p>
          <h2 id="purchase-title">{selected.name}</h2>
        </div>
        <ul className="accessory-list">
          {accessories.map((item) => (
            <li key={item}>
              <Icon name="CheckCircle" size={18} />
              {item}
            </li>
          ))}
        </ul>
        <label className="toggle-row">
          <input
            type="checkbox"
            checked={includeCareKit}
            onChange={(event) => setIncludeCareKit(event.target.checked)}
          />
          <span>
            Add first-year dust seal service
            <small>Bench check, gasket swap, and sensor clean.</small>
          </span>
        </label>
        <div className="price-row">
          <span>Total before tax</span>
          <strong>${totalPrice.toLocaleString("en-US")}</strong>
        </div>
        <button type="button" className="button button--full">
          Reserve this build
        </button>
      </aside>
    </div>
  );
}
