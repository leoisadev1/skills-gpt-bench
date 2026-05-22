import Link from "next/link";

const defaultLinks = [
  { href: "/landing", label: "Lumen Ledger" },
  { href: "/dashboard", label: "Harbor Desk" },
  { href: "/product", label: "Meridian" },
  { href: "/suite", label: "Northstar" },
];

export function SiteNav({ brand, tone = "dark", links = defaultLinks, cta }) {
  return (
    <header className={`site-nav site-nav--${tone}`}>
      <Link href="/" className="site-nav__brand" aria-label={`${brand} home`}>
        {brand}
      </Link>
      <nav className="site-nav__links" aria-label={`${brand} navigation`}>
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      {cta ? (
        <Link href={cta.href} className="site-nav__cta">
          {cta.label}
        </Link>
      ) : null}
    </header>
  );
}
