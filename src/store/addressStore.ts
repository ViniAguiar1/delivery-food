import { create } from 'zustand';
import { Address } from '../types/address';

interface AddressState {
  addresses: Address[];
  currentAddress: Address | null;
  setCurrentAddress: (address: Address) => void;
  addAddress: (address: Address) => void;
  removeAddress: (id: string) => void;
}

export const useAddressStore = create<AddressState>((set) => ({
  addresses: [
    {
      id: '1',
      type: 'home',
      street: 'Av. Paulista, 1000',
      complement: 'Apto 123',
      city: 'São Paulo',
      state: 'SP',
    },
    {
      id: '2',
      type: 'work',
      street: 'Rua Augusta, 500',
      complement: 'Sala 45',
      city: 'São Paulo',
      state: 'SP',
    },
  ],
  currentAddress: null,
  setCurrentAddress: (address) => set({ currentAddress: address }),
  addAddress: (address) =>
    set((state) => ({ addresses: [...state.addresses, address] })),
  removeAddress: (id) =>
    set((state) => ({
      addresses: state.addresses.filter((address) => address.id !== id),
    })),
}));