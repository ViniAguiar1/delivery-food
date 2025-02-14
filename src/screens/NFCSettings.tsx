import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CreditCard from '../components/CreditCard';
import { Button } from '../components/Button';
import { colors } from '../theme/color';

export const NFCSettings = ({ route, navigation }) => {
  const { card } = route.params;
  const [loading, setLoading] = useState(false);
  const [nfcEnabled, setNfcEnabled] = useState(true);
  const [limitWithoutPassword, setLimitWithoutPassword] = useState(50);

  const handleSaveSettings = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        'Configurações salvas',
        'As configurações de pagamento por aproximação foram atualizadas com sucesso.',
        [{ text: 'OK', onPress: () => navigation.goBack() }]
      );
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.cardContainer}>
          <CreditCard card={card} />
        </View>

        <View style={styles.settingsContainer}>
          <Text style={styles.sectionTitle}>Pagamento por Aproximação</Text>

          <View style={styles.settingItem}>
            <View style={styles.settingHeader}>
              <MaterialCommunityIcons
                name="contactless-payment-circle"
                size={24}
                color={nfcEnabled ? colors.success : colors.textSecondary}
              />
              <View style={styles.settingInfo}>
                <Text style={styles.settingTitle}>Ativar NFC</Text>
                <Text style={styles.settingDescription}>
                  Permite pagamentos por aproximação
                </Text>
              </View>
              <Switch
                value={nfcEnabled}
                onValueChange={setNfcEnabled}
                trackColor={{ false: colors.border, true: `${colors.success}80` }}
                thumbColor={nfcEnabled ? colors.success : colors.textSecondary}
              />
            </View>
          </View>

          {nfcEnabled && (
            <>
              <View style={styles.limitSection}>
                <Text style={styles.limitTitle}>
                  Limite sem senha: R$ {limitWithoutPassword.toFixed(2)}
                </Text>
                <Text style={styles.limitDescription}>
                  Compras acima deste valor exigirão senha
                </Text>
                <View style={styles.limitOptions}>
                  {[50, 100, 200].map((value) => (
                    <Button
                      key={value}
                      title={`R$ ${value}`}
                      onPress={() => setLimitWithoutPassword(value)}
                      variant={limitWithoutPassword === value ? 'primary' : 'outline'}
                    />
                  ))}
                </View>
              </View>

              <View style={styles.infoContainer}>
                <MaterialCommunityIcons
                  name="shield-check"
                  size={20}
                  color={colors.success}
                />
                <Text style={styles.infoText}>
                  Seus pagamentos são protegidos por tecnologia de criptografia avançada
                </Text>
              </View>
            </>
          )}
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
  limitSection: {
    backgroundColor: colors.background,
    padding: 16,
    borderRadius: 12,
    marginTop: 16,
  },
  limitTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 4,
  },
  limitDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 16,
  },
  limitOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
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
    marginBottom: 26
  },
});