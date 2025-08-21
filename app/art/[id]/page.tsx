import Link from 'next/link'
import { ARTWORKS } from '../../../lib/data'

export function generateStaticParams(){
  return ARTWORKS.map(a => ({ id: a.id }))
}

export function generateMetadata({ params }:{ params:{ id:string }}){
  const a = ARTWORKS.find(x => x.id === params.id)
  return {
    title: a ? `${a.title} — Resim` : 'Resim',
    description: a ? `${a.year} • ${a.series}` : ''
  }
}

export default function ArtDetail({ params }:{ params:{ id:string }}){
  const a = ARTWORKS.find(x => x.id === params.id)
  if(!a) return <main className="mx-auto max-w-3xl p-6">Bulunamadı</main>

  const similar = ARTWORKS.filter(x => x.id !== a.id && (x.series === a.series || Math.abs((x.year||0)-(a.year||0))<=1)).slice(0,6)

  return (
    <main className="py-12">
      <div className="mx-auto max-w-3xl px-4">
        <Link href="/art" className="text-sm underline">← Resim Çalışmaları</Link>
        <h1 className="mt-4 text-3xl font-extrabold">{a.title}</h1>
        <div className="text-sm text-muted">{a.year} • {a.series}</div>
        <img src={a.image} alt={a.title} className="mt-4 rounded-lg border border-zinc-200" />

        {similar.length > 0 && (
          <section className="mt-10">
            <h2 className="text-lg font-semibold">Benzer eserler</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {similar.map(s => (
                <Link key={s.id} href={`/art/${s.id}`} className="overflow-hidden rounded-xl border border-zinc-200 bg-card hover:shadow">
                  <img src={s.image} alt={s.title} className="w-full aspect-[4/3] object-cover" />
                  <div className="p-3">
                    <div className="text-sm font-medium">{s.title}</div>
                    <div className="text-xs text-muted">{s.year} • {s.series}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
