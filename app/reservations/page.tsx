'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import TableSelectionForm from '../../components/sub-components/reservation/TableSelectionForm';
import TableGrid from '../../components/sub-components/reservation/TableGrid';
import ReservationForm from '../../components/sub-components/reservation/ReservationForm';
import SuccessModal from '../../components/sub-components/reservation/SuccessModal';
import { Table, ReservationFormData, ReservationSuccessData, TableSelectionData } from '../../components/sub-components/reservation/types';

// Generate sample tables
const generateTables = (): Table[] => {
  const tables: Table[] = [];
  let tableNumber = 1;
  
  // Create a 4x3 grid of tables
  for (let row = 1; row <= 4; row++) {
    for (let col = 1; col <= 3; col++) {
      tables.push({
        id: `table-${tableNumber}`,
        number: tableNumber,
        capacity: Math.floor(Math.random() * 4) + 2, // Random capacity between 2-5
        status: 'available',
        position: { row, col }
      });
      tableNumber++;
    }
  }
  
  return tables;
};

export default function Reservations() {
  const [tables, setTables] = useState<Table[]>([]);
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [reservation, setReservation] = useState<ReservationSuccessData | null>(null);
  const [selectionData, setSelectionData] = useState<TableSelectionData>({
    date: '',
    time: '',
    guests: 2
  });

  useEffect(() => {
    // Initialize tables
    setTables(generateTables());
  }, []);

  const handleTableSelect = (tableId: string) => {
    setTables(tables.map(table => ({
      ...table,
      status: table.id === tableId ? 'selected' : table.status
    })));
    setSelectedTable(tableId);
  };

  const handleSelectionChange = (data: TableSelectionData) => {
    setSelectionData(data);
    // Simulate random table availability based on date/time
    setTables(tables.map(table => ({
      ...table,
      status: Math.random() > 0.3 ? 'available' : 'reserved'
    })));
    setSelectedTable(null);
  };

  const handleSubmit = async (formData: ReservationFormData) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Create success data
    const successData: ReservationSuccessData = {
      ...formData,
      id: Math.random().toString(36).substr(2, 9),
      status: 'confirmed'
    };
    
    setReservation(successData);
    setShowSuccessModal(true);
    setIsLoading(false);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="absolute inset-0 top-4 lg:top-5 z-0 mx-4 lg:mx-10 rounded rounded-[30px] lg:rounded-[60px] overflow-hidden">
          <Image
            src="/reservation-hero.jpg"
            alt="Restaurant interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl mb-4">Make a Reservation</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Reserve your table for an unforgettable dining experience
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Table Selection Form */}
          <TableSelectionForm
            selectionData={selectionData}
            onSelectionChange={handleSelectionChange}
          />

          {/* Table Grid */}
          {selectionData.date && selectionData.time && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <TableGrid
                tables={tables}
                selectedTable={selectedTable}
                onTableSelect={handleTableSelect}
                selectionData={selectionData}
              />
            </motion.div>
          )}

          {/* Reservation Form */}
          {selectedTable && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8"
            >
              <ReservationForm
                onSubmit={handleSubmit}
                isLoading={isLoading}
                initialData={{
                  ...selectionData,
                  tableId: selectedTable
                }}
              />
            </motion.div>
          )}
        </div>
      </section>

      {/* Success Modal */}
      {reservation && (
        <SuccessModal
          isOpen={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
          reservation={reservation}
        />
      )}
    </main>
  );
}