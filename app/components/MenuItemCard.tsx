import Image from 'next/image';
import { MenuItem } from '../types/menu';

interface MenuItemCardProps {
  item: MenuItem;
  onOrder?: (item: MenuItem) => void;
}

export default function MenuItemCard({ item, onOrder }: MenuItemCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          {item.isHot && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              Hot
            </span>
          )}
          {item.isTrending && (
            <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              Trending
            </span>
          )}
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{item.name}</h3>
          <p className="text-lg font-semibold text-gray-800">${item.price}</p>
        </div>
        <p className="text-gray-600 mb-3">{item.description}</p>
        <div className="flex flex-wrap gap-2 mb-3">
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            <span>{item.calories} cal</span>
            <span className="mx-2">•</span>
            <span>{item.prepTime}</span>
          </div>
          <button
            onClick={() => onOrder?.(item)}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
} 