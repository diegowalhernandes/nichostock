import { UploadForm } from "@/components/upload/UploadForm";

export const metadata = {
  title: "Enviar Imagem | NichoStock",
  description: "Envie sua imagem para o marketplace NichoStock."
};

export default function UploadPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">
        Enviar Nova Imagem
      </h1>

      <UploadForm />
    </div>
  );
}
