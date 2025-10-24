import Section from "./Section";

const members = [
  { name: "Daniel Burk", role: "President", bio: "Community builder and live‑music advocate."},
  { name: "Jesus Anaya", role: "Secretary", bio: "Organizer, technologist, and musician.", link: "https://ecalosmedia.com"},
  { name: "Daron Payne", role: "Treasurer", bio: "Finance and logistics."},
];

export default function Board(){
  return (
    <Section id="board" title="Board of Directors" subtitle="Guiding EMI with experience across music, tech, and finance.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {members.map(m => (
          <div key={m.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-xl font-semibold">{m.name}</div>
            <div className="text-brand-400">{m.role}</div>
            <p className="mt-2 text-zinc-300">{m.bio}</p>
            {m.link && <a className="text-sm text-zinc-400 underline mt-2 inline-block" href={m.link}>Learn more</a>}
          </div>
        ))}
      </div>
    </Section>
  )
}
