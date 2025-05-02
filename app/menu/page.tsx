'use client';

import { useState } from 'react';
import Image from 'next/image';
import { menuItems } from '../data/menuData';
import { FilterOptions, MenuItem } from '../types/menu';
import MenuSection from '../components/MenuSection';
import FilterBar from '../components/FilterBar';

export default function Menu() {
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [0, 1000],
    tags: [],
    categories: [],
    dietary: [],
  });
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filterItems = (items: MenuItem[]) => {
    return items.filter((item) => {
      // Price range filter
      if (item.price < filters.priceRange[0] || item.price > filters.priceRange[1]) {
        return false;
      }

      // Category filter
      if (filters.categories.length > 0 && !filters.categories.includes(item.category)) {
        return false;
      }

      // Tags filter
      if (filters.tags.length > 0) {
        const hasMatchingTag = filters.tags.some((tag) => {
          if (tag === 'Hot') return item.isHot;
          if (tag === 'Trending') return item.isTrending;
          return item.tags.includes(tag);
        });
        if (!hasMatchingTag) return false;
      }

      // Dietary filter
      if (filters.dietary.length > 0) {
        const hasMatchingDietary = filters.dietary.some((dietary) => {
          if (dietary === 'Vegetarian') return item.isVegetarian;
          if (dietary === 'Gluten Free') return item.isGlutenFree;
          return false;
        });
        if (!hasMatchingDietary) return false;
      }

      return true;
    });
  };

  const handleOrder = (item: MenuItem) => {
    setSelectedItem(item);
    setShowOrderModal(true);
  };

  const filteredAppetizers = filterItems(menuItems.filter((item) => item.category === 'appetizer'));
  const filteredMains = filterItems(menuItems.filter((item) => item.category === 'main'));
  const filteredDesserts = filterItems(menuItems.filter((item) => item.category === 'dessert'));

  return (
    <main className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 -top-12 lg:-top-5 z-0 mx-4 lg:mx-10 rounded rounded-[30px] lg:rounded-[60px] overflow-hidden">
          <Image
            src="/menu-hero.jpg"
            alt="Menu showcase"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl mb-4">Our Menu</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            A culinary journey through our finest dishes
          </p>
        </div>
      </section>

      {/* Mobile Filter Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setShowMobileFilters(true)}
          className="bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </button>
      </div>

      {/* Menu Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filter Sidebar - Hidden on mobile */}
            <div className="hidden lg:block lg:col-span-1">
              <FilterBar filters={filters} onFilterChange={setFilters} />
            </div>

            {/* Menu Items */}
            <div className="lg:col-span-3">
              {filteredAppetizers.length > 0 && (
                <MenuSection 
                  title="Appetizers" 
                  items={filteredAppetizers} 
                  onOrder={handleOrder}
                />
              )}
              {filteredMains.length > 0 && (
                <MenuSection 
                  title="Main Courses" 
                  items={filteredMains} 
                  onOrder={handleOrder}
                />
              )}
              {filteredDesserts.length > 0 && (
                <MenuSection 
                  title="Desserts" 
                  items={filteredDesserts} 
                  onOrder={handleOrder}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filter Modal */}
      {showMobileFilters && (
        <FilterBar
          filters={filters}
          onFilterChange={setFilters}
          isMobile={true}
          onClose={() => setShowMobileFilters(false)}
        />
      )}

      {/* Order Modal */}
      {showOrderModal && selectedItem && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Order {selectedItem.name}</h3>
              <button
                onClick={() => setShowOrderModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-600 mb-4">{selectedItem.description}</p>
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold">${selectedItem.price}</span>
              <div className="flex items-center space-x-4">
                <button className="text-2xl">-</button>
                <span>1</span>
                <button className="text-2xl">+</button>
              </div>
            </div>
            <button
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
              onClick={() => {
                // Handle order submission
                setShowOrderModal(false);
              }}
            >
              Add to Order
            </button>
          </div>
        </div>
      )}
    </main>
  );
} 