import Link from "next/link";

const suiteLinks = [
  { href: "/suite", label: "Home" },
  { href: "/suite/itineraries", label: "Itineraries" },
  { href: "/suite/notes", label: "Field notes" },
  { href: "/suite/account", label: "Account" },
];

export function SuiteNav() {
  return (
    <header className="suite-nav">
      <Link href="/suite" className="suite-nav__brand" aria-label="Northstar Atlas home">
        Northstar Atlas
      </Link>
      <nav className="suite-nav__links" aria-label="Northstar Atlas navigation">
        {suiteLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <Link href="/suite/account" className="suite-nav__action">
        Team access
      </Link>
    </header>
  );
}
