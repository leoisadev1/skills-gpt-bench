import Link from "next/link";
import {
  ArrowRight,
  Aperture,
  CalendarBlank,
  Camera,
  CheckCircle,
  Clock,
  Compass,
  Files,
  Gauge,
  GearSix,
  MapPinLine,
  MapTrifold,
  Notebook,
  SealCheck,
  ShieldCheck,
  SlidersHorizontal,
  Truck,
  UserCircle,
  WarningCircle,
  Warehouse
} from "@phosphor-icons/react/dist/ssr";

export const icons = {
  ArrowRight,
  Aperture,
  CalendarBlank,
  Camera,
  CheckCircle,
  Clock,
  Compass,
  Files,
  Gauge,
  GearSix,
  MapPinLine,
  MapTrifold,
  Notebook,
  SealCheck,
  ShieldCheck,
  SlidersHorizontal,
  Truck,
  UserCircle,
  WarningCircle,
  Warehouse
};

export function TopNav({ brand, links, tone = "light", cta }) {
  return (
    <header className={`top-nav top-nav--${tone}`}>
      <Link href="/" className="brand-mark" aria-label={`${brand} home`}>
        <span aria-hidden="true" />
        {brand}
      </Link>
      <nav aria-label={`${brand} navigation`}>
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      {cta ? (
        <Link href={cta.href} className="nav-cta">
          {cta.label}
        </Link>
      ) : null}
    </header>
  );
}

export function ButtonLink({ href, children, variant = "primary" }) {
  return (
    <Link href={href} className={`button-link button-link--${variant}`}>
      <span>{children}</span>
      <ArrowRight size={17} weight="bold" aria-hidden="true" />
    </Link>
  );
}

export function WordReveal({ text }) {
  return (
    <span data-words>
      {text.split(" ").map((word, index) => (
        <span data-word key={`${word}-${index}`}>
          {word}{" "}
        </span>
      ))}
    </span>
  );
}

export function RouteDirectory() {
  const routes = [
    {
      href: "/landing",
      title: "Lumen Ledger",
      text: "Compliance finance automation landing page.",
      icon: ShieldCheck
    },
    {
      href: "/dashboard",
      title: "Harbor Desk",
      text: "Same-day logistics control room.",
      icon: Truck
    },
    {
      href: "/product",
      title: "Meridian Type 42",
      text: "Field camera product detail page.",
      icon: Camera
    },
    {
      href: "/suite",
      title: "Northstar Atlas",
      text: "Travel planning suite for research teams.",
      icon: Compass
    }
  ];

  return (
    <main className="index-page">
      <section className="index-hero" data-reveal>
        <p>Frontend benchmark routes</p>
        <h1>Four production surfaces in one app-router project.</h1>
      </section>
      <section className="index-grid" aria-label="Benchmark routes">
        {routes.map((route) => {
          const Icon = route.icon;
          return (
            <Link href={route.href} className="index-tile group" key={route.href} data-reveal>
              <Icon size={28} weight="duotone" aria-hidden="true" />
              <span>
                <strong>{route.title}</strong>
                <small>{route.text}</small>
              </span>
              <ArrowRight size={18} weight="bold" aria-hidden="true" />
            </Link>
          );
        })}
      </section>
    </main>
  );
}
