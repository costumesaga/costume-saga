import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#FAFCFA] via-[#F3FAF5] to-[#E4F3E8]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-6 py-28">

        {/* Left */}  
        <div>

          <div className="inline-flex items-center gap-2 bg-[#E8F5E9] text-[#0F5C4D] px-4 py-2 rounded-full text-sm font-semibold">
              ✨ Premium Bharatanatyam Collection
       </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold mt-6 leading-tight text-[#16342F]">
            Designed for Every
<span className="text-[#0F5C4D] block">
  Bharatanatyam Performance
</span> Performance
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Premium Bharatanatyam Costumes, Practice Sarees,
            Custom Stitching & Dance Accessories.
          </p>

          <div className="flex gap-4 mt-10">

            <a
  href="/shop"
  className="inline-flex items-center justify-center bg-[#0F5C4D] hover:bg-[#0B4B3E] text-white px-8 py-4 rounded-full font-semibold shadow-xl transition-all duration-300 hover:scale-105"
>
  Shop Collection →
              </a>

           <a
  href="https://wa.me/918939491119"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center border-2 border-[#0F5C4D] text-[#0F5C4D] px-8 py-4 rounded-full font-semibold hover:bg-[#0F5C4D] hover:text-white transition-all duration-300"
>
  WhatsApp Order
</a>

          </div>

        </div>

        <div className="flex justify-center relative">

          <Image
            src="/images/hero.jpg"
            alt="Costume Saga"
            width={600}
            height={700}
            priority
            className="rounded-[40px] shadow-2xl border-8 border-white hover:scale-105 transition-all duration-500"          />

        </div>


        <div className="flex flex-wrap gap-6 mt-8 text-sm font-medium text-gray-600">
          <span>🌍 Worldwide Shipping</span>
          <span>✂️ Custom Stitching</span>
          <span>⭐ Premium Quality</span>
        </div>

        {/* Right */}

        

      </div>
    </section>
  );
}