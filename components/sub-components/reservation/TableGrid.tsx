'use client';

import { motion } from 'framer-motion';
import { Table, TableSelectionData } from './types';

interface TableGridProps {
  tables: Table[];
  selectedTable: string | null;
  onTableSelect: (tableId: string) => void;
  selectionData: TableSelectionData;
}

const TableGrid = ({ tables, selectedTable, onTableSelect, selectionData }: TableGridProps) => {
  const maxRow = Math.max(...tables.map(table => table.position.row));
  const maxCol = Math.max(...tables.map(table => table.position.col));

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Legend */}
      <div className="flex justify-center gap-6 mb-8">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <span className="text-sm text-gray-600">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
          <span className="text-sm text-gray-600">Reserved</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
          <span className="text-sm text-gray-600">Selected</span>
        </div>
      </div>

      {/* Grid Container */}
      <div 
        className="grid gap-4 p-4 bg-white rounded-xl shadow-lg"
        style={{
          gridTemplateColumns: `repeat(${maxCol}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${maxRow}, minmax(0, 1fr))`,
        }}
      >
        {tables.map((table) => (
          <motion.button
            key={table.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => table.status === 'available' && onTableSelect(table.id)}
            className={`
              aspect-square rounded-lg flex flex-col items-center justify-center
              ${table.status === 'available' ? 'bg-green-500 hover:bg-green-600' : ''}
              ${table.status === 'reserved' ? 'bg-red-500 cursor-not-allowed' : ''}
              ${table.status === 'selected' ? 'bg-blue-500' : ''}
              text-white font-medium shadow-md transition-colors
            `}
            disabled={table.status === 'reserved'}
          >
            <span className="text-lg">Table {table.number}</span>
            <span className="text-sm opacity-80">{table.capacity} seats</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default TableGrid; 