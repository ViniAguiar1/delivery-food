import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { format } from 'date-fns'; // Certifique-se de ter a biblioteca instalada

interface Order {
  id: string;
  restaurantImage: string;
  restaurantName: string;
  orderDate: string; // String ISO válida
  items: { name: string; quantity: number }[];
  total: number; // Total do pedido
  deliveryFee: number; // Taxa de entrega
  status: 'delivered' | 'preparing' | 'delivering' | 'cancelled' | 'pending';
}

interface OrderCardProps {
  order: Order;
  onPress: (orderId: string) => void;
}

const getStatusColor = (status: Order['status']) => {
  switch (status) {
    case 'delivered':
      return '#2ECC71';
    case 'preparing':
      return '#F1C40F';
    case 'delivering':
      return '#3498DB';
    case 'cancelled':
      return '#E74C3C';
    default:
      return '#95A5A6';
  }
};

const getStatusText = (status: Order['status']) => {
  switch (status) {
    case 'delivered':
      return 'Entregue';
    case 'preparing':
      return 'Preparando';
    case 'delivering':
      return 'A caminho';
    case 'cancelled':
      return 'Cancelado';
    default:
      return 'Pendente';
  }
};
export default function OrderCard({ order, onPress }: OrderCardProps) {
  if (!order) {
    return null;
  }

  // Use diretamente o total salvo no pedido, sem recalcular
  const total = typeof order.total === 'number' ? order.total : 0;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(order.id)}
    >
      <View style={styles.header}>
        <Image
          source={{ uri: order.restaurantImage || 'https://via.placeholder.com/150' }}
          style={styles.restaurantImage}
        />
        <View style={styles.headerInfo}>
          <Text style={styles.restaurantName}>{order.restaurantName || 'Restaurante Desconhecido'}</Text>
          <Text style={styles.orderDate}>
            {order.orderDate
              ? format(new Date(order.orderDate), 'dd/MM/yyyy HH:mm')
              : 'Data inválida'}
          </Text>
        </View>
        <MaterialCommunityIcons name="chevron-right" size={24} color="#666" />
      </View>

      <View style={styles.divider} />

      <View style={styles.content}>
        <Text style={styles.itemsList}>
          {order.items.map(item => `${item.quantity}x ${item.name}`).join(', ')}
        </Text>
      </View>

      <View style={styles.footer}>
        <View
          style={[
            styles.statusBadge,
            { backgroundColor: getStatusColor(order.status || 'pending') },
          ]}
        >
          <Text style={styles.statusText}>{getStatusText(order.status)}</Text>
        </View>
        <Text style={styles.total}>R$ {total.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  headerInfo: {
    flex: 1,
    marginLeft: 12,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  orderDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#EEEEEE',
    marginVertical: 12,
  },
  content: {
    marginBottom: 12,
  },
  itemsList: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
  total: {
    fontSize: 16,
    fontWeight: '600',
    color: '#E31837',
  },
});
