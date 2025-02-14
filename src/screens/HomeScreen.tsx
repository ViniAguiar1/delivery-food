import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Modal,
  Animated,
  Easing,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { categories } from '../data/categories';
import { restaurants } from '../data/restaurants';
import { CategoryList } from '../components/search/CategoryList';
import PromotionalBanner from '../components/PromotionalBanner';
import { RestaurantList } from '../components/search/RestaurantList';
import { SearchScreen } from './SearchScreen';
import { useNavigation } from '@react-navigation/native';
import { AddressHeader } from '../components/address/AddressHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const translateY = new Animated.Value(500);
  const navigation = useNavigation();
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites');
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    };
    loadFavorites();
  }, []);

  const showModal = () => {
    setSearchVisible(true);
    Animated.spring(translateY, {
      toValue: 0,
      friction: 6,
      tension: 50,
      useNativeDriver: true,
    }).start();
  };

  const hideModal = () => {
    Animated.timing(translateY, {
      toValue: 300,
      duration: 400,
      easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      useNativeDriver: true,
    }).start(() => setSearchVisible(false));
  };

  const handleRestaurantPress = (restaurant) => {
    navigation.navigate('Restaurant', { restaurant });
    hideModal();
  };

  const toggleFavorite = async (restaurantId) => {
    const updatedFavorites = favorites.includes(restaurantId)
      ? favorites.filter((id) => id !== restaurantId)
      : [...favorites, restaurantId];

    setFavorites(updatedFavorites);
    await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  const handleCategoryPress = (category) => {
    if (category !== selectedCategory) {
      setSelectedCategory(category);
      navigation.navigate('Category', { category });
    } else {
      setSelectedCategory(null);
    }
  };

  const filteredRestaurants = restaurants.filter((r) =>
    selectedCategory ? r.categories.includes(selectedCategory) : true
  );

  const topRated = restaurants.filter((r) => r.rating >= 4.8).slice(0, 5);
  const recentOrders = [...restaurants].sort(() => Math.random() - 0.5).slice(0, 5);
  const popular = [...restaurants].sort((a, b) => b.rating - a.rating).slice(0, 5);
  const freeDelivery = restaurants.filter((r) => r.deliveryFee === 0).slice(0, 5);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="dark-content" translucent={false} />
      <View style={styles.header}>
        <AddressHeader />
        <TouchableOpacity style={styles.searchButton} onPress={showModal}>
          <Ionicons name="search" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <PromotionalBanner />

        <View style={styles.categoriesContainer}>
          <Text style={styles.sectionTitle}>Categorias</Text>
          <CategoryList
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryPress}
          />
        </View>

        <View style={styles.section}>
          <RestaurantList
            title="Mais Bem Avaliados ⭐"
            restaurants={filteredRestaurants}
            onPress={handleRestaurantPress}
            renderFavoriteButton={(restaurantId) => (
              <TouchableOpacity onPress={() => toggleFavorite(restaurantId)}>
                <Ionicons
                  name={favorites.includes(restaurantId) ? 'heart' : 'heart-outline'}
                  size={24}
                  color={favorites.includes(restaurantId) ? 'red' : '#666'}
                />
              </TouchableOpacity>
            )}
          />
        </View>

        <View style={styles.section}>
          <RestaurantList
            title="Pedidos Recentes"
            restaurants={recentOrders}
            onPress={handleRestaurantPress}
          />
        </View>

        <View style={styles.section}>
          <RestaurantList
            title="Populares na sua Região 🔥"
            restaurants={popular}
            onPress={handleRestaurantPress}
          />
        </View>

        {freeDelivery.length > 0 && (
          <View style={styles.section}>
            <RestaurantList
              title="Entrega Grátis 🚀"
              restaurants={freeDelivery}
              onPress={handleRestaurantPress}
            />
          </View>
        )}
      </ScrollView>

      <Modal transparent visible={isSearchVisible} animationType="fade">
        <View style={styles.modalBackground}>
          <Animated.View
            style={[
              styles.modalContainer,
              { transform: [{ translateY }] },
            ]}
          >
            <SearchScreen selectedCategory={selectedCategory} onRestaurantPress={handleRestaurantPress} />
            <TouchableOpacity style={styles.closeButton} onPress={hideModal}>
              <Ionicons name="close" size={24} color="#666" />
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#f5f5f5',
    // borderBottomWidth: 1,
    // borderBottomColor: '#e5e7eb',
  },
  searchButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoriesContainer: {
    paddingVertical: 16,
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    paddingHorizontal: 16,
    color: '#1f2937',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    height: '150%',
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    overflow: 'hidden',
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 10,
  },
});
