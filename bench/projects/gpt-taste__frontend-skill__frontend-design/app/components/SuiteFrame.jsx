import Link from "next/link";
import { ArrowUpRight, Compass, NotebookTabs, Route, UserRound } from "lucide-react";

const suiteLinks = [
  { href: "/suite", label: "Home", icon: Compass },
  { href: "/suite/itineraries", label: "Itineraries", icon: Route },
  { href: "/suite/notes", label: "Field notes", icon: NotebookTabs },
  { href: "/suite/account", label: "Account", icon: UserRound },
];

export function SuiteFrame({ active, children }) {
  return (
    <main className="suite-shell overflow-safe">
      <nav className="suite-nav" aria-label="Northstar Atlas">
        <Link href="/suite" className="suite-brand" aria-label="Northstar Atlas home">
          <span className="brand-mark">N</span>
          <span>Northstar Atlas</span>
        </Link>
        <div className="suite-links">
          {suiteLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active === item.href ? "suite-link active" : "suite-link"}
                aria-current={active === item.href ? "page" : undefined}
              >
                <Icon size={16} aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
        <Link href="/" className="suite-exit">
          Routes <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </nav>
      {children}
    </main>
  );
}
