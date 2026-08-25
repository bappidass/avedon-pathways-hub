import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Flag, Target } from "lucide-react";
import centre from "@/assets/centre.jpg";
import { AWARDS, PARTNERS, STATS, TEAM, VALUES, VENTURES } from "@/lib/site-data";
import { Counter, PageHero, Section, SectionHeading } from "@/components/site/ui-bits";

export const Route = createFileRoute("/about/")({
  head: () => ({
    meta: [
      { title: "About Avedon Education — Our Story, Mission & Team" },
      {
        name: "description",
        content:
          "Founded in Guwahati, Avedon Education runs ten learning brands across school, competitive exams and AI learning technology for Northeast India.",
      },
      { property: "og:title", content: "About Avedon Education" },
      {
        property: "og:description",
        content: "Our mission, values, ventures and the team building education for Northeast India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://avedon-pathways-hub.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://avedon-pathways-hub.lovable.app/about" }],
  }),
  component: AboutPage,
});

const TIMELINE = [
  { year: "2018", text: "Avedon starts as a single APSC coaching batch in Beltola, Guwahati." },
  { year: "2020", text: "Scordemy launches online, taking regional-language lessons statewide." },
  { year: "2022", text: "ExSchool opens Assamese-medium school learning for classes 6 to 12." },
  { year: "2023", text: "MindPower Academy joins the group for NEET and JEE preparation." },
  { year: "2024", text: "Centers expand to Nagaon and Jorhat; faculty crosses 100 educators." },
  { year: "2026", text: "Avedon.ai opens beta for an AI doubt-solving mentor in Assamese." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Building education Northeast India can rely on"
        subtitle="Avedon Education is a multi-brand group of learning companies serving school students, competitive exam aspirants and educators."
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img src={centre} alt="An Avedon Education learning center" loading="lazy" className="rounded-3xl object-cover shadow-[var(--shadow-soft)]" />
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="From one classroom to ten brands"
              subtitle="What began as a single coaching batch is now a group of education companies reaching over 50,000 learners with courses in Assamese, Bengali, Hindi and English."
            />
            <p className="mt-5 text-sm text-muted-foreground">
              We build for students who were previously priced out or language-locked out of quality
              preparation. That means regional-language teaching, affordable fee structures, hybrid
              delivery and technology that removes friction between doubt and answer.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="mist">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { Icon: Target, title: "Mission", text: "Make high-quality, regional-language education accessible and affordable for every learner in Northeast India." },
            { Icon: Compass, title: "Vision", text: "Become the most trusted education ecosystem in the region — measured by student outcomes." },
            { Icon: Flag, title: "Approach", text: "Specialist brands, shared academic standards, and technology that scales good teaching." },
          ].map(({ Icon, title, text }) => (
            <div key={title} className="rounded-3xl bg-card p-7 ring-1 ring-border">
              <Icon className="h-7 w-7 text-accent-foreground" />
              <h3 className="mt-4 font-display text-2xl font-bold text-primary">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Milestones" title="How we got here" />
        <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TIMELINE.map((t) => (
            <li key={t.year} className="rounded-2xl bg-card p-5 ring-1 ring-border">
              <p className="font-display text-2xl font-extrabold text-accent-foreground">{t.year}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="navy">
        <SectionHeading tone="navy" eyebrow="By the Numbers" title="Scale of the ecosystem" align="center" />
        <div className="mt-12 grid gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl font-extrabold text-accent">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs text-navy-foreground/65">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Values" title="Principles behind every decision" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl bg-card p-5 ring-1 ring-border">
              <h3 className="font-display text-lg font-bold text-primary">{v.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading eyebrow="Ventures" title="Companies inside the group" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {VENTURES.map((v) => (
            <div key={v.name} className="rounded-2xl bg-card p-5 ring-1 ring-border">
              <h3 className="font-display text-lg font-bold text-primary">{v.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Leadership & Team" title="The people running Avedon" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => (
            <div key={m.name} className="rounded-2xl bg-card p-5 text-center ring-1 ring-border">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-bold text-primary">
                {m.name.charAt(0)}
              </span>
              <p className="mt-3 font-semibold text-foreground">{m.name}</p>
              <p className="text-xs text-muted-foreground">{m.role}</p>
              <span className="mt-3 inline-block rounded-full bg-muted px-3 py-1 text-[0.65rem] font-semibold tracking-wide uppercase">
                {m.group}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Recognition" title="Awards & honours" />
            <ul className="mt-6 space-y-3">
              {AWARDS.map((a) => (
                <li key={a} className="rounded-2xl bg-card px-5 py-4 text-sm font-semibold ring-1 ring-border">
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Partners" title="Institutions we work with" />
            <div className="mt-6 flex flex-wrap gap-2">
              {PARTNERS.map((p) => (
                <span key={p} className="rounded-full bg-card px-4 py-2 text-sm font-semibold ring-1 ring-border">
                  {p}
                </span>
              ))}
            </div>
            <Link
              to="/about/founder"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
            >
              Meet the founder <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
