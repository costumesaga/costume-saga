"use client";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchBar({
  search,
  setSearch,
}: SearchBarProps) {
  return (
    <div className="my-10">
      <input
        type="text"
        placeholder="Search Bharatanatyam Costumes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-gray-300 rounded-full px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-[#7FAE8A]"
      />
    </div>
  );
}