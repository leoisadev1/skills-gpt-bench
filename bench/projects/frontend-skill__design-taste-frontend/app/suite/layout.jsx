import Link from "next/link";
import { Compass, MapPinLine, Notebook, UserCircle } from "@phosphor-icons/react/dist/ssr";

const nav = [
  { href: "/suite", label: "Home", Icon: Compass },
  { href: "/suite/itineraries", label: "Itineraries", Icon: MapPinLine },
  { href: "/suite/notes", label: "Field notes", Icon: Notebook },
  { href: "/suite/account", label: "Account", Icon: UserCircle },
];

export default function SuiteLayout({ children }) {
  return (
    <div className="atlas-shell">
      <header className="atlas-header">
        <Link href="/suite" className="wordmark">
          Northstar Atlas
        </Link>
        <nav aria-label="Northstar Atlas pages">
          {nav.map(({ href, label, Icon }) => (
            <Link href={href} key={href}>
              <Icon size={17} weight="duotone" aria-hidden="true" />
              {label}
            </Link>
          ))}
        </nav>
      </header>
      {children}
    </div>
  );
}
