import Image from "next/image";

const products = [
  {
    name: "Premium Bharatanatyam Costume",
    price: "₹4,999",
    image: "/images/costume1.jpg",
  },
  {
    name: "Practice Saree",
    price: "₹1,800",
    image: "/images/practice-saree.jpg",
  },
  {
    name: "Kids Costume",
    price: "₹3,999",
    image: "/images/costume2.jpg",
  },
  {
    name: "Dance Accessories",
    price: "From ₹299",
    image: "/images/accessories.jpg",
  },
];

export default function BestSellers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          Best Sellers
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Most loved by dancers worldwide.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          {products.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition bg-white"
            >
              <Image
                key={item.image}
                src={item.image}
                alt={item.name}
                width={500}
                height={500}
                className="w-full h-72 object-cover"
              />

              <div className="p-5">

                <h3 className="text-xl font-semibold">
                  {item.name}
                </h3>

                <p className="text-[#5E8B6B] font-bold mt-2">
                  {item.price}
                </p>

                <button className="mt-5 w-full bg-[#7FAE8A] text-white py-3 rounded-full hover:bg-[#5E8B6B]">
                  View Product
                </button>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}