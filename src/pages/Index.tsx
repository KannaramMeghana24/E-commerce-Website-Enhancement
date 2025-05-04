
import { useState, useEffect } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Filter, ShoppingBag } from "lucide-react";

const minPrice = 0;
const maxPrice = Math.ceil(Math.max(...products.map((p) => p.price)));

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "priceAsc", label: "Price: Low to High" },
  { value: "priceDesc", label: "Price: High to Low" },
  { value: "nameAsc", label: "Name: A-Z" },
  { value: "nameDesc", label: "Name: Z-A" },
];

const Index = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([minPrice, maxPrice]);
  const [sortOrder, setSortOrder] = useState("featured");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  
  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }
    
    // Filter by color
    if (selectedColors.length > 0) {
      result = result.filter((product) =>
        product.colors.some((color) => selectedColors.includes(color))
      );
    }
    
    // Filter by price
    result = result.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply sorting
    switch (sortOrder) {
      case "priceAsc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "nameAsc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "nameDesc":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "newest":
        // In a real app, you would sort by date
        // Here we just reverse the array for demonstration
        result.reverse();
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    
    setFilteredProducts(result);
  }, [selectedCategories, selectedColors, priceRange, sortOrder]);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero section */}
      <div className="bg-gradient-to-r from-shop-blue to-shop-lightBlue text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:max-w-lg">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Shop Smart, Shop Easy
              </h1>
              <p className="text-lg mb-6">
                Discover our latest collection with advanced filtering options and a seamless checkout experience.
              </p>
              <Button variant="outline" className="bg-white text-shop-blue hover:bg-gray-100">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Start Shopping
              </Button>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Shopping" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Mobile filter button */}
        <div className="md:hidden mb-4">
          <Button 
            variant="outline" 
            className="w-full flex items-center justify-center" 
            onClick={() => setIsMobileFiltersOpen(true)}
          >
            <Filter className="mr-2 h-4 w-4" />
            Filter Products
          </Button>
        </div>
        
        {/* Mobile filters */}
        {isMobileFiltersOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-auto">
              <FilterSidebar
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                selectedColors={selectedColors}
                setSelectedColors={setSelectedColors}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                minPrice={minPrice}
                maxPrice={maxPrice}
                isMobile={true}
                setIsMobileFiltersOpen={setIsMobileFiltersOpen}
              />
            </div>
          </div>
        )}
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop filters */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <FilterSidebar
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedColors={selectedColors}
              setSelectedColors={setSelectedColors}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              minPrice={minPrice}
              maxPrice={maxPrice}
              isMobile={false}
            />
          </div>
          
          {/* Products */}
          <div className="flex-1">
            {/* Sort options */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <h2 className="text-xl font-semibold mb-2 sm:mb-0">
                {filteredProducts.length} {filteredProducts.length === 1 ? "Product" : "Products"}
              </h2>
              
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">Sort by:</span>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="border rounded p-2 text-sm focus:outline-none focus:ring-2 focus:ring-shop-blue"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {/* Empty state */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-500 mb-6">
                  Try changing your filters or search criteria
                </p>
                <Button 
                  onClick={() => {
                    setSelectedCategories([]);
                    setSelectedColors([]);
                    setPriceRange([minPrice, maxPrice]);
                    setSortOrder("featured");
                  }}
                >
                  Reset All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
