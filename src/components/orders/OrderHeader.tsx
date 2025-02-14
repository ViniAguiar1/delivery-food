import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../theme/color';

interface OrderHeaderProps {
  restaurantName: string;
  orderNumber: string;
  orderDate: string;
  status: string;
}

const OrderHeader = ({ restaurantName, orderNumber, orderDate, status }: OrderHeaderProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'entregue':
        return colors.success;
      case 'em andamento':
        return colors.primary;
      case 'cancelado':
        return colors.error;
      default:
        return colors.textSecondary;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.restaurantName}>{restaurantName}</Text>
        <View style={[styles.statusBadge, { backgroundColor: `${getStatusColor(status)}20` }]}>
          <MaterialCommunityIcons
            name={status.toLowerCase() === 'entregue' ? 'check-circle' : 'clock-outline'}
            size={16}
            color={getStatusColor(status)}
          />
          <Text style={[styles.statusText, { color: getStatusColor(status) }]}>
            {status}
          </Text>
        </View>
      </View>

      <View style={styles.orderInfo}>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Número do pedido</Text>
          <Text style={styles.value}>#{orderNumber}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.label}>Data do pedido</Text>
          <Text style={styles.value}>{orderDate}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 4,
  },
  orderInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  value: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
  },
});

export default OrderHeader;