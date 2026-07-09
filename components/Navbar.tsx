import Link from "next/link";
import Image from "next/image";
import CartIcon from "./CartIcon";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">


        <Link href="/">
  <Image
    src="/images/logo.png"
    alt="Costume Saga"
    width={180}
    height={60}
    priority
    className="h-14 w-auto"
  />
</Link>

        <h1 className="text-3xl font-extrabold text-[#0F5C4D] tracking-wide">
          Costume Saga
        </h1>

        <nav className="hidden md:flex gap-8 text-gray-700 font-medium items-center">
          <Link href="/" className="hover:text-[#0F5C4D] transition-colors duration-300">
  Home
</Link>

<Link href="/shop" className="hover:text-[#0F5C4D] transition-colors duration-300">
  Shop
</Link>

<Link href="/stitching" className="hover:text-[#0F5C4D] transition-colors duration-300">
  Stitching
</Link>

<Link href="/wholesale" className="hover:text-[#0F5C4D] transition-colors duration-300">
  Wholesale
</Link>

<Link href="/contact" className="hover:text-[#0F5C4D] transition-colors duration-300">
  Contact
</Link>
        </nav>

        <div className="flex items-center gap-4">

  <CartIcon />

  <a
    href="https://wa.me/918939491119"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-full bg-[var(--color-primary)] px-5 py-2 text-white hover:bg-[var(--color-primary-dark)] transition"
  >
    WhatsApp
  </a>

</div>

      </div>
    </header>
  );
}