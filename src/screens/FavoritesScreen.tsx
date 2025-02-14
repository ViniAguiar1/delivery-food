import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../theme/color';
import { Ionicons } from '@expo/vector-icons';

export function FavoritesScreen({ navigation }) {
  const [favorites, setFavorites] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Carregar os favoritos do AsyncStorage
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem('favorites');
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error('Erro ao carregar favoritos', error);
      }
    };

    loadFavorites();
  }, []);

  // Função para limpar os favoritos
  const clearFavorites = async () => {
    try {
      await AsyncStorage.removeItem('favorites');
      setFavorites([]); // Limpa o estado local também
    } catch (error) {
      console.error('Erro ao limpar favoritos', error);
    }
  };

  // Função para filtrar restaurantes com base na busca
  const filteredFavorites = favorites.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Função para alternar entre adicionar e remover dos favoritos
  const toggleFavorite = async (restaurant) => {
    try {
      let updatedFavorites;
      const isFavorite = favorites.some((fav) => fav.id === restaurant.id);

      if (isFavorite) {
        // Remover do favoritos
        updatedFavorites = favorites.filter((fav) => fav.id !== restaurant.id);
      } else {
        // Adicionar aos favoritos
        updatedFavorites = [...favorites, restaurant];
      }

      // Atualizar no AsyncStorage e no estado local
      await AsyncStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    } catch (error) {
      console.error('Erro ao atualizar favoritos', error);
    }
  };

  const renderRestaurant = ({ item }) => (
    <TouchableOpacity
      style={styles.restaurantCard}
      onPress={() => handleRestaurantPress(item)} // Navega para a tela de detalhes
    >
      <Image source={{ uri: item.image }} style={styles.restaurantImage} />
      <View style={styles.restaurantInfo}>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <View style={styles.ratingContainer}>
          <MaterialCommunityIcons name="star" size={16} color={colors.primary} />
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
        <Text style={styles.cuisine}>{item.cuisine}</Text>
        <Text style={styles.deliveryTime}>{item.deliveryTime}</Text>
      </View>
      {/* Botão de favoritar/desfavoritar */}
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => toggleFavorite(item)} // Altera o estado de favorito
      >
        <Ionicons
          name={favorites.some((fav) => fav.id === item.id) ? "heart" : "heart-outline"}
          size={24}
          color={favorites.some((fav) => fav.id === item.id) ? "#ff6600" : "#666"}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  // Função de navegação para a tela de detalhes do restaurante
  const handleRestaurantPress = (restaurant) => {
    navigation.navigate('Restaurant', { restaurant });
  };

  return (
    <View style={styles.container}>
      {/* Barra de Pesquisa */}
      <SearchBar value={searchQuery} onChangeText={setSearchQuery} />

      {/* Botão para limpar os favoritos */}
      <TouchableOpacity style={styles.clearButton} onPress={clearFavorites}>
        <Text style={styles.clearButtonText}>Limpar Favoritos</Text>
      </TouchableOpacity>

      <FlatList
        data={filteredFavorites}
        renderItem={renderRestaurant}
        keyExtractor={(item) => item.id || item.name} // Usando 'name' como fallback, caso 'id' não esteja presente
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <MaterialCommunityIcons name="heart-outline" size={64} color={colors.textSecondary} />
            <Text style={styles.emptyText}>Você ainda não tem restaurantes favoritos</Text>
          </View>
        }
      />
    </View>
  );
}

// Componente de Barra de Pesquisa
function SearchBar({ value, onChangeText }) {
  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={20} color="#9ca3af" style={styles.searchIcon} />
      <TextInput
        style={styles.searchInput}
        placeholder="Busque por pratos ou restaurantes"
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#9ca3af"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#1f2937',
  },
  restaurantCard: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginVertical: 8,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  restaurantImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  restaurantInfo: {
    flex: 1,
    padding: 12,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  rating: {
    marginLeft: 4,
    color: colors.text,
  },
  cuisine: {
    color: colors.textSecondary,
    marginTop: 4,
  },
  deliveryTime: {
    color: colors.textSecondary,
    marginTop: 4,
  },
  favoriteButton: {
    padding: 12,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  emptyText: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 16,
  },
  clearButton: {
    backgroundColor: colors.error,
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  clearButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

