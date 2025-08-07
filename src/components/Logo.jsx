import React from 'react'
import { Music } from 'lucide-react'

export default function Logo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="relative grid place-items-center">
        <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-amber-400 via-rose-400 to-sky-500 shadow-lg" />
        <Music className="absolute h-5 w-5 text-white" />
      </div>
      <div className="leading-tight">
        <span className="block text-xs tracking-widest text-sky-600">ECALOS</span>
        <span className="block text-lg font-extrabold text-slate-900">Music Initiative</span>
      </div>
    </div>
  )
}
