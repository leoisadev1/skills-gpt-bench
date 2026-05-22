import Link from "next/link";
import { BenchIcon } from "./BenchIcon";

const suiteLinks = [
  { href: "/suite", label: "Home", key: "home", icon: "Compass" },
  { href: "/suite/itineraries", label: "Itineraries", key: "itineraries", icon: "MapTrifold" },
  { href: "/suite/notes", label: "Field Notes", key: "notes", icon: "NotePencil" },
  { href: "/suite/account", label: "Account", key: "account", icon: "UserCircle" }
];

export function SuiteNav({ active }) {
  return (
    <header className="suite-nav" aria-label="Northstar Atlas navigation">
      <Link className="brand-lockup suite-brand" href="/suite">
        <span className="brand-mark atlas-mark" aria-hidden="true" />
        <span>Northstar Atlas</span>
      </Link>
      <nav className="suite-tabs" aria-label="Suite sections">
        {suiteLinks.map(({ href, label, key, icon }) => (
          <Link key={href} href={href} aria-current={active === key ? "page" : undefined}>
            <BenchIcon name={icon} size={17} />
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
