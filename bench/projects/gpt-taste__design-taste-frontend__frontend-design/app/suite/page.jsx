import Link from "next/link";
import { ArrowRight, CalendarDots, Compass, MapPin, UsersThree } from "@phosphor-icons/react/ssr";
import { SuiteShell } from "../../components/SuiteShell";

export default function SuiteHomePage() {
  return (
    <SuiteShell
      active="/suite"
      eyebrow="Research travel planning"
      title="Northstar Atlas plans field movement around the work, not the booking form."
      summary="A travel planning service for research teams that connects itineraries, source notes, account controls, and field constraints in one calm workspace."
    >
      <section className="suite-home-grid">
        <article className="suite-map-card" data-image-pulse>
          <div className="route-line" />
          <span className="map-pin pin-one" />
          <span className="map-pin pin-two" />
          <span className="map-pin pin-three" />
          <div className="map-caption">
            <Compass size={22} weight="duotone" aria-hidden="true" />
            <strong>Alpine watershed study</strong>
            <small>6 researchers - 4 transfer windows - 2 fragile samples</small>
          </div>
        </article>
        <div className="suite-action-stack">
          {[
            ["Plan from constraints", "Start with permits, access windows, weather, sample handling, and team roles."],
            ["Keep notes attached", "Field notes stay connected to dates, places, sources, and trip decisions."],
            ["Control the account", "Research leads manage travelers, approvals, billing, and data retention."]
          ].map(([title, body]) => (
            <article key={title} data-reveal>
              <h2>{title}</h2>
              <p>{body}</p>
            </article>
          ))}
          <Link className="button button-dark" href="/suite/itineraries">
            Open itineraries
            <ArrowRight size={18} weight="bold" aria-hidden="true" />
          </Link>
        </div>
      </section>
      <section className="suite-proof-row" aria-label="Northstar Atlas operating proof">
        {[
          ["28", "active field legs"],
          ["6.3 hr", "average plan revision saved"],
          ["14", "country entry rule sets"]
        ].map(([value, label]) => (
          <article key={label} data-reveal>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>
      <section className="suite-next-grid" aria-label="Suite navigation">
        {[
          {
            href: "/suite/itineraries",
            icon: CalendarDots,
            title: "Itineraries",
            body: "Inspect transfer plans and day-by-day field timing."
          },
          {
            href: "/suite/notes",
            icon: MapPin,
            title: "Field notes",
            body: "Review source cards, interviews, and observed constraints."
          },
          {
            href: "/suite/account",
            icon: UsersThree,
            title: "Account",
            body: "Manage research teams, billing, and access."
          }
        ].map((item) => {
          const LinkIcon = item.icon;
          return (
            <Link href={item.href} className="suite-next-card" key={item.href} data-reveal>
              <LinkIcon size={24} weight="duotone" aria-hidden="true" />
              <strong>{item.title}</strong>
              <span>{item.body}</span>
            </Link>
          );
        })}
      </section>
    </SuiteShell>
  );
}
