import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg';
import { colors } from '../../theme/color';
import { SAVED_CARDS } from '../../constants/payment';

interface PaymentMethodContentProps {
  selectedMethod: any;
  onSelectCard: (card: any) => void;
  onGeneratePix: () => void;
  onConfirmPixPayment: () => void;
  pixCode?: string;
  total?: number;
}

export function PaymentMethodContent({ 
  selectedMethod, 
  onSelectCard, 
  onGeneratePix,
  onConfirmPixPayment,
  pixCode,
  total 
}: PaymentMethodContentProps) {
  if (!selectedMethod) return null;

  if (selectedMethod.id === 'pix') {
    return (
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Pagar com PIX</Text>
        {!pixCode ? (
          <TouchableOpacity style={styles.pixButton} onPress={onGeneratePix}>
            <MaterialCommunityIcons name="qrcode" size={24} color={colors.white} />
            <Text style={styles.pixButtonText}>Gerar QR Code</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.pixContent}>
            <Text style={styles.totalText}>
              Valor total: R$ {total?.toFixed(2)}
            </Text>
            
            <View style={styles.qrContainer}>
              <QRCode
                value={pixCode}
                size={250}
                color={colors.text}
                backgroundColor={colors.white}
              />
            </View>
            
            <Text style={styles.instructions}>
              Escaneie o QR Code acima com o seu aplicativo de pagamento
            </Text>
            
            <View style={styles.codeContainer}>
              <Text style={styles.codeLabel}>Código PIX:</Text>
              <Text style={styles.pixCode}>{pixCode}</Text>
              <TouchableOpacity style={styles.copyButton}>
                <MaterialCommunityIcons name="content-copy" size={20} color={colors.primary} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity 
              style={styles.confirmButton} 
              onPress={onConfirmPixPayment}
            >
              <MaterialCommunityIcons name="check-circle" size={24} color={colors.white} />
              <Text style={styles.confirmButtonText}>Já realizei o pagamento</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    );
  }

  const cards = SAVED_CARDS.filter(card => card.type === selectedMethod.id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cartões salvos</Text>
      {cards.map((card) => (
        <TouchableOpacity
          key={card.id}
          style={styles.cardItem}
          onPress={() => onSelectCard(card)}
        >
          <MaterialCommunityIcons
            name={card.brand.toLowerCase() === 'visa' ? 'credit-card' : 'credit-card-outline'}
            size={24}
            color={colors.text}
          />
          <View style={styles.cardInfo}>
            <Text style={styles.cardBrand}>{card.brand}</Text>
            <Text style={styles.cardNumber}>•••• {card.last4}</Text>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={24} color={colors.text} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    maxHeight: '80%',
  },
  scrollContent: {
    padding: 16,
  },
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: colors.text,
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardInfo: {
    flex: 1,
    marginLeft: 12,
  },
  cardBrand: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  cardNumber: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  pixButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 12,
    gap: 8,
  },
  pixButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  pixContent: {
    alignItems: 'center',
    paddingBottom: 32,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 24,
  },
  qrContainer: {
    padding: 24,
    backgroundColor: colors.white,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 24,
  },
  instructions: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 16,
    borderRadius: 12,
    width: '100%',
    marginBottom: 24,
  },
  codeLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    marginRight: 8,
  },
  pixCode: {
    flex: 1,
    fontSize: 14,
    color: colors.text,
    fontWeight: '500',
  },
  copyButton: {
    padding: 4,
  },
  confirmButton: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 16,
    borderRadius: 12,
    width: '100%',
  },
  confirmButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});