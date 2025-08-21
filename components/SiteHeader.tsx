'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/',             label: 'Ana Sayfa'           },
  { href: '/about',        label: 'Hakkında'            },
  { href: '/discography',  label: 'Diskografi'          },
  { href: '/news',         label: 'Haberler'            },
  { href: '/art',          label: 'Resim Çalışmaları'   },
  { href: '/listen',       label: 'Dinle'               },
  { href: '/contact',      label: 'İletişim'            },
]

export default function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="border-b border-zinc-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-sm font-extrabold tracking-wider">CAHİT OBEN</Link>

        {/* Desktop */}
        <nav className="hidden gap-5 text-sm md:flex">
          {links.map(l => {
            const active = pathname === l.href || pathname?.startsWith(l.href + '/') || (l.href === '/' && pathname === '/')
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? 'page' : undefined}
                className={active ? 'font-semibold underline underline-offset-4' : 'hover:underline'}
              >
                {l.label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile */}
        <button
          className="md:hidden rounded border px-2 py-1 text-sm"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-label="Menüyü aç/kapat"
        >
          Menü
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className="md:hidden border-t border-zinc-200">
          <ul className="mx-auto max-w-6xl px-4 py-3 space-y-2">
            {links.map(l => {
              const active = pathname === l.href || pathname?.startsWith(l.href + '/') || (l.href === '/' && pathname === '/')
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={active ? 'font-semibold underline underline-offset-4' : 'hover:underline'}
                    onClick={() => setOpen(false)}
                    aria-current={active ? 'page' : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </header>
  )
}
