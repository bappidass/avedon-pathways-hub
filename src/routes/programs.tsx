import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CalendarDays, MapPin, Users } from "lucide-react";
import { PROGRAMS, PROGRAM_CATEGORIES } from "@/lib/site-data";
import { PageHero, Section, SectionHeading } from "@/components/site/ui-bits";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs & Courses — APSC, UPSC, SSC, NEET, JEE & School" },
      {
        name: "description",
        content:
          "Browse Avedon Education batches for APSC, UPSC, SSC, Banking, Railways, TET, JEE, NEET, NDA and SEBA school classes — online, hybrid and classroom.",
      },
      { property: "og:title", content: "Avedon Education Programs & Batches" },
      {
        property: "og:description",
        content: "Upcoming batches with fees, faculty, duration and start dates across all Avedon brands.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://avedon-pathways-hub.lovable.app/programs" },
    ],
    links: [{ rel: "canonical", href: "https://avedon-pathways-hub.lovable.app/programs" }],
  }),
  component: ProgramsPage,
});

const MODES = ["All", "Online", "Hybrid", "Offline"];

function ProgramsPage() {
  const [category, setCategory] = useState("All");
  const [mode, setMode] = useState("All");

  const filtered = useMemo(
    () =>
      PROGRAMS.filter(
        (p) => (category === "All" || p.category === category) && (mode === "All" || p.mode === mode),
      ),
    [category, mode],
  );

  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Find the batch built for your exam"
        subtitle="Filter by examination track and learning mode. Every batch includes recorded lessons, printed or digital notes, doubt sessions and a full test series."
      />

      <Section>
        <SectionHeading eyebrow="Browse" title="All programs" />

        <div className="mt-8 space-y-3">
          <div className="flex flex-wrap gap-2">
            {PROGRAM_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  category === c ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {MODES.map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-colors ${
                  mode === m ? "bg-accent text-accent-foreground" : "bg-card text-muted-foreground ring-1 ring-border"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article key={p.name} className="card-lift flex flex-col rounded-2xl bg-card p-6 ring-1 ring-border">
              <div className="flex items-center justify-between">
                <span className="eyebrow bg-primary/8 text-primary">{p.category}</span>
                <span className="text-xs font-semibold text-muted-foreground">{p.mode}</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-bold text-primary">{p.name}</h3>
              <p className="text-sm text-muted-foreground">{p.brand}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-accent-foreground" /> Starts {p.start} · {p.duration}</li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent-foreground" /> {p.location}</li>
                <li className="flex items-center gap-2"><Users className="h-4 w-4 text-accent-foreground" /> {p.faculty}</li>
              </ul>
              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="font-display text-xl font-extrabold text-accent-foreground">{p.price}</span>
                <Link to="/contact" className="rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground">
                  Enquire
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-10 rounded-2xl bg-muted p-8 text-center text-sm text-muted-foreground">
            No batches match this combination yet. Try another exam track or mode.
          </p>
        )}
      </Section>
    </>
  );
}
