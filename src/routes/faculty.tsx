import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { FACULTY } from "@/lib/site-data";
import { PageHero, Section, SectionHeading } from "@/components/site/ui-bits";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty & Mentors — Avedon Education Teaching Team" },
      {
        name: "description",
        content:
          "Meet the 100+ educators behind Avedon Education — General Studies, Quant, Biology, Physics, Pedagogy, Mathematics and SSB mentors across our brands.",
      },
      { property: "og:title", content: "Avedon Education Faculty & Mentors" },
      {
        property: "og:description",
        content: "Subject experts and mentors teaching across Scordemy, Scordemy IAS, MindPower, ExSchool and DDC.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://avedon-pathways-hub.lovable.app/faculty" },
    ],
    links: [{ rel: "canonical", href: "https://avedon-pathways-hub.lovable.app/faculty" }],
  }),
  component: FacultyPage,
});

function FacultyPage() {
  const departments = useMemo(
    () => ["All", ...Array.from(new Set(FACULTY.map((f) => f.department)))],
    [],
  );
  const [dept, setDept] = useState("All");
  const list = FACULTY.filter((f) => dept === "All" || f.department === dept);

  return (
    <>
      <PageHero
        eyebrow="Faculty"
        title="Teachers students come back for"
        subtitle="Our faculty are hired for classroom results, trained every term, and reviewed by the students they teach."
      />

      <Section>
        <SectionHeading eyebrow="Our Team" title="Faculty directory" />
        <div className="mt-8 flex flex-wrap gap-2">
          {departments.map((d) => (
            <button
              key={d}
              onClick={() => setDept(d)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                dept === d ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-primary"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((f) => (
            <article key={f.slug} className="card-lift rounded-2xl bg-card p-6 text-center ring-1 ring-border">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 font-display text-xl font-bold text-primary">
                {f.name.charAt(0)}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-primary">{f.name}</h3>
              <p className="text-xs text-muted-foreground">{f.role}</p>
              <p className="mt-3 text-sm font-semibold text-foreground">{f.subject}</p>
              <p className="text-xs text-muted-foreground">{f.brand} · {f.experience}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="font-display text-2xl font-extrabold text-primary">Want to teach with us?</h2>
          <p className="max-w-xl text-sm text-muted-foreground">
            We are always hiring subject experts for classroom and online batches across Assam.
          </p>
          <Link to="/careers" className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground">
            See open roles
          </Link>
        </div>
      </Section>
    </>
  );
}
