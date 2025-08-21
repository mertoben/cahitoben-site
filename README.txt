Bu patch, Vercel build sırasında görülen TypeScript paket eksikliği hatasını çözer.
Yapmanız gereken:
1) Bu zip içindeki package.json dosyasını repo kökünüzdeki package.json ile DEĞİŞTİRİN.
   (İsterseniz devDependencies kısmını kendi dosyanıza manuel de ekleyebilirsiniz.)
2) Commit & push → Vercel yeniden derleyecek.
3) Lokal çalıştıracaksanız: npm install && npm run dev

Eklenen devDependencies:
- typescript
- @types/react
- @types/react-dom
- @types/node
