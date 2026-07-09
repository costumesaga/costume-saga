"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-store";


export default function CartPage() {
  const cart = useCart((state) => state.cart);
  const increaseQty = useCart((state) => state.increaseQty);
  const decreaseQty = useCart((state) => state.decreaseQty);
  const removeFromCart = useCart((state) => state.removeFromCart);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

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

              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="w-8 h-8 rounded-full border hover:bg-gray-100"
                >
                  -
                </button>

                <span className="font-semibold">
                  {item.quantity}
                </span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="w-8 h-8 rounded-full border hover:bg-gray-100"
                >
                  +
                </button>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-6 text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="mt-12 border-t pt-8">
        <div className="flex justify-between text-xl">
          <span>Subtotal</span>
          <span>₹{total}</span>
        </div>

        <div className="flex justify-between mt-4">
          <span>Shipping(inside india)</span>
          <span className="text-green-600">FREE</span>
        </div>

        <div className="flex justify-between mt-6 text-3xl font-bold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

       <Link
  href="/checkout"
  className="block w-full mt-8 bg-[var(--color-primary)] text-white py-4 rounded-full text-center hover:bg-[var(--color-primary-dark)] transition"
>
  Proceed to Checkout
</Link>
      </div>
    </div>
  );
}