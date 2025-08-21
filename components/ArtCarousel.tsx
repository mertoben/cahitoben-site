
"use client";
import Image from "next/image";
import { useState } from "react";

export default function ArtCarousel({ items }) {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % items.length);
  const prev = () => setIndex((index - 1 + items.length) % items.length);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="relative h-96">
        <Image
          src={items[index].image}
          alt={items[index].title}
          fill
          className="object-contain rounded-lg"
        />
      </div>
      <div className="flex justify-between mt-2">
        <button onClick={prev} className="px-3 py-1 bg-gray-700 text-white rounded">Prev</button>
        <button onClick={next} className="px-3 py-1 bg-gray-700 text-white rounded">Next</button>
      </div>
      <div className="text-center mt-2">
        <h2 className="font-semibold">{items[index].title}</h2>
        {items[index].series && <div className="text-xs text-zinc-500">{items[index].series}</div>}
        {items[index].description && <p className="text-sm mt-1">{items[index].description}</p>}
      </div>
    </div>
  );
}
