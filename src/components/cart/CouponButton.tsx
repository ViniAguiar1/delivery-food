import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../theme/color';

interface CouponButtonProps {
  selectedCoupon: any;
  onPress: () => void;
}

export function CouponButton({ selectedCoupon, onPress }: CouponButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons name="ticket-percent" size={24} color={colors.primary} />
      <Text style={styles.text}>
        {selectedCoupon ? `Cupom aplicado: ${selectedCoupon.code}` : 'Adicionar cupom'}
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