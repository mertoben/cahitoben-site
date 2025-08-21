import Link from 'next/link'

export default function Card({ href, title, subtitle, image }:{ href:string, title:string, subtitle?:string, image?:string }){
  return (
    <Link href={href} className="overflow-hidden rounded-xl border border-zinc-200 bg-card hover:shadow">
      {image ? <img src={image} alt={title} className="w-full aspect-[4/3] object-cover" /> : <div className="w-full aspect-[4/3] bg-zinc-100" />}
      <div className="p-4">
        <div className="text-base font-semibold">{title}</div>
        {subtitle ? <div className="text-xs text-muted">{subtitle}</div> : null}
      </div>
    </Link>
  )
}
