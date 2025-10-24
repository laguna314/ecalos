import Section from "./Section";
import { SITE } from "../site.config";

export default function Contact(){
  return (
    <Section id="contact" title="Contact" subtitle="Questions, partnerships, or press? Drop us a line.">
      <div className="grid lg:grid-cols-2 gap-6">
        <form method="POST" action="/api/contact" className="grid gap-3">
          <input name="name" placeholder="Full name" className="rounded-xl bg-zinc-900 border border-white/10 px-4 py-2" required />
          <input name="email" type="email" placeholder="Email" className="rounded-xl bg-zinc-900 border border-white/10 px-4 py-2" required />
          <textarea name="message" placeholder="Your message" className="rounded-xl bg-zinc-900 border border-white/10 px-4 py-2 min-h-32" required></textarea>
          <button className="rounded-xl bg-brand-500 text-black font-semibold px-4 py-2 hover:shadow-glow">Send</button>
        </form>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="font-semibold">Email</div>
          <a className="text-zinc-300 underline" href={"mailto:"+SITE.contactEmail}>{SITE.contactEmail}</a>
          <div className="mt-4 font-semibold">Social</div>
          <div className="flex gap-4 text-zinc-300">
            <a className="underline" href={SITE.social.facebook}>Facebook</a>
            <a className="underline" href={SITE.social.instagram}>Instagram</a>
          </div>
        </div>
      </div>
    </Section>
  )
}
