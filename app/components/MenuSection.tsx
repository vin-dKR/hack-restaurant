import { useState } from 'react';
import { MenuItem } from '../types/menu';
import MenuItemCard from './MenuItemCard';

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
  initialShowCount?: number;
  onOrder?: (item: MenuItem) => void;
}

export default function MenuSection({ title, items, initialShowCount = 3, onOrder }: MenuSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const displayedItems = showAll ? items : items.slice(0, initialShowCount);

  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedItems.map((item) => (
          <MenuItemCard key={item.id} item={item} onOrder={onOrder} />
        ))}
      </div>
      {items.length > initialShowCount && (
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            {showAll ? 'Show Less' : 'See More'}
          </button>
        </div>
      )}
    </div>
  );
} 