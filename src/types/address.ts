export type AddressType = 'home' | 'work' | 'other';

export type Address = {
    id: string;
    type: 'home' | 'work';
    street: string;
    complement?: string;
    city: string;
    state: string;
  };
  