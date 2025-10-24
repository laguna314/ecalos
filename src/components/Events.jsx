import Section from "./Section";

const sample = [
  { name: "Rocktober Fest 2025", date: "Oct 18, 2025", location: "Rockwell Event Center, Canyon TX", url: "https://tearstubs.com/event/592", type: "Festival" },
  { name: "West Texas Entertainment Expo", date: "May 2026 (TBA)", location: "Amarillo, TX", url: "#", type: "Expo" },
  { name: "Songwriting Workshop", date: "TBA", location: "Amarillo Public Library", url: "#", type: "Workshop" }
];

export default function Events(){
  return (
    <Section id="events" title="Events" subtitle="Upcoming festivals, workshops, and community shows.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {sample.map((e)=> (
          <a key={e.name} href={e.url} className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition gradient-border">
            <div className="text-xs uppercase tracking-wide text-brand-400">{e.type}</div>
            <div className="mt-1 text-lg font-semibold">{e.name}</div>
            <div className="mt-2 text-zinc-300">{e.date}</div>
            <div className="text-zinc-400">{e.location}</div>
          </a>
        ))}
      </div>
    </Section>
  )
}
