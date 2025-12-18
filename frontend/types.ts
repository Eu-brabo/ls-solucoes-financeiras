
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  company: string;
  date: string;
  time: string;
  message: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
