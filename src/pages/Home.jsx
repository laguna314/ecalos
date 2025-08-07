import React from 'react'
import Layout from '../components/Layout.jsx'
import { motion } from 'framer-motion'
import { HeartHandshake, Music, CalendarDays, ArrowRight, Megaphone } from 'lucide-react'

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-md text-white">
    {children}
  </span>
)

export default function Home() {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_circle_at_20%_-10%,rgba(56,189,248,0.18),transparent_50%),radial-gradient(900px_circle_at_90%_10%,rgba(251,191,36,0.18),transparent_40%)]" />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-24">
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-4 flex flex-wrap gap-2">
              <Pill><Megaphone className="h-3.5 w-3.5" /> Amplify Local Music</Pill>
              <Pill><HeartHandshake className="h-3.5 w-3.5" /> Community First</Pill>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Turning Amarillo up to <span className="bg-gradient-to-r from-amber-500 to-sky-600 bg-clip-text text-transparent">11</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mt-4 max-w-prose text-lg text-slate-600">
              Ecalos Music Initiative sparks opportunities for artists, fuels venues with support, and connects our city through shows, workshops, and community-driven events.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mt-6 flex flex-wrap gap-3">
              <a href="/donate" className="inline-flex items-center gap-2 rounded-2xl bg-amber-500 px-5 py-3 font-semibold text-white shadow hover:bg-amber-600 active:translate-y-px">
                Donate Now <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#about" className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50 active:translate-y-px">
                Learn More
              </a>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100/60 via-transparent to-sky-100/60" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="grid gap-4 p-6 text-center">
                  <Music className="mx-auto h-12 w-12 text-sky-600" />
                  <p className="text-lg font-semibold text-slate-800">Community-powered music.</p>
                  <p className="text-slate-600">Workshops • Micro-grants • Booking support • National acts brought to town</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">What we do</h2>
            <p className="mt-3 text-slate-600">We strengthen Amarillo’s music ecosystem with practical help and positive momentum.</p>
          </div>
          <div className="md:col-span-2 grid gap-4">
            {[
              { title: 'Workshops & Mentorship', body: 'Hands-on sessions with industry pros: booking, production, marketing, and more.' },
              { title: 'Venue & Artist Support', body: 'Micro-grants and resources that keep stages active and artists thriving.' },
              { title: 'Events & Showcases', body: 'From local spotlights to bringing national talent to our city.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1.5 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="relative overflow-hidden bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-white">Programs that move the needle</h2>
            <p className="mt-3 text-slate-300">Your support turns ideas into shows, skills, and sustainable venues.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { title: 'Show Grants', body: 'Seed funding that helps venues book emerging and national acts.' },
              { title: 'Promotion Boost', body: 'Design, social strategy, and ad credits to fill the room.' },
              { title: 'Community Workshops', body: 'Free or low-cost training for artists, techs, and promoters.' },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white shadow">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs">
                  <CalendarDays className="h-5 w-5" /><span>{c.title}</span>
                </div>
                <p className="text-sm text-slate-200">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="involved" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-amber-50 to-white p-6 shadow">
            <h3 className="text-xl font-bold text-slate-900">Volunteer</h3>
            <p className="mt-2 text-slate-600">From load-ins to flyer runs, from mentorship to front-of-house—your energy matters.</p>
            <a href="#contact" className="mt-4 inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-amber-100 px-4 py-2 font-semibold text-amber-800 hover:bg-amber-200">
              Join the list
            </a>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50 to-white p-6 shadow">
            <h3 className="text-xl font-bold text-slate-900">Sponsor</h3>
            <p className="mt-2 text-slate-600">Local businesses power local stages. We offer clear, high-visibility impact options.</p>
            <a href="#contact" className="mt-4 inline-flex items-center gap-2 rounded-xl border border-sky-300 bg-sky-100 px-4 py-2 font-semibold text-sky-800 hover:bg-sky-200">
              Request the deck
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
