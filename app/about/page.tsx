import Link from 'next/link'

export const metadata = {
  title: 'Hakkında — Cahit Oben',
  description: 'Kısa biyografi, Altın Mikrofon dönemi ve üretimler.',
}

export default function AboutPage(){
  return (
    <main className="py-12">
      <div className="mx-auto max-w-3xl px-4 prose prose-zinc">
        <h1>Cahit Oben</h1>
        <p>
          Cahit Oben, 1960’ların sonu ve 70’lerin başında kentli pop/aranjman akımına yaptığı katkılarla anılan bir müzisyen ve bestecidir. 
          Erken döneminde düzenlemeleri ve sahne çalışmalarıyla dikkat çekmiş, 45’lik formatında yayınlanan kayıtlarıyla dönemin sesini taşımıştır.
        </p>
        <h2>Altın Mikrofon ve 45’likler</h2>
        <p>
          Dönemin önemli basamaklarından biri olan <strong>Altın Mikrofon</strong> yarışması çevresinde üretilen kayıtlar ve 
          sonrasında farklı plak firmalarıyla yayımlanan 45’likler, sanatçının diskografisinin çekirdeğini oluşturur.
          Bazı kayıtlar yerel ezgilerin pop düzenlemeleriyle öne çıkmıştır.
        </p>
        <p>
          Sitedeki <Link href="/discography">Diskografi</Link> bölümünde, her kayıt için etiket (label), katalog numarası ve dinleme bağlantıları yer alır.
          Eksik bilgi gördüğünüz kayıtlar varsa, kapak/merkez etiket görselleriyle birlikte bizimle paylaşabilirsiniz.
        </p>
        <h2>Bestecilik ve görsel üretim</h2>
        <p>
          Pop kayıtlarının yanı sıra çeşitli görsel-işitsel projelere müzik üretimleri ve <strong>resim çalışmaları</strong> bulunmaktadır. 
          Resim seçkisini <Link href="/art">Resim Çalışmaları</Link> sayfasında görebilirsiniz.
        </p>
        <p>
          Lisans, yeniden basım ve arşiv işbirlikleri için <Link href="/contact">iletişime geçin</Link>. 
          Dijital platform bağlantıları ise <Link href="/listen">Dinle</Link> sayfasında.
        </p>
      </div>
    </main>
  )
}
