export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-4">
        <div>
          <h4 className="font-semibold">Cahit Oben</h4>
          <p className="text-sm text-zinc-600 mt-2">
            Resmi web sitesi: müzik, resim çalışmaları ve haberler.
          </p>
        </div>

        <div>
          <h5 className="font-semibold">Site Haritası</h5>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="/">Ana sayfa</a></li>
            <li><a href="/discography">Diskografi</a></li>
            <li><a href="/art">Resim çalışmaları</a></li>
            <li><a href="/news">Haberler</a></li>
            <li><a href="/listen">Dinle</a></li>
            <li><a href="/contact">İletişim</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">Sosyal</h5>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="https://open.spotify.com/artist/2O8jY0TevDFs7R9tzkh4SH" target="_blank" rel="noreferrer">Spotify</a></li>
            <li><a href="https://music.apple.com/tr/artist/cahit-oben/95145871" target="_blank" rel="noreferrer">Apple Music</a></li>
            <li><a href="https://www.youtube.com/channel/UCWiOnChcc4l8peYF7e0XXfw" target="_blank" rel="noreferrer">YouTube</a></li>
            <li><a href="https://www.instagram.com/cahitobenart/" target="_blank" rel="noreferrer">Instagram</a></li>
            <li><a href="https://facebook.com/" target="_blank" rel="noreferrer">Facebook Fan</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">Yasal</h5>
          <ul className="mt-2 space-y-1 text-sm">
            <li><a href="/privacy">Gizlilik / KVKK</a></li>
            <li><a href="/terms">Kullanım Koşulları</a></li>
            <li><a href="/copyright">Telif / MESAM</a></li>
          </ul>
          <p className="text-xs text-zinc-500 mt-4">
            © {new Date().getFullYear()} Cahit Oben. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
