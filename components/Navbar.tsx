import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        <h1 className="text-3xl font-bold text-[#5B1028]">
          Costume Saga
        </h1>

        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/custom-stitching">Stitching</Link>
          <Link href="/wholesale">Wholesale</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <button className="rounded-full bg-[#5B1028] px-5 py-2 text-white">
          WhatsApp
        </button>

      </div>
    </nav>
  );
}