import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../theme/color';

export const OrderHistoryScreen = ({ navigation }) => {
  const orders = [
    {
      id: '#123456',
      date: '15/03/2024',
      status: 'Entregue',
      total: 'R$ 150,00',
      items: 3, // Número de itens
      restaurant: {
        name: 'Restaurante do João',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
      },
      deliveryTime: '30-45 min',
    },
    {
      id: '#123457',
      date: '10/03/2024',
      status: 'Em andamento',
      total: 'R$ 89,90',
      items: 1, // Número de itens
      restaurant: {
        name: 'Pizza Express',
        image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212',
      },
      deliveryTime: '20-30 min',
    },
  ];

  const getStatusColor = (status) => {
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

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'entregue':
        return 'check-circle';
      case 'em andamento':
        return 'clock-outline';
      case 'cancelado':
        return 'close-circle';
      default:
        return 'information';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meus Pedidos</Text>
        <Text style={styles.subtitle}>
          Acompanhe seus pedidos atuais e anteriores
        </Text>
      </View>

      <ScrollView style={styles.content}>
        {orders.map((order) => (
          <TouchableOpacity
            key={order.id}
            style={styles.orderCard}
            onPress={() => navigation.navigate('OrderDetails', { order })}
          >
            <View style={styles.restaurantInfo}>
              <Image
                source={{ uri: order.restaurant.image }}
                style={styles.restaurantImage}
              />
              <View style={styles.restaurantDetails}>
                <Text style={styles.restaurantName}>
                  {order.restaurant.name}
                </Text>
                <Text style={styles.orderDate}>{order.date}</Text>
              </View>
            </View>

            <View style={styles.orderInfo}>
              <View style={styles.statusContainer}>
                <MaterialCommunityIcons
                  name={getStatusIcon(order.status)}
                  size={20}
                  color={getStatusColor(order.status)}
                />
                <Text
                  style={[
                    styles.statusText,
                    { color: getStatusColor(order.status) },
                  ]}
                >
                  {order.status}
                </Text>
              </View>

              <View style={styles.orderDetails}>
                <View style={styles.detailItem}>
                  <MaterialCommunityIcons
                    name="food"
                    size={16}
                    color={colors.textSecondary}
                  />
                  <Text style={styles.detailText}>
                    {order.items} {order.items > 1 ? 'itens' : 'item'}
                  </Text>
                </View>

                <View style={styles.detailItem}>
                  <MaterialCommunityIcons
                    name="clock-outline"
                    size={16}
                    color={colors.textSecondary}
                  />
                  <Text style={styles.detailText}>{order.deliveryTime}</Text>
                </View>
              </View>

              <View style={styles.footer}>
                <Text style={styles.total}>{order.total}</Text>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={24}
                  color={colors.textSecondary}
                />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 24,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  orderCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    marginBottom: 16,
    padding: 16,
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  restaurantInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  restaurantImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  restaurantDetails: {
    marginLeft: 12,
    flex: 1,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  orderDate: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  orderInfo: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 16,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 6,
  },
  orderDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginLeft: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  total: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
  },
});

export default OrderHistoryScreen;
