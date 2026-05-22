import Link from "next/link";
import { BenchIcon } from "./BenchIcon";

export function SiteNav({
  brand,
  links,
  ctaHref,
  ctaLabel
}) {
  return (
    <header className="site-nav" aria-label={`${brand} navigation`}>
      <Link className="brand-lockup" href="/">
        <span className="brand-mark" aria-hidden="true" />
        <span>{brand}</span>
      </Link>
      <nav className="nav-links" aria-label="Primary">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      {ctaHref && ctaLabel ? (
        <Link className="nav-cta" href={ctaHref}>
          {ctaLabel}
          <BenchIcon name="ArrowRight" size={16} />
        </Link>
      ) : null}
    </header>
  );
}

export const benchmarkLinks = [
  { href: "/landing", label: "Landing" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/product", label: "Product" },
  { href: "/suite", label: "Suite" }
];
