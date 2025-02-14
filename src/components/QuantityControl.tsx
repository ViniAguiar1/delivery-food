import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface QuantityControlProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export function QuantityControl({ quantity, onIncrease, onDecrease }: QuantityControlProps) {
  return (
    <View style={styles.quantityControl}>
      <TouchableOpacity
        onPress={onDecrease}
        style={[styles.quantityButton, quantity <= 1 && styles.disabled]}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Text style={[styles.quantityButtonText, quantity <= 1 && styles.disabledText]}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantityText}>{quantity}</Text>
      <TouchableOpacity 
        onPress={onIncrease}
        style={styles.quantityButton}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Text style={styles.quantityButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#ea580c',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabled: {
    borderColor: '#ccc',
  },
  quantityButtonText: {
    color: '#ea580c',
    fontSize: 18,
    fontWeight: '600',
  },
  disabledText: {
    color: '#ccc',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 12,
  },
});