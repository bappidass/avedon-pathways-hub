import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Trophy } from "lucide-react";
import { RESULTS, RESULT_BRANDS, STATS } from "@/lib/site-data";
import { Counter, PageHero, Section, SectionHeading } from "@/components/site/ui-bits";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results & Toppers — APSC, UPSC, NEET, JEE & SEBA Selections" },
      {
        name: "description",
        content:
          "Avedon Education selections and toppers across APSC CCE, UPSC CSE, SSC CGL, Assam TET, NEET, JEE Advanced, NDA and SEBA board examinations.",
      },
      { property: "og:title", content: "Avedon Education Results & Toppers" },
      {
        property: "og:description",
        content: "Verified selections and ranks from Scordemy IAS, Scordemy, MindPower, ExSchool and DDC.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://avedon-pathways-hub.lovable.app/results" },
    ],
    links: [{ rel: "canonical", href: "https://avedon-pathways-hub.lovable.app/results" }],
  }),
  component: ResultsPage,
});

function ResultsPage() {
  const [brand, setBrand] = useState("All");
  const filtered = useMemo(
    () => RESULTS.filter((r) => brand === "All" || r.brand === brand),
    [brand],
  );

  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Selections we are proud of"
        subtitle="Every rank below belongs to a student who studied with an Avedon brand. No borrowed results, no inflated claims."
      />

      <Section tone="mist">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.slice(0, 4).map((s) => (
            <div key={s.label} className="rounded-2xl bg-card p-6 text-center ring-1 ring-border">
              <p className="font-display text-3xl font-extrabold text-accent-foreground">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Toppers" title="Recent selections" />
        <div className="mt-8 flex flex-wrap gap-2">
          {RESULT_BRANDS.map((b) => (
            <button
              key={b}
              onClick={() => setBrand(b)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                brand === b ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-primary"
              }`}
            >
              {b}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <div key={r.name} className="card-lift rounded-2xl bg-card p-6 ring-1 ring-border">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-display font-bold text-primary">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.exam}</p>
                </div>
              </div>
              <p className="mt-5 flex items-center gap-2 font-display text-xl font-extrabold text-accent-foreground">
                <Trophy className="h-5 w-5" /> {r.rank}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{r.brand} · {r.year}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <div className="flex flex-col items-center gap-5 text-center">
          <h2 className="max-w-2xl font-display text-3xl font-extrabold text-navy-foreground">
            Your name could be on this page next year.
          </h2>
          <Link to="/programs" className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground">
            Explore Programs
          </Link>
        </div>
      </Section>
    </>
  );
}
