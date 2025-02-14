import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface RestaurantInfoProps {
  name: string;
  image: string;
  orderDate: string;
  orderId: string;
}

export function RestaurantInfo({ name, image, orderDate, orderId }: RestaurantInfoProps) {
  const formattedDate = new Date(orderDate).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.details}>Pedido #{orderId}</Text>
        <Text style={styles.details}>{formattedDate}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  info: {
    marginLeft: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  details: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});