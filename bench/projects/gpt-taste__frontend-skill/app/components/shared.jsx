import { ArrowRight, ChevronRight } from "lucide-react";
import { picsum, primaryRoutes, suiteRoutes } from "../lib/content";

export function MainNav({
  tone = "dark",
  active
}) {
  return (
    <header className={`main-nav main-nav--${tone}`}>
      <a className="brand-mark" href="/" aria-label="Benchmark home">
        <span className="brand-mark__dot" />
        Skill Bench
      </a>
      <nav aria-label="Primary navigation">
        {primaryRoutes.map((route) => (
          <a
            key={route.href}
            href={route.href}
            className={active === route.href ? "is-active" : undefined}
          >
            {route.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export function SuiteNav({ active }) {
  return (
    <nav className="suite-nav" aria-label="Northstar Atlas navigation">
      {suiteRoutes.map((route) => (
        <a key={route.href} href={route.href} className={active === route.href ? "is-active" : undefined}>
          {route.label}
        </a>
      ))}
    </nav>
  );
}

export function ArrowLink({
  href,
  children,
  variant = "light"
}) {
  return (
    <a href={href} className={`arrow-link arrow-link--${variant}`}>
      <span>{children}</span>
      <ArrowRight size={17} aria-hidden="true" />
    </a>
  );
}

export function ImagePlane({
  seed,
  className = "",
  label
}) {
  return (
    <div
      aria-label={label}
      role={label ? "img" : undefined}
      className={`image-plane ${className}`}
      data-image-scale
      style={{ backgroundImage: `url(${picsum(seed)})` }}
    />
  );
}

export function ScrubLine({ text }) {
  return (
    <p className="scrub-line" data-scrub-group>
      {text.split(" ").map((word, index) => (
        <span key={`${word}-${index}`} data-scrub-word>
          {word}
        </span>
      ))}
    </p>
  );
}

export function RouteFooter({
  title,
  body,
  href,
  cta,
  tone = "dark"
}) {
  return (
    <section className={`route-footer route-footer--${tone}`} data-reveal>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <ArrowLink href={href} variant={tone === "dark" ? "light" : "dark"}>
        {cta}
      </ArrowLink>
    </section>
  );
}

export function MetricLine({
  label,
  value,
  sub
}) {
  return (
    <div className="metric-line">
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{sub}</small>
    </div>
  );
}

export function MiniRail({ items }) {
  return (
    <div className="mini-rail" aria-label="Quick route list">
      {items.map((item) => (
        <span key={item}>
          {item}
          <ChevronRight size={13} aria-hidden="true" />
        </span>
      ))}
    </div>
  );
}
