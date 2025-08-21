import Card from '../../components/Card'
import { ALBUMS } from '../../lib/music'

export const metadata = {
  title: 'Diskografi — Cahit Oben',
  description: 'LP, single ve derlemelerden seçkiler.',
}

export default function DiscographyPage(){
  return (
    <main className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-3xl font-extrabold tracking-tight">Diskografi</h1>
        <p className="mt-2 text-sm text-muted">LP, single ve derlemelerden seçkiler.</p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ALBUMS.map(a => (
            <Card key={a.id} href={`/discography/${a.id}`} title={a.title} subtitle={`${a.year} • ${a.type}`} image={a.cover} />
          ))}
        </div>
      </div>
    </main>
  )
}
