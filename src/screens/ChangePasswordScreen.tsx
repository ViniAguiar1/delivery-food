import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CreditCard from '../components/CreditCard';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { colors } from '../theme/color';

export const ChangePasswordScreen = ({ route, navigation }) => {
  const { card } = route.params;
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    };

    if (!formData.currentPassword) {
      newErrors.currentPassword = 'Digite sua senha atual';
      isValid = false;
    }

    if (!formData.newPassword) {
      newErrors.newPassword = 'Digite a nova senha';
      isValid = false;
    } else if (formData.newPassword.length < 6) {
      newErrors.newPassword = 'A senha deve ter no mínimo 6 caracteres';
      isValid = false;
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirme a nova senha';
      isValid = false;
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChangePassword = () => {
    if (!validateForm()) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        'Senha alterada',
        'Sua senha foi atualizada com sucesso.',
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

        <View style={styles.formContainer}>
          <Text style={styles.sectionTitle}>Alterar Senha</Text>

          <Input
            label="Senha atual"
            value={formData.currentPassword}
            onChangeText={(text) => setFormData(prev => ({ ...prev, currentPassword: text }))}
            secureTextEntry
            error={errors.currentPassword}
            leftIcon="lock-outline"
          />

          <Input
            label="Nova senha"
            value={formData.newPassword}
            onChangeText={(text) => setFormData(prev => ({ ...prev, newPassword: text }))}
            secureTextEntry
            error={errors.newPassword}
            leftIcon="lock-outline"
          />

          <Input
            label="Confirmar nova senha"
            value={formData.confirmPassword}
            onChangeText={(text) => setFormData(prev => ({ ...prev, confirmPassword: text }))}
            secureTextEntry
            error={errors.confirmPassword}
            leftIcon="lock-outline"
          />

          <View style={styles.infoContainer}>
            <MaterialCommunityIcons name="information" size={20} color={colors.textSecondary} />
            <Text style={styles.infoText}>
              Sua nova senha deve ter no mínimo 6 caracteres e incluir letras e números
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Button
          onPress={handleChangePassword}
          title="Alterar senha"
          loading={loading}
          disabled={!formData.currentPassword || !formData.newPassword || !formData.confirmPassword}
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
  formContainer: {
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
    lineHeight: 20,
  },
  footer: {
    padding: 16,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    marginBottom: 16
  },
});

export default ChangePasswordScreen;