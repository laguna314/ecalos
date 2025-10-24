import Section from "./Section";

export default function Newsletter(){
  return (
    <Section id="newsletter" title="Newsletter" subtitle="Show announcements, grants, and workshops in your inbox.">
      <form method="POST" action="/api/subscribe" className="max-w-md grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
        <input name="email" type="email" placeholder="Email address" className="rounded-xl bg-zinc-900 border border-white/10 px-4 py-2" required />
        <button className="rounded-xl bg-brand-500 text-black font-semibold px-4 py-2 hover:shadow-glow">Subscribe</button>
      </form>
      <p className="text-xs text-zinc-400 mt-2">We never spam. Unsubscribe anytime.</p>
    </Section>
  )
}
