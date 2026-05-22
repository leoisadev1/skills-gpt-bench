import { BookmarkSimple, CloudArrowUp, MagnifyingGlass, Tag } from "@phosphor-icons/react/dist/ssr";

const notes = [
  ["Transect A", "Kelp density higher than 2025 baseline near marker 3.", "ecology"],
  ["Lab handoff", "Two vials need immediate refrigeration on arrival.", "handling"],
  ["Interview", "Harbor manager noted weekend crane maintenance.", "logistics"],
  ["Photo set", "North cliff reference shots linked to specimen bag C-17.", "media"],
];

export default function NotesPage() {
  return (
    <main className="atlas-page notes-page">
      <section className="page-heading">
        <p className="eyebrow">Field notes</p>
        <h1>Observations organized around the trip, not buried after it.</h1>
        <p>
          Capture site context, specimen handling notes, interview fragments,
          and media references while the team is still moving.
        </p>
      </section>

      <section className="notes-toolbar" aria-label="Field note controls">
        <label>
          <MagnifyingGlass size={16} aria-hidden="true" />
          <span className="sr-only">Search notes</span>
          <input placeholder="Search note text, tag, or site" />
        </label>
        <button type="button">
          <CloudArrowUp size={16} aria-hidden="true" /> Sync offline notes
        </button>
      </section>

      <section className="notes-grid" aria-label="Recent field notes">
        {notes.map(([title, copy, tag]) => (
          <article key={title}>
            <span>
              <BookmarkSimple size={18} weight="duotone" aria-hidden="true" />
              {title}
            </span>
            <p>{copy}</p>
            <small>
              <Tag size={14} aria-hidden="true" /> {tag}
            </small>
          </article>
        ))}
      </section>
    </main>
  );
}
