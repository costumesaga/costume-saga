"use client";

const categories = [
  "All",
  "Bharatanatyam",
  "Practice Saree",
  "Accessories",
  "Kids",
];

interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function CategoryFilter({
  selectedCategory,
  setSelectedCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 my-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-5 py-2 rounded-full transition ${
            selectedCategory === category
              ? "bg-[#5E8B6B] text-white"
              : "border border-[#7FAE8A] text-[#5E8B6B] hover:bg-[#7FAE8A] hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}