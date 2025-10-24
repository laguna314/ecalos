export default function Section({id, title, subtitle, children}){
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
          {subtitle && <p className="mt-2 text-zinc-300">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
