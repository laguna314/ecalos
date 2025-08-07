import React from 'react'
import Layout from '../components/Layout.jsx'

export default function DonateMonthly() {
  return (
    <Layout>
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-extrabold text-slate-900">Monthly Giving</h1>
        <p className="mt-3 text-slate-600">Join the core supporters who keep the amps on and workshops running.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {['$5', '$10', '$25'].map(tier => (
            <a key={tier} className="rounded-2xl bg-slate-900 px-5 py-3 text-center font-semibold text-white shadow hover:opacity-90" href="#">
              {tier}/mo
            </a>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500">Replace these buttons with your Stripe Checkout or Donorbox monthly donation links.</p>
      </section>
    </Layout>
  )
}
