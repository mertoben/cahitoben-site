import Link from 'next/link'
import { NEWS } from '@/lib/news'

export const metadata = {
  title: 'Haberler — Cahit Oben',
  description: 'Güncellemeler, arşiv notları ve dış kaynak haberleri.'
}

async function fetchGoogleNews(){
  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ''}/api/news/google`, { next: { revalidate: 3600 } })
    if(!res.ok) throw new Error('bad_status')
    const data = await res.json()
    return data.items || []
  }catch(e){
    // fallback: call relative during SSR (works in production as well)
    try{
      const res = await fetch('/api/news/google', { cache: 'no-store' })
      const data = await res.json()
      return data.items || []
    }catch(err){
      return []
    }
  }
}

export default async function NewsPage(){
  const external = await fetchGoogleNews()

  // Map local items into same shape
  const local = NEWS.map(n => ({
    title: n.title,
    url: `/news/${n.slug}`,
    date: n.date,
    excerpt: n.description,
    source: 'Site'
  }))

  // Merge & sort by date desc (undefined dates go bottom)
  const merged = [...local, ...external].sort((a:any,b:any)=>{
    const da = a.date ? new Date(a.date).getTime() : 0
    const db = b.date ? new Date(b.date).getTime() : 0
    return db - da
  })

  return (
    <main className="py-12">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-3xl font-extrabold">Haberler</h1>

        <div className="mt-2 text-xs text-zinc-500">Site içi duyurular + Google Haberler otomatik listesi</div>

        <div className="mt-6 space-y-4">
          {merged.map((n:any, idx:number) => (
            <article key={idx} className="rounded-xl border border-zinc-200 bg-white p-4">
              <h2 className="text-lg font-semibold">
                {n.url.startsWith('/news/') ? (
                  <Link href={n.url} className="hover:underline">{n.title}</Link>
                ) : (
                  <a href={n.url} target="_blank" className="hover:underline">{n.title}</a>
                )}
              </h2>
              <div className="text-xs text-zinc-500">
                {n.date ? new Date(n.date).toLocaleDateString('tr-TR') : ''} {n.source && <>• {n.source}</>}
              </div>
              {n.excerpt && <p className="mt-2 text-sm">{n.excerpt}</p>}
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs text-zinc-500">
          Dış bağlantılar Google Haberler RSS aramasından otomatik çekilir ve ilgili yayınların/kurumların sorumluluğundadır.
        </p>
      </div>
    </main>
  )
}
