"use client";

import { useMemo, useState } from "react";
import { Check, Minus, Plus, ShieldCheck } from "@phosphor-icons/react";
import { accessories, productSpecs, productVariants } from "../../lib/content";

export function ProductConfigurator() {
  const [variantId, setVariantId] = useState("olive");
  const [strap, setStrap] = useState("Field graphite");
  const [quantity, setQuantity] = useState(1);
  const selected = useMemo(
    () => productVariants.find((variant) => variant.id === variantId) ?? productVariants[0],
    [variantId]
  );

  return (
    <section className="product-workbench" aria-label="Meridian Type 42 configuration">
      <div className="camera-stage" data-finish={selected.color}>
        <div className="camera-shadow" aria-hidden="true" />
        <div className="camera-body" aria-label={`${selected.name} field camera visual`}>
          <span className="camera-top" />
          <span className="camera-viewfinder" />
          <span className="camera-lens">
            <i />
          </span>
          <span className="camera-grip" />
          <span className="camera-dial camera-dial-a" />
          <span className="camera-dial camera-dial-b" />
        </div>
        <div className="material-ruler" aria-hidden="true">
          <span>Titanium shell</span>
          <span>Leaf shutter</span>
          <span>Weather collar</span>
        </div>
      </div>

      <div className="config-panel">
        <p className="eyebrow">Meridian Type 42</p>
        <h1>Field camera with studio-grade control.</h1>
        <p className="lede">
          Compare body finishes, inspect materials, review the field kit, and choose a configuration without wading through testimonial filler.
        </p>

        <fieldset className="variant-field">
          <legend>Choose body</legend>
          <div className="variant-grid">
            {productVariants.map((variant) => (
              <button
                key={variant.id}
                type="button"
                aria-pressed={variant.id === selected.id}
                data-active={variant.id === selected.id}
                onClick={() => setVariantId(variant.id)}
              >
                <span className={`swatch swatch--${variant.color}`} aria-hidden="true" />
                <strong>{variant.name}</strong>
                <small>{variant.finish}</small>
                <b>{variant.price}</b>
              </button>
            ))}
          </div>
        </fieldset>

        <div className="product-split">
          <div>
            <h2>Material read</h2>
            <p>{selected.note}</p>
            <dl className="material-specs">
              <div>
                <dt>Weight</dt>
                <dd>{selected.weight}</dd>
              </div>
              <div>
                <dt>Weathering</dt>
                <dd>{selected.weather}</dd>
              </div>
            </dl>
          </div>
          <div className="qty-box">
            <span>Kit count</span>
            <div>
              <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity">
                <Minus size={15} weight="bold" aria-hidden="true" />
              </button>
              <strong>{quantity}</strong>
              <button type="button" onClick={() => setQuantity((value) => Math.min(4, value + 1))} aria-label="Increase quantity">
                <Plus size={15} weight="bold" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <label className="input-block">
          <span>Strap finish</span>
          <select value={strap} onChange={(event) => setStrap(event.target.value)}>
            <option>Field graphite</option>
            <option>Waxed umber</option>
            <option>Slate webbing</option>
          </select>
          <small>Field graphite is stocked for immediate shipment.</small>
        </label>

        <div className="inline-error" role="status">
          Carbon mount is backordered until June 18, 2026.
        </div>

        <div className="checkout-strip">
          <div>
            <span>Selected configuration</span>
            <strong>{selected.name} with {strap.toLowerCase()} strap</strong>
          </div>
          <button type="button">
            <ShieldCheck size={18} weight="bold" aria-hidden="true" />
            Reserve kit
          </button>
        </div>
      </div>

      <aside className="spec-panel" aria-label="Specifications and included accessories">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Specs</p>
            <h2>Buyer comparison</h2>
          </div>
        </div>
        <dl className="spec-list">
          {productSpecs.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <div className="accessory-box">
          <h3>Included field kit</h3>
          <ul>
            {accessories.map((item) => (
              <li key={item}>
                <Check size={16} weight="bold" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
}
