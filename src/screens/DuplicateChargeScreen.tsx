import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../theme/color';

const DuplicateChargeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>Cobrança Duplicada</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>O que fazer?</Text>
          <Text style={styles.text}>
            Se você identificou uma cobrança duplicada em sua fatura, não se preocupe.
            Vamos te ajudar a resolver isso rapidamente.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Documentos necessários</Text>
          <Text style={styles.text}>
            Para agilizar o processo, tenha em mãos:
          </Text>
          <View style={styles.list}>
            <Text style={styles.listItem}>• Comprovante das cobranças</Text>
            <Text style={styles.listItem}>• Número do pedido</Text>
            <Text style={styles.listItem}>• Extrato do cartão</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.reportButton}
          onPress={() => navigation.navigate('FinancialSpecialistChat', {
            issue: 'Cobrança Duplicada'
          })}
        >
          <MaterialCommunityIcons name="alert-circle" size={24} color={colors.white} />
          <Text style={styles.reportButtonText}>Reportar cobrança duplicada</Text>
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

export default DuplicateChargeScreen;