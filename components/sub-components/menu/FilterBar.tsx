import { FilterOptions } from './menu';

interface FilterBarProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  isMobile?: boolean;
  onClose?: () => void;
}

export default function FilterBar({ filters, onFilterChange, isMobile = false, onClose }: FilterBarProps) {
  const priceRanges = [
    { label: 'Under $20', range: [0, 20] },
    { label: '$20 - $40', range: [20, 40] },
    { label: '$40 - $60', range: [40, 60] },
    { label: 'Over $60', range: [60, 1000] },
    { label: 'All', range: [0, 1000] },
  ];

  const categories = ['appetizer', 'main', 'dessert'];
  const dietaryOptions = ['Vegetarian', 'Gluten Free'];
  const tags = ['Hot', 'Trending', 'Italian', 'Seafood', 'Premium'];

  const handlePriceRangeChange = (range: [number, number]) => {
    onFilterChange({ ...filters, priceRange: range });
  };

  return (
    <div className={`${isMobile ? 'fixed inset-0 bg-black/20 z-50' : ''}`}>
      <div className={`bg-white/20 backdrop-blur-lg border-2 border-black/5 p-4 rounded-lg shadow-md ${
        isMobile ? 'fixed inset-0 overflow-y-auto' : 'mt-16'
      }`}>
        {isMobile && (
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Filters</h3>
            <button
              onClick={onClose}
              className="text-gray-300 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
        
        {/* Price Range */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold hidden lg:block">Filters</h3>
          <h4 className="font-medium mb-2">Price Range</h4>
          <div className="space-y-2">
            {priceRanges.map((range, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="radio"
                  name="priceRange"
                  checked={filters.priceRange[0] === range.range[0] && filters.priceRange[1] === range.range[1]}
                  onChange={() => handlePriceRangeChange(range.range as [number, number])}
                  className="mr-2"
                />
                {range.label}
              </label>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-4">
          <h4 className="font-medium mb-2">Categories</h4>
          <div className="space-y-2">
            {categories.map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category)}
                  onChange={(e) => {
                    const newCategories = e.target.checked
                      ? [...filters.categories, category]
                      : filters.categories.filter((c) => c !== category);
                    onFilterChange({ ...filters, categories: newCategories });
                  }}
                  className="mr-2"
                />
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </label>
            ))}
          </div>
        </div>

        {/* Dietary Options */}
        <div className="mb-4">
          <h4 className="font-medium mb-2">Dietary</h4>
          <div className="space-y-2">
            {dietaryOptions.map((option) => (
              <label key={option} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.dietary.includes(option)}
                  onChange={(e) => {
                    const newDietary = e.target.checked
                      ? [...filters.dietary, option]
                      : filters.dietary.filter((d) => d !== option);
                    onFilterChange({ ...filters, dietary: newDietary });
                  }}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Tags */}
        <div className="mb-4">
          <h4 className="font-medium mb-2">Tags</h4>
          <div className="space-y-2">
            {tags.map((tag) => (
              <label key={tag} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.tags.includes(tag)}
                  onChange={(e) => {
                    const newTags = e.target.checked
                      ? [...filters.tags, tag]
                      : filters.tags.filter((t) => t !== tag);
                    onFilterChange({ ...filters, tags: newTags });
                  }}
                  className="mr-2"
                />
                {tag}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 