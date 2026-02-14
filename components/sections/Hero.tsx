"use client";

import { Search } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-[75vh] flex items-center justify-center text-center bg-[url('https://picsum.photos/1920/1080?blur=2')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Imagens premium para seu nicho específico
        </h1>

        <p className="mt-4 text-lg text-zinc-200">
          Encontre imagens profissionais prontas para seu projeto.
        </p>

        <div className="mt-8 flex items-center bg-white rounded-2xl overflow-hidden shadow-lg">
          <input
            type="text"
            placeholder="Buscar imagens..."
            className="flex-1 px-6 py-4 text-black outline-none"
          />
          <button className="bg-blue-600 px-6 py-4 text-white">
            <Search size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
