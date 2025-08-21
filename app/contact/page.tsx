export const metadata = {
  title: 'İletişim — Cahit Oben',
  description: 'Menajerlik ve lisans talepleri için iletişim.',
}

export default function ContactPage(){
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Cahit Oben',
    url: 'https://cahitoben.com',
    contactPoint: [{ '@type':'ContactPoint', contactType:'Business', email:'mailto:info@cahitoben.com' }],
    sameAs: [
      'https://www.facebook.com/',
      'https://open.spotify.com/intl-tr/artist/2O8jY0TevDFs7R9tzkh4SH',
      'https://music.apple.com/tr/artist/cahit-oben/95145871',
      'https://www.youtube.com/channel/UCWiOnChcc4l8peYF7e0XXfw'
    ]
  }

  return (
    <main className="py-12">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-3xl font-extrabold">İletişim</h1>

        <form className="mt-6 grid gap-3 sm:grid-cols-2" action="https://formspree.io/f/mayvlknb" method="POST">
          <div className="flex flex-col">
            <label className="text-xs text-muted">Ad Soyad</label>
            <input name="name" className="mt-1 h-10 rounded-md border border-zinc-300 px-3" required />
          </div>
          <div className="flex flex-col">
            <label className="text-xs text-muted">E-posta</label>
            <input type="email" name="email" className="mt-1 h-10 rounded-md border border-zinc-300 px-3" required />
          </div>
          <div className="col-span-full flex flex-col">
            <label className="text-xs text-muted">Mesaj</label>
            <textarea name="message" className="mt-1 min-h-[120px] rounded-md border border-zinc-300 px-3 py-2" required />
          </div>
          <div className="col-span-full">
            <button className="h-10 rounded-md border px-4">Gönder</button>
          </div>
        </form>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </div>
    </main>
  )
}
