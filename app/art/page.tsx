import Link from 'next/link'
import { ARTWORKS } from '@/lib/data'

export function generateStaticParams() {
  return ARTWORKS.map(w => ({ id: w.id }))
}

export async function generateMetadata({ params }:{ params:{ id:string } }){
  const a = ARTWORKS.find(w => w.id === params.id)
  return {
    title: a ? `${a.title} — Resim` : 'Resim',
    // 'year' alanına güvenmeyelim; yalnızca mevcut olanları yaz
    description: a ? [a.series].filter(Boolean).join(' • ') : ''
  }
}

export default function ArtDetailPage({ params }:{ params:{ id:string } }){
  const a = ARTWORKS.find(w => w.id === params.id)
  if(!a){
    return (
      <main className="py-12">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-2xl font-bold">Eser bulunamadı</h1>
          <p className="mt-2 text-zinc-600">Bu eser kaldırılmış veya URL değişmiş olabilir.</p>
          <Link href="/art" className="mt-4 inline-block underline">← Resim Çalışmaları</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="py-12">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 rounded-2xl overflow-hidden border bg-white">
            <img src={a.image} alt={a.title} className="w-full h-auto object-contain" />
          </div>
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-extrabold">{a.title}</h1>
            {a.series && (
              <div className="mt-1 text-sm text-zinc-500">
                {a.series}
              </div>
            )}
            {a.description && <p className="mt-4 text-zinc-700">{a.description}</p>}

            <div className="mt-8">
              <h2 className="text-sm font-semibold text-zinc-500">Benzer eserler</h2>
              <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
                {ARTWORKS.filter(w => w.id !== a.id && (w.series && a.series ? w.series === a.series : true)).slice(0,6).map(w => (
                  <Link key={w.id} href={`/art/${w.id}`} className="group border rounded-xl overflow-hidden bg-white hover:shadow-sm transition">
                    <img src={w.image} alt={w.title} className="aspect-[4/5] w-full object-cover group-hover:scale-[1.02] transition" />
                    <div className="p-2">
                      <div className="text-sm font-medium line-clamp-1">{w.title}</div>
                      {w.series && <div className="text-[11px] text-zinc-500 line-clamp-1">{w.series}</div>}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Link href="/art" className="underline">← Tüm eserler</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
