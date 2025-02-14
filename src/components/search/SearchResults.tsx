import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Restaurant } from '../../types';

interface SearchResultsProps {
  restaurants: Restaurant[];
  onPress: (restaurant: Restaurant) => void;
}

export function SearchResults({ restaurants, onPress }: SearchResultsProps) {
  if (restaurants.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Nenhum resultado encontrado</Text>
      </View>
    );
  }

  return (
    <View>
      <Text style={styles.title}>Resultados</Text>
      {restaurants.map((restaurant) => (
        <TouchableOpacity
          key={restaurant.id}
          style={styles.restaurantCard}
          onPress={() => onPress(restaurant)}
        >
          <View style={styles.restaurantInfo}>
            <View style={styles.textContainer}>
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
            <Image
              source={{ uri: restaurant.image }}
              style={styles.restaurantImage}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    padding: 32,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#6b7280',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1f2937',
  },
  restaurantCard: {
    marginBottom: 16,
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
  },
  restaurantInfo: {
    padding: 12,
    flexDirection: 'row',
  },
  textContainer: {
    flex: 1,
    marginRight: 12,
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
  restaurantImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
});