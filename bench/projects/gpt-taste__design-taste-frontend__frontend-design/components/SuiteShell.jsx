import Link from "next/link";
import { Compass, Notebook, UserCircle, MapTrifold } from "@phosphor-icons/react/ssr";

const suiteLinks = [
  { href: "/suite", label: "Home", icon: Compass },
  { href: "/suite/itineraries", label: "Itineraries", icon: MapTrifold },
  { href: "/suite/notes", label: "Field notes", icon: Notebook },
  { href: "/suite/account", label: "Account", icon: UserCircle }
];

export function SuiteShell({
  eyebrow,
  title,
  summary,
  active,
  children
}) {
  return (
    <main className="suite-page overflow-guard">
      <header className="suite-topbar" data-reveal>
        <Link href="/" className="suite-mark" aria-label="Go to benchmark index">
          <span className="suite-mark-symbol">NA</span>
          <span>Northstar Atlas</span>
        </Link>
        <nav className="suite-nav" aria-label="Northstar Atlas sections">
          {suiteLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active === item.href ? "suite-nav-link is-active" : "suite-nav-link"}
              >
                <Icon size={17} weight="duotone" aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </header>
      <section className="suite-hero" data-reveal>
        <p className="suite-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{summary}</p>
      </section>
      {children}
    </main>
  );
}
