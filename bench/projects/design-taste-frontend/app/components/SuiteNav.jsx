"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { suiteLinks } from "../../lib/content";
import { Icon } from "./Icon";

export function SuiteNav() {
  const pathname = usePathname();

  return (
    <nav className="suite-nav" aria-label="Northstar Atlas pages">
      <Link href="/suite" className="suite-brand">
        <Icon name="Compass" size={22} />
        <span>Northstar Atlas</span>
      </Link>
      <div className="suite-tabs">
        {suiteLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.href} href={link.href} aria-current={isActive ? "page" : undefined}>
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
