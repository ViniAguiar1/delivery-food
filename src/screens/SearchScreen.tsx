import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from '../components/search/SearchBar';
import { CategoryList } from '../components/search/CategoryList';
import { RestaurantList } from '../components/search/RestaurantList';
import { SearchResults } from '../components/search/SearchResults';
import { restaurants } from '../data/restaurants';
import { categories } from '../data/categories';

export function SearchScreen() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      restaurant.categories.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory
      ? restaurant.categories.includes(selectedCategory)
      : true;
    return matchesSearch && matchesCategory;
  });

  const handleRestaurantPress = (restaurant) => {
    navigation.navigate('Restaurant', { restaurant });
  };

  const handleCategoryPress = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  const topRated = restaurants.filter(r => r.rating >= 4.8);
  const trending = [...restaurants].sort(() => Math.random() - 0.5).slice(0, 3);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.content}>
          <SearchBar
            value={searchQuery}
            onChangeText={setSearchQuery}
          />

          <View style={styles.categoryContainer}>
            <ScrollView horizontal={false} style={styles.categoryScroll}>
              <CategoryList
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={handleCategoryPress}
              />
            </ScrollView>
          </View>

          {searchQuery ? (
            <SearchResults
              restaurants={filteredRestaurants}
              onPress={handleRestaurantPress}
            />
          ) : (
            <View>
              <RestaurantList
                title="Mais bem avaliados"
                restaurants={topRated}
                onPress={handleRestaurantPress}
              />
              <RestaurantList
                title="Trending"
                restaurants={trending}
                onPress={handleRestaurantPress}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    paddingBottom: 16,
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
  },
  categoryContainer: {
    maxHeight: 200, // Limita a altura das categorias
    marginVertical: 10, // Margem entre categorias e outros elementos
  },
  categoryScroll: {
    flexGrow: 0, // Permite rolagem mesmo quando há espaço
  },
});
