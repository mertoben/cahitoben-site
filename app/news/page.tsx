import Link from 'next/link'
import { NEWS } from '../../lib/news'

export const metadata = {
  title: 'Haberler — Cahit Oben',
  description: 'Güncellemeler, arşiv notları ve duyurular.',
}

export default function NewsPage(){
  return (
    <main className="py-12">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-3xl font-extrabold">Haberler</h1>
        <div className="mt-6 space-y-4">
          {NEWS.map(n => (
            <article key={n.slug} className="rounded-xl border border-zinc-200 bg-card p-4">
              <h2 className="text-lg font-semibold">
                <Link href={`/news/${n.slug}`} className="hover:underline">{n.title}</Link>
              </h2>
              <div className="text-xs text-muted">{new Date(n.date).toLocaleDateString('tr-TR')}</div>
              <p className="mt-2 text-sm">{n.description}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
