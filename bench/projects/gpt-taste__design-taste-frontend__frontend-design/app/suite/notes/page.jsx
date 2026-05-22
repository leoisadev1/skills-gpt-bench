import { FileText, MapPin, Notebook, Quotes } from "@phosphor-icons/react/ssr";
import { SuiteShell } from "../../../components/SuiteShell";

const notes = [
  ["Ranger desk call", "North access road has a soft closure after 16:00. Local escort can extend by 40 minutes."],
  ["Lab handling note", "Core samples must reach the mobile freezer before transfer to prevent thaw cycle contamination."],
  ["Community source", "Market road closes early on Wednesday for repair equipment staging near the bridge."],
  ["Permit appendix", "Drone flights require ridge spotter and radio contact with the station coordinator."]
];

export default function SuiteNotesPage() {
  return (
    <SuiteShell
      active="/suite/notes"
      eyebrow="Field notes"
      title="Source cards keep research decisions traceable."
      summary="Notes are structured around places, source reliability, and the itinerary decisions they affect."
    >
      <section className="notes-layout">
        <article className="featured-note" data-reveal>
          <Quotes size={28} weight="duotone" aria-hidden="true" />
          <h2>North access is technically open, but crews lose the gate after the afternoon supply run.</h2>
          <p>Source: ranger desk, verified against permit appendix and Wednesday depot schedule.</p>
        </article>
        <div className="note-grid" aria-label="Field note cards">
          {notes.map(([title, body], index) => (
            <article key={title} data-stack-card>
              {index % 2 === 0 ? (
                <Notebook size={22} weight="duotone" aria-hidden="true" />
              ) : (
                <FileText size={22} weight="duotone" aria-hidden="true" />
              )}
              <h2>{title}</h2>
              <p>{body}</p>
              <span><MapPin size={15} weight="bold" aria-hidden="true" /> Attached to itinerary</span>
            </article>
          ))}
        </div>
      </section>
    </SuiteShell>
  );
}
