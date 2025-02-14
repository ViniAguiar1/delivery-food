import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CartTotalProps {
  subtotal: number;
  deliveryFee: number;
  total: number;
  discount?: number; // Novo campo para desconto
}

export function CartTotal({ subtotal, deliveryFee, total, discount = 0 }: CartTotalProps) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Subtotal</Text>
        <Text style={styles.value}>R$ {subtotal.toFixed(2)}</Text>
      </View>

      {discount > 0 && ( // Exibir desconto apenas se houver
        <View style={styles.row}>
          <Text style={styles.label}>Desconto</Text>
          <Text style={styles.value}>- R$ {discount.toFixed(2)}</Text>
        </View>
      )}

      <View style={styles.row}>
        <Text style={styles.label}>Taxa de entrega</Text>
        <Text style={styles.value}>R$ {deliveryFee.toFixed(2)}</Text>
      </View>

      <View style={[styles.row, styles.totalRow]}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>R$ {total.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#666',
  },
  value: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  totalRow: {
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E31837',
  },
});