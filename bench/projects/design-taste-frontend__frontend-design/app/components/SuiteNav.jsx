import Link from "next/link";
import { suiteLinks } from "../../lib/content";
import { AppIcon } from "./AppIcon";

export function SuiteNav({ current }) {
  return (
    <header className="suite-header">
      <Link className="suite-brand" href="/suite" aria-label="Northstar Atlas home">
        <AppIcon name="MapTrifold" size={24} weight="duotone" aria-hidden="true" />
        <span>
          <strong>Northstar Atlas</strong>
          <small>Research travel plans</small>
        </span>
      </Link>
      <nav className="suite-tabs" aria-label="Northstar Atlas pages">
        {suiteLinks.map((link) => (
          <Link key={link.href} href={link.href} data-active={current === link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <button className="suite-brief" type="button">
        <AppIcon name="Briefcase" size={17} weight="bold" aria-hidden="true" />
        Review packet
      </button>
    </header>
  );
}
