export function Categories() {
  const categories = [
    "Tecnologia",
    "Negócios",
    "Saúde",
    "Educação",
    "Marketing",
    "Arquitetura"
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold mb-8">
        Categorias em destaque
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <div
            key={category}
            className="bg-zinc-100 dark:bg-zinc-800 hover:bg-blue-600 hover:text-white transition p-6 rounded-xl text-center cursor-pointer"
          >
            {category}
          </div>
        ))}
      </div>
    </section>
  );
}
