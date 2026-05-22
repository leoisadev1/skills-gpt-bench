import { CalendarCheck, CircleDashed, Plane, TrainFront, Umbrella } from "lucide-react";
import { SuiteNav } from "../../../components/SuiteNav";

const itinerary = [
  { day: "Day 1", title: "Arrival and equipment clearance", meta: "KEF airport, 2 vans, customs letter attached" },
  { day: "Day 2", title: "North basin sampling window", meta: "06:30 departure, weather hold until 11:00" },
  { day: "Day 3", title: "Community interview block", meta: "Akureyri library room 2, translator confirmed" },
  { day: "Day 4", title: "Contingency route and return", meta: "Route 1 southbound, alternate fuel stop marked" },
];

const logistics = [
  { icon: Plane, title: "Flights", text: "6 tickets held, 1 passport mismatch" },
  { icon: TrainFront, title: "Ground", text: "Two 4x4 vans, rail backup in draft" },
  { icon: Umbrella, title: "Risk", text: "Wind advisory, site B alternate approved" },
];

export default function ItinerariesPage() {
  return (
    <main className="suite-page itinerary-page">
      <SuiteNav active="/suite/itineraries" />
      <section className="suite-section-heading">
        <p className="eyebrow">Itineraries</p>
        <h1>Plan the trip around research windows, not just reservations.</h1>
        <p>
          Northstar Atlas links movement, permits, site access, and contingency
          decisions so field teams see what can actually happen each day.
        </p>
      </section>

      <section className="itinerary-layout" aria-label="Research itinerary planner">
        <div className="timeline-panel">
          {itinerary.map((item, index) => (
            <article className="timeline-item" key={item.day}>
              <span>{item.day}</span>
              <div>
                <h2>{item.title}</h2>
                <p>{item.meta}</p>
              </div>
              {index < 2 ? <CalendarCheck size={18} aria-hidden="true" /> : <CircleDashed size={18} aria-hidden="true" />}
            </article>
          ))}
        </div>
        <aside className="logistics-panel" aria-labelledby="logistics-title">
          <h2 id="logistics-title">Logistics stack</h2>
          <div className="logistics-grid">
            {logistics.map((item) => {
              const Icon = item.icon;
              return (
              <article key={item.title}>
                <Icon size={20} aria-hidden="true" />
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </article>
              );
            })}
          </div>
        </aside>
      </section>
    </main>
  );
}
