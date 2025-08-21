import Hero from "@/components/Hero";
import Section from "@/components/Section";
import AlbumCard from "@/components/AlbumCard";
import ArtCarousel from "@/components/ArtCarousel";
import { ALBUMS } from "@/lib/music";
import { NEWS } from "@/lib/news";
import { featured } from "@/lib/home";

export default function HomePage() {
  const featuredAlbum = ALBUMS.find(a => a.id === featured.albumId);
  return (
    <main>
      <Hero />
      {featuredAlbum && (
        <Section title="Öne Çıkan Albüm">
          <AlbumCard album={featuredAlbum} featured />
        </Section>
      )}
      <Section title="Diskografi">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {ALBUMS.slice(0, 6).map(a => (
            <AlbumCard key={a.id} album={a} />
          ))}
        </div>
        <div className="mt-4 text-right">
          <a href="/discography" className="text-blue-600 hover:underline">
            Tüm Diskografi →
          </a>
        </div>
      </Section>
      <Section title="Resim Çalışmaları">
        <ArtCarousel />
        <div className="mt-4 text-right">
          <a href="/art" className="text-blue-600 hover:underline">
            Tüm Eserler →
          </a>
        </div>
      </Section>
      <Section title="Haberler">
        <ul className="space-y-4">
          {NEWS.slice(0, 4).map(n => (
            <li key={n.id}>
              <a href={`/news/${n.id}`} className="font-semibold hover:underline">
                {n.title}
              </a>
              <p className="text-sm text-gray-600">{n.summary}</p>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-right">
          <a href="/news" className="text-blue-600 hover:underline">
            Tüm Haberler →
          </a>
        </div>
      </Section>
    </main>
  );
}
