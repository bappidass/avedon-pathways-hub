import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Building2,
  GraduationCap,
  MapPin,
  Phone,
  Quote,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import hero from "@/assets/hero-students.jpg";
import founder from "@/assets/founder.jpg";
import {
  AWARDS,
  BRANDS,
  MORE_BRANDS,
  NEWS,
  PARTNERS,
  PROGRAMS,
  RESULTS,
  STATS,
  VALUES,
} from "@/lib/site-data";
import { Counter, Marquee, Section, SectionHeading, Eyebrow } from "@/components/site/ui-bits";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Avedon Education — Northeast India's Multi-Brand Education Group" },
      {
        name: "description",
        content:
          "Scordemy, ExSchool, Scordemy IAS, MindPower and more — school education, competitive exam coaching and AI learning for 50,000+ students across Assam and India.",
      },
      { property: "og:title", content: "Avedon Education — Multi-Brand Education Ecosystem" },
      {
        property: "og:description",
        content:
          "Ten education brands, 25+ centers and 100+ faculty delivering school, civil services, medical, engineering and defence preparation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://avedon-pathways-hub.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://avedon-pathways-hub.lovable.app/" }],
  }),
  component: Index,
});

const QUICK = [
  { to: "/programs", label: "Explore Programs", Icon: BookOpen, text: "Courses across 11 exam tracks" },
  { to: "/results", label: "Our Results", Icon: Trophy, text: "Toppers and selections every year" },
  { to: "/centers", label: "Find a Center", Icon: MapPin, text: "Guwahati, Nagaon, Jorhat" },
  { to: "/contact", label: "Admission Help", Icon: Phone, text: "Talk to a counsellor today" },
] as const;

function Index() {
  return (
    <>
      <section className="surface-navy grid-lines relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <Eyebrow tone="navy">Northeast India's Education Ecosystem</Eyebrow>
            <h1 className="mt-5 text-4xl leading-[1.04] font-extrabold text-navy-foreground sm:text-5xl lg:text-6xl">
              Ten brands. One mission.{" "}
              <span className="text-accent">Learning that reaches everyone.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-navy-foreground/75">
              Avedon Education brings school learning, competitive examination coaching and AI-powered
              study tools to students in Assam and across India — in the languages they think in.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                <GraduationCap className="h-4 w-4" /> Explore Programs
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-navy-foreground/25 px-6 py-3 text-sm font-bold text-navy-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Phone className="h-4 w-4" /> Get Admission Help
              </Link>
            </div>
            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6">
              {STATS.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-3xl font-extrabold text-accent">
                    <Counter value={s.value} suffix={s.suffix} />
                  </dt>
                  <dd className="mt-1 text-xs text-navy-foreground/65">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <img
              src={hero}
              alt="Avedon Education students in a classroom"
              className="w-full rounded-3xl object-cover shadow-[var(--shadow-lift)]"
            />
            <div className="absolute -bottom-5 left-5 rounded-2xl bg-card px-5 py-4 shadow-[var(--shadow-lift)] ring-1 ring-border">
              <p className="font-display text-2xl font-extrabold text-primary">
                <Counter value={1000000} suffix="+" />
              </p>
              <p className="text-xs font-semibold text-muted-foreground">Learning hours delivered</p>
            </div>
          </div>
        </div>
      </section>

      <Section className="!py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {QUICK.map(({ to, label, Icon, text }) => (
            <Link
              key={to}
              to={to}
              className="card-lift rounded-2xl bg-card p-5 ring-1 ring-border"
            >
              <Icon className="h-6 w-6 text-accent-foreground" />
              <h3 className="mt-4 font-display text-lg font-bold text-primary">{label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent-foreground">
                Open <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading
          eyebrow="Our Brands"
          title="A brand for every stage of a student's journey"
          subtitle="From class 6 school lessons to civil services interviews, each Avedon brand owns one promise and delivers it deeply."
        />
        <div className="mt-10">
          <Marquee>
            {[...BRANDS, ...BRANDS].map((b, i) => (
              <div
                key={`${b.slug}-${i}`}
                className="flex h-20 w-52 shrink-0 items-center justify-center rounded-2xl bg-card px-6 ring-1 ring-border"
              >
                <img src={b.logo} alt={b.name} loading="lazy" className="max-h-12 w-auto object-contain" />
              </div>
            ))}
          </Marquee>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {BRANDS.map((b) => (
            <article key={b.slug} className="card-lift rounded-3xl bg-card p-6 ring-1 ring-border">
              <div className="flex items-center gap-4">
                <img src={b.logo} alt={b.name} loading="lazy" className="h-12 w-12 rounded-xl object-cover" />
                <div>
                  <h3 className="font-display text-xl font-bold text-primary">{b.name}</h3>
                  <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    {b.category}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">{b.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {b.programs.map((p) => (
                  <span key={p} className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-foreground">
                    {p}
                  </span>
                ))}
              </div>
              <Link
                to="/brands"
                className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-accent-foreground"
              >
                Learn more <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading
          tone="navy"
          eyebrow="Impact"
          title="Numbers that come from classrooms, not brochures"
          align="center"
        />
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
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src={founder}
            alt="Matiar Rahman, Founder & CEO of Avedon Education"
            loading="lazy"
            className="w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]"
          />
          <div>
            <Eyebrow>Founder's Note</Eyebrow>
            <Quote className="mt-5 h-8 w-8 text-accent-foreground" />
            <p className="mt-4 text-xl leading-relaxed font-medium text-foreground">
              "I grew up in a village where good teaching was a two-hour bus ride away. Avedon exists so
              that no student in Northeast India has to make that journey to learn well."
            </p>
            <p className="mt-6 font-display text-lg font-bold text-primary">Matiar Rahman</p>
            <p className="text-sm text-muted-foreground">Founder &amp; CEO, Avedon Education</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {AWARDS.map((a) => (
                <span key={a} className="rounded-full bg-muted px-3 py-1.5 text-xs font-semibold">
                  {a}
                </span>
              ))}
            </div>
            <Link
              to="/about/founder"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
            >
              Read the full story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading
          eyebrow="Programs"
          title="Popular batches starting soon"
          subtitle="Hybrid, online and classroom batches across school and competitive examinations."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.slice(0, 6).map((p) => (
            <article key={p.name} className="card-lift rounded-2xl bg-card p-5 ring-1 ring-border">
              <span className="eyebrow bg-primary/8 text-primary">{p.category}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-primary">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {p.brand} · {p.mode} · {p.duration}
              </p>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <span className="text-sm text-muted-foreground">Starts {p.start}</span>
                <span className="font-display text-lg font-extrabold text-accent-foreground">{p.price}</span>
              </div>
            </article>
          ))}
        </div>
        <Link
          to="/programs"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground"
        >
          View all programs <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      <Section>
        <SectionHeading eyebrow="Results" title="Selections that changed families" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RESULTS.slice(0, 6).map((r) => (
            <div key={r.name} className="rounded-2xl bg-card p-5 ring-1 ring-border">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 font-display font-bold text-primary">
                  {r.name.charAt(0)}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.exam}</p>
                </div>
              </div>
              <p className="mt-4 font-display text-xl font-extrabold text-accent-foreground">{r.rank}</p>
              <p className="text-xs text-muted-foreground">{r.brand}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading
          eyebrow="Growing Ecosystem"
          title="More ventures under the Avedon umbrella"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MORE_BRANDS.map((b) => (
            <div key={b.name} className="flex items-center gap-3 rounded-2xl bg-card p-5 ring-1 ring-border">
              <Building2 className="h-5 w-5 shrink-0 text-accent-foreground" />
              <div>
                <p className="font-semibold text-foreground">{b.name}</p>
                <p className="text-xs text-muted-foreground">{b.category}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Why Avedon" title="What we hold ourselves to" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl bg-card p-5 ring-1 ring-border">
              <Sparkles className="h-5 w-5 text-accent-foreground" />
              <h3 className="mt-3 font-display text-lg font-bold text-primary">{v.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading eyebrow="News & Events" title="Latest from the ecosystem" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {NEWS.map((n) => (
            <article key={n.slug} className="card-lift rounded-2xl bg-card p-6 ring-1 ring-border">
              <div className="flex items-center gap-3 text-xs font-semibold text-muted-foreground">
                <span className="rounded-full bg-primary/8 px-3 py-1 text-primary">{n.category}</span>
                {n.date}
              </div>
              <h3 className="mt-3 font-display text-xl font-bold text-primary">{n.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{n.excerpt}</p>
            </article>
          ))}
        </div>
        <Link to="/news" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-accent-foreground">
          All news &amp; events <ArrowRight className="h-4 w-4" />
        </Link>
      </Section>

      <Section>
        <SectionHeading eyebrow="Partners" title="Institutions we build with" align="center" />
        <div className="mt-10">
          <Marquee>
            {PARTNERS.map((p) => (
              <div
                key={p}
                className="flex h-16 shrink-0 items-center rounded-2xl bg-muted px-8 text-sm font-bold text-muted-foreground"
              >
                {p}
              </div>
            ))}
          </Marquee>
        </div>
      </Section>

      <Section tone="navy" className="!pb-24">
        <div className="flex flex-col items-center gap-6 text-center">
          <Users className="h-10 w-10 text-accent" />
          <h2 className="max-w-2xl font-display text-3xl font-extrabold text-navy-foreground sm:text-4xl">
            Not sure which program fits you? Our counsellors will help.
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground"
            >
              Get Admission Help
            </Link>
            <Link
              to="/centers"
              className="rounded-full border border-navy-foreground/25 px-6 py-3 text-sm font-bold text-navy-foreground"
            >
              Visit a Center
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
