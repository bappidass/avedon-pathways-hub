import { useEffect, useRef, useState, type ReactNode } from "react";

export function Section({
  children,
  className = "",
  tone = "light",
}: {
  children: ReactNode;
  className?: string;
  tone?: "light" | "mist" | "navy";
}) {
  const toneClass =
    tone === "navy" ? "surface-navy grid-lines" : tone === "mist" ? "bg-mist" : "bg-background";
  return (
    <section className={`${toneClass} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20 lg:px-8">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "navy" }) {
  return (
    <span
      className={
        tone === "navy"
          ? "eyebrow bg-navy-foreground/10 text-accent"
          : "eyebrow bg-primary/8 text-primary"
      }
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "light",
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tone?: "light" | "navy";
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={`mt-4 text-3xl leading-[1.1] font-extrabold sm:text-4xl lg:text-[2.75rem] ${
          tone === "navy" ? "text-navy-foreground" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base ${tone === "navy" ? "text-navy-foreground/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="surface-navy grid-lines">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24 lg:px-8">
        <Eyebrow tone="navy">{eyebrow}</Eyebrow>
        <h1 className="mt-5 max-w-4xl text-4xl leading-[1.05] font-extrabold text-navy-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-2xl text-lg text-navy-foreground/75">{subtitle}</p>}
      </div>
    </section>
  );
}

export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / 1600, 1);
          setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))));
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  const formatted = display >= 1000000 ? `${(display / 1000000).toFixed(display === value ? 0 : 1)}M` : display >= 1000 ? `${Math.round(display / 1000)}K` : `${display}`;

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

export function Marquee({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <div className="marquee-track gap-5 py-2">
        <div className="flex shrink-0 gap-5">{children}</div>
        <div className="flex shrink-0 gap-5" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
