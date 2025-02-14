import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../theme/color';

const PaymentMethodsInfoScreen = () => {
  const paymentMethods = [
    {
      title: 'Cartão de Crédito',
      icon: 'credit-card',
      description: 'Aceitamos as principais bandeiras',
      details: ['Visa', 'Mastercard', 'American Express', 'Elo'],
    },
    {
      title: 'Pix',
      icon: 'qrcode',
      description: 'Pagamento instantâneo',
      details: ['Disponível 24/7', 'Confirmação imediata'],
    },
    {
      title: 'Boleto Bancário',
      icon: 'barcode',
      description: 'Prazo de 3 dias úteis',
      details: ['Vencimento em 3 dias', 'Compensação em 1-3 dias úteis'],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Métodos de Pagamento</Text>

        {paymentMethods.map((method, index) => (
          <View key={index} style={styles.methodCard}>
            <View style={styles.methodHeader}>
              <MaterialCommunityIcons
                name={method.icon}
                size={32}
                color={colors.primary}
              />
              <Text style={styles.methodTitle}>{method.title}</Text>
            </View>
            <Text style={styles.methodDescription}>{method.description}</Text>
            <View style={styles.detailsList}>
              {method.details.map((detail, idx) => (
                <Text key={idx} style={styles.detailItem}>
                  • {detail}
                </Text>
              ))}
            </View>
          </View>
        ))}

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Informações importantes</Text>
          <Text style={styles.infoText}>
            • Todas as transações são processadas com segurança
          </Text>
          <Text style={styles.infoText}>
            • Dados criptografados e protegidos
          </Text>
          <Text style={styles.infoText}>
            • Confirmação instantânea por e-mail
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 24,
  },
  methodCard: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  methodHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  methodTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginLeft: 12,
  },
  methodDescription: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 12,
  },
  detailsList: {
    marginTop: 8,
  },
  detailItem: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
    paddingLeft: 8,
  },
  infoSection: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
    marginTop: 8,
    marginBottom: 24,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  infoText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
  },
});

export default PaymentMethodsInfoScreen;