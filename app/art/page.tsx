import Link from 'next/link'
import { ARTWORKS } from '@/lib/data'

export const metadata = {
  title: 'Resim Çalışmaları — Cahit Oben',
  description: 'Cahit Oben’in resim (tuval) çalışmalarından seçkiler.'
}

export default function ArtIndexPage(){
  return (
    <main className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold">Resim Çalışmaları</h1>
          <p className="text-zinc-600 mt-2">Soyut ve figüratif serilerden seçkiler.</p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ARTWORKS.map(w => (
            <Link key={w.id} href={`/art/${w.id}`} className="group rounded-2xl overflow-hidden border bg-white hover:shadow-sm transition">
              <img src={w.image} alt={w.title} className="aspect-[4/5] w-full object-cover group-hover:scale-[1.02] transition" />
              <div className="p-3">
                <div className="font-medium line-clamp-1">{w.title}</div>
                {w.series && <div className="text-xs text-zinc-500 line-clamp-1">{w.series}</div>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
