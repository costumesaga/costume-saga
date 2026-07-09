"use client";

import { useCart } from "@/lib/cart-store";
import toast from "react-hot-toast";

interface Props {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function AddToCartButton({
  id,
  name,
  price,
  image,
}: Props) {
  const addToCart = useCart((state) => state.addToCart);

  return (
    <button
      onClick={() => {
        addToCart({
          id,
          name,
          price,
          image,
        });

        toast.success("Added to Cart");
      }}
      className="mt-10 w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white py-4 rounded-full font-semibold transition"
    >
      Add to Cart
    </button>
  );
}