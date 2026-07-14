"use client";

import { useState } from "react";
import SearchBar from "../../components/SearchBar";
import CategoryFilter from "../../components/CategoryFilter";
import ProductGrid from "../../components/ProductGrid";

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sort, setSort] = useState("default");

  return (
    <main className="min-h-screen bg-[#F7FBF8]">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <h1 className="text-5xl font-bold text-center text-gray-900">
          Shop Collection
        </h1>

        <p className="text-center text-gray-600 mt-4">
          Discover Premium Bharatanatyam Costumes, Practice Sarees & Accessories.
        </p>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <div className="flex justify-end mb-8">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border rounded-xl px-4 py-3 bg-white"
          >
            <option value="default">Sort By</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        <ProductGrid
          search={search}
          selectedCategory={selectedCategory}
          sort={sort}
        />

      </div>
    </main>
  );
}