type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  selectedAccompaniments?: {
    free: any[];
    paid: any[];
  };
  note?: string;
  selectedSuggestedItems?: any[];
};


type CartSubscriber = (items: CartItem[]) => void;
function validateCartItem(item: CartItem): boolean {
  return item && item.id && item.name && item.price !== undefined && item.quantity > 0;
}

class CartServiceClass {
  private items: CartItem[] = [];
  private subscribers: CartSubscriber[] = [];

  getItems(): CartItem[] {
    return [...this.items];
  }

  getTotal(): number {
    return this.items.reduce((total, item) => {
      // Total do item base
      const itemBaseTotal = item.price * item.quantity;
  
      // Total de acompanhamentos pagos
      const accompanimentsTotal = item.selectedAccompaniments?.paid
        ? item.selectedAccompaniments.paid.reduce((acc, accItem) => acc + (accItem.price * item.quantity), 0)
        : 0;
  
      // Total de itens sugeridos
      const suggestedItemsTotal = item.selectedSuggestedItems
        ? item.selectedSuggestedItems.reduce((acc, suggestedItem) => acc + (suggestedItem.price * item.quantity), 0)
        : 0;
  
      // Soma todos os totais
      return total + itemBaseTotal + accompanimentsTotal + suggestedItemsTotal;
    }, 0);
  }
    
  addItem(item: CartItem): void {
    if (!validateCartItem(item)) {
      console.error('Tentativa de adicionar um item inválido:', item);
      return;
    }

    const existingItem = this.items.find(
      (i) =>
        i.id === item.id &&
        JSON.stringify(i.selectedAccompaniments) === JSON.stringify(item.selectedAccompaniments) &&
        i.note === item.note
    );

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      this.items.push(item);
    }

    this.notifySubscribers();
  }

  removeItem(itemId: string): void {
    const index = this.items.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      if (this.items[index].quantity > 1) {
        this.items[index].quantity -= 1;
      } else {
        this.items.splice(index, 1);
      }
      this.notifySubscribers();
    }
  }

  clearCart(): void {
    this.items = [];
    this.notifySubscribers();
  }

  subscribe(callback: CartSubscriber) {
    this.subscribers.push(callback);
    return {
      unsubscribe: () => {
        const index = this.subscribers.indexOf(callback);
        if (index !== -1) {
          this.subscribers.splice(index, 1);
        }
      }
    };
  }

  private notifySubscribers(): void {
    this.subscribers.forEach((callback) => callback(this.getItems()));
  }
}

export const CartService = new CartServiceClass();