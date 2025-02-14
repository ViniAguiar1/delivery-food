import * as React from "react";
import { FlexboxLayout, Button, Label } from "@nativescript/core";
import { StyleSheet } from "react-nativescript";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../theme/color';

const PAYMENT_METHODS = [
  { id: 'credit', name: 'Cartão de Crédito', icon: 'credit-card' },
  { id: 'debit', name: 'Cartão de Débito', icon: 'credit-card-outline' },
  { id: 'pix', name: 'PIX', icon: 'qrcode' },
];

interface PaymentMethodSelectorProps {
  selectedMethod: string | null;
  onSelectMethod: (method: any) => void;
}

export function PaymentMethodSelector({ selectedMethod, onSelectMethod }: PaymentMethodSelectorProps) {
  const handleMethodSelect = (method: any) => {
    console.log('Method selected:', method); // Debug
    onSelectMethod(method);
  };

  return (
    <FlexboxLayout style={styles.container}>
      {PAYMENT_METHODS.map((method) => (
        <Button
          key={method.id}
          style={[
            styles.methodButton,
            selectedMethod === method.id && styles.selectedMethod
          ]}
          onTap={() => handleMethodSelect(method)}
          text={method.name}
        >
          <MaterialCommunityIcons
            name={method.icon}
            size={24}
            color={selectedMethod === method.id ? colors.primary : colors.text}
          />
          <Label style={styles.methodText}>{method.name}</Label>
        </Button>
      ))}
    </FlexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  methodButton: {
    flex: 1,
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    marginHorizontal: 4,
    backgroundColor: colors.white,
  },
  selectedMethod: {
    borderColor: colors.primary,
    backgroundColor: `${colors.primary}10`,
  },
  methodText: {
    fontSize: 12,
    marginTop: 4,
    textAlign: "center",
    color: colors.text,
  }
});