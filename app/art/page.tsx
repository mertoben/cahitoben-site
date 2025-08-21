import Card from '../../components/Card'
import { ARTWORKS } from '../../lib/data'

export const metadata = {
  title: 'Resim Çalışmaları — Cahit Oben',
  description: 'Soyut ve peyzaj serilerinden seçkiler.',
}

export default function ArtPage(){
  return (
    <main className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-3xl font-extrabold tracking-tight">Resim Çalışmaları</h1>
        <p className="mt-2 text-sm text-muted">Soyut ve peyzaj serilerinden seçkiler.</p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTWORKS.map(a => (
            <Card key={a.id} href={`/art/${a.id}`} title={a.title} subtitle={`${a.year} • ${a.series}`} image={a.image} />
          ))}
        </div>
      </div>
    </main>
  )
}
