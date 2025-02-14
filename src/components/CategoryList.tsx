import * as React from "react";
import { ScrollView, View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Category } from "../types";

interface CategoryListProps {
  categories: Category[];
  onSelectCategory: (category: Category) => void;
}

export default function CategoryList({ categories, onSelectCategory }: CategoryListProps) {
  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>
      <View style={styles.row}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.card}
            onPress={() => onSelectCategory(category)}
          >
            <Image
              source={{ uri: category.image }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.text}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: 8,
  },
  card: {
    marginRight: 16,
    borderRadius: 8,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 8,
  },
  text: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    textAlign: "center",
    paddingVertical: 4,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
  },
});
