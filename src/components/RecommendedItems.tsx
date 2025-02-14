import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Beverage, Dessert } from '../types';

interface RecommendedItemsProps {
  beverages?: Beverage[];
  desserts?: Dessert[];
  selectedBeverages: (string | number)[];
  selectedDesserts: (string | number)[];
  onToggleBeverage: (id: string | number) => void;
  onToggleDessert: (id: string | number) => void;
}

export function RecommendedItems({
  beverages,
  desserts,
  selectedBeverages,
  selectedDesserts,
  onToggleBeverage,
  onToggleDessert,
}: RecommendedItemsProps) {
  if (!beverages?.length && !desserts?.length) return null;

  const renderItem = (
    item: Beverage | Dessert,
    isSelected: boolean,
    onToggle: (id: string | number) => void
  ) => (
    <TouchableOpacity
      key={item.id || item.name}
      onPress={() => onToggle(item.id || item.name)}
      style={styles.recommendedItem}
    >
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemDescription} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.itemPrice}>R$ {item.price.toFixed(2)}</Text>
      </View>
      <Ionicons
        name={isSelected ? "checkbox" : "square-outline"}
        size={24}
        color="#6B7280"
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {beverages && beverages.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bebidas Recomendadas</Text>
          <View style={styles.itemsList}>
            {beverages.map((beverage) =>
              renderItem(
                beverage,
                selectedBeverages.includes(beverage.id || beverage.name),
                onToggleBeverage
              )
            )}
          </View>
        </View>
      )}

      {desserts && desserts.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobremesas Recomendadas</Text>
          <View style={styles.itemsList}>
            {desserts.map((dessert) =>
              renderItem(
                dessert,
                selectedDesserts.includes(dessert.id || dessert.name),
                onToggleDessert
              )
            )}
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
  itemsList: {
    gap: 12,
  },
  recommendedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 12,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  itemInfo: {
    flex: 1,
    marginRight: 8,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
  },
});