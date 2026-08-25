import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Building2 } from "lucide-react";
import { BRANDS, MORE_BRANDS, SOCIALS } from "@/lib/site-data";
import { Marquee, PageHero, Section, SectionHeading } from "@/components/site/ui-bits";

export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Our Brands — Scordemy, ExSchool, Scordemy IAS & MindPower" },
      {
        name: "description",
        content:
          "Explore the Avedon Education brand family: Scordemy, ExSchool, Scordemy IAS, MindPower Academy, DDC, Avedon.ai and more.",
      },
      { property: "og:title", content: "The Avedon Education Brand Family" },
      {
        property: "og:description",
        content: "Ten specialised education brands covering school, civil services, medical, engineering and defence.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://avedon-pathways-hub.lovable.app/brands" },
    ],
    links: [{ rel: "canonical", href: "https://avedon-pathways-hub.lovable.app/brands" }],
  }),
  component: BrandsPage,
});

function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Brands"
        title="One ecosystem, ten specialised education brands"
        subtitle="Each brand owns a single promise — school learning, civil services, entrance exams, defence or learning technology — and goes deep on it."
      />

      <Section className="!py-10">
        <Marquee>
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <div key={`${b.slug}-${i}`} className="flex h-20 w-52 shrink-0 items-center justify-center rounded-2xl bg-card px-6 ring-1 ring-border">
              <img src={b.logo} alt={b.name} loading="lazy" className="max-h-12 w-auto object-contain" />
            </div>
          ))}
        </Marquee>
      </Section>

      <Section tone="mist">
        <div className="grid gap-8">
          {BRANDS.map((b) => (
            <article key={b.slug} className="card-lift grid gap-6 rounded-3xl bg-card p-7 ring-1 ring-border md:grid-cols-[auto_1fr]">
              <img src={b.logo} alt={b.name} loading="lazy" className="h-20 w-20 rounded-2xl object-cover" />
              <div>
                <h2 className="font-display text-2xl font-bold text-primary">{b.name}</h2>
                <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">{b.category}</p>
                <p className="mt-3 max-w-3xl text-sm text-muted-foreground">{b.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {b.programs.map((p) => (
                    <span key={p} className="rounded-full bg-muted px-3 py-1 text-xs font-semibold">{p}</span>
                  ))}
                </div>
                <p className="mt-4 text-xs font-semibold text-accent-foreground">{b.availability}</p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <Link to="/programs" className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">
                    View programs <ArrowRight className="h-4 w-4" />
                  </Link>
                  {SOCIALS.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="text-xs font-semibold text-muted-foreground hover:text-primary">
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Also in the group" title="Emerging brands and initiatives" />
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
    </>
  );
}
