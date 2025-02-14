import React from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '../../theme/color';

interface CartFooterProps {
  total: number;
  selectedPaymentMethod: any;
  onPaymentPress: () => void;
  loading?: boolean;
}

export function CartFooter({ total, selectedPaymentMethod, onPaymentPress, loading }: CartFooterProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.checkoutButton]}
        onPress={onPaymentPress}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={styles.checkoutButtonText}>
            {selectedPaymentMethod
              ? `Pagar com ${selectedPaymentMethod.name}`
              : 'Escolher forma de pagamento'}
            {' • '}R$ {total.toFixed(2)}
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  checkoutButton: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkoutButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});