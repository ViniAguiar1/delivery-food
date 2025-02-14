import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import OrderCard from '../components/orders/OrderCard';
import EmptyOrders from '../components/orders/EmptyOrders';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

export default function OrdersScreen() {
  const navigation = useNavigation();
  const [orders, setOrders] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const fetchOrders = async () => {
        try {
          const storedOrders = await AsyncStorage.getItem('orders');
          if (storedOrders) {
            const parsedOrders = JSON.parse(storedOrders);
  
            // Validação e preenchimento de valores padrão
            const validOrders = parsedOrders.map(order => ({
              ...order,
              total: typeof order.total === 'number' ? order.total : 0,
              deliveryFee: typeof order.deliveryFee === 'number' ? order.deliveryFee : 0,
              restaurantName: order.restaurantName || 'Restaurante Desconhecido',
              restaurantImage: order.restaurantImage || 'https://via.placeholder.com/150',
              items: order.items || [],
            }));
  
            setOrders(validOrders);
          }
        } catch (error) {
          console.error('Erro ao carregar pedidos:', error);
        }
      };
  
      fetchOrders();
    }, [])
  );  
  
  const handleOrderPress = (orderId) => {
    const order = orders.find((o) => o.id === orderId); // Encontre o pedido correspondente
    if (order) {
      navigation.navigate('OrderDetails', { order }); // Navegue para a tela de detalhes com os dados do pedido
    }
  };  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Meus Pedidos</Text>

      {orders.length === 0 ? (
        <EmptyOrders />
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <OrderCard
              order={item}
              onPress={() => handleOrderPress(item.id)}
            />
          )}
          contentContainerStyle={styles.listContent}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  listContent: {
    padding: 16,
  },
});
