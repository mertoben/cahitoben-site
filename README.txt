Haberler kontrol patch'i
------------------------
1) Bu dosyaları repo köküne kopyalayın (üzerine yazın) ve deploy edin.
   - app/news/page.tsx (headers() ile origin + dynamic SSR)
   - app/api/news/google/route.ts (revalidate 300 sn)
   - app/news/debug/page.tsx (geçici debug ekranı)

2) Kontrol adımları:
   - /api/news/google adresi JSON döndürüyor mu?
   - /news/debug sayfasında ok:true ve items listesi görünüyor mu?
   - /news sayfasında dış haberler listeleniyor mu?

Not: Prod ortamında da çalışır. İsterseniz NEXT_PUBLIC_SITE_URL env değişkeni tanımlayabilirsiniz, ancak bu sürüm headers() ile otomatik origin hesaplar.
