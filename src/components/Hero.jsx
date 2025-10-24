import { Calendar, MapPin, Ticket, PlayCircle } from "lucide-react";
import { SITE } from "../site.config";

export default function Hero(){
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -inset-[30%] bg-[radial-gradient(circle_at_top,rgba(255,124,10,.35),rgba(24,24,27,1))]" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=2000&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            {SITE.tagline}
          </h1>
          <p className="mt-4 text-lg text-zinc-300">
            {SITE.mission}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href={SITE.hero.ctaTicketUrl} className="rounded-2xl bg-brand-500 px-5 py-3 text-black font-semibold hover:shadow-glow inline-flex items-center gap-2">
              <Ticket className="size-5" /> Get Tickets
            </a>
            <a href="#events" className="rounded-2xl border border-white/15 px-5 py-3 text-white font-semibold hover:border-white/30 inline-flex items-center gap-2">
              <PlayCircle className="size-5" /> See Events
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-5 text-sm text-zinc-300">
            <div className="flex items-center gap-2"><Calendar className="size-4 text-brand-500" /> {SITE.hero.eventDate}</div>
            <div className="flex items-center gap-2"><MapPin className="size-4 text-brand-500" /> {SITE.hero.eventVenue}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
