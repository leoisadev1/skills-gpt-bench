import Link from "next/link";
import { Compass } from "lucide-react";

const suiteLinks = [
  ["/suite", "Home"],
  ["/suite/itineraries", "Itineraries"],
  ["/suite/notes", "Field notes"],
  ["/suite/account", "Account"],
];

export default function SuiteLayout({ children }) {
  return (
    <div className="suite-shell">
      <header className="suite-header">
        <Link className="suite-brand" href="/suite">
          <Compass size={18} aria-hidden="true" />
          Northstar Atlas
        </Link>
        <nav className="suite-nav" aria-label="Northstar Atlas pages">
          {suiteLinks.map(([href, label]) => (
            <Link href={href} key={href}>
              {label}
            </Link>
          ))}
        </nav>
      </header>
      {children}
    </div>
  );
}
