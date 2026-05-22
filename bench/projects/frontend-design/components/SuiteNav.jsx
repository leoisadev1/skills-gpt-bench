import Link from "next/link";
import { BookOpen, Compass, MapPinned, UserRound } from "lucide-react";

const suiteItems = [
  { href: "/suite", label: "Home", icon: Compass },
  { href: "/suite/itineraries", label: "Itineraries", icon: MapPinned },
  { href: "/suite/notes", label: "Field notes", icon: BookOpen },
  { href: "/suite/account", label: "Account", icon: UserRound },
];

export function SuiteNav({ active }) {
  return (
    <nav className="suite-nav" aria-label="Northstar Atlas navigation">
      <Link className="suite-brand" href="/suite">
        <span className="suite-mark" aria-hidden="true" />
        <span>Northstar Atlas</span>
      </Link>
      <div className="suite-tabs">
        {suiteItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              className="suite-tab"
              data-active={active === item.href}
              href={item.href}
            >
              <Icon size={16} aria-hidden="true" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
