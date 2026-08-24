import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import mark from "@/assets/avedon-mark.png";
import { BRANDS, CONTACT, SOCIALS } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="surface-navy grid-lines mt-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={mark} alt="" loading="lazy" width={40} height={40} className="h-10 w-10" />
            <span className="font-display text-xl font-extrabold">Avedon Education</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-navy-foreground/70">
            A multi-brand education ecosystem empowering students, educators and institutions through
            accessible education and technology.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-navy-foreground/20 px-3 py-1.5 text-xs font-semibold text-navy-foreground/80 transition-colors hover:border-accent hover:text-accent"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-[0.16em] text-accent uppercase">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-navy-foreground/75">
            {[
              { to: "/about", label: "About Avedon" },
              { to: "/about/founder", label: "Founder's Story" },
              { to: "/programs", label: "Programs" },
              { to: "/results", label: "Results" },
              { to: "/faculty", label: "Faculty" },
              { to: "/centers", label: "Centers" },
              { to: "/careers", label: "Careers" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-[0.16em] text-accent uppercase">Our Brands</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-navy-foreground/75">
            {BRANDS.map((b) => (
              <li key={b.slug}>
                <Link to="/brands" className="transition-colors hover:text-accent">
                  {b.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/brands" className="font-semibold text-accent">
                View all brands →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-[0.16em] text-accent uppercase">Contact</h3>
          <ul className="mt-4 space-y-3.5 text-sm text-navy-foreground/75">
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={CONTACT.emailHref}>{CONTACT.email}</a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{CONTACT.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-navy-foreground/60 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Avedon Education. All rights reserved.</p>
          <p>Guwahati · Nagaon · Jorhat · Online across India</p>
        </div>
      </div>
    </footer>
  );
}
