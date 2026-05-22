import Link from "next/link";
import { ArrowRight, CalendarCheck, ClipboardCheck, MapPinned, Plane, TrainFront, TriangleAlert } from "lucide-react";
import { FooterBand, ProgressBar, SuiteNav } from "../../components/shared";

const days = [
  {
    date: "May 28",
    title: "Arrival and equipment clearance",
    items: ["OSL arrival", "Customs declaration", "Cold case transfer", "Team safety check"],
  },
  {
    date: "May 29",
    title: "Northern transit",
    items: ["Charter leg", "Fuel contingency", "Satellite check", "Permit pickup"],
  },
  {
    date: "May 30",
    title: "Field deployment",
    items: ["Boat transfer", "Sensor placement", "Interview window", "Evening data sync"],
  },
];

const logistics = [
  ["Permit status", 78, "amber"],
  ["Equipment readiness", 92, "green"],
  ["Lodging coverage", 66, "amber"],
  ["Transit confidence", 84, "green"],
];

export default function ItinerariesPage() {
  return (
    <main className="main-shell atlas-page atlas-subpage">
      <SuiteNav active="itineraries" />
      <section className="itinerary-workspace">
        <div className="suite-page-heading gsap-reveal">
          <span>Northstar Atlas</span>
          <h1>Itineraries that show movement, responsibility, and risk in one view.</h1>
          <p>
            This page is for planning the actual field movement: travel legs, handoffs, permits, lodging, equipment,
            and the decisions that can block a research day.
          </p>
        </div>

        <div className="itinerary-toolbar" aria-label="Itinerary filters">
          <button type="button">Arctic migration study</button>
          <button type="button">May 28 to Jun 6</button>
          <button type="button">Show risk owners</button>
          <Link href="/suite/notes">
            Field notes
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="itinerary-grid">
          <section className="route-timeline panel gsap-reveal" aria-label="Route timeline">
            <div className="panel-heading">
              <div>
                <span>Route</span>
                <h2>Oslo to Ny-Alesund</h2>
              </div>
              <MapPinned size={22} aria-hidden="true" />
            </div>
            <ol>
              {[
                ["Flight", "OSL", "Longyearbyen", Plane],
                ["Transfer", "Storage pier", "Research vessel", TrainFront],
                ["Landing", "Field station", "Sensor transect", CalendarCheck],
              ].map(([type, start, end, Icon]) => (
                <li key={`${start}-${end}`}>
                  <Icon size={19} aria-hidden="true" />
                  <div>
                    <strong>{type}</strong>
                    <span>
                      {start} to {end}
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="day-board" aria-label="Itinerary day board">
            {days.map((day) => (
              <article className="day-card stack-card" key={day.date}>
                <span>{day.date}</span>
                <h2>{day.title}</h2>
                <ul>
                  {day.items.map((item) => (
                    <li key={item}>
                      <ClipboardCheck size={16} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <aside className="logistics-panel panel gsap-reveal" aria-label="Logistics readiness">
            <div className="panel-heading">
              <div>
                <span>Readiness</span>
                <h2>Logistics checks</h2>
              </div>
              <TriangleAlert size={22} aria-hidden="true" />
            </div>
            {logistics.map(([name, value, tone]) => (
              <div className="capacity-row" key={name}>
                <span>{name}</span>
                <ProgressBar tone={tone} value={value} />
                <strong>{value}%</strong>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <FooterBand
        action={{ href: "/suite/notes", label: "Open field notes" }}
        secondary={{ href: "/suite", label: "Suite home" }}
        text="Itinerary decisions stay connected to permits, equipment, and research intent."
        title="Plan the route and the reason for every stop."
      />
    </main>
  );
}
