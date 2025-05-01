export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  platform: 'google' | 'twitter' | 'facebook' | 'instagram';
  avatar: string;
  rating?: number;
  date: string;
} 