import Link from "next/link";
import { CalendarBlank, Compass, Files, GearSix, MapTrifold, Notebook, UserCircle } from "@phosphor-icons/react/dist/ssr";

const suiteLinks = [
  { href: "/suite", label: "Home", key: "home", icon: Compass },
  { href: "/suite/itineraries", label: "Itineraries", key: "itineraries", icon: MapTrifold },
  { href: "/suite/notes", label: "Field notes", key: "notes", icon: Notebook },
  { href: "/suite/account", label: "Account", key: "account", icon: UserCircle }
];

export function SuiteShell({ current, children }) {
  return (
    <main className="suite-page">
      <header className="suite-nav">
        <Link href="/" className="suite-brand" aria-label="Northstar Atlas home">
          <span aria-hidden="true" />
          Northstar Atlas
        </Link>
        <nav aria-label="Northstar Atlas navigation">
          {suiteLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link href={link.href} className={current === link.key ? "is-current" : ""} key={link.href}>
                <Icon size={17} weight="bold" aria-hidden="true" />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </header>
      {children}
    </main>
  );
}

export function ExpeditionCard({ title, meta, children }) {
  return (
    <article className="expedition-card" data-reveal>
      <CalendarBlank size={22} weight="duotone" aria-hidden="true" />
      <div>
        <strong>{title}</strong>
        <span>{meta}</span>
      </div>
      <p>{children}</p>
    </article>
  );
}

export function NoteLine({ title, tag, text }) {
  return (
    <article className="note-line" data-reveal>
      <Files size={21} weight="duotone" aria-hidden="true" />
      <div>
        <strong>{title}</strong>
        <span>{tag}</span>
      </div>
      <p>{text}</p>
    </article>
  );
}

export function AccountSetting({ title, text }) {
  return (
    <article className="account-setting" data-reveal>
      <GearSix size={20} weight="duotone" aria-hidden="true" />
      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
      <button type="button">Edit</button>
    </article>
  );
}
