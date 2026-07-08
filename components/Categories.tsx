import Image from "next/image";

const categories = [
  {
    title: "Bharatanatyam Costumes",
    image: "/images/costume1.jpg",
  },
  {
    title: "Practice Sarees",
    image: "/images/practice-saree.jpg",
  },
  {
    title: "Accessories",
    image: "/images/accessories.jpg",
  },
  {
    title: "Custom Stitching",
    image: "/images/costume2.jpg",
  },
];

export default function Categories() {
  return (
    <section className="py-20 bg-[#F7FBF8]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Shop by Category
        </h2>

        <p className="text-center text-gray-600 mt-3">
          Explore our premium Bharatanatyam collections.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          {categories.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={400}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-center">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}