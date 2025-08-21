import Link from 'next/link'
import { NEWS } from '../../../lib/news'

export function generateStaticParams(){
  return NEWS.map(n => ({ slug: n.slug }))
}

export function generateMetadata({ params }:{ params:{ slug:string }}){
  const n = NEWS.find(x => x.slug === params.slug)
  return {
    title: n ? `${n.title} — Haber` : 'Haber',
    description: n?.description || ''
  }
}

export default function NewsDetail({ params }:{ params:{ slug:string }}){
  const n = NEWS.find(x => x.slug === params.slug)
  if(!n) return <main className="mx-auto max-w-3xl p-6">Bulunamadı</main>

  const jsonLd = {
    '@context':'https://schema.org',
    '@type':'NewsArticle',
    headline: n.title,
    datePublished: n.date,
    author: { '@type':'Person', name: n.author || 'Editör' },
    image: n.image || undefined,
    description: n.description
  }

  return (
    <main className="py-12">
      <div className="mx-auto max-w-3xl px-4">
        <Link href="/news" className="text-sm underline">← Haberler</Link>
        <h1 className="mt-4 text-3xl font-extrabold">{n.title}</h1>
        <div className="text-xs text-muted">{new Date(n.date).toLocaleDateString('tr-TR')}</div>
        {n.image && <img src={n.image} alt="" className="mt-4 rounded-lg border border-zinc-200" />}
        <p className="mt-4">{n.description}</p>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </div>
    </main>
  )
}
