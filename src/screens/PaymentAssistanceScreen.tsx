import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../theme/color';

const PaymentAssistanceScreen = ({ navigation }) => {
  const paymentTopics = [
    {
      id: 1,
      title: 'Reembolso',
      icon: 'cash-refund',
      description: 'Como solicitar e acompanhar reembolsos',
      onPress: () => navigation.navigate('RefundHelp'),
    },
    {
      id: 2,
      title: 'Cobrança duplicada',
      icon: 'credit-card-multiple',
      description: 'Fui cobrado mais de uma vez pelo mesmo pedido',
      onPress: () => navigation.navigate('DuplicateCharge'),
    },
    {
      id: 3,
      title: 'Valor incorreto',
      icon: 'cash-remove',
      description: 'O valor cobrado está diferente do pedido',
      onPress: () => navigation.navigate('IncorrectAmount'),
    },
    {
      id: 4,
      title: 'Métodos de pagamento',
      icon: 'credit-card-settings',
      description: 'Dúvidas sobre formas de pagamento aceitas',
      onPress: () => navigation.navigate('PaymentMethodsInfo'),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Ajuda com Pagamentos</Text>
        <Text style={styles.subtitle}>
          Encontre ajuda para questões relacionadas a pagamentos
        </Text>
      </View>

      <ScrollView style={styles.content}>
        {paymentTopics.map((topic) => (
          <TouchableOpacity
            key={topic.id}
            style={styles.topicCard}
            onPress={topic.onPress}
          >
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name={topic.icon}
                size={24}
                color={colors.primary}
              />
            </View>
            <View style={styles.topicInfo}>
              <Text style={styles.topicTitle}>{topic.title}</Text>
              <Text style={styles.topicDescription}>
                {topic.description}
              </Text>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color={colors.textSecondary}
            />
          </TouchableOpacity>
        ))}

        <View style={styles.supportSection}>
          <Text style={styles.supportTitle}>Precisa de mais ajuda?</Text>
          <TouchableOpacity
            style={styles.supportButton}
            onPress={() => navigation.navigate('FinancialSpecialistChat')}
          >
            <MaterialCommunityIcons
              name="chat-processing"
              size={24}
              color={colors.white}
            />
            <Text style={styles.supportButtonText}>
              Falar com especialista financeiro
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 24,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  topicCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: `${colors.primary}10`,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  topicInfo: {
    flex: 1,
  },
  topicTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 4,
  },
  topicDescription: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  supportSection: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: colors.white,
    borderRadius: 12,
    marginTop: 16,
  },
  supportTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  supportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  supportButtonText: {
    marginLeft: 8,
    fontSize: 16,
    color: colors.white,
    fontWeight: '500',
  },
});

export default PaymentAssistanceScreen;