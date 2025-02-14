import React from 'react';
import { Modal, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../theme/color';
import { PAYMENT_METHODS } from '../../constants/payment';
import { PaymentMethodContent } from '../payment/PaymentMethodContent';

interface PaymentMethodModalProps {
  visible: boolean;
  selectedMethod: any;
  onSelectMethod: (method: any) => void;
  onSelectCard: (card: any) => void;
  onGeneratePix: () => void;
  onClose: () => void;
  onConfirmPixPayment: () => void;
  pixCode?: string;
  total?: number;
}

export function PaymentMethodModal({
  visible,
  selectedMethod,
  onSelectMethod,
  onSelectCard,
  onGeneratePix,
  onClose,
  onConfirmPixPayment,
  pixCode,
  total,
}: PaymentMethodModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Forma de Pagamento</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <MaterialCommunityIcons name="close" size={24} color={colors.text} />
            </TouchableOpacity>
          </View>

          <View style={styles.paymentMethodsContainer}>
            {PAYMENT_METHODS.map((method) => (
              <TouchableOpacity
                key={method.id}
                style={[
                  styles.paymentMethod,
                  selectedMethod?.id === method.id && styles.selectedPaymentMethod,
                ]}
                onPress={() => onSelectMethod(method)}
              >
                <MaterialCommunityIcons
                  name={method.icon}
                  size={24}
                  color={selectedMethod?.id === method.id ? colors.primary : colors.text}
                />
                <Text style={styles.paymentMethodText}>{method.name}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <PaymentMethodContent
            selectedMethod={selectedMethod}
            onSelectCard={onSelectCard}
            onGeneratePix={onGeneratePix}
            onConfirmPixPayment={onConfirmPixPayment}
            pixCode={pixCode}
            total={total}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '90%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  closeButton: {
    padding: 4,
  },
  paymentMethodsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  paymentMethod: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
    marginHorizontal: 4,
  },
  selectedPaymentMethod: {
    borderColor: colors.primary,
    backgroundColor: `${colors.primary}10`,
  },
  paymentMethodText: {
    fontSize: 12,
    marginTop: 4,
    color: colors.text,
    textAlign: 'center',
  },
});