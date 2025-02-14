import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Slider from '@react-native-community/slider';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CreditCard from '../components/CreditCard';
import { Button } from '../components/Button';
import { colors } from '../theme/color';

export const AdjustLimitsScreen = ({ route, navigation }) => {
  const { card } = route.params;
  const [loading, setLoading] = useState(false);
  const [limits, setLimits] = useState({
    total: 5000,
    current: 3000,
    internetLimit: 1500,
    withdrawalLimit: 1000,
  });

  const handleSaveLimits = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        'Limites atualizados',
        'Os novos limites do seu cartão foram salvos com sucesso.',
        [{ text: 'OK', onPress: () => navigation.goBack() }]
      );
    }, 1500);
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.cardContainer}>
          <CreditCard card={card} />
        </View>

        <View style={styles.limitsContainer}>
          <Text style={styles.sectionTitle}>Limites do Cartão</Text>
          
          <View style={styles.limitItem}>
            <View style={styles.limitHeader}>
              <Text style={styles.limitLabel}>Limite para compras na internet</Text>
              <Text style={styles.limitValue}>{formatCurrency(limits.internetLimit)}</Text>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={limits.total}
              value={limits.internetLimit}
              onValueChange={(value) => setLimits(prev => ({ ...prev, internetLimit: value }))}
              minimumTrackTintColor={colors.primary}
              maximumTrackTintColor={colors.border}
              thumbTintColor={colors.primary}
            />
            <View style={styles.sliderLabels}>
              <Text style={styles.sliderLabel}>R$ 0</Text>
              <Text style={styles.sliderLabel}>{formatCurrency(limits.total)}</Text>
            </View>
          </View>

          <View style={styles.limitItem}>
            <View style={styles.limitHeader}>
              <Text style={styles.limitLabel}>Limite para saques</Text>
              <Text style={styles.limitValue}>{formatCurrency(limits.withdrawalLimit)}</Text>
            </View>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={limits.total}
              value={limits.withdrawalLimit}
              onValueChange={(value) => setLimits(prev => ({ ...prev, withdrawalLimit: value }))}
              minimumTrackTintColor={colors.primary}
              maximumTrackTintColor={colors.border}
              thumbTintColor={colors.primary}
            />
            <View style={styles.sliderLabels}>
              <Text style={styles.sliderLabel}>R$ 0</Text>
              <Text style={styles.sliderLabel}>{formatCurrency(limits.total)}</Text>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <MaterialCommunityIcons name="information" size={20} color={colors.textSecondary} />
            <Text style={styles.infoText}>
              As alterações nos limites são processadas instantaneamente
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Button
          onPress={handleSaveLimits}
          title="Salvar alterações"
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
  limitsContainer: {
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
  limitItem: {
    marginBottom: 24,
  },
  limitHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  limitLabel: {
    fontSize: 16,
    color: colors.text,
  },
  limitValue: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  sliderLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -8,
  },
  sliderLabel: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
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