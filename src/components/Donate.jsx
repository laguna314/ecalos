import Section from "./Section";

export default function Donate(){
  return (
    <Section id="donate" title="Donate & Sponsor" subtitle="Fuel the local scene. 100% of proceeds support programs and events.">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Make a Donation</h3>
          <p className="mt-2 text-zinc-300">Choose an amount and help us fund workshops, grants, and all‑ages shows.</p>
          <form method="POST" action="/api/donate" className="mt-4 grid gap-3">
            <input name="name" placeholder="Full name" className="rounded-xl bg-zinc-900 border border-white/10 px-4 py-2" required />
            <input name="email" type="email" placeholder="Email" className="rounded-xl bg-zinc-900 border border-white/10 px-4 py-2" required />
            <input name="amount" type="number" min="1" step="1" placeholder="Amount (USD)" className="rounded-xl bg-zinc-900 border border-white/10 px-4 py-2" required />
            <button className="rounded-xl bg-brand-500 text-black font-semibold px-4 py-2 hover:shadow-glow">Donate</button>
          </form>
          <p className="mt-3 text-xs text-zinc-400">Note: Wire this to your real payment processor later (Stripe, Square, etc.).</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Become a Sponsor</h3>
          <p className="mt-2 text-zinc-300">Request our 2025 sponsorship kit and we’ll follow up.</p>
          <form method="POST" action="/api/sponsor" className="mt-4 grid gap-3">
            <input name="company" placeholder="Company" className="rounded-xl bg-zinc-900 border border-white/10 px-4 py-2" required />
            <input name="contact" placeholder="Contact name" className="rounded-xl bg-zinc-900 border border-white/10 px-4 py-2" required />
            <input name="email" type="email" placeholder="Email" className="rounded-xl bg-zinc-900 border border-white/10 px-4 py-2" required />
            <textarea name="notes" placeholder="Tell us about your goals" className="rounded-xl bg-zinc-900 border border-white/10 px-4 py-2 min-h-28" />
            <button className="rounded-xl bg-brand-500 text-black font-semibold px-4 py-2 hover:shadow-glow">Request Kit</button>
          </form>
        </div>
      </div>
    </Section>
  )
}
