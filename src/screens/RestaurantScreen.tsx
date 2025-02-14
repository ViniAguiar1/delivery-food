import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CartService } from '../services/CartService';
import DishCard from '../components/DishCard';
import CartButton from '../components/CartButton';

export default function RestaurantScreen({ route, navigation }) {
  const { restaurant } = route.params;
  const [cartItemCount, setCartItemCount] = useState(0); // Estado para contar os itens no carrinho

  // Inscrever-se nas atualizações do carrinho
  useEffect(() => {
    // Função de callback que será chamada quando os itens do carrinho mudarem
    const cartSubscriber = (items) => {
      setCartItemCount(items.length); // Atualiza o número de itens no carrinho
    };

    // Inscreve-se nas alterações do carrinho
    const unsubscribe = CartService.subscribe(cartSubscriber);

    // Faz a contagem inicial de itens quando o componente for montado
    const initialCartItems = CartService.getItems();
    setCartItemCount(initialCartItems.length);

    // Desinscrever ao desmontar o componente para evitar vazamentos de memória
    return () => unsubscribe.unsubscribe();
  }, []); // Executa esse efeito apenas uma vez, quando o componente é montado

  // Função para adicionar itens ao carrinho
  const addToCart = (dish) => {
    CartService.addItem(dish); // Adiciona o item ao carrinho
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />

      <ScrollView>
        <View style={styles.header}>
          <Image source={{ uri: restaurant.image }} style={styles.coverImage} />
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>{restaurant.name}</Text>
          <Text style={styles.details}>⭐️ {restaurant.rating} • {restaurant.deliveryTime}</Text>
          <Text style={styles.delivery}>Delivery Fee: ${restaurant.deliveryFee}</Text>

          <Text style={styles.menuTitle}>Menu</Text>

          {restaurant.dishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} onAddToCart={addToCart} />
          ))}
        </View>
      </ScrollView>

      {/* Exibe o botão de carrinho imediatamente após a adição de itens */}
      <CartButton itemCount={cartItemCount} onPress={() => navigation.navigate('CartScreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'relative',
  },
  coverImage: {
    width: '100%',
    height: 250,
  },
  backButton: {
    position: 'absolute',
    top: 48,
    left: 26,
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  details: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  delivery: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
