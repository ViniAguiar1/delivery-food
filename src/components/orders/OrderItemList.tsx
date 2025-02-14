import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { OrderItem } from '../../types/Order';

interface OrderItemListProps {
  items: OrderItem[];
}

export function OrderItemList({ items }: OrderItemListProps) {
  return (
    <View>
      <Text style={styles.title}>Itens do pedido</Text>
      {items.map((item) => (
        <View key={item.id} style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.itemInfo}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemQuantity}>{item.quantity}x</Text>
          </View>
          <Text style={styles.itemPrice}>
            R$ {(item.price * item.quantity).toFixed(2)}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 12,
  },
  itemName: {
    fontSize: 16,
    color: '#1A1A1A',
  },
  itemQuantity: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1A1A',
  },
});