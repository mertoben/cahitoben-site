export default function Hero() {
  return (
    <section className="bg-zinc-900 text-white py-24 text-center">
      <h1 className="text-5xl font-bold">Cahit Oben</h1>
      <p className="mt-4 text-lg text-zinc-300">
        Türk müzik tarihinde özgün bir iz bırakan sanatçı
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <a href="/discography" className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700">Diskografi</a>
        <a href="/listen" className="px-6 py-3 bg-white text-black rounded-lg hover:bg-zinc-200">Dinle</a>
      </div>
    </section>
  );
}
