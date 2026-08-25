import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, MapPin, Phone, Users } from "lucide-react";
import centre from "@/assets/centre.jpg";
import { CENTERS } from "@/lib/site-data";
import { PageHero, Section, SectionHeading } from "@/components/site/ui-bits";

export const Route = createFileRoute("/centers")({
  head: () => ({
    meta: [
      { title: "Centers — Guwahati, Nagaon & Jorhat Learning Campuses" },
      {
        name: "description",
        content:
          "Visit Avedon Education centers in Guwahati (Beltola, Christian Basti), Nagaon and Jorhat for classroom batches, counselling and library access.",
      },
      { property: "og:title", content: "Avedon Education Centers" },
      {
        property: "og:description",
        content: "Addresses, timings, phone numbers and programs at each Avedon learning center.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://avedon-pathways-hub.lovable.app/centers" },
    ],
    links: [{ rel: "canonical", href: "https://avedon-pathways-hub.lovable.app/centers" }],
  }),
  component: CentersPage,
});

function CentersPage() {
  return (
    <>
      <PageHero
        eyebrow="Centers"
        title="Classrooms across Assam, classes across India"
        subtitle="Walk into any center for counselling, demo classes, library access and offline batches."
      />

      <Section>
        <SectionHeading eyebrow="Locations" title="Find your nearest center" />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {CENTERS.map((c) => (
            <article key={c.slug} className="card-lift overflow-hidden rounded-3xl bg-card ring-1 ring-border">
              <img src={centre} alt={`${c.name} campus`} loading="lazy" className="h-44 w-full object-cover" />
              <div className="p-6">
                <p className="text-xs font-semibold tracking-wide text-accent-foreground uppercase">{c.city}</p>
                <h3 className="mt-1 font-display text-xl font-bold text-primary">{c.name}</h3>
                <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                  <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" /> {c.address}</li>
                  <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" /> <a href={`tel:${c.phone.replace(/\s/g, "")}`}>{c.phone}</a></li>
                  <li className="flex gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" /> {c.hours}</li>
                  <li className="flex gap-2"><Users className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" /> {c.faculty} faculty on campus</li>
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.programs.map((p) => (
                    <span key={p} className="rounded-full bg-muted px-3 py-1 text-xs font-semibold">{p}</span>
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted-foreground">Brands here: {c.brands.join(", ")}</p>
                <Link to="/contact" className="mt-5 inline-block rounded-full bg-primary px-4 py-2 text-xs font-bold text-primary-foreground">
                  Book a visit
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
