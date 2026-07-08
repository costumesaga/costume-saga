import FadeIn from "./FadeIn";
export default function Testimonials() {
  const reviews = [
    {
      name: "Priya S.",
      place: "Chennai",
      review:
        "Excellent stitching quality. The costume fitting was perfect and delivery was on time.",
    },
    {
      name: "Ananya R.",
      place: "Bangalore",
      review:
        "Beautiful Bharatanatyam costume. Premium fabric and neat finishing. Highly recommended!",
    },
    {
      name: "Meera K.",
      place: "Singapore",
      review:
        "Worldwide shipping was fast. The costume exceeded my expectations.",
    },
  ];

  return (
  <section className="bg-[var(--color-background)] py-24">
    <FadeIn>
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-[var(--color-text)]">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-gray-600">
            Trusted by dancers across India and worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg border border-green-100 hover:shadow-2xl transition duration-300"
            >
              <div className="text-yellow-500 text-xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-600 leading-7">
                "{review.review}"
              </p>

              <div className="mt-6">
                <h4 className="font-bold text-[var(--color-primary)]">
                  {review.name}
                </h4>

                <p className="text-sm text-gray-500">
                  {review.place}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </FadeIn>
  </section>
);
}