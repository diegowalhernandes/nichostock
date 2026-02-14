"use client";

import { useState } from "react";
import Image from "next/image";

export function UploadForm() {
  const [preview, setPreview] = useState<string | null>(null);
  const [form, setForm] = useState({
    title: "",
    subtitle: "",
    location: "",
    datetime: "",
    author: "",
    description: "",
  });

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Imagem enviada (simulação)");
  }

  return (
    <div className="max-w-5xl mx-auto bg-white dark:bg-zinc-900 rounded-3xl shadow-xl p-10 grid md:grid-cols-2 gap-10">
      
      {/* Preview */}
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-2xl p-6 text-center relative">
        
        {preview ? (
          <div className="relative w-full h-96 rounded-xl overflow-hidden">
            <Image
              src={preview}
              alt="Preview"
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-zinc-500">
              Arraste sua imagem aqui ou clique para selecionar
            </p>
          </div>
        )}

        <input
          type="file"
          onChange={handleFileChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
          required
        />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label className="block text-sm font-medium mb-1">Título</label>
          <input
            name="title"
            onChange={handleChange}
            className="w-full border border-zinc-300 dark:border-zinc-700 bg-transparent p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Subtítulo</label>
          <input
            name="subtitle"
            onChange={handleChange}
            className="w-full border border-zinc-300 dark:border-zinc-700 bg-transparent p-3 rounded-xl"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Local</label>
          <input
            name="location"
            onChange={handleChange}
            className="w-full border border-zinc-300 dark:border-zinc-700 bg-transparent p-3 rounded-xl"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Data e Hora
          </label>
          <input
            type="datetime-local"
            name="datetime"
            onChange={handleChange}
            className="w-full border border-zinc-300 dark:border-zinc-700 bg-transparent p-3 rounded-xl"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Autor da foto
          </label>
          <input
            name="author"
            onChange={handleChange}
            className="w-full border border-zinc-300 dark:border-zinc-700 bg-transparent p-3 rounded-xl"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Descrição
          </label>
          <textarea
            name="description"
            rows={4}
            onChange={handleChange}
            className="w-full border border-zinc-300 dark:border-zinc-700 bg-transparent p-3 rounded-xl"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white py-3 rounded-xl font-semibold transition"
        >
          Publicar imagem
        </button>
      </form>
    </div>
  );
}
