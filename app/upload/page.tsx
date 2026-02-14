"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { UploadForm } from "@/components/upload/UploadForm";

export default function UploadPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        Enviar Nova Imagem
      </h1>

      <UploadForm />
    </div>
  );
}
