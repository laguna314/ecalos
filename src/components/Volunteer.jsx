import Section from "./Section";

export default function Volunteer(){
  return (
    <Section id="volunteer" title="Volunteer" subtitle="Hands-on help keeps shows running smoothly.">
      <form method="POST" action="/api/volunteer" className="grid sm:grid-cols-2 gap-4">
        <input name="name" placeholder="Full name" className="rounded-xl bg-zinc-900 border border-white/10 px-4 py-2" required />
        <input name="email" type="email" placeholder="Email" className="rounded-xl bg-zinc-900 border border-white/10 px-4 py-2" required />
        <input name="phone" placeholder="Phone" className="rounded-xl bg-zinc-900 border border-white/10 px-4 py-2" />
        <textarea name="skills" placeholder="Skills or interests (stagehand, door, media, etc.)" className="rounded-xl bg-zinc-900 border border-white/10 px-4 py-2 sm:col-span-2 min-h-28"></textarea>
        <button className="rounded-xl bg-brand-500 text-black font-semibold px-4 py-2 hover:shadow-glow sm:col-span-2">Sign Up</button>
      </form>
    </Section>
  )
}
