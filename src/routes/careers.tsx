import { createFileRoute, Link } from "@tanstack/react-router";
import { Briefcase, HeartHandshake, MapPin, TrendingUp } from "lucide-react";
import { JOBS } from "@/lib/site-data";
import { PageHero, Section, SectionHeading } from "@/components/site/ui-bits";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at Avedon Education — Teaching, Tech & Marketing Jobs" },
      {
        name: "description",
        content:
          "Open roles at Avedon Education in Guwahati and Nagaon: faculty, academic counsellors, frontend developers, designers, marketers and operations.",
      },
      { property: "og:title", content: "Careers at Avedon Education" },
      {
        property: "og:description",
        content: "Join a growing education group in Northeast India — teaching, technology, design and operations roles.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://avedon-pathways-hub.lovable.app/careers" },
    ],
    links: [{ rel: "canonical", href: "https://avedon-pathways-hub.lovable.app/careers" }],
  }),
  component: CareersPage,
});

const PERKS = [
  { Icon: TrendingUp, title: "Real growth", text: "Fast-growing group — internal promotions before external hires." },
  { Icon: HeartHandshake, title: "Purpose", text: "Your work changes exam outcomes for first-generation learners." },
  { Icon: Briefcase, title: "Learning budget", text: "Annual training allowance and certification support for every role." },
];

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the education system you wish you had"
        subtitle="We hire teachers, technologists, designers and operators who care about student outcomes more than titles."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {PERKS.map(({ Icon, title, text }) => (
            <div key={title} className="rounded-3xl bg-card p-7 ring-1 ring-border">
              <Icon className="h-7 w-7 text-accent-foreground" />
              <h3 className="mt-4 font-display text-xl font-bold text-primary">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading eyebrow="Open Roles" title="Current openings" />
        <div className="mt-10 grid gap-4">
          {JOBS.map((j) => (
            <article key={j.slug} className="card-lift flex flex-col gap-4 rounded-2xl bg-card p-6 ring-1 ring-border sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-primary">{j.title}</h3>
                <p className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-muted px-3 py-1 font-semibold">{j.department}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {j.location}</span>
                  <span>{j.type}</span>
                  <span className="font-semibold text-accent-foreground">{j.stipend}</span>
                </p>
              </div>
              <Link to="/contact" className="shrink-0 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground">
                Apply now
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Don't see your role? Email your CV to hello@avedon.ai and tell us what you would build here.
        </p>
      </Section>
    </>
  );
}
