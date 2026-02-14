import { Hero } from "@/components/sections/Hero";
import { Categories } from "@/components/sections/Categories";
import { ImageGrid } from "@/components/images/ImageGrid";

export const metadata = {
  title: "NichoStock | Banco de Imagens Premium",
  description: "Marketplace moderno de imagens focado em nichos específicos."
};

async function getImages() {
  // Futuramente substituir por fetch API
  return [
    { id: 1, title: "Imagem 1", url: "https://picsum.photos/600/800?1" },
    { id: 2, title: "Imagem 2", url: "https://picsum.photos/600/700?2" },
    { id: 3, title: "Imagem 3", url: "https://picsum.photos/600/900?3" },
    { id: 4, title: "Imagem 4", url: "https://picsum.photos/600/750?4" },
    { id: 5, title: "Imagem 5", url: "https://picsum.photos/600/650?5" },
    { id: 6, title: "Imagem 6", url: "https://picsum.photos/600/820?6" }
  ];
}

export default async function Home() {
  const images = await getImages();

  return (
    <>
      <Hero />
      <Categories />
      <section className="max-w-7xl mx-auto px-6 py-16">
        <ImageGrid images={images} />

        <div className="flex justify-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-xl text-white font-medium">
            Explorar mais
          </button>
        </div>
      </section>
    </>
  );
}
