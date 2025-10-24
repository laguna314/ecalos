import { Menu, X, Music, HeartHandshake } from "lucide-react";
import { useState } from "react";
import { SITE } from "../site.config";

const links = [
  { href: "#mission", label: "Mission" },
  { href: "#events", label: "Events" },
  { href: "#donate", label: "Donate" },
  { href: "#volunteer", label: "Volunteer" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#gallery", label: "Gallery" },
  { href: "#board", label: "Board" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar(){
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60 border-b border-white/10">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <Music className="size-6 text-brand-500" />
          <span className="tracking-tight">{SITE.name}</span>
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-zinc-300 hover:text-white transition">{l.label}</a>
          ))}
          <a href="#donate" className="inline-flex items-center gap-2 rounded-xl bg-brand-500 px-3 py-2 font-medium text-black hover:shadow-glow">
            <HeartHandshake className="size-4" /> Donate
          </a>
        </div>
        <button className="md:hidden p-2" onClick={()=>setOpen(o=>!o)} aria-label="Toggle menu">
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-zinc-950/90">
          <div className="mx-auto max-w-6xl px-4 py-4 grid gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} className="block text-zinc-300 hover:text-white transition" onClick={()=>setOpen(false)}>{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
