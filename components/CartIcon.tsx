"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart-store";

export default function CartIcon() {
  const cart = useCart((state) => state.cart);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Link
      href="/cart"
      className="relative flex items-center"
    >
      <ShoppingCart size={24} />

      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Link>
  );
}