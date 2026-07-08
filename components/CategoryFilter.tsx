const categories = [
  "All",
  "Bharatanatyam",
  "Practice Saree",
  "Accessories",
  "Kids",
];

export default function CategoryFilter() {
  return (
    <div className="flex flex-wrap gap-3 my-8">
      {categories.map((category) => (
        <button
          key={category}
          className="px-5 py-2 rounded-full border border-[#7FAE8A] text-[#5E8B6B] hover:bg-[#7FAE8A] hover:text-white transition"
        >
          {category}
        </button>
      ))}
    </div>
  );
}