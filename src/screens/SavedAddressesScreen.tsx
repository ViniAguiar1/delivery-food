import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../theme/color';
import { Button } from '../components/Button';

const SavedAddressesScreen = ({ navigation }) => {
  const addresses = [
    {
      id: 1,
      type: 'Casa',
      street: 'Rua das Flores, 123',
      neighborhood: 'Jardim Primavera',
      city: 'São Paulo',
      state: 'SP',
      complement: 'Apto 42',
      reference: 'Próximo ao mercado',
    },
    {
      id: 2,
      type: 'Trabalho',
      street: 'Av. Paulista, 1000',
      neighborhood: 'Bela Vista',
      city: 'São Paulo',
      state: 'SP',
      complement: 'Sala 1502',
      reference: 'Edifício comercial',
    },
  ];

  const handleAddAddress = () => {
    navigation.navigate('AddressForm');
  };

  const handleEditAddress = (address) => {
    navigation.navigate('AddressForm', { address });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meus Endereços</Text>
        <Text style={styles.subtitle}>
          Gerencie seus endereços de entrega
        </Text>
      </View>

      <ScrollView style={styles.content}>
        {addresses.length > 0 ? (
          <View style={styles.addressList}>
            {addresses.map((address) => (
              <TouchableOpacity
                key={address.id}
                style={styles.addressCard}
                onPress={() => handleEditAddress(address)}
              >
                <View style={styles.addressHeader}>
                  <View style={styles.typeContainer}>
                    <MaterialCommunityIcons
                      name={address.type === 'Casa' ? 'home' : 'office-building'}
                      size={24}
                      color={colors.primary}
                    />
                    <Text style={styles.addressType}>{address.type}</Text>
                  </View>
                  <MaterialCommunityIcons
                    name="pencil"
                    size={20}
                    color={colors.primary}
                  />
                </View>

                <View style={styles.addressContent}>
                  <Text style={styles.street}>{address.street}</Text>
                  <Text style={styles.neighborhood}>{address.neighborhood}</Text>
                  <Text style={styles.cityState}>
                    {address.city} - {address.state}
                  </Text>
                  {address.complement && (
                    <Text style={styles.complement}>
                      Complemento: {address.complement}
                    </Text>
                  )}
                  {address.reference && (
                    <Text style={styles.reference}>
                      Referência: {address.reference}
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          <View style={styles.emptyContainer}>
            <Image
              source={{ uri: 'https://source.unsplash.com/random/200x200/?map' }}
              style={styles.emptyImage}
            />
            <Text style={styles.emptyTitle}>Nenhum endereço cadastrado</Text>
            <Text style={styles.emptyText}>
              Adicione um endereço para facilitar suas entregas
            </Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <Button
          onPress={handleAddAddress}
          title="Adicionar novo endereço"
          leftIcon="plus"
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
  addressList: {
    padding: 16,
  },
  addressCard: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  addressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressType: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
    color: colors.text,
  },
  addressContent: {
    marginLeft: 32,
  },
  street: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
    color: colors.text,
  },
  neighborhood: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  cityState: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 8,
  },
  complement: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 2,
  },
  reference: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  emptyContainer: {
    alignItems: 'center',
    padding: 32,
  },
  emptyImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 24,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 8,
  },
  emptyText: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    padding: 16,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    marginBottom: 16,
  },
});

export default SavedAddressesScreen;