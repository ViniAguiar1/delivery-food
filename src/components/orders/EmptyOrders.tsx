import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function EmptyOrders() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="receipt" size={64} color="#CCCCCC" />
      <Text style={styles.title}>Nenhum pedido encontrado</Text>
      <Text style={styles.subtitle}>Faça seu primeiro pedido e acompanhe aqui</Text>
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