import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Restaurant } from '../../types';

interface RestaurantGridProps {
  restaurants: Restaurant[];
  onPress: (restaurant: Restaurant) => void;
}

export function RestaurantGrid({ restaurants, onPress }: RestaurantGridProps) {
  return (
    <View style={styles.container}>
      {restaurants.map((restaurant) => (
        <TouchableOpacity
          key={restaurant.id}
          style={styles.card}
          onPress={() => onPress(restaurant)}
        >
          <Image source={{ uri: restaurant.image }} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.name} numberOfLines={1}>{restaurant.name}</Text>
            <View style={styles.details}>
              <Text style={styles.rating}>⭐ {restaurant.rating}</Text>
              <Text style={styles.dot}>•</Text>
              <Text style={styles.time}>{restaurant.deliveryTime}</Text>
            </View>
            <Text style={styles.categories} numberOfLines={1}>
              {restaurant.categories.join(' • ')}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // Two columns with padding

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  card: {
    width: cardWidth,
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: cardWidth * 0.8,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  info: {
    padding: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  rating: {
    fontSize: 12,
    color: '#666',
  },
  dot: {
    marginHorizontal: 4,
    color: '#666',
  },
  time: {
    fontSize: 12,
    color: '#666',
  },
  categories: {
    fontSize: 12,
    color: '#666',
  },
});