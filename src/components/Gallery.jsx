import Section from "./Section";

const photos = [
  "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1431068799455-80bae0caf685?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1483412033650-1015ddeb83d1?q=80&w=1200&auto=format&fit=crop"
];

export default function Gallery(){
  return (
    <Section id="gallery" title="Gallery" subtitle="Moments from shows and workshops.">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
        {photos.map((src, i) => (
          <img key={i} src={src} alt="EMI event" className="mb-4 rounded-xl border border-white/10" loading="lazy" />
        ))}
      </div>
    </Section>
  )
}
