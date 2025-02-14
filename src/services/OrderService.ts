import { Order } from '../types/Order';

// Simulated orders data
const MOCK_ORDERS: Order[] = [
  {
    id: '1',
    items: [
      {
        id: 1,
        name: 'X-Burger Especial',
        price: 25.90,
        quantity: 2,
        image: 'https://picsum.photos/200',
      },
      {
        id: 2,
        name: 'Batata Frita Grande',
        price: 15.90,
        quantity: 1,
        image: 'https://picsum.photos/201',
      }
    ],
    total: 67.70,
    deliveryFee: 5.99,
    status: 'delivered',
    restaurantName: 'Burger House',
    restaurantImage: 'https://picsum.photos/100',
    orderDate: '2024-01-15T18:30:00',
    deliveryAddress: 'Rua das Flores, 123'
  },
  {
    id: '2',
    items: [
      {
        id: 3,
        name: 'Pizza Margherita',
        price: 45.90,
        quantity: 1,
        image: 'https://picsum.photos/202',
      }
    ],
    total: 45.90,
    deliveryFee: 7.99,
    status: 'preparing',
    restaurantName: 'Pizza Express',
    restaurantImage: 'https://picsum.photos/101',
    orderDate: '2024-01-16T19:45:00',
    deliveryAddress: 'Av. Principal, 456'
  }
];

export class OrderService {
  static getOrders(): Order[] {
    return MOCK_ORDERS;
  }

  static getOrderById(id: string): Order | undefined {
    return MOCK_ORDERS.find(order => order.id === id);
  }
}