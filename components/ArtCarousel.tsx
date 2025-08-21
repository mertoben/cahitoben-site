"use client";
import { useRef } from "react";
import { WORKS } from "@/lib/art";

export default function ArtCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") => {
    if (ref.current) {
      ref.current.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
    }
  };
  return (
    <div className="relative">
      <div ref={ref} className="flex overflow-x-auto gap-4 pb-4">
        {WORKS.slice(0, 8).map(w => (
          <div key={w.id} className="min-w-[200px]">
            <img src={w.image} alt={w.title} className="rounded-lg mb-2" />
            <h4 className="font-medium">{w.title}</h4>
          </div>
        ))}
      </div>
      <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 px-2 py-1 rounded-full shadow">‹</button>
      <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 px-2 py-1 rounded-full shadow">›</button>
    </div>
  );
}
