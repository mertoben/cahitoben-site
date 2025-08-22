'use client'
import { useMemo, useState } from 'react'
import Link from 'next/link'

type Artwork = {
  id: string
  title: string
  image: string
  series?: string
  description?: string
  createdAt?: string
  sourceUrl?: string
}

export default function ArtGalleryClient({ initialItems }:{ initialItems: Artwork[] }){
  const [order, setOrder] = useState<'desc'|'asc'>('desc')
  const [onlyInstagram, setOnlyInstagram] = useState(false)
  const [q, setQ] = useState('')

  const items = useMemo(() => {
    let data = [...(initialItems || [])]
    if (onlyInstagram) {
      data = data.filter(a => !!a.sourceUrl)
    }
    if (q.trim()) {
      const t = q.toLowerCase()
      data = data.filter(a =>
        a.title.toLowerCase().includes(t) ||
        (a.series || '').toLowerCase().includes(t) ||
        (a.description || '').toLowerCase().includes(t)
      )
    }
    data.sort((a,b) => (order === 'desc'
      ? (b.createdAt || '').localeCompare(a.createdAt || '')
      : (a.createdAt || '').localeCompare(b.createdAt || '')
    ))
    return data
  }, [initialItems, order, onlyInstagram, q])

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-6">
        <div className="flex flex-wrap items-center gap-2">
          <label className="text-sm text-zinc-600">Sırala:</label>
          <select
            value={order}
            onChange={(e)=>setOrder(e.target.value as 'desc'|'asc')}
            className="text-sm rounded-md border px-2 py-1 bg-white"
          >
            <option value="desc">En Yeni → En Eski</option>
            <option value="asc">En Eski → En Yeni</option>
          </select>

          <label className="inline-flex items-center gap-2 text-sm ml-3">
            <input
              type="checkbox"
              checked={onlyInstagram}
              onChange={(e)=>setOnlyInstagram(e.target.checked)}
            />
            Yalnızca Instagram
          </label>
        </div>

        <div className="flex items-center gap-2">
          <input
            value={q}
            onChange={(e)=>setQ(e.target.value)}
            placeholder="Ara: başlık, seri, açıklama..."
            className="w-64 max-w-[70vw] text-sm rounded-md border px-3 py-2 bg-white"
          />
        </div>
      </div>

      {items.length === 0 ? (
        <div className="text-sm text-zinc-500">Sonuç bulunamadı. Filtreleri daralttıysanız gevşeterek tekrar deneyin.</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((w) => (
            <Link key={w.id} href={`/art/${w.id}`} className="group rounded-2xl overflow-hidden border bg-white hover:shadow-sm transition">
              <img src={w.image} alt={w.title} className="aspect-[4/5] w-full object-cover group-hover:scale-[1.02] transition" />
              <div className="p-3">
                <div className="font-medium line-clamp-1">{w.title}</div>
                <div className="text-xs text-zinc-500 line-clamp-1">
                  {[w.series, w.createdAt].filter(Boolean).join(' • ')}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
