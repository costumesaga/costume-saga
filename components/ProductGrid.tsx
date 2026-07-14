import { products } from "../data/products";
import Image from "next/image";
import Link from "next/link";

interface ProductGridProps {
  search: string;
  selectedCategory: string;
  sort: string;
}

export default function ProductGrid({
  search,
  selectedCategory,
  sort,
}: ProductGridProps) {

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (sort === "low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );
  }

  if (sort === "high") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.price - a.price
    );
  }

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-600">
          No products found
        </h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-72 object-cover"
          />

          <div className="p-5">
            <h3 className="text-xl font-semibold">
              {product.name}
            </h3>

            <p className="text-[#5E8B6B] font-bold mt-2 text-lg">
              ₹{product.price}
            </p>

            <Link href={`/products/${product.id}`}>
              <button className="w-full mt-5 bg-[#7FAE8A] hover:bg-[#5E8B6B] text-white py-3 rounded-full transition">
                View Product
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}