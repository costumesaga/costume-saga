import { products } from "../data/products";
import Image from "next/image";



export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition"
        >
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-72 object-cover"
          />

          <div className="p-5">
            <h3 className="text-xl font-semibold">{product.name}</h3>

            <p className="text-[#5E8B6B] font-bold mt-2">
              ₹{product.price}
            </p>

            <button className="w-full mt-5 bg-[#7FAE8A] text-white py-3 rounded-full hover:bg-[#5E8B6B]">
              View Product
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}