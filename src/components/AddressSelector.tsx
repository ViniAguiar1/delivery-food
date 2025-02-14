import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../theme/color';

export const AddressSelector = ({ visible, onClose, onSelectAddress }) => {
  const [addresses] = useState([
    { id: 1, name: 'Rua X, Número Y, Cidade Z', selected: false },
    { id: 2, name: 'Avenida A, Número B, Bairro C', selected: false },
  ]);

  const [selectedAddressId, setSelectedAddressId] = useState(null);

  const handleAddressSelect = (address) => {
    setSelectedAddressId(address.id);
    onSelectAddress(address);
    onClose(); // Fecha o modal após a seleção
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Selecione o endereço de entrega</Text>

          <FlatList
            data={addresses}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.addressCard,
                  item.id === selectedAddressId && styles.addressCardSelected,
                ]}
                onPress={() => handleAddressSelect(item)}
              >
                <Ionicons
                  name={item.id === selectedAddressId ? 'checkmark-circle' : 'ellipse-outline'}
                  size={24}
                  color={item.id === selectedAddressId ? colors.primary : colors.darkGray}
                  style={styles.icon}
                />
                <Text style={styles.addressText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />

          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  addressCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 8,
    marginBottom: 10,
  },
  addressCardSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.lightPrimary,
  },
  addressText: {
    fontSize: 16,
    marginLeft: 10,
    color: colors.darkGray,
  },
  icon: {
    marginRight: 10,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 16,
    color: colors.primary,
  },
});
