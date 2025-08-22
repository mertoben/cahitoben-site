import React from "react";

export const metadata = {
  title: "Kullanım Şartları — Cahit Oben",
  description: "Cahit Oben resmi web sitesi kullanım şartları. Ziyaretçiler için kurallar ve sorumluluklar.",
};

export default function TermsPage() {
  return (
    <article className="prose lg:prose-xl mx-auto p-6">
      <h1>Kullanım Şartları</h1>
      <p>Bu web sitesini kullanarak aşağıdaki şartları kabul etmiş sayılırsınız.</p>
      <h2>Kullanım</h2>
      <p>Sitedeki içerikler yalnızca kişisel ve bilgilendirme amaçlıdır. İzinsiz ticari kullanım yasaktır.</p>
      <h2>Sorumluluk Reddi</h2>
      <p>Bu sitede yer alan bilgilerin güncelliği ve doğruluğu konusunda azami dikkat gösterilse de herhangi bir garanti verilmemektedir.</p>
    </article>
  );
}