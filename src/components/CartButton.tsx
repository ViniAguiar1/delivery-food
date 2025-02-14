import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CartButtonProps {
  itemCount: number;
  onPress: () => void;
}

export default function CartButton({ itemCount, onPress }: CartButtonProps) {
  if (itemCount === 0) return null;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Ver Carrinho ({itemCount})</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: '#fb923c',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});