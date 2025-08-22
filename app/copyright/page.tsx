import React from "react";

export const metadata = {
  title: "Telif Hakları — Cahit Oben",
  description: "Cahit Oben’in eserlerine ilişkin telif hakları bildirimi. MESAM kayıtlıdır.",
};

export default function CopyrightPage() {
  return (
    <article className="prose lg:prose-xl mx-auto p-6">
      <h1>Telif Hakları Bildirimi</h1>
      <p>Bu web sitesinde yer alan tüm müzik eserleri, kayıtlar ve görseller Cahit Oben’e aittir.</p>
      <p>Eserler MESAM’a kayıtlıdır ve 5846 sayılı Fikir ve Sanat Eserleri Kanunu kapsamında korunmaktadır.</p>
      <p>İzinsiz çoğaltma, dağıtma veya yayınlama yasaktır.</p>
      <h2>İletişim</h2>
      <p>Telif hakları ile ilgili sorularınız için iletişim bölümünden bize ulaşabilirsiniz.</p>
    </article>
  );
}