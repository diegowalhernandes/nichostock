"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    login(email, password);
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      
      {/* Lado esquerdo - Branding */}
      <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-12">
        <div className="max-w-md space-y-6">
          <h1 className="text-4xl font-bold">
            Bem-vindo ao NichoStock
          </h1>
          <p className="text-lg opacity-90">
            A plataforma premium para compartilhar e descobrir imagens exclusivas.
          </p>
        </div>
      </div>

      {/* Lado direito - Form */}
      <div className="flex items-center justify-center p-6 bg-gray-50 dark:bg-zinc-950">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white dark:bg-zinc-900 p-10 rounded-3xl shadow-xl space-y-6"
        >
          <div>
            <h2 className="text-3xl font-bold text-center">
              Entrar
            </h2>
            <p className="text-center text-zinc-500 mt-2">
              Acesse sua conta
            </p>
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full border border-zinc-300 dark:border-zinc-700 bg-transparent p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Senha"
            className="w-full border border-zinc-300 dark:border-zinc-700 bg-transparent p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white py-3 rounded-xl font-semibold transition">
            Entrar
          </button>

          <p className="text-center text-sm text-zinc-500">
            Não tem conta?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              Criar conta
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
