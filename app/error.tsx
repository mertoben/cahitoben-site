'use client'
export default function Error({ error }:{ error: Error }){
  return (
    <main className="py-20 text-center">
      <h1 className="text-2xl font-bold">Bir hata oluştu</h1>
      <p className="text-zinc-600 mt-2">{error?.message}</p>
      <a href="/" className="underline mt-4 inline-block">Ana sayfaya dön</a>
    </main>
  )
}
