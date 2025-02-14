import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CreditCard from '../components/CreditCard';
import { colors } from '../theme/color';

export const CardDetailsScreen = ({ route, navigation }) => {
  const { card } = route.params;

  const cardActions = [
    {
      icon: 'lock-outline',
      title: 'Bloquear cartão',
      description: 'Bloqueie temporariamente seu cartão',
      onPress: () => navigation.navigate('BlockCard', { card }),
    },
    {
      icon: 'credit-card-settings-outline',
      title: 'Ajustar limites',
      description: 'Configure limites de compras',
      onPress: () => navigation.navigate('AdjustLimits', { card }),
    },
    {
      icon: 'contactless-payment',
      title: 'Pagamento por aproximação',
      description: 'Ative ou desative o NFC',
      onPress: () => navigation.navigate('NFCSettings', { card }),
    },
    {
      icon: 'shield-check-outline',
      title: 'Configurações de segurança',
      description: 'Gerencie suas configurações de segurança',
      onPress: () => navigation.navigate('CardSecurity', { card }),
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cardContainer}>
          <CreditCard card={card} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informações do Cartão</Text>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Número do cartão</Text>
            <View style={styles.infoValueContainer}>
              <Text style={styles.infoValue}>•••• •••• •••• {card.last4}</Text>
              <MaterialCommunityIcons name="content-copy" size={20} color={colors.primary} />
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Validade</Text>
            <Text style={styles.infoValue}>{card.expiryDate}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Titular</Text>
            <Text style={styles.infoValue}>{card.cardholderName}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ações</Text>
          {cardActions.map((action, index) => (
            <TouchableOpacity
              key={index}
              onPress={action.onPress}
              style={[
                styles.actionItem,
                index === cardActions.length - 1 && styles.lastActionItem,
              ]}
            >
              <View style={[styles.iconContainer, { backgroundColor: `${colors.primary}10` }]}>
                <MaterialCommunityIcons
                  name={action.icon}
                  size={24}
                  color={colors.primary}
                />
              </View>
              <View style={styles.actionInfo}>
                <Text style={styles.actionTitle}>{action.title}</Text>
                <Text style={styles.actionDescription}>{action.description}</Text>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                color={colors.textSecondary}
              />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Limites</Text>
          <View style={styles.limitContainer}>
            <View style={styles.limitInfo}>
              <Text style={styles.limitLabel}>Limite disponível</Text>
              <Text style={styles.limitValue}>R$ 3.500,00</Text>
            </View>
            <View style={styles.limitBarContainer}>
              <View style={[styles.limitBar, { width: '70%', backgroundColor: colors.success }]} />
            </View>
            <View style={styles.limitDetails}>
              <Text style={styles.limitDetailText}>Limite total: R$ 5.000,00</Text>
              <Text style={styles.limitDetailText}>Usado: R$ 1.500,00</Text>
            </View>
          </View>
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
  cardContainer: {
    padding: 16,
    backgroundColor: colors.white,
  },
  section: {
    backgroundColor: colors.white,
    margin: 16,
    borderRadius: 16,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  infoItem: {
    marginBottom: 16,
  },
  infoLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  infoValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoValue: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '500',
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  lastActionItem: {
    borderBottomWidth: 0,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  actionInfo: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '500',
  },
  actionDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
  },
  limitContainer: {
    backgroundColor: colors.background,
    padding: 16,
    borderRadius: 12,
  },
  limitInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  limitLabel: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  limitValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.success,
  },
  limitBarContainer: {
    height: 8,
    backgroundColor: `${colors.success}20`,
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  limitBar: {
    height: '100%',
    borderRadius: 4,
  },
  limitDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  limitDetailText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
});

export default CardDetailsScreen;