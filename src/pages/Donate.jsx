import React from 'react'
import Layout from '../components/Layout.jsx'

export default function Donate() {
  return (
    <Layout>
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-extrabold text-slate-900">Donate to Ecalos Music Initiative</h1>
        <p className="mt-3 text-slate-600">Every dollar fuels shows, workshops, and artist support in Amarillo.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a className="rounded-2xl bg-sky-600 px-5 py-3 text-center font-semibold text-white shadow hover:bg-sky-700" href="#">
            One-time donation (connect Stripe/Donorbox)
          </a>
          <a className="rounded-2xl bg-amber-500 px-5 py-3 text-center font-semibold text-white shadow hover:bg-amber-600" href="/donate/monthly">
            Make it monthly
          </a>
        </div>
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">How your gift helps</h2>
          <ul className="mt-2 list-disc pl-5 text-slate-600">
            <li>Show grants for venues and artists</li>
            <li>Workshops with industry professionals</li>
            <li>Promotion boosts to fill the room</li>
          </ul>
        </div>
      </section>
    </Layout>
  )
}
