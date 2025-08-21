export default function Loading(){
  return (
    <main className="py-12">
      <div className="mx-auto max-w-5xl px-4 animate-pulse">
        <div className="h-6 w-48 bg-zinc-200 rounded mb-6" />
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 h-96 bg-zinc-200 rounded-2xl" />
          <div className="lg:col-span-2 space-y-3">
            <div className="h-6 w-64 bg-zinc-200 rounded" />
            <div className="h-4 w-40 bg-zinc-200 rounded" />
            <div className="h-4 w-72 bg-zinc-200 rounded" />
          </div>
        </div>
      </div>
    </main>
  )
}
