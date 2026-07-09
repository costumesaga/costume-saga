"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-store";

export default function CartPage() {
  const cart = useCart((state) => state.cart);

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold">Shopping Cart</h1>

        <p className="mt-6 text-gray-600">
          Your cart is empty.
        </p>

        <Link
          href="/shop"
          className="inline-block mt-8 bg-[var(--color-primary)] text-white px-6 py-3 rounded-full"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-12">
        Shopping Cart
      </h1>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 border rounded-2xl p-5"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={120}
              height={120}
              className="rounded-xl"
            />

            <div className="flex-1">
              <h2 className="text-xl font-semibold">
                {item.name}
              </h2>

              <p className="text-[var(--color-primary)] font-bold mt-2">
                ₹{item.price}
              </p>

              <p className="text-gray-500 mt-2">
                Qty : {item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}