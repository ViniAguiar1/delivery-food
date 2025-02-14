import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface AddressHeaderProps {
  currentAddress: string;
  onPress: () => void;
}

export function AddressHeader({ currentAddress, onPress }: AddressHeaderProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.addressContainer}>
        <Text style={styles.deliveryText}>Entregar em</Text>
        <View style={styles.addressRow}>
          <Text style={styles.addressText} numberOfLines={1}>
            {currentAddress}
          </Text>
          <Ionicons name="chevron-down" size={20} color="#ea1d2c" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
  },
  addressContainer: {
    flexDirection: 'column',
  },
  deliveryText: {
    fontSize: 12,
    color: '#666',
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1f2937',
    marginRight: 4,
    maxWidth: '90%',
  },
});