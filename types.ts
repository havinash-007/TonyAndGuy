export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  priceRange: string;
  image: string;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  image: string;
}

export enum LocationType {
  INDIRANAGAR = 'Indiranagar',
  UB_CITY = 'UB City',
  KORAMANGALA = 'Koramangala',
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}