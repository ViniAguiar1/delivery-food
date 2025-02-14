import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { QuantityControl } from './QuantityControl';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CartService } from '../services/CartService';

interface DishCardProps {
  dish: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  };
  onAddToCart: (quantity: number) => void;
}

export default function DishCard({ dish, onAddToCart }: DishCardProps) {
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);

  const handlePress = useCallback(() => {
    try {
      navigation.navigate('DishDetail', { dish });
    } catch (error) {
      console.error('Erro ao navegar para detalhes:', error);
    }
  }, [navigation, dish]);

  const handleAddToCart = () => {
    CartService.addItem({
      id: dish.id.toString(),
      name: dish.name,
      price: dish.price,
      quantity, // Corrigido para usar o estado `quantity`
      image: dish.image,
    });
  };

  const increaseQuantity = useCallback(() => {
    setQuantity((prev) => prev + 1);
  }, []);

  const decreaseQuantity = useCallback(() => {
    setQuantity((prev) => Math.max(1, prev - 1));
  }, []);

  return (
    <Pressable onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.info}>
            <Text style={styles.name}>{dish.name}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <Text style={styles.price}>R$ {(dish.price * quantity).toFixed(2)}</Text>
          </View>
          <Image
            source={{ uri: dish.image }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.controls}>
          <QuantityControl
            quantity={quantity}
            onIncrease={increaseQuantity}
            onDecrease={decreaseQuantity}
          />
          <Pressable
            style={({ pressed }) => [
              styles.addButton,
              pressed && styles.addButtonPressed,
            ]}
            onPress={handleAddToCart}
          >
            <MaterialIcons name="add-shopping-cart" size={20} color="black" />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  info: {
    flex: 1,
    marginRight: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  addButton: {
    backgroundColor: '#FFF',
    borderWidth: 2,
    borderColor: '#f97316',
    color: '#000',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    minWidth: 120,
  },
  addButtonPressed: {
    backgroundColor: '#9a3412',
    borderWidth: 2,
    borderColor: '#ea580c',
    color: '#FFF'
  },
  addButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
});