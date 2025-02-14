import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { HelpTopic } from '../components/help/HelpTopic';
import { ContactSupport } from '../components/help/ContactSupport';
import { colors } from '../theme/color';

const HelpCenterScreen = ({ navigation }) => {
  const helpTopics = [
    {
      id: 1,
      title: 'Dúvidas frequentes',
      icon: 'frequently-asked-questions',
      description: 'Encontre respostas para as perguntas mais comuns',
      onPress: () => navigation.navigate('FAQs'),
    },
    {
      id: 2,
      title: 'Problemas com pedidos',
      icon: 'package-variant',
      description: 'Ajuda com pedidos em andamento ou anteriores',
      onPress: () => navigation.navigate('OrderIssues'),
    },
    {
      id: 3,
      title: 'Pagamentos',
      icon: 'credit-card',
      description: 'Dúvidas sobre pagamentos e reembolsos',
      onPress: () => navigation.navigate('PaymentHelp'),
    },
    {
      id: 4,
      title: 'Política de privacidade',
      icon: 'shield-check',
      description: 'Como protegemos seus dados',
      onPress: () => navigation.navigate('PrivacyPolicy'),
    },
    {
      id: 5,
      title: 'Termos de uso',
      icon: 'file-document',
      description: 'Termos e condições do serviço',
      onPress: () => navigation.navigate('TermsOfService'),
    },
  ];

  const recentIssues = [
    {
      id: 1,
      title: 'Pedido #123456',
      status: 'Em análise',
      date: '15/03/2024',
      type: 'Atraso na entrega',
    },
    {
      id: 2,
      title: 'Pedido #123457',
      status: 'Resolvido',
      date: '10/03/2024',
      type: 'Reembolso',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Central de Ajuda</Text>
        <Text style={styles.subtitle}>Como podemos te ajudar hoje?</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Search Bar */}
        <TouchableOpacity
          style={styles.searchBar}
          onPress={() => navigation.navigate('HelpSearch')}
        >
          <MaterialCommunityIcons name="magnify" size={24} color={colors.textSecondary} />
          <Text style={styles.searchPlaceholder}>Buscar ajuda</Text>
        </TouchableOpacity>

        {/* Recent Issues */}
        {recentIssues.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Solicitações recentes</Text>
            {recentIssues.map((issue) => (
              <TouchableOpacity
                key={issue.id}
                style={styles.issueCard}
                onPress={() => navigation.navigate('IssueDetails', { issue })}
              >
                <View style={styles.issueHeader}>
                  <Text style={styles.issueTitle}>{issue.title}</Text>
                  <View
                    style={[
                      styles.statusBadge,
                      {
                        backgroundColor:
                          issue.status === 'Resolvido'
                            ? `${colors.success}20`
                            : `${colors.primary}20`,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.statusText,
                        {
                          color:
                            issue.status === 'Resolvido'
                              ? colors.success
                              : colors.primary,
                        },
                      ]}
                    >
                      {issue.status}
                    </Text>
                  </View>
                </View>
                <Text style={styles.issueType}>{issue.type}</Text>
                <Text style={styles.issueDate}>{issue.date}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/* Help Topics */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Como podemos ajudar?</Text>
          {helpTopics.map((topic) => (
            <HelpTopic
              key={topic.id}
              icon={topic.icon}
              title={topic.title}
              description={topic.description}
              onPress={topic.onPress}
            />
          ))}
        </View>

        {/* Contact Support */}
        <ContactSupport />

        {/* Help Center Info */}
        <View style={styles.infoContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d' }}
            style={styles.infoImage}
          />
          <Text style={styles.infoTitle}>Ainda precisa de ajuda?</Text>
          <Text style={styles.infoText}>
            Nossa equipe de suporte está disponível 24/7 para te ajudar com qualquer problema
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
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    margin: 16,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  searchPlaceholder: {
    marginLeft: 12,
    fontSize: 16,
    color: colors.textSecondary,
  },
  section: {
    backgroundColor: colors.white,
    margin: 16,
    borderRadius: 16,
    padding: 16,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  issueCard: {
    backgroundColor: colors.background,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  issueHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  issueTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  issueType: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 4,
  },
  issueDate: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  infoContainer: {
    alignItems: 'center',
    padding: 24,
    marginBottom: 24,
  },
  infoImage: {
    width: 200,
    height: 150,
    borderRadius: 12,
    marginBottom: 16,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default HelpCenterScreen;