import { SITE } from "../site.config";

export default function Footer(){
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
        <div className="opacity-80">{SITE.tagline}</div>
      </div>
    </footer>
  )
}
