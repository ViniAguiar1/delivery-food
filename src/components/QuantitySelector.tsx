import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const QuantitySelector = ({ quantity, onIncrease, onDecrease }: QuantitySelectorProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={onDecrease}
        style={styles.button}
      >
        <Ionicons name="remove" size={24} color="#4B5563" />
      </TouchableOpacity>
      
      <Text style={styles.quantity}>{quantity}</Text>
      
      <TouchableOpacity 
        onPress={onIncrease}
        style={styles.button}
      >
        <Ionicons name="add" size={24} color="#4B5563" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    borderRadius: 8,
    padding: 8,
  },
  button: {
    padding: 8,
  },
  quantity: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 16,
    color: '#1F2937',
  },
});