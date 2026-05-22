import Link from "next/link";
import { BookOpen, Compass, Map, UserRound } from "lucide-react";

const suiteNav = [
  { href: "/suite", label: "Home", key: "home", icon: Compass },
  { href: "/suite/itineraries", label: "Itineraries", key: "itineraries", icon: Map },
  { href: "/suite/notes", label: "Notes", key: "notes", icon: BookOpen },
  { href: "/suite/account", label: "Account", key: "account", icon: UserRound },
];

export function SuiteShell({ active, eyebrow, title, description, children, rail }) {
  return (
    <main className="suite-page">
      <aside className="suite-sidebar" aria-label="Northstar Atlas navigation">
        <Link className="suite-mark" href="/suite">
          <span className="suite-compass" aria-hidden="true">
            <Compass size={16} />
          </span>
          <span>
            <strong>Northstar Atlas</strong>
            <small>Research travel</small>
          </span>
        </Link>
        <nav className="suite-nav">
          {suiteNav.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active === item.key ? "active" : ""}
                aria-current={active === item.key ? "page" : undefined}
              >
                <Icon size={17} aria-hidden="true" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="suite-sidebar-note">
          <span>Live plan</span>
          <strong>Lapland Sensor Study</strong>
          <small>6 travelers · 18 days · 4 field sites</small>
        </div>
      </aside>
      <section className="suite-main">
        <header className="suite-header">
          <p className="eyebrow">{eyebrow}</p>
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </header>
        <div className="suite-workspace">
          <div className="suite-content">{children}</div>
          {rail ? <aside className="suite-rail">{rail}</aside> : null}
        </div>
      </section>
    </main>
  );
}
