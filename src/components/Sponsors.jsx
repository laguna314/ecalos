import Section from "./Section";

const tiers = [
  { name: "Headline", price: "$15,000", perks: ["Stage naming", "Logo lockup on all materials", "10 VIP passes"]},
  { name: "Gold", price: "$5,000", perks: ["Large logo on materials", "6 VIP passes", "On-stage shoutout"]},
  { name: "Silver", price: "$2,000", perks: ["Medium logo on materials", "4 VIP passes"]},
  { name: "Bronze", price: "$500", perks: ["Logo on website", "2 VIP passes"]},
];

export default function Sponsors(){
  return (
    <Section id="sponsors" title="Sponsors" subtitle="Huge thanks to partners who make the scene possible.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {tiers.map(t => (
          <div key={t.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-zinc-300">{t.name}</div>
            <div className="text-3xl font-extrabold">{t.price}</div>
            <ul className="mt-3 text-zinc-300 list-disc list-inside space-y-1">
              {t.perks.map(p => <li key={p}>{p}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
