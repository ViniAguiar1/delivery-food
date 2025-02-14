import * as React from "react";
import { View, Button, Label } from "@nativescript/core";
import { StyleSheet } from "react-nativescript";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../theme/color';
import { PaymentMethodSelector } from './PaymentMethodSelector';
import { SavedCardSelector } from './SavedCardSelector';

interface PaymentModalProps {
  visible: boolean;
  onClose: () => void;
  onSelectPaymentMethod: (method: any) => void;
  onSelectCard: (card: any) => void;
  selectedPaymentMethod: any;
  selectedCard: any;
}

export function PaymentModal({
  visible,
  onClose,
  onSelectPaymentMethod,
  onSelectCard,
  selectedPaymentMethod,
  selectedCard,
}: PaymentModalProps) {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Label style={styles.title}>Forma de Pagamento</Label>
          <Button style={styles.closeButton} onTap={onClose}>
            <MaterialCommunityIcons name="close" size={24} color={colors.text} />
          </Button>
        </View>

        <PaymentMethodSelector
          selectedMethod={selectedPaymentMethod?.id}
          onSelectMethod={onSelectPaymentMethod}
        />

        {selectedPaymentMethod && ['credit', 'debit'].includes(selectedPaymentMethod.id) && (
          <SavedCardSelector
            selectedCard={selectedCard?.id}
            paymentMethod={selectedPaymentMethod.id}
            onSelectCard={onSelectCard}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  content: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    maxHeight: '80%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  closeButton: {
    padding: 4,
    backgroundColor: 'transparent',
  }
});
