import './globals.css'
import SiteHeader from '../components/SiteHeader'

export const metadata = {
  title: 'Cahit Oben — Resmî Site',
  description: 'Diskografi, haberler ve resim çalışmaları.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  )
}
