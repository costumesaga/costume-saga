"use client";

import { useState } from "react";
import Image from "next/image";

export default function MeasurementGuide() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="mt-6 w-full rounded-xl border border-[#5E8B6B] py-3 text-[#5E8B6B] hover:bg-[#5E8B6B] hover:text-white transition"
      >
        📏 View Measurement Guide
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">

          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto p-6">

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">
                Measurement Guide
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="text-3xl font-bold"
              >
                ✕
              </button>
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Blouse Measurement Chart
            </h3>

            <Image
              src="/images/blouse-chart.jpg"
              alt="Blouse Measurement"
              width={900}
              height={1200}
              className="rounded-xl border mb-10 w-full h-auto"
            />

            <h3 className="text-xl font-semibold mb-4">
              Pyjama / Dhavani Measurement Chart
            </h3>

            <Image
              src="/images/pyjama-chart.jpg"
              alt="Pyjama Measurement"
              width={900}
              height={1200}
              className="rounded-xl border w-full h-auto"
            />

          </div>

        </div>
      )}
    </>
  );
}