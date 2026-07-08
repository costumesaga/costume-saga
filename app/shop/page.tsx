import CategoryFilter from "../../components/CategoryFilter";
import SearchBar from "../../components/SearchBar";
import ProductGrid from "../../components/ProductGrid";
export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#F7FBF8]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        <h1 className="text-5xl font-bold text-center text-gray-900">
          Shop Collection
        </h1>

        <p className="text-center text-gray-600 mt-4">
          Discover Premium Bharatanatyam Costumes, Practice Sarees & Accessories.
        </p>

        <SearchBar />
        <CategoryFilter />
        <ProductGrid />

      </div>
    </main>
  );
}