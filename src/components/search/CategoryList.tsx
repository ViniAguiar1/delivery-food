import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Category } from '../../types';

interface CategoryListProps {
  categories: Category[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export function CategoryList({ categories, selectedCategory, onSelectCategory }: CategoryListProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={[
            styles.categoryItem,
            selectedCategory === category.name && styles.selectedCategory,
          ]}
          onPress={() => onSelectCategory(category.name)}
        >
          <Image
            source={{ uri: category.image }}
            style={styles.categoryImage}
          />
          <Text
            style={[
              styles.categoryName,
              selectedCategory === category.name && styles.selectedCategoryText,
            ]}
          >
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  contentContainer: {
    paddingHorizontal: 16,
  },
  categoryItem: {
    marginRight: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 2,
  },
  selectedCategory: {
    backgroundColor: '#3b82f6',
  },
  categoryImage: {
    width: 64,
    height: 64,
    borderRadius: 8,
  },
  categoryName: {
    marginTop: 4,
    fontSize: 12,
    color: '#1f2937',
    fontWeight: '500',
  },
  selectedCategoryText: {
    color: 'white',
  },
});