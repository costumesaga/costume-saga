import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex h-screen items-center justify-center bg-[#FAF8F3]">
        <div className="text-center">
          <h2 className="text-6xl font-bold text-[#5B1028]">
            Crafted for Every Bharatanatyam Performance
          </h2>

          <p className="mt-6 text-xl text-gray-600">
            Premium Bharatanatyam Costumes • Practice Sarees • Accessories
          </p>

          <button className="mt-8 rounded-full bg-[#5B1028] px-8 py-4 text-white">
            Shop Collection
          </button>
        </div>
      </main>
    </>
  );
}