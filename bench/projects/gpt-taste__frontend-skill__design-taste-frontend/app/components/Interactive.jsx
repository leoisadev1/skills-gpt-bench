"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle, SlidersHorizontal, WarningCircle } from "@phosphor-icons/react";
import { useEffect } from "react";
import { cameraVariants, dashboardData } from "../lib/content";

export function MagneticAnchor({ href, className = "", children, ariaLabel }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 160, damping: 18, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 160, damping: 18, mass: 0.6 });

  function handleMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}

export function RevealWords({ text, className = "" }) {
  const scope = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.fromTo(
        "[data-reveal-word]",
        { opacity: 0.16, y: 14 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.035,
          ease: "none",
          scrollTrigger: {
            trigger: scope.current,
            start: "top 82%",
            end: "bottom 56%",
            scrub: true,
          },
        },
      );
    }, scope);

    return () => context.revert();
  }, []);

  return (
    <p ref={scope} className={className}>
      {text.split(" ").map((word, index) => (
        <span data-reveal-word key={`${word}-${index}`} className="reveal-word">
          {word}{" "}
        </span>
      ))}
    </p>
  );
}

export function HorizontalAccordion({ items }) {
  const [active, setActive] = useState(0);

  return (
    <div className="accordion" aria-label="Product depth">
      {items.map((item, index) => (
        <button
          className={`accordion-panel ${active === index ? "is-active" : ""}`}
          type="button"
          key={item.title}
          onMouseEnter={() => setActive(index)}
          onFocus={() => setActive(index)}
          aria-expanded={active === index}
        >
          <span className="accordion-image" style={{ backgroundImage: `url(${item.image})` }} />
          <span className="accordion-copy">
            <span>{item.title}</span>
            <small>{item.body}</small>
          </span>
        </button>
      ))}
    </div>
  );
}

export function DashboardWorkspace() {
  const [filter, setFilter] = useState("all");
  const selected = dashboardData[filter];

  return (
    <section className="dashboard-shell" aria-label="Harbor Desk operational workspace">
      <div className="dashboard-topbar">
        <div>
          <p className="eyebrow">Harbor Desk</p>
          <h1>Same-day control room</h1>
        </div>
        <div className="filter-row" aria-label="Workspace filters">
          {[
            ["all", "All live"],
            ["priority", "Priority"],
            ["depots", "Depots"],
          ].map(([key, label]) => (
            <button
              key={key}
              type="button"
              className={filter === key ? "filter-chip is-selected" : "filter-chip"}
              onClick={() => setFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="ops-grid">
        <div className="route-panel">
          <div className="panel-heading">
            <div>
              <span>Route health</span>
              <small>Updated 09:42 local</small>
            </div>
            <SlidersHorizontal size={20} weight="duotone" aria-hidden="true" />
          </div>
          <div className="route-table" role="table" aria-label="Route health table">
            <div className="route-row route-head" role="row">
              <span>Route</span>
              <span>Zone</span>
              <span>Health</span>
              <span>Signal</span>
              <span>Action</span>
            </div>
            <AnimatePresence mode="popLayout">
              {selected.routes.map((route) => (
                <motion.div
                  layout
                  className="route-row"
                  role="row"
                  key={route.join("-")}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                >
                  {route.map((cell, index) => (
                    <span key={`${cell}-${index}`} className={index === 2 ? "mono health-cell" : ""}>
                      {cell}
                    </span>
                  ))}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        <aside className="inspector-panel" aria-label="Exception inspector">
          <div className="panel-heading">
            <div>
              <span>Exception queue</span>
              <small>{selected.exceptions.length} active items</small>
            </div>
            <WarningCircle size={21} weight="duotone" aria-hidden="true" />
          </div>
          <div className="exception-list">
            {selected.exceptions.map((item, index) => (
              <motion.button
                layout
                type="button"
                className="exception-item"
                key={item}
                whileTap={{ scale: 0.99 }}
              >
                <span className="exception-index mono">{String(index + 1).padStart(2, "0")}</span>
                <span>{item}</span>
              </motion.button>
            ))}
          </div>
          <div className="driver-strip">
            <span>Driver status</span>
            <strong>31 active</strong>
            <small>4 need dispatcher review</small>
          </div>
          <div className="capacity-meter" aria-label="Depot capacity at 74 percent">
            <span />
          </div>
          <p className="muted-copy">Depot capacity is 74 percent with Canal Yard creating the next delay risk.</p>
        </aside>
      </div>
    </section>
  );
}

export function ProductConfigurator() {
  const [selected, setSelected] = useState(1);
  const variant = cameraVariants[selected];

  return (
    <section className="configurator" aria-label="Choose Meridian Type 42 configuration">
      <div className="configurator-copy">
        <p className="eyebrow">Choose a configuration</p>
        <h2>Three field-ready bodies, one exact 42mm platform.</h2>
        <p>
          Compare finish, lens kit, included accessories, and delivery timing without leaving the buying flow.
        </p>
      </div>
      <div className="configurator-panel">
        <div className="variant-list" role="list">
          {cameraVariants.map((item, index) => (
            <button
              type="button"
              className={selected === index ? "variant-item is-selected" : "variant-item"}
              key={item.name}
              onClick={() => setSelected(index)}
            >
              <span>{item.name}</span>
              <small>{item.price}</small>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={variant.name}
            className="variant-detail"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            <div>
              <h3>{variant.name}</h3>
              <p>{variant.tone}</p>
            </div>
            <dl>
              <div>
                <dt>Lens</dt>
                <dd>{variant.lens}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>{variant.stock}</dd>
              </div>
              <div>
                <dt>Total</dt>
                <dd>{variant.price}</dd>
              </div>
            </dl>
            <button type="button" className="button-dark">Reserve this build</button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export function AccountForm() {
  const [email, setEmail] = useState("operations@northstaratlas.example");
  const [status, setStatus] = useState("idle");
  const invalid = status === "error";

  function save(event) {
    event.preventDefault();
    if (!email.includes("@") || !email.includes(".")) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    window.setTimeout(() => setStatus("saved"), 700);
  }

  return (
    <form className="account-form" onSubmit={save} noValidate>
      <div className="input-block">
        <label htmlFor="team-email">Operations email</label>
        <input
          id="team-email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setStatus("idle");
          }}
          aria-invalid={invalid}
          aria-describedby="team-email-help"
        />
        <small id="team-email-help" className={invalid ? "form-error" : ""}>
          {invalid ? "Enter a valid address before saving." : "Used for itinerary alerts and vendor confirmations."}
        </small>
      </div>
      <button type="submit" className="button-dark" disabled={status === "loading"}>
        {status === "loading" ? "Saving" : "Save account"}
      </button>
      {status === "saved" ? (
        <p className="form-success">
          <CheckCircle size={18} weight="fill" aria-hidden="true" />
          Account contact updated.
        </p>
      ) : null}
    </form>
  );
}
