import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Image } from 'react-native';
import { maskCPF, maskPhone } from '../utils/masks';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { colors } from '../theme/color';

const PersonalDataScreen = () => {
  const [formData, setFormData] = useState({
    fullName: 'Vinicius Aguiar',
    email: 'vinicius@easytogo.com.br',
    phone: '(11) 99999-9999',
    cpf: '123.456.789-00',
  });

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    cpf: '',
  });

  const handleChange = (field: string, value: string) => {
    let formattedValue = value;

    if (field === 'phone') {
      formattedValue = maskPhone(value);
    } else if (field === 'cpf') {
      formattedValue = maskCPF(value);
    }

    setFormData((prev) => ({
      ...prev,
      [field]: formattedValue,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  const handleSubmit = () => {
    console.log('Dados atualizados:', formData);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://github.com/ViniAguiar1.png' }}
            style={styles.profileImage}
          />
          <Text style={styles.title}>{formData.fullName}</Text>
          <Text style={styles.subtitle}>
            Atualize suas informações abaixo.
          </Text>
        </View>

        <View style={styles.form}>
          <Input
            label="Nome completo"
            value={formData.fullName}
            onChangeText={(value) => handleChange('fullName', value)}
            placeholder="Ex: Maria Silva"
            error={errors.fullName}
            leftIcon="person-outline"
          />

          <Input
            label="E-mail"
            value={formData.email}
            onChangeText={(value) => handleChange('email', value)}
            placeholder="seu@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
            error={errors.email}
            leftIcon="mail-outline"
          />

          <Input
            label="Telefone"
            value={formData.phone}
            onChangeText={(value) => handleChange('phone', value)}
            placeholder="(00) 00000-0000"
            keyboardType="numeric"
            maxLength={15}
            error={errors.phone}
            leftIcon="phone"
          />

          <Input
            label="CPF"
            value={formData.cpf}
            onChangeText={(value) => handleChange('cpf', value)}
            placeholder="000.000.000-00"
            keyboardType="numeric"
            maxLength={14}
            error={errors.cpf}
            leftIcon="badge"
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          onPress={handleSubmit}
          title="Salvar Dados"
          disabled={!formData.fullName || !formData.email || !formData.phone || !formData.cpf}
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
  header: {
    padding: 24,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
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
    lineHeight: 22,
    textAlign: 'center',
  },
  form: {
    backgroundColor: colors.white,
    borderRadius: 16,
    margin: 16,
    padding: 20,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  footer: {
    padding: 16,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    marginBottom: 20
  },
});

export default PersonalDataScreen;
