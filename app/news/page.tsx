import Link from 'next/link'
import { headers } from 'next/headers'
import { NEWS } from '@/lib/news'

export const metadata = {
  title: 'Haberler — Cahit Oben',
  description: 'Güncellemeler, arşiv notları ve dış kaynak haberleri.'
}

export const dynamic = 'force-dynamic'

async function fetchGoogleNews(){
  try {
    const h = headers()
    const proto = h.get('x-forwarded-proto') || 'https'
    const host  = h.get('x-forwarded-host') || h.get('host')
    const base  = `${proto}://${host}`
    const res   = await fetch(`${base}/api/news/google`, { next: { revalidate: 300 } })
    if(!res.ok) throw new Error('bad_status')
    const data  = await res.json()
    return data.items || []
  } catch {
    return []
  }
}

export default async function NewsPage(){
  const external = await fetchGoogleNews()
  const local = NEWS.map(n => ({
    title: n.title,
    url: `/news/${n.slug}`,
    date: n.date,
    excerpt: n.description,
    source: 'Site'
  }))
  const merged = [...local, ...external].sort((a:any,b:any)=>{
    const da = a.date ? new Date(a.date).getTime() : 0
    const db = b.date ? new Date(b.date).getTime() : 0
    return db - da
  })
  return (
    <main className="py-12">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-3xl font-extrabold">Haberler</h1>
        <div className="mt-2 text-xs text-zinc-500">
          Site içi duyurular + Google Haberler otomatik listesi
        </div>
        <div className="mt-6 space-y-4">
          {merged.map((n:any, i:number) => (
            <article key={i} className="rounded-xl border border-zinc-200 bg-white p-4">
              <h2 className="text-lg font-semibold">
                {n.url.startsWith('/news/')
                  ? <Link href={n.url} className="hover:underline">{n.title}</Link>
                  : <a href={n.url} target="_blank" className="hover:underline" rel="noopener noreferrer">{n.title}</a>}
              </h2>
              <div className="text-xs text-zinc-500">
                {n.date ? new Date(n.date).toLocaleDateString('tr-TR') : ''} {n.source && <>• {n.source}</>}
              </div>
              {n.excerpt && <p className="mt-2 text-sm">{n.excerpt}</p>}
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
