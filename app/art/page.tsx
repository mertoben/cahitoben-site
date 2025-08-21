import { ARTWORKS } from '@/lib/data'
import InstagramEmbed from '@/components/InstagramEmbed'
import { INSTAGRAM_POSTS } from '@/lib/instagram'

export const metadata = {
  title: 'Resim Çalışmaları — Cahit Oben',
  description: 'Resim seçkisi ve Instagram paylaşımları.'
}

export default function ArtPage(){
  return (
    <main className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-3xl font-extrabold">Resim Çalışmaları</h1>

        <section className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTWORKS.map((w: any) => (
            <article key={w.id} className="rounded-xl border border-zinc-200 bg-white overflow-hidden">
              <img src={w.image} alt={w.title} className="w-full h-60 object-cover" />
              <div className="p-4">
                <h2 className="font-semibold">{w.title}</h2>
                {w.series && <div className="text-xs text-zinc-500 mt-1">{w.series}</div>}
                {w.description && <p className="text-sm mt-2">{w.description}</p>}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12">
          <div className="flex items-baseline justify-between">
            <h2 className="text-xl font-bold">Cahit Oben Art Instagram Sayfası</h2>
            <a href="https://www.instagram.com/cahitobenart/" target="_blank" className="text-sm underline">Profili aç</a>
          </div>
        /* <p className="mt-1 text-sm text-zinc-500">
            Instagram gönderileri resmi embed ile gösterilir. Yeni gönderi eklemek için <code>lib/instagram.ts</code> içine URL ekleyin.
          </p> */
          
          <div className="mt-4">
            <InstagramEmbed posts={INSTAGRAM_POSTS} />
          </div>
        </section>
      </div>
    </main>
  )
}
