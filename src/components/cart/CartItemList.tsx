import React from 'react';
import { View, StyleSheet } from 'react-native';
import CartItem from './CartItem';
import { CartService } from '../../services/CartService';

interface CartItemListProps {
  items: any[];
}

export default function CartItemList({ items }: { items: CartItem[] }) {
  const handleIncrease = (id: string) => {
    const existingItem = items.find((item) => item.id === id);
    if (existingItem) {
      CartService.addItem({ ...existingItem, quantity: 1 });
    }
  };

  const handleDecrease = (id: string) => {
    CartService.removeItem(id);
  };

  const handleRemove = (id: string) => {
    CartService.removeItem(id); // Remove o item totalmente
  };

  return (
    <View style={styles.container}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
          onRemove={handleRemove}
        />
      ))}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
});