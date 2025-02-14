import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../theme/color';

interface PaymentInfoProps {
  method: string;
}

export const PaymentInfo = ({ method }: PaymentInfoProps) => {
  const getPaymentIcon = () => {
    switch (method.toLowerCase()) {
      case 'pix':
        return 'qrcode';
      case 'cartão de crédito':
        return 'credit-card';
      case 'dinheiro':
        return 'cash';
      default:
        return 'cash';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forma de pagamento</Text>

      <View style={styles.methodContainer}>
        <MaterialCommunityIcons
          name={getPaymentIcon()}
          size={24}
          color={colors.primary}
          style={styles.icon}
        />
        <View>
          <Text style={styles.methodName}>{method}</Text>
          <Text style={styles.methodStatus}>Pagamento confirmado</Text>
        </View>
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
  methodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 12,
  },
  methodName: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 4,
  },
  methodStatus: {
    fontSize: 14,
    color: colors.success,
  },
});