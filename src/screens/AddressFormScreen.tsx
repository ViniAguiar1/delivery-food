import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Alert, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {InputAddress} from '../../src/components/InputAddress'
import { Button } from '../components/Button';
import { colors } from '../theme/color';
import { searchCep } from '../utils/cepService';

export const AddressFormScreen = ({ route, navigation }) => {
  const editingAddress = route.params?.address;
  const [loading, setLoading] = useState(false);
  const [searchingCep, setSearchingCep] = useState(false);
  const [formData, setFormData] = useState({
    type: editingAddress?.type || 'Casa',
    street: editingAddress?.street || '',
    number: editingAddress?.number || '',
    complement: editingAddress?.complement || '',
    neighborhood: editingAddress?.neighborhood || '',
    city: editingAddress?.city || '',
    state: editingAddress?.state || '',
    reference: editingAddress?.reference || '',
    zipCode: editingAddress?.zipCode || '',
  });

  const [errors, setErrors] = useState({});

  const handleCepSearch = async (cep: string) => {
    if (cep.length === 9) {
      setSearchingCep(true);
      const address = await searchCep(cep);
      setSearchingCep(false);

      if (address) {
        setFormData(prev => ({
          ...prev,
          street: address.logradouro,
          neighborhood: address.bairro,
          city: address.localidade,
          state: address.uf,
        }));
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.zipCode) newErrors.zipCode = 'Informe o CEP';
    if (!formData.street) newErrors.street = 'Informe o endereço';
    if (!formData.number) newErrors.number = 'Informe o número';
    if (!formData.neighborhood) newErrors.neighborhood = 'Informe o bairro';
    if (!formData.city) newErrors.city = 'Informe a cidade';
    if (!formData.state) newErrors.state = 'Informe o estado';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        editingAddress ? 'Endereço atualizado' : 'Endereço adicionado',
        editingAddress
          ? 'Seu endereço foi atualizado com sucesso.'
          : 'Seu novo endereço foi adicionado com sucesso.',
        [{ text: 'OK', onPress: () => navigation.goBack() }]
      );
    }, 1500);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }

    if (field === 'zipCode') {
      const formattedCep = value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .substr(0, 9);

      handleCepSearch(formattedCep);
      return formattedCep;
    }

    return value;
  };

  const addressTypes = [
    { id: 'Casa', icon: 'home' },
    { id: 'Trabalho', icon: 'office-building' },
    { id: 'Outro', icon: 'map-marker' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>
            {editingAddress ? 'Editar Endereço' : 'Novo Endereço'}
          </Text>
          <Text style={styles.subtitle}>
            {editingAddress
              ? 'Atualize as informações do endereço'
              : 'Preencha as informações do novo endereço'}
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.typeSelector}>
            <Text style={styles.typeTitle}>Tipo de endereço</Text>
            <View style={styles.typeButtons}>
              {addressTypes.map((type) => (
                <TouchableOpacity
                  key={type.id}
                  style={[
                    styles.typeButton,
                    formData.type === type.id && styles.typeButtonActive,
                  ]}
                  onPress={() => handleChange('type', type.id)}
                >
                  <MaterialCommunityIcons
                    name={type.icon}
                    size={24}
                    color={formData.type === type.id ? colors.white : colors.text}
                  />
                  <Text
                    style={[
                      styles.typeText,
                      formData.type === type.id && styles.typeTextActive,
                    ]}
                  >
                    {type.id}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <InputAddress
            label="CEP"
            value={formData.zipCode}
            onChangeText={(value) => handleChange('zipCode', value)}
            placeholder="00000-000"
            keyboardType="numeric"
            error={errors.zipCode}
            leftIcon="map-marker-outline"
            loading={searchingCep}
            maxLength={9}
          />

          <InputAddress
            label="Endereço"
            value={formData.street}
            onChangeText={(value) => handleChange('street', value)}
            placeholder="Rua, Avenida, etc"
            error={errors.street}
            leftIcon="road-variant"
            editable={!searchingCep}
          />

          <View style={styles.row}>
            <View style={styles.column}>
              <InputAddress
                label="Número"
                value={formData.number}
                onChangeText={(value) => handleChange('number', value)}
                placeholder="123"
                keyboardType="numeric"
                error={errors.number}
                leftIcon="numeric"
              />
            </View>
            <View style={styles.column}>
              <InputAddress
                label="Complemento"
                value={formData.complement}
                onChangeText={(value) => handleChange('complement', value)}
                placeholder="Apto, Sala, etc"
                leftIcon="office-building"
              />
            </View>
          </View>

          <InputAddress
            label="Bairro"
            value={formData.neighborhood}
            onChangeText={(value) => handleChange('neighborhood', value)}
            placeholder="Seu bairro"
            error={errors.neighborhood}
            leftIcon="home-city"
            editable={!searchingCep}
          />

          <View style={styles.row}>
            <View style={[styles.column, { flex: 2 }]}>
              <InputAddress
                label="Cidade"
                value={formData.city}
                onChangeText={(value) => handleChange('city', value)}
                placeholder="Sua cidade"
                error={errors.city}
                leftIcon="city"
                editable={!searchingCep}
              />
            </View>
            <View style={styles.column}>
              <InputAddress
                label="Estado"
                value={formData.state}
                onChangeText={(value) => handleChange('state', value)}
                placeholder="UF"
                maxLength={2}
                error={errors.state}
                leftIcon="map"
                editable={!searchingCep}
              />
            </View>
          </View>

          <InputAddress
            label="Ponto de referência"
            value={formData.reference}
            onChangeText={(value) => handleChange('reference', value)}
            placeholder="Ex: Próximo ao mercado"
            leftIcon="information"
          />

          <View style={styles.infoContainer}>
            <MaterialCommunityIcons
              name="information"
              size={20}
              color={colors.textSecondary}
            />
            <Text style={styles.infoText}>
              Digite o CEP para preenchimento automático do endereço
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          onPress={handleSubmit}
          title={editingAddress ? "Atualizar endereço" : "Adicionar endereço"}
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
  header: {
    padding: 24,
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
  typeSelector: {
    marginBottom: 24,
  },
  typeTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 12,
  },
  typeButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  typeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 12,
    backgroundColor: colors.background,
    gap: 8,
  },
  typeButtonActive: {
    backgroundColor: colors.primary,
  },
  typeText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
  },
  typeTextActive: {
    color: colors.white,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  column: {
    flex: 1,
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
  },
});

export default AddressFormScreen;