import { useState } from "react";
import { Mail, MessageCircle, Phone, Plus, X } from "lucide-react";
import { CONTACT } from "@/lib/site-data";

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  const actions = [
    { label: "Call Us", href: CONTACT.phoneHref, Icon: Phone },
    { label: "WhatsApp Us", href: CONTACT.whatsapp, Icon: MessageCircle },
    { label: "Email Us", href: CONTACT.emailHref, Icon: Mail },
  ];

  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3">
      {open &&
        actions.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="animate-rise flex items-center gap-2 rounded-full bg-card px-4 py-2.5 text-sm font-semibold text-foreground shadow-[var(--shadow-lift)] ring-1 ring-border"
          >
            <Icon className="h-4 w-4 text-accent-foreground" />
            {label}
          </a>
        ))}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Contact options"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[var(--shadow-lift)] transition-transform hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
      </button>
    </div>
  );
}
