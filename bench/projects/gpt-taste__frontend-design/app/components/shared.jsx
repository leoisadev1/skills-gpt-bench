import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CalendarRange,
  Check,
  ChevronRight,
  ClipboardList,
  Compass,
  FileText,
  Gauge,
  LayoutGrid,
  LockKeyhole,
  Map,
  PackageCheck,
  RadioTower,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Users,
} from "lucide-react";

export const routeCards = [
  {
    href: "/landing",
    title: "Lumen Ledger",
    text: "Compliance-focused finance automation with proof, product depth, and conversion.",
    className: "home-card--lumen",
  },
  {
    href: "/dashboard",
    title: "Harbor Desk",
    text: "Same-day logistics control room with route health, exceptions, and depot capacity.",
    className: "home-card--harbor",
  },
  {
    href: "/product",
    title: "Meridian Type 42",
    text: "Field camera product detail page with variants, materials, specs, and configuration.",
    className: "home-card--camera",
  },
  {
    href: "/suite",
    title: "Northstar Atlas",
    text: "Four-page travel planning suite for research teams with linked subpages.",
    className: "home-card--atlas",
  },
];

const iconMap = {
  audit: ShieldCheck,
  chart: BarChart3,
  check: Check,
  compass: Compass,
  file: FileText,
  gauge: Gauge,
  grid: LayoutGrid,
  lock: LockKeyhole,
  map: Map,
  package: PackageCheck,
  radio: RadioTower,
  sliders: SlidersHorizontal,
  spark: Sparkles,
  team: Users,
  trip: CalendarRange,
  queue: ClipboardList,
};

export function IconBadge({ name = "spark" }) {
  const Icon = iconMap[name] || Sparkles;
  return (
    <span className="icon-badge" aria-hidden="true">
      <Icon size={18} strokeWidth={1.8} />
    </span>
  );
}

export function SurfaceNav({ brand, links = [], cta, tone = "dark" }) {
  return (
    <nav className={`surface-nav surface-nav--${tone}`} aria-label={`${brand} navigation`}>
      <Link className="brand-mark" href="/">
        <span aria-hidden="true" />
        {brand}
      </Link>
      <div className="nav-links" aria-label="Page sections">
        {links.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>
      {cta ? (
        <a className="nav-cta" href={cta.href}>
          {cta.label}
        </a>
      ) : null}
    </nav>
  );
}

export function HomeGrid() {
  return (
    <div className="home-grid">
      {routeCards.map((card) => (
        <Link className={`home-card ${card.className}`} href={card.href} key={card.href}>
          <span>{card.title}</span>
          <p>{card.text}</p>
          <ChevronRight size={22} aria-hidden="true" />
        </Link>
      ))}
    </div>
  );
}

export function InlineImage({ seed, label }) {
  return (
    <span
      className="inline-image"
      role="img"
      aria-label={label}
      style={{ backgroundImage: `url(https://picsum.photos/seed/${seed}/360/180)` }}
    />
  );
}

export function RevealWords({ text }) {
  return (
    <p className="scrub-copy">
      {text.split(" ").map((word, index) => (
        <span className="reveal-word" key={`${word}-${index}`}>
          {word}{" "}
        </span>
      ))}
    </p>
  );
}

export function BentoCard({ icon, title, children, className = "" }) {
  return (
    <article className={`bento-card gsap-reveal ${className}`}>
      <IconBadge name={icon} />
      <h3>{title}</h3>
      <div>{children}</div>
    </article>
  );
}

export function FooterBand({ title, text, action, secondary }) {
  return (
    <section className="footer-band gsap-reveal">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="footer-actions">
        {action ? (
          <a className="button button--primary" href={action.href}>
            {action.label}
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        ) : null}
        {secondary ? (
          <a className="button button--secondary" href={secondary.href}>
            {secondary.label}
          </a>
        ) : null}
      </div>
    </section>
  );
}

export function ProgressBar({ value, tone = "green" }) {
  return (
    <span className="progress-track" aria-label={`${value}%`}>
      <span className={`progress-fill progress-fill--${tone}`} style={{ width: `${value}%` }} />
    </span>
  );
}

export function SuiteNav({ active = "home" }) {
  const links = [
    { href: "/suite", label: "Home", key: "home" },
    { href: "/suite/itineraries", label: "Itineraries", key: "itineraries" },
    { href: "/suite/notes", label: "Field notes", key: "notes" },
    { href: "/suite/account", label: "Account", key: "account" },
  ];

  return (
    <nav className="suite-nav" aria-label="Northstar Atlas navigation">
      <Link className="suite-brand" href="/suite">
        <span aria-hidden="true">N</span>
        Northstar Atlas
      </Link>
      <div>
        {links.map((link) => (
          <Link aria-current={active === link.key ? "page" : undefined} href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
