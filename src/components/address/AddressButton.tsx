import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../theme/color';

interface AddressButtonProps {
  selectedAddress: any;
  onPress: () => void;
}

export default function AddressButton({ selectedAddress, onPress }: AddressButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons name="home" size={24} color={colors.primary} />
      <Text style={styles.text}>
        {selectedAddress ? `Endereço selecionado: ${selectedAddress.name}` : 'Selecione o endereço de entrega'}
      </Text>
      <MaterialCommunityIcons name="chevron-right" size={24} color={colors.primary} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  text: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: colors.text,
  },
});
