export const metadata = {
  title: 'Dinle — Cahit Oben',
  description: 'Spotify, Apple Music ve YouTube bağlantıları.',
}

export default function ListenPage(){
  return (
    <main className="py-12">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-3xl font-extrabold">Dinle</h1>
        <div className="mt-6 space-y-6">
          <iframe style={{borderRadius:12}} src="https://open.spotify.com/embed/artist/2O8jY0TevDFs7R9tzkh4SH?utm_source=generator" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          <iframe allow="autoplay *; encrypted-media *;" frameBorder="0" height="175" style={{width:'100%',overflow:'hidden',background:'transparent'}} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/tr/artist/cahit-oben/95145871"></iframe>
          <iframe width="100%" height="315" src="https://www.youtube.com/embed?listType=user_uploads&list=UCWiOnChcc4l8peYF7e0XXfw" title="YouTube player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </main>
  )
}
