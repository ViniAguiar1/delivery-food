import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function EmptyCart() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="cart-outline" size={64} color="#CCCCCC" />
      <Text style={styles.title}>Seu carrinho está vazio</Text>
      <Text style={styles.subtitle}>Adicione itens para fazer seu pedido</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
    marginTop: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#999',
    marginTop: 8,
    textAlign: 'center',
  },
});