import Section from "./Section";

export default function Mission(){
  return (
    <Section id="mission" title="Our Mission" subtitle="Investing in artists, venues, and the community.">
      <div className="prose prose-invert max-w-none">
        <p>
          Ecalos Music Initiative (EMI) is a 501(c)(3) in progress focused on developing the music scene in Amarillo and Canyon.
          We provide financial aid to venues, offer workshops for artists, and host community events like Rocktober Fest.
        </p>
        <ul className="grid sm:grid-cols-2 gap-4 not-prose mt-6">
          {[
            ["Grants & Micro‑funding","Support venue upgrades, backline, and youth programs."],
            ["Workshops & Mentorship","Level up booking, branding, and performance skills."],
            ["Community Events","All‑ages shows and festivals to grow the scene."],
            ["Partnerships","Collaborate with schools, businesses, and venues."]
          ].map(([h, p])=> (
            <li key={h} className="rounded-2xl bg-white/5 p-5 border border-white/10">
              <div className="text-brand-400 font-semibold">{h}</div>
              <div className="text-zinc-300">{p}</div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
