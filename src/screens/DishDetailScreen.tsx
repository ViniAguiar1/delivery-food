import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import * as Animatable from 'react-native-animatable';
import { CartService } from '../services/CartService';
import { AccompanimentItem } from '../components/AccompanimentItem';
import { QuantitySelector } from '../components/QuantitySelector';
import { SuggestedAddOns } from '../components/SuggestedAddOns';
import { Dish } from '../types';

export default function DishDetailScreen({ route, navigation }) {
  const { dish } = route.params;
  const [quantity, setQuantity] = useState(1);
  const [showTooltip, setShowTooltip] = useState(false);
  const [selectedFreeAccompaniments, setSelectedFreeAccompaniments] = useState<number[]>([]);
  const [selectedPaidAccompaniments, setSelectedPaidAccompaniments] = useState<number[]>([]);
  const [note, setNote] = useState('');
  const [selectedSuggestedItems, setSelectedSuggestedItems] = useState<number[]>([]);

  const toggleFreeAccompaniment = (id: number) => {
    setSelectedFreeAccompaniments((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const togglePaidAccompaniment = (id: number) => {
    setSelectedPaidAccompaniments((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleSuggestedItem = (id: number) => {
    setSelectedSuggestedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    const accompanimentTotal = (dish.accompaniments?.paid || [])
      .filter((item) => selectedPaidAccompaniments.includes(item.id))
      .reduce((sum, item) => sum + item.price, 0);

    const addOnsTotal = (dish.suggestedAddOns || [])
      .filter((item) => selectedSuggestedItems.includes(item.id))
      .reduce((sum, item) => sum + item.price, 0);

    return (dish.price + accompanimentTotal + addOnsTotal) * quantity;
  };

  const handleAddToCart = () => {
    const selectedPaidItems = dish.accompaniments?.paid?.filter((item) =>
      selectedPaidAccompaniments.includes(item.id)
    ) || [];

    const selectedFreeItems = dish.accompaniments?.free?.filter((item) =>
      selectedFreeAccompaniments.includes(item.id)
    ) || [];

    const selectedAddOns = dish.suggestedAddOns?.filter((item) =>
      selectedSuggestedItems.includes(item.id)
    ) || [];

    const totalPrice = calculateTotal();

    CartService.addItem({
      id: dish.id.toString(),
      name: dish.name,
      price: dish.price, // Preço base do prato
      quantity,
      image: dish.image,
      selectedAccompaniments: {
        free: selectedFreeItems,
        paid: selectedPaidItems,
      },
      note,
      selectedSuggestedItems: selectedAddOns,
      totalPrice, // Total calculado com acompanhamentos e sugestões
    });
    

    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };

  // JSX deve estar dentro da função principal
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView>
        <View style={styles.header}>
          <Image source={{ uri: dish.image }} style={styles.image} />
          <LinearGradient
            colors={['rgba(0,0,0,0.6)', 'transparent']}
            style={styles.gradient}
          />
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>{dish.name}</Text>
          <Text style={styles.description}>{dish.description}</Text>
          <Text style={styles.price}>R$ {dish.price.toFixed(2)}</Text>

          <QuantitySelector
            quantity={quantity}
            onIncrease={() => setQuantity((prev) => prev + 1)}
            onDecrease={() => setQuantity((prev) => Math.max(1, prev - 1))}
          />

          {dish.accompaniments?.free && dish.accompaniments.free.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Acompanhamentos Grátis</Text>
              <View style={styles.optionsList}>
                {dish.accompaniments.free.map((item) => {
                  const isSelected = selectedFreeAccompaniments.includes(item.id);
                  return (
                    <TouchableOpacity
                      key={item.id}
                      style={[
                        styles.accompanimentItemContainer,
                        isSelected && styles.selectedAccompanimentContainer,
                      ]}
                      onPress={() => toggleFreeAccompaniment(item.id)}
                    >
                      <Image
                        source={{ uri: item.image }}
                        style={styles.accompanimentImage}
                      />
                      <View style={styles.accompanimentDetails}>
                        <Text style={styles.accompanimentName}>{item.name}</Text>
                      </View>
                      {isSelected && (
                        <Ionicons name="checkmark-circle" size={24} color="#22C55E" />
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          )}

          {dish.accompaniments?.paid && dish.accompaniments.paid.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Acompanhamentos Adicionais</Text>
              <View style={styles.optionsList}>
                {dish.accompaniments.paid.map((item) => {
                  const isSelected = selectedPaidAccompaniments.includes(item.id);
                  return (
                    <TouchableOpacity
                      key={item.id}
                      style={[
                        styles.accompanimentItemContainer,
                        isSelected && styles.selectedAccompanimentContainer,
                      ]}
                      onPress={() => togglePaidAccompaniment(item.id)}
                    >
                      <Image
                        source={{ uri: item.image }}
                        style={styles.accompanimentImage}
                      />
                      <View style={styles.accompanimentDetails}>
                        <Text style={styles.accompanimentName}>{item.name}</Text>
                        <Text style={styles.accompanimentPrice}>+ R$ {item.price.toFixed(2)}</Text>
                      </View>
                      {isSelected && (
                        <Ionicons name="checkmark-circle" size={24} color="#22C55E" />
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          )}

          <SuggestedAddOns
            suggestedItems={dish.suggestedAddOns || []}
            selectedItems={selectedSuggestedItems}
            onToggleItem={toggleSuggestedItem}
          />

          <View style={styles.observations}>
            <Text style={styles.sectionTitle}>Observações</Text>
            <TextInput
              style={styles.input}
              placeholder="Ex.: Retirar cebola, adicionar molho extra"
              placeholderTextColor="#aaa"
              multiline
              value={note}
              onChangeText={setNote}
            />
          </View>
        </View>
      </ScrollView>

      {showTooltip && (
        <Animatable.View
          animation="fadeInDown"
          duration={400}
          style={styles.tooltip}
        >
          <Text style={styles.tooltipText}>Item adicionado ao carrinho!</Text>
        </Animatable.View>
      )}

      <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
        <Text style={styles.addButtonText}>
          Adicionar • R$ {calculateTotal().toFixed(2)}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    position: 'relative',
    height: 250,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 16,
  },
  selectedAccompanimentContainer: {
    borderColor: '#f97316',
    backgroundColor: '#fff7ed', // Fundo diferenciado para itens selecionados
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
  },
  section: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  optionsList: {
    flexDirection: 'column',
  },
  observations: {
    marginBottom: 24,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 12,
    height: 100,
    textAlignVertical: 'top',
  },
  addButton: {
    position: 'absolute',
    bottom: 24,
    left: 16,
    right: 16,
    backgroundColor: '#ea580c',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  tooltip: {
    position: 'absolute',
    top: 80,
    left: '45%',
    transform: [{ translateX: -100 }],
    backgroundColor: '#fb923c',
    padding: 12,
    borderRadius: 8,
    zIndex: 1000,
    width: 200,
    alignItems: 'center',
  },
  tooltipText: {
    color: 'white',
    fontSize: 14,
  },
  accompanimentItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 8,
  },
  accompanimentImage: {
    width: 50, // Tamanho da imagem
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  accompanimentDetails: {
    flex: 1,
  },
  accompanimentName: {
    fontSize: 16,
    color: '#1F2937',
    fontWeight: 'bold',
  },
  accompanimentPrice: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
});