import React from 'react'
import Logo from './Logo.jsx'
import { DollarSign } from 'lucide-react'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-amber-50 via-white to-sky-50 text-slate-800">
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
          <a href="/" aria-label="Ecalos Music Initiative Home">
            <Logo />
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="/#about" className="text-sm font-medium text-slate-600 hover:text-slate-900">About</a>
            <a href="/#programs" className="text-sm font-medium text-slate-600 hover:text-slate-900">Programs</a>
            <a href="/#involved" className="text-sm font-medium text-slate-600 hover:text-slate-900">Get Involved</a>
            <a href="/donate" className="text-sm font-medium text-slate-600 hover:text-slate-900">Donate</a>
            <a href="/#contact" className="text-sm font-medium text-slate-600 hover:text-slate-900">Contact</a>
          </nav>
          <a href="/donate" className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-sky-700 active:translate-y-px">
            Donate
            <DollarSign className="h-4 w-4" />
          </a>
        </div>
      </header>
      <main>{children}</main>
      <footer id="contact" className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-3 max-w-md text-sm text-slate-600">
              We’re a nonprofit-in-progress focused on lifting up local venues and artists in Amarillo, Texas. Let’s make more music happen.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Reach out</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>hello@ecalosmusic.org</li>
              <li>Amarillo, TX</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Follow</h4>
            <div className="mt-3 flex items-center gap-3 text-slate-600">
              <a href="#" aria-label="Instagram" className="rounded-lg border border-slate-200 p-2 hover:bg-slate-50">IG</a>
              <a href="#" aria-label="Facebook" className="rounded-lg border border-slate-200 p-2 hover:bg-slate-50">FB</a>
              <a href="#" aria-label="YouTube" className="rounded-lg border border-slate-200 p-2 hover:bg-slate-50">YT</a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 py-6">
          <p className="mx-auto max-w-6xl px-4 text-xs text-slate-500">© {new Date().getFullYear()} Ecalos Music Initiative. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
