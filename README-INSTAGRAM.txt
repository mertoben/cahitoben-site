Instagram Embed (API'siz) Patch
-------------------------------
Bu patch, Resim Çalışmaları sayfasına Instagram gönderi embed'lerini ekler.

1) Dosyaları repo köküne kopyalayın (üzerine yazın):
   - components/InstagramEmbed.tsx
   - lib/instagram.ts
   - app/art/page.tsx  (Instagram bölümü entegre edilmiş sürüm)

2) Gönderi linkleri nasıl eklenir?
   - Instagram profilinizden (https://www.instagram.com/cahitobenart/) tekil gönderilere girin.
   - Adres çubuğundaki URL'yi kopyalayın (ör: https://www.instagram.com/p/XXXXXXXXX/).
   - lib/instagram.ts içindeki INSTAGRAM_POSTS dizisine ekleyin.
   - Deploy edin → gönderiler otomatik görünür.

Notlar:
- Bu yöntem resmi Instagram embed.js'i kullanır, ek API anahtarı gerekmez.
- Instagram profilini otomatik taramak (postları kendiliğinden bulmak) API'siz desteklenmez ve sıkça engellenir.
- Daha ileri düzey (otomatik) entegrasyon için Facebook Graph API ve Business/Creator hesap gerekir.
