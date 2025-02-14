import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../theme/color';

const IncorrectAmountScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Valor Incorreto</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Verificação do valor</Text>
          <Text style={styles.text}>
            Se o valor cobrado está diferente do seu pedido, primeiro confirme:
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• O valor total do pedido</Text>
            <Text style={styles.listItem}>• Taxas de entrega ou serviço</Text>
            <Text style={styles.listItem}>• Descontos aplicados</Text>
            <Text style={styles.listItem}>• Cupons utilizados</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Como resolver</Text>
          <Text style={styles.text}>
            Caso confirme a divergência, você pode:
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>1. Enviar o comprovante de pagamento</Text>
            <Text style={styles.listItem}>2. Informar o número do pedido</Text>
            <Text style={styles.listItem}>3. Detalhar a diferença encontrada</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.reportButton}
          onPress={() => navigation.navigate('FinancialSpecialistChat', {
            issue: 'Valor Incorreto'
          })}
        >
          <MaterialCommunityIcons name="cash-alert" size={24} color={colors.white} />
          <Text style={styles.reportButtonText}>Reportar valor incorreto</Text>
        </TouchableOpacity>
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
    marginBottom: 12,
  },
  list: {
    marginTop: 8,
  },
  listItem: {
    fontSize: 16,
    color: colors.textSecondary,
    marginBottom: 8,
    paddingLeft: 8,
  },
  reportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 12,
    marginTop: 24,
  },
  reportButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});

export default IncorrectAmountScreen;