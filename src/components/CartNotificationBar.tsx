import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CartService } from '../services/CartService';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export function CartNotificationBar() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  useEffect(() => {
    const items = CartService.getItems();
    setCartItems(items);
    setTotalPrice(CartService.getTotal());

    const subscription = CartService.subscribe((items) => {
      setCartItems(items);
      setTotalPrice(CartService.getTotal());
    });

    return () => subscription.unsubscribe();
  }, []);

  const handlePress = () => {
    navigation.navigate('CartScreen');
  };

  if (cartItems.length === 0) return null;

  return (
    <Animatable.View
      animation="slideInUp"
      duration={500}
      style={[
        styles.container,
        { bottom: insets.bottom + 60 }
      ]}
    >
      <TouchableOpacity
        style={styles.content}
        onPress={handlePress}
        activeOpacity={0.8}
      >
        <View style={styles.leftContent}>
          <Text style={styles.itemCount}>
            {cartItems.reduce((total, item) => total + item.quantity, 0)} itens
          </Text>
          <Text style={styles.viewCart}>Ver sacola</Text>
        </View>
        <Text style={styles.price}>
          R$ {totalPrice.toFixed(2)}
        </Text>
      </TouchableOpacity>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 16,
    right: 16,
    backgroundColor: '#fb923c',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 999,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemCount: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 8,
  },
  viewCart: {
    color: 'white',
  },
  price: {
    color: 'white',
    fontWeight: 'bold',
  },
});