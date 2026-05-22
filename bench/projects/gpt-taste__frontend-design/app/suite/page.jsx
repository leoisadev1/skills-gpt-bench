import Link from "next/link";
import { ArrowRight, BookOpen, CalendarDays, FileSearch, MapPinned, PlaneTakeoff, UsersRound } from "lucide-react";
import { BentoCard, FooterBand, InlineImage, RevealWords, SuiteNav } from "../components/shared";

const trips = [
  ["Svalbard winter access", "6 researchers", "Permit draft ready"],
  ["Sierra watershed survey", "4 researchers", "Lodging hold needed"],
  ["Kyushu transit study", "8 researchers", "Interview slots synced"],
];

export default function SuiteHomePage() {
  return (
    <main className="main-shell atlas-page">
      <SuiteNav active="home" />
      <section className="suite-hero">
        <div className="suite-copy gsap-reveal">
          <h1>
            Travel planning for research teams that carry questions, equipment, and deadlines.{" "}
            <InlineImage label="research route landscape" seed="northstar-route" />
          </h1>
          <p>
            Northstar Atlas keeps itineraries, field notes, permissions, and team logistics connected from planning
            through return, without forcing researchers into generic vacation software.
          </p>
          <div className="hero-actions">
            <Link className="button button--primary" href="/suite/itineraries">
              Plan an itinerary
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="button button--secondary" href="/suite/notes">
              Review field notes
            </Link>
          </div>
        </div>
        <aside className="atlas-map media-zoom" aria-label="Northstar Atlas planning map">
          <div className="atlas-grid" aria-hidden="true" />
          <span className="atlas-node atlas-node--one">Oslo</span>
          <span className="atlas-node atlas-node--two">Longyearbyen</span>
          <span className="atlas-node atlas-node--three">Ny-Alesund</span>
          <div className="atlas-route-line" />
          <article>
            <strong>Arctic migration study</strong>
            <p>9 legs, 14 equipment cases, 3 permit owners</p>
          </article>
        </aside>
      </section>

      <section className="atlas-overview">
        <div className="section-heading gsap-reveal">
          <h2>A shared operating picture before anyone boards the plane.</h2>
          <p>Home stays high-level: active trips, upcoming decisions, and the research context behind each movement.</p>
        </div>
        <div className="bento-grid bento-grid--atlas">
          <BentoCard className="span-5" icon="trip" title="Active research trips">
            <div className="trip-list">
              {trips.map(([name, team, status]) => (
                <Link href="/suite/itineraries" key={name}>
                  <strong>{name}</strong>
                  <span>{team}</span>
                  <p>{status}</p>
                </Link>
              ))}
            </div>
          </BentoCard>
          <BentoCard className="span-7 visual-card" icon="map" title="Live planning canvas">
            <div className="planning-canvas" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
          </BentoCard>
          <BentoCard className="span-4" icon="team" title="Team readiness">
            <p>Passports, roles, training checks, and contact protocols surface beside the trip they belong to.</p>
          </BentoCard>
          <BentoCard className="span-4" icon="file" title="Field note continuity">
            <p>Notes begin as planning hypotheses and remain linked to places, people, and interview guides.</p>
          </BentoCard>
          <BentoCard className="span-4" icon="lock" title="Account controls">
            <p>Research groups can separate sensitive locations, external collaborators, and billing ownership.</p>
          </BentoCard>
        </div>
      </section>

      <section className="atlas-desire">
        <div className="media-zoom atlas-photo" aria-label="Research team travel scene" />
        <div className="atlas-desire-copy gsap-reveal">
          <h2>Designed around research movement, not leisure browsing.</h2>
          <RevealWords text="Plans change when permits arrive, roads close, interviews move, or equipment clears customs. Northstar Atlas keeps the route and the reason for the route in the same place." />
        </div>
      </section>

      <section className="suite-link-row" aria-label="Northstar Atlas pages">
        {[
          ["/suite/itineraries", "Itineraries", CalendarDays],
          ["/suite/notes", "Field notes", BookOpen],
          ["/suite/account", "Account", UsersRound],
          ["/", "Benchmark index", PlaneTakeoff],
        ].map(([href, label, Icon]) => (
          <Link href={href} key={href}>
            <Icon size={22} aria-hidden="true" />
            {label}
          </Link>
        ))}
      </section>

      <FooterBand
        action={{ href: "/suite/itineraries", label: "Open itineraries" }}
        secondary={{ href: "/suite/account", label: "Account settings" }}
        text="Northstar Atlas keeps research travel grounded in the project, not just the booking."
        title="Move the team without losing the field context."
      />
    </main>
  );
}
