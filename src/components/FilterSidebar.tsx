
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { categories, colors } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";

interface FilterSidebarProps {
  selectedCategories: string[];
  setSelectedCategories: (categories: string[]) => void;
  selectedColors: string[];
  setSelectedColors: (colors: string[]) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  minPrice: number;
  maxPrice: number;
  isMobile: boolean;
  setIsMobileFiltersOpen?: (open: boolean) => void;
}

const FilterSidebar = ({
  selectedCategories,
  setSelectedCategories,
  selectedColors,
  setSelectedColors,
  priceRange,
  setPriceRange,
  minPrice,
  maxPrice,
  isMobile,
  setIsMobileFiltersOpen
}: FilterSidebarProps) => {
  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleColorChange = (color: string) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handlePriceChange = (value: number[]) => {
    setPriceRange([value[0], value[1]]);
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedColors([]);
    setPriceRange([minPrice, maxPrice]);
  };

  return (
    <div className={`${isMobile ? "p-4 bg-white rounded-lg shadow-lg" : "pr-6"}`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold flex items-center">
          <Filter className="mr-2 h-5 w-5" />
          Filters
        </h2>
        {isMobile && setIsMobileFiltersOpen && (
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMobileFiltersOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>

      <div className="space-y-6">
        {/* Categories */}
        <div>
          <h3 className="font-medium mb-3">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center">
                <Checkbox
                  id={`category-${category}`}
                  checked={selectedCategories.includes(category)}
                  onCheckedChange={() => handleCategoryChange(category)}
                />
                <Label
                  htmlFor={`category-${category}`}
                  className="ml-2 text-sm cursor-pointer"
                >
                  {category}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-medium mb-4">Price Range</h3>
          <div className="px-2">
            <Slider
              defaultValue={[priceRange[0], priceRange[1]]}
              min={minPrice}
              max={maxPrice}
              step={1}
              value={[priceRange[0], priceRange[1]]}
              onValueChange={handlePriceChange}
              className="mb-6"
            />
            <div className="flex justify-between items-center">
              <span className="text-sm">${priceRange[0]}</span>
              <span className="text-sm">${priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Colors */}
        <div>
          <h3 className="font-medium mb-3">Colors</h3>
          <div className="space-y-2">
            {colors.map((color) => (
              <div key={color} className="flex items-center">
                <Checkbox
                  id={`color-${color}`}
                  checked={selectedColors.includes(color)}
                  onCheckedChange={() => handleColorChange(color)}
                />
                <Label
                  htmlFor={`color-${color}`}
                  className="ml-2 text-sm cursor-pointer"
                >
                  {color}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        <Button 
          variant="outline" 
          className="w-full mt-6"
          onClick={clearFilters}
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterSidebar;
