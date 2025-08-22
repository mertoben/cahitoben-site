# Entegrasyon
1) `components/SiteFooter.tsx` dosyasını projeye kopyalayın.
2) `app/layout.tsx` içinde import edip body kapanışından önce ekleyin:

```tsx
import SiteFooter from '@/components/SiteFooter';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        {/* ...SiteHeader */}
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
```

3) JSON-LD eklemek için ana sayfada veya layout'ta:
```tsx
import SeoOrganization from '@/components/SeoOrganization'
// ...
<SeoOrganization />
```

4) `app/sitemap.ts`, `app/robots.ts`, `app/not-found.tsx`, `app/error.tsx`, `app/manifest.ts`
dosyalarını doğrudan `app/` altına kopyalayın.

5) `public/icon.png` oluşturuldu (512x512). İsterseniz kendi ikonunuzu aynı adla değiştirin.
