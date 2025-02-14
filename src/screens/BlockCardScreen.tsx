import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CreditCard from '../components/CreditCard';
import { Button } from '../components/Button';
import { colors } from '../theme/color';

export const BlockCardScreen = ({ route, navigation }) => {
  const { card } = route.params;
  const [loading, setLoading] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);

  const handleBlockCard = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsBlocked(!isBlocked);
      Alert.alert(
        isBlocked ? 'Cartão desbloqueado' : 'Cartão bloqueado',
        isBlocked 
          ? 'Seu cartão foi desbloqueado com sucesso.'
          : 'Seu cartão foi bloqueado com sucesso. Você pode desbloqueá-lo a qualquer momento.',
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

        <View style={styles.warningContainer}>
          <MaterialCommunityIcons
            name={isBlocked ? "lock" : "lock-alert"}
            size={48}
            color={isBlocked ? colors.success : colors.error}
          />
          <Text style={styles.warningTitle}>
            {isBlocked ? 'Cartão bloqueado' : 'Bloquear cartão'}
          </Text>
          <Text style={styles.warningText}>
            {isBlocked
              ? 'Seu cartão está temporariamente bloqueado. Nenhuma compra será autorizada até que você o desbloqueie.'
              : 'Ao bloquear seu cartão, todas as compras serão negadas até que você o desbloqueie. Use esta opção se suspeitar de uso indevido.'}
          </Text>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <MaterialCommunityIcons name="information" size={24} color={colors.textSecondary} />
            <Text style={styles.infoText}>
              Serviços recorrentes e assinaturas podem ser afetados
            </Text>
          </View>
          <View style={styles.infoItem}>
            <MaterialCommunityIcons name="clock-outline" size={24} color={colors.textSecondary} />
            <Text style={styles.infoText}>
              O desbloqueio é imediato quando solicitado
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Button
          onPress={handleBlockCard}
          title={isBlocked ? "Desbloquear cartão" : "Bloquear cartão"}
          loading={loading}
          variant={isBlocked ? "outline" : "primary"}
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
  warningContainer: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: colors.white,
    marginTop: 16,
  },
  warningTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: 16,
    marginBottom: 8,
  },
  warningText: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  infoContainer: {
    backgroundColor: colors.white,
    marginTop: 16,
    padding: 16,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  infoText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  footer: {
    padding: 16,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
});