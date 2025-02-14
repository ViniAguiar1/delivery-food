import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../theme/color';

const OrderIssuesScreen = ({ navigation }) => {
  const issueTypes = [
    {
      id: 1,
      title: 'Atraso na entrega',
      icon: 'clock-alert-outline',
      description: 'Meu pedido está demorando mais que o previsto',
    },
    {
      id: 2,
      title: 'Pedido incompleto',
      icon: 'package-variant-remove',
      description: 'Faltaram itens no meu pedido',
    },
    {
      id: 3,
      title: 'Pedido incorreto',
      icon: 'package-variant-closed-remove',
      description: 'Recebi itens diferentes do que pedi',
    },
    {
      id: 4,
      title: 'Problemas com pagamento',
      icon: 'credit-card-alert-outline',
      description: 'Dificuldades com cobrança ou reembolso',
    },
    {
      id: 5,
      title: 'Qualidade dos produtos',
      icon: 'alert-circle-outline',
      description: 'Problemas com a qualidade dos itens recebidos',
    },
  ];

  const handleIssueSelect = (issue) => {
    navigation.navigate('IssueForm', { issueType: issue });
  };

  const handleChatSupport = () => {
    navigation.navigate('ChatSupport', {
      issue: {
        type: 'Suporte Geral',
        category: 'Pedidos',
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Problemas com Pedidos</Text>
        <Text style={styles.subtitle}>
          Selecione o tipo de problema que você está enfrentando
        </Text>
      </View>

      <ScrollView style={styles.content}>
        {issueTypes.map((issue) => (
          <TouchableOpacity
            key={issue.id}
            style={styles.issueCard}
            onPress={() => handleIssueSelect(issue)}
          >
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name={issue.icon}
                size={24}
                color={colors.primary}
              />
            </View>
            <View style={styles.issueInfo}>
              <Text style={styles.issueTitle}>{issue.title}</Text>
              <Text style={styles.issueDescription}>
                {issue.description}
              </Text>
            </View>
            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color={colors.textSecondary}
            />
          </TouchableOpacity>
        ))}

        <View style={styles.helpSection}>
          <Text style={styles.helpTitle}>Não encontrou seu problema?</Text>
          <TouchableOpacity
            style={styles.helpButton}
            onPress={handleChatSupport}
          >
            <MaterialCommunityIcons
              name="headset"
              size={24}
              color={colors.primary}
            />
            <Text style={styles.helpButtonText}>Falar com atendente</Text>
          </TouchableOpacity>
          <Text style={styles.helpDescription}>
            Nossa equipe está disponível 24/7 para te ajudar
          </Text>
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
  issueCard: {
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
  issueInfo: {
    flex: 1,
  },
  issueTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 4,
  },
  issueDescription: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  helpSection: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: colors.white,
    borderRadius: 12,
    marginTop: 16,
  },
  helpTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  helpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${colors.primary}10`,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  helpButtonText: {
    marginLeft: 8,
    fontSize: 16,
    color: colors.primary,
    fontWeight: '500',
  },
  helpDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});

export default OrderIssuesScreen;