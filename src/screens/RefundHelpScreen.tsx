import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../theme/color';

const RefundHelpScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Como solicitar reembolso</Text>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Política de reembolso</Text>
          <Text style={styles.text}>
            Nosso processo de reembolso é simples e transparente. Você pode solicitar
            o reembolso em até 7 dias após a compra, desde que o produto não tenha
            sido utilizado.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Passos para solicitar</Text>
          <View style={styles.step}>
            <Text style={styles.stepNumber}>1.</Text>
            <Text style={styles.stepText}>
              Acesse seu histórico de pedidos
            </Text>
          </View>
          <View style={styles.step}>
            <Text style={styles.stepNumber}>2.</Text>
            <Text style={styles.stepText}>
              Selecione o pedido que deseja reembolso
            </Text>
          </View>
          <View style={styles.step}>
            <Text style={styles.stepNumber}>3.</Text>
            <Text style={styles.stepText}>
              Clique em "Solicitar reembolso"
            </Text>
          </View>
          <View style={styles.step}>
            <Text style={styles.stepNumber}>4.</Text>
            <Text style={styles.stepText}>
              Selecione o motivo e envie a solicitação
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Prazo de processamento</Text>
          <Text style={styles.text}>
            Após aprovação, o reembolso será processado em até 5 dias úteis,
            dependendo do método de pagamento utilizado.
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
  section: {
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  step: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  stepNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
    width: 24,
  },
  stepText: {
    fontSize: 16,
    color: colors.textSecondary,
    flex: 1,
  },
});

export default RefundHelpScreen;