import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface AccompanimentItemProps {
  name: string;
  price?: number;
  isSelected: boolean;
  onToggle: () => void;
  image?: string; // Nova propriedade para a imagem
}

export const AccompanimentItem = ({ name, price, isSelected, onToggle, image }: AccompanimentItemProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isSelected && styles.selectedContainer
      ]}
      onPress={onToggle}
    >
      <View style={styles.content}>
        {/* Exibir imagem, se fornecida */}
        {image && (
          <Image 
            source={{ uri: image }} 
            style={styles.image} 
          />
        )}
        <Text style={styles.name}>{name}</Text>
      </View>
      {price !== undefined && price > 0 && (
        <Text style={styles.price}>+ R$ {price.toFixed(2)}</Text>
      )}
      {isSelected && (
        <Ionicons name="checkmark-circle" size={24} color="#22C55E" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 8,
  },
  selectedContainer: {
    borderColor: '#22C55E',
    backgroundColor: '#F0FDF4',
  },
  content: {
    flexDirection: 'row', // Alinhar imagem e texto lado a lado
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 30, // Tamanho da imagem
    height: 30,
    borderRadius: 4,
    marginRight: 8, // Espaçamento entre imagem e texto
  },
  name: {
    fontSize: 16,
    color: '#1F2937',
  },
  price: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
});
