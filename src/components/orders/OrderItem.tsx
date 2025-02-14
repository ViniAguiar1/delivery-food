import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface OrderItemProps {
  name: string;
  price: string;
  notes?: string[];
}

export function OrderItem({ name, price, notes = [] }: OrderItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.mainInfo}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
      {notes.map((note, index) => (
        <Text key={index} style={styles.note}>{note}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  mainInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    color: '#333',
  },
  price: {
    fontSize: 16,
    fontWeight: '500',
  },
  note: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});