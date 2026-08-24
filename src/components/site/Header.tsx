import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import mark from "@/assets/avedon-mark.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/brands", label: "Our Brands" },
  { to: "/programs", label: "Programs" },
  { to: "/results", label: "Results" },
  { to: "/centers", label: "Centers" },
  { to: "/careers", label: "Careers" },
  { to: "/news", label: "News & Events" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={mark} alt="Avedon Education" width={40} height={40} className="h-9 w-9 shrink-0" />
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-none font-extrabold text-primary">
              Avedon
            </span>
            <span className="block truncate text-[0.65rem] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
              Education
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary data-[status=active]:text-primary data-[status=active]:font-semibold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/programs"
            className="hidden items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            <GraduationCap className="h-4 w-4" /> Explore Programs
          </Link>
          <button
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background xl:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-accent px-4 py-2.5 text-center text-sm font-bold text-accent-foreground"
            >
              Get Admission Help
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
