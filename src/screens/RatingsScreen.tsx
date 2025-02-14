import React from 'react';
import { View, FlatList, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../theme/color';

const MOCK_RATINGS = [
  {
    id: '1',
    restaurantName: 'Restaurante Italiano',
    rating: 5,
    comment: 'Comida excelente! Entrega rápida e tudo muito bem embalado.',
    date: '15/03/2024',
    orderNumber: '#123456',
  },
  {
    id: '2',
    restaurantName: 'Sushi Express',
    rating: 4,
    comment: 'Sushi muito bom, mas demorou um pouco mais que o previsto.',
    date: '10/03/2024',
    orderNumber: '#123457',
  },
];

export function RatingsScreen() {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <MaterialCommunityIcons
        key={index}
        name={index < rating ? 'star' : 'star-outline'}
        size={16}
        color={colors.primary}
      />
    ));
  };

  const renderRating = ({ item }) => (
    <View style={styles.ratingCard}>
      <View style={styles.ratingHeader}>
        <Text style={styles.restaurantName}>{item.restaurantName}</Text>
        <Text style={styles.orderNumber}>{item.orderNumber}</Text>
      </View>
      <View style={styles.starsContainer}>{renderStars(item.rating)}</View>
      <Text style={styles.comment}>{item.comment}</Text>
      <Text style={styles.date}>{item.date}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={MOCK_RATINGS}
        renderItem={renderRating}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <MaterialCommunityIcons name="star-outline" size={64} color={colors.textSecondary} />
            <Text style={styles.emptyText}>Você ainda não fez nenhuma avaliação</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  ratingCard: {
    backgroundColor: colors.white,
    margin: 8,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  ratingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  orderNumber: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  comment: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 8,
    lineHeight: 20,
  },
  date: {
    fontSize: 12,
    color: colors.textSecondary,
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
});