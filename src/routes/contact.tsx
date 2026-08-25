import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { CENTERS, CONTACT, PROGRAM_CATEGORIES, SOCIALS } from "@/lib/site-data";
import { PageHero, Section, SectionHeading } from "@/components/site/ui-bits";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Avedon Education — Admission Help & Counselling" },
      {
        name: "description",
        content:
          "Talk to an Avedon Education counsellor about admissions, fees and batches. Call, WhatsApp or email us, or visit a center in Guwahati, Nagaon or Jorhat.",
      },
      { property: "og:title", content: "Contact Avedon Education" },
      {
        property: "og:description",
        content: "Admission help, counselling and center visits across Assam and online.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://avedon-pathways-hub.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://avedon-pathways-hub.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get admission help"
        subtitle="Tell us your exam and current preparation stage — a counsellor will suggest the right batch, honestly."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl bg-card p-7 ring-1 ring-border">
            <SectionHeading eyebrow="Enquiry" title="Send us a message" />
            {sent ? (
              <p className="mt-8 rounded-2xl bg-muted p-6 text-sm font-semibold text-foreground">
                Thanks — your enquiry has been noted. A counsellor will call you within one working day.
              </p>
            ) : (
              <form className="mt-8 grid gap-4" onSubmit={onSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-sm font-semibold text-foreground">
                    Full name
                    <input required name="name" className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-normal" />
                  </label>
                  <label className="text-sm font-semibold text-foreground">
                    Phone
                    <input required name="phone" type="tel" className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-normal" />
                  </label>
                </div>
                <label className="text-sm font-semibold text-foreground">
                  Email
                  <input name="email" type="email" className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-normal" />
                </label>
                <label className="text-sm font-semibold text-foreground">
                  Interested in
                  <select name="track" className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-normal">
                    {PROGRAM_CATEGORIES.filter((c) => c !== "All").map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </label>
                <label className="text-sm font-semibold text-foreground">
                  Message
                  <textarea name="message" rows={4} className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-normal" />
                </label>
                <button type="submit" className="mt-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground">
                  Request a call back
                </button>
              </form>
            )}
          </div>

          <div className="space-y-4">
            <a href={CONTACT.phoneHref} className="card-lift flex items-center gap-4 rounded-2xl bg-card p-5 ring-1 ring-border">
              <Phone className="h-6 w-6 text-accent-foreground" />
              <span>
                <span className="block font-semibold text-foreground">Call us</span>
                <span className="text-sm text-muted-foreground">{CONTACT.phone}</span>
              </span>
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="card-lift flex items-center gap-4 rounded-2xl bg-card p-5 ring-1 ring-border">
              <MessageCircle className="h-6 w-6 text-accent-foreground" />
              <span>
                <span className="block font-semibold text-foreground">WhatsApp</span>
                <span className="text-sm text-muted-foreground">Chat with a counsellor</span>
              </span>
            </a>
            <a href={CONTACT.emailHref} className="card-lift flex items-center gap-4 rounded-2xl bg-card p-5 ring-1 ring-border">
              <Mail className="h-6 w-6 text-accent-foreground" />
              <span>
                <span className="block font-semibold text-foreground">Email</span>
                <span className="text-sm text-muted-foreground">{CONTACT.email}</span>
              </span>
            </a>
            <div className="rounded-2xl bg-card p-5 ring-1 ring-border">
              <span className="flex items-center gap-2 font-semibold text-foreground">
                <MapPin className="h-5 w-5 text-accent-foreground" /> Head office
              </span>
              <p className="mt-2 text-sm text-muted-foreground">{CONTACT.address}</p>
            </div>
            <div className="rounded-2xl bg-card p-5 ring-1 ring-border">
              <p className="font-semibold text-foreground">Follow us</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {SOCIALS.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="rounded-full bg-muted px-4 py-2 text-xs font-semibold hover:text-primary">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="mist">
        <SectionHeading eyebrow="Visit" title="Center contact numbers" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CENTERS.map((c) => (
            <div key={c.slug} className="rounded-2xl bg-card p-5 ring-1 ring-border">
              <p className="font-display text-lg font-bold text-primary">{c.name}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.address}</p>
              <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="mt-3 block text-sm font-semibold text-accent-foreground">
                {c.phone}
              </a>
              <p className="mt-1 text-xs text-muted-foreground">{c.hours}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
