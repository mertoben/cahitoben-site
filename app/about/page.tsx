import Link from 'next/link'

export const metadata = {
  title: 'Hakkında — Cahit Oben',
  description: 'Cahit Oben’in kısa biyografisi ve kariyer özeti.',
}

export default function AboutPage(){
  return (
    <main className="py-12">
      <div className="mx-auto max-w-3xl px-4 prose prose-zinc">
        <h1>Cahit Oben</h1>
        <p>
          1960’ların sonu ve 70’lerin başında Türkçe pop/aranjman akımının öncü isimlerinden olan Cahit Oben;
          düzenlemeleri, kayıtları ve sahne çalışmalarıyla dönemin kentli pop sound’unun oluşmasına katkı vermiştir.
        </p>
        <p>
          Bu sitede sanatçının diskografisi, haber ve arşiv notları ile <strong>resim çalışmaları</strong> bir araya getirilmektedir.
          Dijital platform bağlantıları <Link href="/listen">Dinle</Link> sayfasından erişilebilir.
        </p>
        <p>
          Lisans, yeniden basım ve arşiv işbirlikleri için <Link href="/contact">iletişime geçebilirsiniz</Link>.
        </p>
      </div>
    </main>
  )
}
