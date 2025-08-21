export default function AlbumCard({ album, featured }) {
  return (
    <article className={`rounded-2xl shadow p-4 ${featured ? 'bg-blue-50' : 'bg-white'}`}>
      <img src={album.cover} alt={album.title} className="rounded-lg mb-3" />
      <h3 className="font-semibold">{album.title}</h3>
      <p className="text-sm text-gray-500">{album.year}</p>
      {featured && album.spotify && (
        <div className="mt-4">
          <iframe src={album.spotify} width="100%" height="80" allow="encrypted-media"></iframe>
        </div>
      )}
    </article>
  );
}
