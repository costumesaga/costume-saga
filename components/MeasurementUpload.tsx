"use client";

import { useState } from "react";

export default function MeasurementUpload() {
  const [fileName, setFileName] = useState("");

  return (
    <div className="mt-8 border rounded-2xl p-6 bg-[#F7FBF8]">

      <h3 className="text-xl font-bold">
        Upload Measurement Sheet
      </h3>

      <p className="text-gray-500 mt-2">
        Upload your completed measurement sheet.
      </p>

      <label className="mt-6 inline-block cursor-pointer rounded-full bg-[#5E8B6B] px-6 py-3 text-white hover:bg-[#46755B]">

        Choose File

        <input
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          hidden
          onChange={(e) => {
            if (e.target.files?.length) {
              setFileName(e.target.files[0].name);
            }
          }}
        />

      </label>

      {fileName && (
        <p className="mt-4 text-green-700 font-medium">
          ✅ {fileName}
        </p>
      )}

      <p className="text-sm text-gray-500 mt-4">
        Supported: JPG • PNG • PDF
      </p>

    </div>
  );
}