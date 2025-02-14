import { useState, useEffect } from 'react';
import { CartService } from '../services/CartService';

export function useCart() {
  const [cartItems, setCartItems] = useState(CartService.getItems());
  const [subtotal, setSubtotal] = useState(0); // Subtotal do carrinho
  const [loading, setLoading] = useState(false);

  // Função para calcular o subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((sum, item) => {
      // Soma o preço base do item multiplicado pela quantidade
      let itemTotal = item.price * item.quantity;

      // Soma o preço dos acompanhamentos pagos
      if (item.selectedAccompaniments?.paid?.length) {
        itemTotal += item.selectedAccompaniments.paid.reduce(
          (acc, accItem) => acc + accItem.price,
          0
        ) * item.quantity;
      }

      // Soma o preço dos adicionais sugeridos
      if (item.selectedSuggestedItems?.length) {
        itemTotal += item.selectedSuggestedItems.reduce(
          (acc, addItem) => acc + addItem.price,
          0
        ) * item.quantity;
      }

      return sum + itemTotal;
    }, 0);
  };

  useEffect(() => {
    const subscription = CartService.subscribe((items) => {
      setCartItems(items);
    });

    return () => subscription.unsubscribe && subscription.unsubscribe();
  }, []);

  useEffect(() => {
    setSubtotal(calculateSubtotal());
  }, [cartItems]);

  return {
    cartItems,
    subtotal,
    loading,
    setLoading,
  };
}


// Validação para garantir que os itens têm os campos necessários
function validateCartItem(item) {
  return item && item.id && item.name && item.price !== undefined && item.quantity > 0;
}
