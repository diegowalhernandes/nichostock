import { ImageCard } from "./ImageCard";

interface Image {
  id: number;
  title: string;
  url: string;
}

export function ImageGrid({ images }: { images: Image[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
}
