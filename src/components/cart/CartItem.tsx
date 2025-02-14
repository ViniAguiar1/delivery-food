import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    totalPrice?: number;
    quantity: number;
    image: string;
    selectedAccompaniments?: {
      free: any[];
      paid: any[];
    };
    selectedSuggestedItems?: any[];
    note?: string;
  };
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
  onRemove: (id: string) => void;
}

export default function CartItem({ item, onIncrease, onDecrease, onRemove }: CartItemProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>
          R$ {(item.totalPrice || item.price * item.quantity).toFixed(2)}
        </Text>

        {/* Exibir acompanhamentos grátis */}
        {item.selectedAccompaniments?.free?.length > 0 && (
          <Text style={styles.accompaniments}>
            Grátis: {item.selectedAccompaniments.free.map((a) => a.name).join(', ')}
          </Text>
        )}

        {/* Exibir acompanhamentos pagos */}
        {item.selectedAccompaniments?.paid?.length > 0 && (
          <Text style={styles.accompaniments}>
            Pagos: {item.selectedAccompaniments.paid
              .map((a) => `${a.name} (R$ ${a.price.toFixed(2)})`)
              .join(', ')}
          </Text>
        )}

        {/* Exibir sugestões adicionais */}
        {item.selectedSuggestedItems?.length > 0 && (
          <Text style={styles.accompaniments}>
            Sugestões: {item.selectedSuggestedItems
              .map((s) => `${s.name} (R$ ${s.price.toFixed(2)})`)
              .join(', ')}
          </Text>
        )}

        {/* Observações */}
        {item.note && <Text style={styles.note}>Observações: {item.note}</Text>}
      </View>

      {/* Controle de Quantidade */}
      <View style={styles.quantityControls}>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={() => onDecrease(item.id)}
        >
          <Text style={styles.controlButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{item.quantity}</Text>
        <TouchableOpacity
          style={styles.controlButton}
          onPress={() => onIncrease(item.id)}
        >
          <Text style={styles.controlButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Botão de Remoção */}
      <TouchableOpacity onPress={() => onRemove(item.id)}>
        <Text style={styles.remove}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  details: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  price: {
    fontSize: 14,
    color: '#E31837',
    marginTop: 4,
  },
  accompaniments: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  note: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  controlButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#E31837',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantity: {
    marginHorizontal: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  remove: {
    fontSize: 20,
    color: '#E31837',
  },
});
