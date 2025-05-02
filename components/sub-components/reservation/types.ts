export interface Table {
  id: string;
  number: number;
  capacity: number;
  status: 'available' | 'reserved' | 'selected';
  position: {
    row: number;
    col: number;
  };
}

export interface ReservationFormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  tableId: string;
  specialRequests: string;
}

export interface ReservationSuccessData extends ReservationFormData {
  id: string;
  status: 'confirmed' | 'pending';
}

export interface TableSelectionData {
  date: string;
  time: string;
  guests: number;
} 