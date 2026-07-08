export default function WhyChoose() {
  const features = [
    {
      title: "Premium Stitching",
      description: "Neat finishing with high-quality stitching for every costume.",
    },
    {
      title: "Custom Measurements",
      description: "Perfect fit based on your measurements.",
    },
    {
      title: "Worldwide Shipping",
      description: "We deliver Bharatanatyam costumes across India and overseas.",
    },
    {
      title: "Trusted by Dance Schools",
      description: "Preferred by dancers, teachers and academies.",
    },
  ];

  return (
    <section className="py-20 bg-[#F7FBF8]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900">
          Why Choose Costume Saga?
        </h2>

        <p className="text-center text-gray-600 mt-3">
          Quality, elegance and trust in every stitch.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl shadow-lg p-8 text-center hover:shadow-2xl transition"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[#7FAE8A] flex items-center justify-center text-white text-2xl">
                ✓
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}