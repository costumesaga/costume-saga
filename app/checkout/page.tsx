"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-store";
import { supabase } from "@/lib/supabase";

export default function CheckoutPage() {
  const router = useRouter();

  const cart = useCart((state) => state.cart);
const clearCart = useCart((state) => state.clearCart);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleContinue = async () => {
  if (
    !form.fullName ||
    !form.phone ||
    !form.address ||
    !form.city ||
    !form.state ||
    !form.pincode
  ) {
    alert("Please fill all required fields.");
    return;
  }

  if (form.phone.length !== 10) {
    alert("Enter a valid 10-digit mobile number.");
    return;
  }

  setLoading(true);

  const { error } = await supabase.from("orders").insert([
    {
      full_name: form.fullName,
      phone: form.phone,
      email: form.email,
      address: form.address,
      city: form.city,
      state: form.state,
      pincode: form.pincode,
      total: total,
      products: cart,
    },
  ]);

  console.log("Supabase Error:", error);

  if (error) {
    console.error(error);
    alert("Failed to place order.");
    setLoading(false);
    return;
  }

  clearCart();

  router.push("/order-success");
};



  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold mb-12 text-[var(--color-text)]">
        Checkout
      </h1>

      <div className="grid lg:grid-cols-2 gap-12">

        {/* Customer Details */}

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-2xl font-bold mb-6">
            Customer Details
          </h2>

          <div className="space-y-5">

            <input
              type="text"
              placeholder="Full Name *"
              value={form.fullName}
              onChange={(e) =>
                setForm({ ...form, fullName: e.target.value })
              }
              className="w-full border rounded-xl p-4"
            />

            <input
              type="tel"
              placeholder="Mobile Number *"
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
              className="w-full border rounded-xl p-4"
            />

            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="w-full border rounded-xl p-4"
            />

            <textarea
              placeholder="Full Address *"
              rows={4}
              value={form.address}
              onChange={(e) =>
                setForm({ ...form, address: e.target.value })
              }
              className="w-full border rounded-xl p-4"
            />

            <div className="grid grid-cols-2 gap-4">

              <input
                type="text"
                placeholder="City *"
                value={form.city}
                onChange={(e) =>
                  setForm({ ...form, city: e.target.value })
                }
                className="border rounded-xl p-4"
              />

              <input
                type="text"
                placeholder="State *"
                value={form.state}
                onChange={(e) =>
                  setForm({ ...form, state: e.target.value })
                }
                className="border rounded-xl p-4"
              />

            </div>

            <input
              type="text"
              placeholder="Pincode *"
              value={form.pincode}
              onChange={(e) =>
                setForm({ ...form, pincode: e.target.value })
              }
              className="w-full border rounded-xl p-4"
            />

          </div>

        </div>

        {/* Order Summary */}

        <div className="bg-[#F7FBF8] rounded-3xl shadow-xl p-8 h-fit">

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          <div className="space-y-4 mb-6">

            {cart.map((item) => (

              <div
                key={item.id}
                className="flex justify-between border-b pb-3"
              >

                <div>
                  <p className="font-semibold">
                    {item.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    Qty : {item.quantity}
                  </p>
                </div>

                <p className="font-bold">
                  ₹{item.price * item.quantity}
                </p>

              </div>

            ))}

          </div>

          <div className="flex justify-between mb-4">
            <span>Subtotal</span>
            <span>₹{total}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Shipping</span>
            <span className="text-green-600">
              FREE
            </span>
          </div>

          <hr className="my-6" />

          <div className="flex justify-between text-2xl font-bold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            onClick={handleContinue}
            disabled={loading}
            className="w-full mt-8 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white py-4 rounded-full transition disabled:opacity-50"
          >
            {loading ? "Processing..." : "Continue to Payment"}
          </button>

        </div>

      </div>
    </div>
  );
}