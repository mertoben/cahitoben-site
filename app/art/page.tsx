import { ARTWORKS } from '@/lib/data'
import ArtGalleryClient from '@/components/ArtGalleryClient'

export const metadata = {
  title: 'Resim Çalışmaları — Cahit Oben',
  description: 'En yeni/Instagram filtreleriyle Cahit Oben’in resim (tuval) çalışmaları.'
}

export default function ArtIndexPage(){
  return (
    <main className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-extrabold">Resim Çalışmaları</h1>
          <p className="text-zinc-600 mt-2">Sırala ve filtrele: en yeni / en eski, yalnızca Instagram.</p>
        </header>

        {/* Client-side filtre/sıralama */}
        <ArtGalleryClient initialItems={ARTWORKS} />
      </div>
    </main>
  )
}
