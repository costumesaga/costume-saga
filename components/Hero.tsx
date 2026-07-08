import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#F7FBF8] via-white to-[#EEF6F0]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-6 py-20">

        {/* Left */}
        <div>

          <span className="text-[#5E8B6B] font-semibold uppercase tracking-[4px]">
            Premium Bharatanatyam Collection
          </span>

          <h1 className="text-5xl lg:text-7xl font-bold mt-6 leading-tight text-gray-900">
            Crafted for Every Bharatanatyam Performance
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Premium Bharatanatyam Costumes, Practice Sarees,
            Custom Stitching & Dance Accessories.
          </p>

          <div className="flex gap-4 mt-10">

            <button className="bg-[#7FAE8A] hover:bg-[#5E8B6B] text-white px-8 py-4 rounded-full font-semibold transition">
              Shop Collection
            </button>

            <button className="border-2 border-[#7FAE8A] text-[#5E8B6B] px-8 py-4 rounded-full font-semibold">
              WhatsApp Order
            </button>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center relative">

          <Image
            src="/images/hero.jpg"
            alt="Costume Saga"
            width={600}
            height={700}
            priority
            className="rounded-[30px] shadow-2xl border-8 border-white"
          />

        </div>

      </div>
    </section>
  );
}