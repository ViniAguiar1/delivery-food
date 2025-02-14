import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAddressStore } from '../../store/addressStore';
import { AddressModal } from './AddressModal';

export function AddressHeader() {
  const [modalVisible, setModalVisible] = React.useState(false);
  const { currentAddress, addresses, setCurrentAddress } = useAddressStore();

  // Configurar endereço padrão na inicialização
  useEffect(() => {
    if (!currentAddress && addresses.length > 0) {
      setCurrentAddress(addresses[0]); // Seleciona o primeiro endereço como padrão
    }
  }, [currentAddress, addresses, setCurrentAddress]);

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setModalVisible(true)}
      >
        <Image
          source={require('../../../assets/splash.png')} // Substitua pelo caminho correto da sua imagem
          style={styles.image}
        />
        <Ionicons name="location-outline" size={20} color="#666" style={styles.icon} />
        <View style={styles.addressContent}>
          <Text style={styles.label}>Entregar em</Text>
          <Text style={styles.address} numberOfLines={1}>
            {currentAddress
              ? `${currentAddress.street}, ${currentAddress.city}`
              : 'Selecione um endereço'}
          </Text>
        </View>
        <Ionicons name="chevron-down" size={20} color="#666" style={styles.chevron} />
      </TouchableOpacity>

      <AddressModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingVertical: 10,
    paddingHorizontal: 16,
    // borderBottomWidth: 1,
    width: 300,
    borderBottomColor: '#e5e7eb',
  },
  image: {
    width: 50,  // Aumentei ainda mais o tamanho
    height: 30, // Aumentei ainda mais o tamanho
    marginRight: 8,
    resizeMode: 'contain',
  },   
  icon: {
    marginRight: 8,
  },
  addressContent: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  address: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  chevron: {
    marginLeft: 8,
  },
});
