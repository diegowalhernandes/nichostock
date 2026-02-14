"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function RegisterPage() {
  const { register } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    register(name, email, password);
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      
      {/* Branding */}
      <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-12">
        <div className="max-w-md space-y-6">
          <h1 className="text-4xl font-bold">
            Crie sua conta
          </h1>
          <p className="text-lg opacity-90">
            Publique suas imagens e monetize seu talento.
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="flex items-center justify-center p-6 bg-gray-50 dark:bg-zinc-950">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white dark:bg-zinc-900 p-10 rounded-3xl shadow-xl space-y-6"
        >
          <div>
            <h2 className="text-3xl font-bold text-center">
              Cadastro
            </h2>
            <p className="text-center text-zinc-500 mt-2">
              Comece agora gratuitamente
            </p>
          </div>

          <input
            placeholder="Nome"
            className="w-full border border-zinc-300 dark:border-zinc-700 bg-transparent p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-zinc-300 dark:border-zinc-700 bg-transparent p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Senha"
            className="w-full border border-zinc-300 dark:border-zinc-700 bg-transparent p-3 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white py-3 rounded-xl font-semibold transition">
            Criar Conta
          </button>

          <p className="text-center text-sm text-zinc-500">
            Já tem conta?{" "}
            <Link href="/login" className="text-indigo-600 hover:underline">
              Entrar
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
