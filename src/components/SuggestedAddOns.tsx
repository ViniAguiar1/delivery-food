import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Dish } from '../types';

interface SuggestedAddOnsProps {
  suggestedItems: Dish[];
  selectedItems: number[];
  onToggleItem: (id: number) => void;
}

export function SuggestedAddOns({ suggestedItems, selectedItems, onToggleItem }: SuggestedAddOnsProps) {
  if (!suggestedItems?.length) return null;

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Adicione ao pedido</Text>
      <View style={styles.optionsList}>
        {suggestedItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => onToggleItem(item.id)}
            style={styles.suggestedItem}
          >
            <Image source={{ uri: item.image }} style={styles.suggestedImage} />
            <View style={styles.suggestedInfo}>
              <Text style={styles.suggestedName}>{item.name}</Text>
              <Text style={styles.suggestedPrice}>R$ {item.price.toFixed(2)}</Text>
            </View>
            <Ionicons 
              name={selectedItems.includes(item.id) ? "checkbox" : "square-outline"} 
              size={24} 
              color="#6B7280" 
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
  optionsList: {
    gap: 8,
  },
  suggestedItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 12,
    marginBottom: 8,
  },
  suggestedImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 12,
  },
  suggestedInfo: {
    flex: 1,
  },
  suggestedName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
    marginBottom: 4,
  },
  suggestedPrice: {
    fontSize: 14,
    color: '#6B7280',
  },
});