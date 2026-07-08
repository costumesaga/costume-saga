import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* Logo & About */}
        <div>
          <Image
            src="/images/logo.png"
            alt="Costume Saga"
            width={180}
            height={60}
            className="bg-white rounded-lg p-2"
          />

          <p className="mt-5 text-gray-200 leading-7">
            Premium Bharatanatyam Costumes, Practice Sarees,
            Temple Jewellery & Custom Stitching.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

          <ul className="space-y-3">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/stitching">Stitching</Link></li>
            <li><Link href="/wholesale">Wholesale</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Contact</h3>

          <p>📍 Chennai, Tamil Nadu</p>
          <p className="mt-3">📞 +91 89394 91119</p>
          <p className="mt-3">✉️ costumesaga@gmail.com</p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold mb-5">
            Follow Us
          </h3>

          <div className="flex gap-5 text-3xl">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="https://wa.me/918939491119">
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-white/20 py-6 text-center text-gray-300">
        © 2026 Costume Saga. All Rights Reserved.
      </div>
    </footer>
  );
}