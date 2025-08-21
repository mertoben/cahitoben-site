import Link from 'next/link'
import { ALBUMS } from '@/lib/music'

export function generateStaticParams(){ return ALBUMS.map(a => ({ id: a.id })) }

export function generateMetadata({ params }:{ params:{ id:string }}){
  const a = ALBUMS.find(x => x.id === params.id)
  return {
    title: a ? `${a.title} — Cahit Oben` : 'Albüm — Cahit Oben',
    description: a ? `${a.year} • ${a.type}` : 'Albüm detay'
  }
}

export default function AlbumPage({ params }:{ params:{ id:string }}){
  const a = ALBUMS.find(x => x.id === params.id)
  if(!a) return <main className="mx-auto max-w-4xl p-6">Bulunamadı</main>

  const jsonLd = {
    '@context':'https://schema.org',
    '@type':'MusicAlbum',
    name: a.title,
    datePublished: String(a.year),
    albumReleaseType: a.type,
    image: a.cover || undefined,
    byArtist: { '@type':'Person', name: 'Cahit Oben' },
    track: a.tracks.map((t:any, i:number) => ({ '@type':'MusicRecording', name: t.title, duration: t.duration, position: i+1 }))
  }

  return (
    <main className="py-12">
      <div className="mx-auto max-w-3xl px-4">
        <Link href="/discography" className="text-sm underline">← Diskografi</Link>
        <div className="mt-4 flex gap-6">
          <img src={a.cover} alt={a.title} className="w-48 h-48 object-cover rounded-lg border border-zinc-200" />
          <div className="min-w-0">
            <h1 className="text-3xl font-extrabold">{a.title}</h1>
            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
              <span className="rounded-full border px-2 py-0.5">{a.year} • {a.type}</span>
              {a.label && <span className="rounded-full border px-2 py-0.5">Label: {a.label}</span>}
              {a.catalog && <span className="rounded-full border px-2 py-0.5">Kat. No: {a.catalog}</span>}
            </div>
            {(a.spotify || a.apple || a.youtube) && (
              <div className="mt-3 flex flex-wrap gap-2 text-sm">
                {a.spotify && <a href={a.spotify} target="_blank" className="rounded border px-2 py-1">Spotify</a>}
                {a.apple && <a href={a.apple} target="_blank" className="rounded border px-2 py-1">Apple Music</a>}
                {a.youtube && <a href={a.youtube} target="_blank" className="rounded border px-2 py-1">YouTube</a>}
              </div>
            )}
          </div>
        </div>

        <h2 className="mt-8 text-lg font-semibold">Parçalar</h2>
        <ol className="mt-2 space-y-1 text-sm">
          {a.tracks.map((t:any, i:number) => (
            <li key={t.id} className="flex flex-col gap-1 rounded-md border border-zinc-200 px-3 py-2 sm:flex-row sm:items-center sm:justify-between">
              <div><span className="text-zinc-500">{i+1}.</span> {t.title}</div>
              <div className="flex flex-wrap gap-2">
                {t.spotify && <a href={t.spotify} target="_blank" className="rounded border px-2 py-0.5">Spotify</a>}
                {t.youtube && <a href={t.youtube} target="_blank" className="rounded border px-2 py-0.5">YouTube</a>}
              </div>
            </li>
          ))}
        </ol>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </div>
    </main>
  )
}
