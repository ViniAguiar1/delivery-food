import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Address } from '../../types/address';

type AddressItemProps = {
  address: Address;
  isSelected: boolean;
  onSelect: (address: Address) => void;
};

export function AddressItem({ address, isSelected, onSelect }: AddressItemProps) {
  return (
    <TouchableOpacity
      style={[styles.container, isSelected && styles.selected]}
      onPress={() => onSelect(address)}
    >
      <Ionicons
        name={address.type === 'home' ? 'home' : 'briefcase'}
        size={24}
        color="#666"
        style={styles.icon}
      />
      <View style={styles.content}>
        <Text style={styles.type}>
          {address.type === 'home' ? 'Casa' : 'Trabalho'}
        </Text>
        <Text style={styles.address}>{address.street}</Text>
        {address.complement && (
          <Text style={styles.complement}>{address.complement}</Text>
        )}
        <Text style={styles.cityState}>
          {address.city}, {address.state}
        </Text>
      </View>
      {isSelected && (
        <Ionicons name="checkmark-circle" size={24} color="#2e6ddf" />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  selected: {
    backgroundColor: '#f3f4f6',
  },
  icon: {
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  type: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  address: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  complement: {
    fontSize: 14,
    color: '#666',
  },
  cityState: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
});
