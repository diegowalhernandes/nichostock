"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type User = {
  name: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => void;
  register: (name: string, email: string, password: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("nichostock_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  function login(email: string, password: string) {
    const storedUser = localStorage.getItem("nichostock_user");
    if (!storedUser) return alert("Usuário não encontrado");

    const parsed = JSON.parse(storedUser);

    if (parsed.email === email && parsed.password === password) {
      setUser(parsed);
      router.push("/upload");
    } else {
      alert("Credenciais inválidas");
    }
  }

  function register(name: string, email: string, password: string) {
    const newUser = { name, email, password };
    localStorage.setItem("nichostock_user", JSON.stringify(newUser));
    setUser(newUser);
    router.push("/upload");
  }

  function logout() {
    localStorage.removeItem("nichostock_user");
    setUser(null);
    router.push("/");
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
