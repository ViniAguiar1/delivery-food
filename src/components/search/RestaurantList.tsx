import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Restaurant } from '../../types';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface RestaurantListProps {
  title: string;
  restaurants: Restaurant[];
  onPress: (restaurant: Restaurant) => void;
}

export function RestaurantList({ title, restaurants, onPress }: RestaurantListProps) {
  const [favorites, setFavorites] = useState<Restaurant[]>([]);

  useEffect(() => {
    const loadFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites');
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    };
    loadFavorites();
  }, []);

  const isFavorite = (restaurantId: string) => {
    return favorites.some((fav) => fav.id === restaurantId);
  };

  const addToFavorites = async (restaurant) => {
    try {
      const storedFavorites = await AsyncStorage.getItem('favorites');
      let updatedFavorites = storedFavorites ? JSON.parse(storedFavorites) : [];

      if (!updatedFavorites.some((fav) => fav.id === restaurant.id)) {
        updatedFavorites.push(restaurant);
        await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setFavorites(updatedFavorites);
      } else {
        updatedFavorites = updatedFavorites.filter((fav) => fav.id !== restaurant.id);
        await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setFavorites(updatedFavorites);
      }
    } catch (error) {
      console.error('Erro ao adicionar/remover aos favoritos:', error);
    }
  };

  // Remove duplicados
  const uniqueRestaurants = Array.from(
    new Map(restaurants.map((r) => [r.id, r])).values()
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {uniqueRestaurants.map((restaurant) => (
          <TouchableOpacity
            key={restaurant.id} // Chave única usando o id
            style={styles.restaurantCard}
            onPress={() => onPress(restaurant)}
          >
            <Image
              source={{ uri: restaurant.image }}
              style={styles.restaurantImage}
            />
            <View style={styles.restaurantInfo}>
              <Text style={styles.restaurantName}>{restaurant.name}</Text>
              <View style={styles.ratingContainer}>
                <Text style={styles.ratingIcon}>⭐</Text>
                <Text style={styles.ratingText}>{restaurant.rating}</Text>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.deliveryTime}>{restaurant.deliveryTime}</Text>
              </View>
              <Text style={styles.categories}>
                {restaurant.categories.join(' • ')}
              </Text>
            </View>

            <TouchableOpacity
              style={[styles.favoriteButton, isFavorite(restaurant.id) && styles.favoriteButtonActive]}
              onPress={() => addToFavorites(restaurant)}
            >
              <Ionicons
                name={isFavorite(restaurant.id) ? "heart" : "heart-outline"}
                size={24}
                color={isFavorite(restaurant.id) ? "#ff6600" : "#666"}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#1f2937',
  },
  restaurantCard: {
    width: 280,
    marginRight: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
    position: 'relative',
  },
  restaurantImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  restaurantInfo: {
    padding: 12,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  ratingIcon: {
    marginRight: 4,
  },
  ratingText: {
    fontSize: 14,
    color: '#4b5563',
  },
  dot: {
    marginHorizontal: 4,
    color: '#9ca3af',
  },
  deliveryTime: {
    fontSize: 14,
    color: '#4b5563',
  },
  categories: {
    marginTop: 4,
    fontSize: 14,
    color: '#6b7280',
  },
  favoriteButton: {
    position: 'absolute',
    bottom: 12,
    right: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 20,
    padding: 6,
  },
  favoriteButtonActive: {
    backgroundColor: 'rgba(255, 102, 0, 0.2)', // Cor de fundo quando favoritado
  },
});
