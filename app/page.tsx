
import ArtCarousel from "@/components/ArtCarousel";
import { ARTWORKS } from "@/lib/data";

export default function HomePage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Cahit Oben</h1>
      <p className="mb-6">Resmi web sitesine hoş geldiniz.</p>
      <ArtCarousel items={ARTWORKS} />
    </main>
  );
}
