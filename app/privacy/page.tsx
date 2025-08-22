import React from "react";

export const metadata = {
  title: "Gizlilik Politikası — Cahit Oben",
  description: "Cahit Oben resmi web sitesi gizlilik politikası. KVKK uyumlu veri koruma ve çerez politikası.",
};

export default function PrivacyPage() {
  return (
    <article className="prose lg:prose-xl mx-auto p-6">
      <h1>Gizlilik Politikası</h1>
      <p>Bu web sitesi, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) çerçevesinde kişisel verilerinizi korumayı taahhüt eder.</p>
      <h2>Toplanan Veriler</h2>
      <p>Sitemiz yalnızca ziyaret istatistikleri ve iletişim formu üzerinden sınırlı kişisel veri toplar.</p>
      <h2>Çerezler</h2>
      <p>Kullanıcı deneyimini geliştirmek amacıyla çerezler kullanılabilir. Dilerseniz tarayıcınızdan çerezleri devre dışı bırakabilirsiniz.</p>
      <h2>İletişim</h2>
      <p>Herhangi bir sorunuz için bizimle iletişim formu üzerinden irtibata geçebilirsiniz.</p>
    </article>
  );
}