import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Order } from '../../types/Order';

interface OrderStatusProps {
  status: Order['status'];
}

const getStatusConfig = (status: Order['status']) => {
  switch (status) {
    case 'delivered':
      return {
        color: '#2ECC71',
        icon: 'check-circle',
        text: 'Pedido entregue',
      };
    case 'preparing':
      return {
        color: '#F1C40F',
        icon: 'food',
        text: 'Preparando seu pedido',
      };
    case 'delivering':
      return {
        color: '#3498DB',
        icon: 'truck-delivery',
        text: 'Pedido a caminho',
      };
    case 'cancelled':
      return {
        color: '#E74C3C',
        icon: 'close-circle',
        text: 'Pedido cancelado',
      };
    default:
      return {
        color: '#95A5A6',
        icon: 'clock-outline',
        text: 'Aguardando confirmação',
      };
  }
};

export function OrderStatus({ status }: OrderStatusProps) {
  const config = getStatusConfig(status);

  return (
    <View style={[styles.container, { backgroundColor: config.color }]}>
      <MaterialCommunityIcons name={config.icon} size={24} color="white" />
      <Text style={styles.text}>{config.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});