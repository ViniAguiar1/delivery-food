import React from 'react';
import { View, StyleSheet } from 'react-native';
import { restaurants } from '../data/restaurants';
import { RestaurantGrid } from '../components/home/RestaurantGrid';

export function CategoryScreen({ route, navigation }) {
  const { category } = route.params;
  
  const filteredRestaurants = restaurants.filter(restaurant =>
    restaurant.categories.includes(category)
  );

  const handleRestaurantPress = (restaurant) => {
    navigation.navigate('Restaurant', { restaurant });
  };

  return (
    <View style={styles.container}>
      <RestaurantGrid 
        restaurants={filteredRestaurants}
        onPress={handleRestaurantPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 16,
  },
});