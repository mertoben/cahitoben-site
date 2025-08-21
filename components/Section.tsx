export default function Section({ title, children }) {
  return (
    <section className="py-12 px-4 md:px-8">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      {children}
    </section>
  );
}
