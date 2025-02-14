import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/color';
import CreditCard from '../components/CreditCard';
import { Button } from '../components/Button';
import { QuickAction } from '../components/QuickAction';

const PaymentMethodsScreen = () => {
  const navigation = useNavigation();
  const paymentMethods = [
    {
      id: 1,
      type: 'credit',
      last4: '4567',
      brand: 'Visa',
      expiryDate: '12/25',
      cardholderName: 'JOHN DOE',
      backgroundColor: ['#5F2C82', '#49A09D'],
    },
    {
      id: 2,
      type: 'credit',
      last4: '8901',
      brand: 'Mastercard',
      expiryDate: '09/24',
      cardholderName: 'JOHN DOE',
      backgroundColor: ['#4776E6', '#8E54E9'],
    },
  ];

  const quickActions = [
    {
      icon: 'lock-outline',
      title: 'Bloquear cartão',
      subtitle: 'Bloqueie temporariamente seu cartão',
      onPress: () => navigation.navigate('BlockCard', { card: paymentMethods[0] }),
    },
    {
      icon: 'credit-card-settings-outline',
      title: 'Ajustar limites',
      subtitle: 'Configure limites de compras',
      onPress: () => navigation.navigate('AdjustLimits', { card: paymentMethods[0] }),
    },
  ];

  const handleCardPress = (card) => {
    navigation.navigate('CardDetails', { card });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meus Cartões</Text>
        <Text style={styles.subtitle}>
          Gerencie seus cartões cadastrados
        </Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.cardsContainer}>
          {paymentMethods.map((method) => (
            <TouchableOpacity
              key={method.id}
              onPress={() => handleCardPress(method)}
              style={styles.cardWrapper}
            >
              <CreditCard card={method} />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Ações Rápidas</Text>
          {quickActions.map((action, index) => (
            <QuickAction
              key={index}
              icon={action.icon}
              title={action.title}
              subtitle={action.subtitle}
              onPress={action.onPress}
            />
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          onPress={() => navigation.navigate('AddCard')}
          title="Adicionar novo cartão"
          leftIcon="credit-card-plus-outline"
        />
      </View>
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
  cardsContainer: {
    padding: 16,
  },
  cardWrapper: {
    marginBottom: 16,
    elevation: 4,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
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
  footer: {
    padding: 16,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
});

export default PaymentMethodsScreen;