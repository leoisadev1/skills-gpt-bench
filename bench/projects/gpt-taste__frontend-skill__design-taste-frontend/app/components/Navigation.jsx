import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { suiteRoutes } from "../lib/content";

export function SiteNav({ brand = "Benchmark", tone = "dark" }) {
  return (
    <nav className={`site-nav ${tone === "light" ? "site-nav-light" : ""}`} aria-label="Main navigation">
      <Link href="/" className="nav-brand">{brand}</Link>
      <div className="nav-links">
        <Link href="/landing">Landing</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/product">Product</Link>
        <Link href="/suite">Suite</Link>
      </div>
      <Link href="/" className="nav-return">
        Index <ArrowRight size={16} weight="bold" aria-hidden="true" />
      </Link>
    </nav>
  );
}

export function SuiteNav() {
  return (
    <nav className="suite-nav" aria-label="Northstar Atlas navigation">
      <Link href="/suite" className="suite-brand">Northstar Atlas</Link>
      <div className="suite-links">
        {suiteRoutes.map((route) => (
          <Link key={route.href} href={route.href}>{route.label}</Link>
        ))}
      </div>
    </nav>
  );
}
