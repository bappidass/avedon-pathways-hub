import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, MapPin } from "lucide-react";
import { NEWS } from "@/lib/site-data";
import { PageHero, Section, SectionHeading } from "@/components/site/ui-bits";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News & Events — Avedon Education Updates" },
      {
        name: "description",
        content:
          "Announcements, results, product launches and events from Avedon Education, Scordemy, ExSchool, Scordemy IAS and Avedon.ai.",
      },
      { property: "og:title", content: "Avedon Education News & Events" },
      {
        property: "og:description",
        content: "Latest announcements, summits and launches across the Avedon education ecosystem.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://avedon-pathways-hub.lovable.app/news" },
    ],
    links: [{ rel: "canonical", href: "https://avedon-pathways-hub.lovable.app/news" }],
  }),
  component: NewsPage,
});

function NewsPage() {
  const [featured, ...rest] = NEWS;

  return (
    <>
      <PageHero
        eyebrow="News & Events"
        title="What's happening across Avedon"
        subtitle="Summits, launches, results and community drives from every brand in the group."
      />

      <Section>
        <article className="card-lift rounded-3xl bg-card p-8 ring-1 ring-border">
          <span className="eyebrow bg-primary/8 text-primary">{featured.category}</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-primary">{featured.title}</h2>
          <p className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4" /> {featured.date}</span>
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> {featured.venue}</span>
          </p>
          <p className="mt-4 max-w-3xl text-base text-muted-foreground">{featured.excerpt}</p>
        </article>
      </Section>

      <Section tone="mist">
        <SectionHeading eyebrow="Archive" title="More updates" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {rest.map((n) => (
            <article key={n.slug} className="card-lift rounded-2xl bg-card p-6 ring-1 ring-border">
              <span className="eyebrow bg-primary/8 text-primary">{n.category}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-primary">{n.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{n.date} · {n.venue}</p>
              <p className="mt-3 text-sm text-muted-foreground">{n.excerpt}</p>
            </article>
          ))}
        </div>
        <Link to="/contact" className="mt-8 inline-block rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground">
          Invite us to your event
        </Link>
      </Section>
    </>
  );
}
