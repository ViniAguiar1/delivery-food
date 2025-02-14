export interface OrderItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
  }
  
  export interface Order {
    id: string;
    items: OrderItem[];
    total: number;
    deliveryFee: number;
    status: 'pending' | 'preparing' | 'delivering' | 'delivered' | 'cancelled';
    restaurantName: string;
    restaurantImage: string;
    orderDate: string;
    deliveryAddress: string;
  }