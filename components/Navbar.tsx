import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        <h1 className="text-3xl font-bold text-[#5E8B6B]">
          Costume Saga
        </h1>

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/stitching">Stitching</Link>
          <Link href="/wholesale">Wholesale</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button className="rounded-full bg-[#7FAE8A] px-5 py-2 text-white hover:bg-[#5E8B6B]">
          WhatsApp
        </button>

      </div>
    </header>
  );
}