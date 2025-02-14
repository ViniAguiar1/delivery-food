import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CreditCard from '../components/CreditCard';
import { Button } from '../components/Button';
import { colors } from '../theme/color';

export const CardSecurityScreen = ({ route, navigation }) => {
  const { card } = route.params;
  const [loading, setLoading] = useState(false);
  const [settings, setSettings] = useState({
    internationalPurchases: false,
    onlinePurchases: true,
    notifyAllPurchases: true,
    biometricAuthentication: true,
  });

  const handleSaveSettings = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        'Configurações salvas',
        'As configurações de segurança foram atualizadas com sucesso.',
        [{ text: 'OK', onPress: () => navigation.goBack() }]
      );
    }, 1500);
  };

  const toggleSetting = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const securityOptions = [
    {
      key: 'internationalPurchases',
      icon: 'earth',
      title: 'Compras internacionais',
      description: 'Permitir transações fora do país',
    },
    {
      key: 'onlinePurchases',
      icon: 'shopping-outline',
      title: 'Compras online',
      description: 'Permitir compras em sites e apps',
    },
    {
      key: 'notifyAllPurchases',
      icon: 'bell-outline',
      title: 'Notificar todas as compras',
      description: 'Receber notificações de transações',
    },
    {
      key: 'biometricAuthentication',
      icon: 'fingerprint',
      title: 'Autenticação biométrica',
      description: 'Usar biometria para confirmar compras',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.cardContainer}>
          <CreditCard card={card} />
        </View>

        <View style={styles.settingsContainer}>
          <Text style={styles.sectionTitle}>Configurações de Segurança</Text>

          {securityOptions.map((option) => (
            <View key={option.key} style={styles.settingItem}>
              <View style={styles.settingHeader}>
                <MaterialCommunityIcons
                  name={option.icon}
                  size={24}
                  color={settings[option.key] ? colors.success : colors.textSecondary}
                />
                <View style={styles.settingInfo}>
                  <Text style={styles.settingTitle}>{option.title}</Text>
                  <Text style={styles.settingDescription}>
                    {option.description}
                  </Text>
                </View>
                <Switch
                  value={settings[option.key]}
                  onValueChange={() => toggleSetting(option.key)}
                  trackColor={{ false: colors.border, true: `${colors.success}80` }}
                  thumbColor={settings[option.key] ? colors.success : colors.textSecondary}
                />
              </View>
            </View>
          ))}

          <TouchableOpacity 
            style={styles.passwordButton}
            onPress={() => navigation.navigate('ChangePassword', { card })}
          >
            <MaterialCommunityIcons name="key-outline" size={24} color={colors.primary} />
            <View style={styles.passwordInfo}>
              <Text style={styles.passwordTitle}>Alterar senha</Text>
              <Text style={styles.passwordDescription}>
                Atualize a senha do seu cartão
              </Text>
            </View>
            <MaterialCommunityIcons name="chevron-right" size={24} color={colors.textSecondary} />
          </TouchableOpacity>

          <View style={styles.infoContainer}>
            <MaterialCommunityIcons name="shield-check" size={20} color={colors.success} />
            <Text style={styles.infoText}>
              Mantenha suas configurações de segurança sempre atualizadas para maior proteção
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Button
          onPress={handleSaveSettings}
          title="Salvar configurações"
          loading={loading}
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
  content: {
    flex: 1,
  },
  cardContainer: {
    padding: 16,
    backgroundColor: colors.white,
  },
  settingsContainer: {
    backgroundColor: colors.white,
    marginTop: 16,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 24,
  },
  settingItem: {
    marginBottom: 24,
  },
  settingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  settingInfo: {
    flex: 1,
    marginLeft: 16,
  },
  settingTitle: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '500',
  },
  settingDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
  },
  passwordButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 16,
    borderRadius: 12,
    marginTop: 8,
  },
  passwordInfo: {
    flex: 1,
    marginLeft: 16,
  },
  passwordTitle: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '500',
  },
  passwordDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${colors.success}10`,
    padding: 12,
    borderRadius: 8,
    marginTop: 24,
  },
  infoText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    color: colors.textSecondary,
  },
  footer: {
    padding: 16,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
});

export default CardSecurityScreen;