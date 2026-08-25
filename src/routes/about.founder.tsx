import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import founder from "@/assets/founder.jpg";
import { AWARDS, VENTURES } from "@/lib/site-data";
import { PageHero, Section, SectionHeading } from "@/components/site/ui-bits";

export const Route = createFileRoute("/about/founder")({
  head: () => ({
    meta: [
      { title: "Matiar Rahman — Founder & CEO, Avedon Education" },
      {
        name: "description",
        content:
          "The story of Matiar Rahman, who built Avedon Education from a single Guwahati coaching batch into a ten-brand learning group for Northeast India.",
      },
      { property: "og:title", content: "Matiar Rahman — Founder's Story" },
      {
        property: "og:description",
        content: "From a village classroom to a ten-brand education ecosystem in Northeast India.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "https://avedon-pathways-hub.lovable.app/about/founder" },
    ],
    links: [{ rel: "canonical", href: "https://avedon-pathways-hub.lovable.app/about/founder" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Matiar Rahman",
          jobTitle: "Founder & CEO",
          worksFor: { "@type": "Organization", name: "Avedon Education" },
        }),
      },
    ],
  }),
  component: FounderPage,
});

const CHAPTERS = [
  {
    title: "Early years",
    text: "Growing up in rural Assam, the nearest good teacher was a two-hour bus ride away. That distance shaped everything that followed.",
  },
  {
    title: "The first batch",
    text: "In 2018, a rented room in Beltola with 22 APSC aspirants became the first Avedon classroom — free for anyone who could not pay.",
  },
  {
    title: "Going online",
    text: "During the pandemic, lessons moved to a phone screen. Scordemy was born so that a student in Dhemaji could learn from the same faculty as one in Guwahati.",
  },
  {
    title: "Building a group",
    text: "Rather than one brand doing everything averagely, Avedon grew as focused companies — school, civil services, medical, engineering, defence and technology.",
  },
  {
    title: "What's next",
    text: "AI mentors that answer doubts in Assamese, more centers across the Northeast, and scholarships that make quality preparation genuinely free for those who need it.",
  },
];

function FounderPage() {
  return (
    <>
      <PageHero
        eyebrow="Founder's Story"
        title="Matiar Rahman"
        subtitle="Founder & CEO, Avedon Education — educator, entrepreneur and lifelong believer that geography should not decide a student's ceiling."
      />

      <Section>
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <img src={founder} alt="Matiar Rahman, Founder and CEO of Avedon Education" loading="lazy" className="w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]" />
          <div>
            <Quote className="h-8 w-8 text-accent-foreground" />
            <p className="mt-4 text-xl leading-relaxed font-medium text-foreground">
              "Every student we teach is somebody's entire plan. We build like that is true — because it is."
            </p>
            <div className="mt-8 space-y-6">
              {CHAPTERS.map((c) => (
                <div key={c.title} className="border-l-2 border-accent pl-5">
                  <h3 className="font-display text-lg font-bold text-primary">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading eyebrow="Recognition" title="Awards received" />
        <div className="mt-8 flex flex-wrap gap-3">
          {AWARDS.map((a) => (
            <span key={a} className="rounded-full bg-card px-5 py-2.5 text-sm font-semibold ring-1 ring-border">
              {a}
            </span>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Ventures Founded" title="Companies started under Avedon" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {VENTURES.map((v) => (
            <div key={v.name} className="rounded-2xl bg-card p-5 ring-1 ring-border">
              <h3 className="font-display text-lg font-bold text-primary">{v.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground">
          Invite Matiar to speak <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>
    </>
  );
}
