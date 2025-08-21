export const dynamic = 'force-dynamic'

export default async function DebugNews(){
  const res = await fetch(`/api/news/google?ts=${Date.now()}`, { cache: 'no-store' })
  let data:any = {}
  try { data = await res.json() } catch {}
  return (
    <main className="py-12">
      <div className="mx-auto max-w-4xl px-4">
        <h1 className="text-xl font-semibold">/api/news/google çıktısı</h1>
        <pre className="mt-4 p-4 text-xs overflow-auto rounded border">{JSON.stringify(data, null, 2)}</pre>
      </div>
    </main>
  )
}
