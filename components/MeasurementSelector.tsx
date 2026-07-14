"use client";

import { useState } from "react";

const sizes = ["26", "28", "30", "32", "34", "36", "38", "40"];

export default function MeasurementSelector() {
  const [selectedSize, setSelectedSize] = useState("");
  const [customMeasurement, setCustomMeasurement] = useState(false);

  return (
    <div className="mt-10">

      <h3 className="text-xl font-semibold mb-4">
        Select Size
      </h3>

      <div className="flex flex-wrap gap-3">

        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => {
              setSelectedSize(size);
              setCustomMeasurement(false);
            }}
            className={`px-5 py-3 rounded-full border transition ${
              selectedSize === size
                ? "bg-[#5E8B6B] text-white"
                : "border-gray-300"
            }`}
          >
            {size}
          </button>
        ))}

      </div>

      <label className="flex items-center gap-3 mt-8">

        <input
          type="checkbox"
          checked={customMeasurement}
          onChange={() => {
            setCustomMeasurement(!customMeasurement);
            setSelectedSize("");
          }}
        />

        <span className="font-medium">
          I Need Custom Measurement
        </span>

      </label>

      {customMeasurement && (

        <div className="grid md:grid-cols-2 gap-4 mt-8">

          <input placeholder="Bust" className="border rounded-xl p-3" />
          <input placeholder="Waist" className="border rounded-xl p-3" />
          <input placeholder="Hip" className="border rounded-xl p-3" />
          <input placeholder="Shoulder" className="border rounded-xl p-3" />
          <input placeholder="Arm Length" className="border rounded-xl p-3" />
          <input placeholder="Blouse Length" className="border rounded-xl p-3" />
          <input placeholder="Top Length" className="border rounded-xl p-3" />
          <input placeholder="Pant Length" className="border rounded-xl p-3" />
          <input placeholder="Height" className="border rounded-xl p-3" />
          <input placeholder="Weight" className="border rounded-xl p-3" />

        </div>

      )}

    </div>
  );
}