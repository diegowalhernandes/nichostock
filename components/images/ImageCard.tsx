"use client";

import Image from "next/image";
import Link from "next/link";

interface ImageProps {
  image: {
    id: number;
    title: string;
    url: string;
  };
}

export function ImageCard({ image }: ImageProps) {
  return (
    <Link href={`/image/${image.id}`}>
      <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition">
        <Image
          src={image.url}
          alt={image.title}
          width={600}
          height={800}
          className="w-full h-auto object-cover group-hover:scale-105 transition duration-300"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
          <button className="opacity-0 group-hover:opacity-100 transition bg-white text-black px-4 py-2 rounded-lg text-sm font-medium">
            Visualizar
          </button>
        </div>
      </div>
    </Link>
  );
}
