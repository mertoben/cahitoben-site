import Link from 'next/link'

export const metadata = {
  title: 'Cahit Oben — Resmî Site',
  description: 'Diskografi, haberler ve resim çalışmaları.',
}

export default function Page(){
  return (
    <main className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <section className="grid gap-6 sm:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">Cahit Oben</h1>
            <p className="mt-2 text-sm text-muted">Türk pop müziğinin öncü isimlerinden; arşiv, diskografi ve resim çalışmaları.</p>
            <div className="mt-4 flex gap-3 text-sm">
              <Link href="/discography" className="rounded-md border px-3 py-2">Diskografi</Link>
              <Link href="/art" className="rounded-md border px-3 py-2">Resim Çalışmaları</Link>
              <Link href="/listen" className="rounded-md border px-3 py-2">Dinle</Link>
            </div>
          </div>
          <div className="rounded-xl border border-zinc-200 aspect-[4/3] bg-zinc-100" />
        </section>

        <section className="mt-12">
          <h2 className="text-lg font-semibold">Son Haberler</h2>
          <ul className="mt-3 list-disc pl-6 text-sm">
            <li><Link href="/news/arsiv-vol1-yayinda" className="underline">Arşiv Seçkileri Vol.1 duyuruldu</Link></li>
            <li><Link href="/news/spotify-apple-guncel" className="underline">Spotify ve Apple Music sayfaları güncellendi</Link></li>
          </ul>
        </section>
      </div>
    </main>
  )
}
