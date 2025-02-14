import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/color';

interface OrderSummaryProps {
  subtotal: string;
  deliveryFee: string;
  serviceFee: string;
  total: string;
}

export const OrderSummary = ({
  subtotal,
  deliveryFee,
  serviceFee,
  total,
}: OrderSummaryProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo do pedido</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Subtotal</Text>
        <Text style={styles.value}>{subtotal}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Taxa de entrega</Text>
        <Text style={[styles.value, deliveryFee === 'Grátis' && styles.freeDelivery]}>
          {deliveryFee}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Taxa de serviço</Text>
        <Text style={styles.value}>{serviceFee}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>{total}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  value: {
    fontSize: 14,
    color: colors.text,
    fontWeight: '500',
  },
  freeDelivery: {
    color: colors.success,
    fontWeight: '600',
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 12,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
});