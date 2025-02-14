import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../theme/color';

export const ContactSupport = () => {
  const navigation = useNavigation();
  
  const contactOptions = [
    {
      icon: 'chat-processing',
      title: 'Chat',
      description: 'Fale com um atendente',
      action: () => navigation.navigate('ChatSupport'),
    },
    {
      icon: 'phone',
      title: 'Telefone',
      description: '0800 123 4567',
      action: () => Linking.openURL('tel:0800123456'),
    },
    {
      icon: 'email',
      title: 'E-mail',
      description: 'suporte@exemplo.com',
      action: () => Linking.openURL('mailto:suporte@exemplo.com'),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fale Conosco</Text>
      <Text style={styles.subtitle}>
        Escolha como você prefere entrar em contato
      </Text>

      <View style={styles.optionsContainer}>
        {contactOptions.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.option}
            onPress={option.action}
          >
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons
                name={option.icon}
                size={24}
                color={colors.primary}
              />
            </View>
            <Text style={styles.optionTitle}>{option.title}</Text>
            <Text style={styles.optionDescription}>{option.description}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.availabilityContainer}>
        <MaterialCommunityIcons
          name="clock-outline"
          size={20}
          color={colors.success}
        />
        <Text style={styles.availabilityText}>
          Atendimento disponível 24/7
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 16,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 12,
  },
  option: {
    flex: 1,
    minWidth: '30%',
    backgroundColor: colors.background,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: `${colors.primary}10`,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  availabilityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `${colors.success}10`,
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  availabilityText: {
    marginLeft: 8,
    fontSize: 14,
    color: colors.success,
    fontWeight: '500',
  },
});