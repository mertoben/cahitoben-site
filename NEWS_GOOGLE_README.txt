Optional: Production'da /api/news/google endpoint'ini kesin URL ile çağırmak için .env dosyanıza ekleyin:
NEXT_PUBLIC_SITE_URL=https://cahitoben.com
Aksi halde komponent içinde relatif endpoint fallback'i mevcuttur.
Ayrıca package.json'a şu bağımlılığı ekleyin:
  "rss-parser": "^3.13.0"
