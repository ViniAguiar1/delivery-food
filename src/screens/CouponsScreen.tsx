import React, { useState } from 'react';
import { 
  View, 
  FlatList, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Modal,
  ScrollView,
  Alert,
  ActivityIndicator,
  Switch,
  Pressable,
  Image
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as LocalAuthentication from 'expo-local-authentication';
import QRCode from 'react-native-qrcode-svg';
import * as Clipboard from 'expo-clipboard';
import { colors } from '../theme/color';

const PAYMENT_METHODS = [
  { id: 'credit', name: 'Cartão de Crédito', icon: 'credit-card' },
  { id: 'debit', name: 'Cartão de Débito', icon: 'credit-card-outline' },
  { id: 'pix', name: 'PIX', icon: 'qrcode' },
];

const SAVED_CARDS = [
  { id: '1', last4: '4242', brand: 'Visa', type: 'credit' },
  { id: '2', last4: '5555', brand: 'Mastercard', type: 'debit' },
];

const MOCK_COUPONS = [
  {
    id: '1',
    code: 'PRIMEIRA20',
    discount: '20% OFF',
    description: 'Desconto de 20% na primeira compra',
    validUntil: '31/03/2024',
    minValue: 50,
    isActive: false,
    price: 10,
    usesLeft: 3,
    maxUses: 3,
    purchased: false,
  },
  {
    id: '2',
    code: 'FRETE10',
    discount: 'FRETE GRÁTIS',
    description: 'Frete grátis em pedidos acima de R$ 50',
    validUntil: '15/03/2024',
    minValue: 50,
    isActive: false,
    price: 15,
    usesLeft: 2,
    maxUses: 3,
    purchased: true,
  },
  {
    id: '3',
    code: 'COMBO30',
    discount: '30% OFF',
    description: 'Desconto em combos selecionados',
    validUntil: '20/03/2024',
    minValue: 80,
    isActive: false,
    price: 20,
    usesLeft: 0,
    maxUses: 3,
    purchased: true,
  },
];

export function CouponsScreen() {
  const [paymentModalVisible, setPaymentModalVisible] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [pixCode, setPixCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const [coupons, setCoupons] = useState(MOCK_COUPONS);
  const [selectedCoupon, setSelectedCoupon] = useState(null);

  const toggleCouponStatus = (id: string) => {
    setCoupons(prevCoupons =>
      prevCoupons.map(coupon =>
        coupon.id === id && coupon.usesLeft > 0
          ? { ...coupon, isActive: !coupon.isActive }
          : coupon
      )
    );
  };

  const handleBuyCoupon = (coupon) => {
    if (coupon.purchased) {
      Alert.alert('Aviso', 'Você já possui este cupom!');
      return;
    }
    setSelectedCoupon(coupon);
    setPaymentModalVisible(true);
  };

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
    if (method.id === 'pix') {
      generatePixCode();
    }
  };

  const generatePixCode = () => {
    setLoading(true);
    setTimeout(() => {
      setPixCode('00020126580014BR.GOV.BCB.PIX0136123e4567-e89b-12d3-a456-426614174000');
      setLoading(false);
    }, 1500);
  };

  const handleCardSelect = async (card) => {
    setSelectedCard(card);
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Autentique para confirmar o pagamento',
        fallbackLabel: 'Use sua senha',
        cancelLabel: 'Cancelar',
      });

      if (result.success) {
        processPayment(card);
      } else {
        Alert.alert('Erro', 'Autenticação falhou. Tente novamente.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível realizar a autenticação.');
    }
  };

  const processPayment = (card) => {
    setLoading(true);
    setTimeout(() => {
      setCoupons(prevCoupons =>
        prevCoupons.map(coupon =>
          coupon.id === selectedCoupon.id
            ? { ...coupon, purchased: true, isActive: true, usesLeft: coupon.maxUses }
            : coupon
        )
      );
      setLoading(false);
      Alert.alert('Sucesso', 'Cupom adquirido com sucesso!');
      setPaymentModalVisible(false);
      setSelectedPaymentMethod(null);
      setSelectedCard(null);
      setPixCode(null);
    }, 2000);
  };

  const copyPixCode = async () => {
    await Clipboard.setStringAsync(pixCode);
    Alert.alert('Sucesso', 'Código PIX copiado para a área de transferência!');
  };

  const renderPaymentMethods = () => (
    <View style={styles.paymentMethodsContainer}>
      {PAYMENT_METHODS.map((method) => (
        <TouchableOpacity
          key={method.id}
          style={[
            styles.paymentMethod,
            selectedPaymentMethod?.id === method.id && styles.selectedPaymentMethod,
          ]}
          onPress={() => handlePaymentMethodSelect(method)}
        >
          <MaterialCommunityIcons
            name={method.icon}
            size={24}
            color={selectedPaymentMethod?.id === method.id ? colors.primary : colors.text}
          />
          <Text style={styles.paymentMethodText}>{method.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderCardSelection = () => (
    <View style={styles.cardsContainer}>
      {SAVED_CARDS.filter(card => card.type === selectedPaymentMethod.id).map((card) => (
        <TouchableOpacity
          key={card.id}
          style={[
            styles.cardItem,
            selectedCard?.id === card.id && styles.selectedCard,
          ]}
          onPress={() => handleCardSelect(card)}
        >
          <MaterialCommunityIcons
            name={card.brand.toLowerCase() === 'visa' ? 'credit-card' : 'credit-card-outline'}
            size={24}
            color={selectedCard?.id === card.id ? colors.primary : colors.text}
          />
          <Text style={styles.cardText}>
            {card.brand} terminado em {card.last4}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderPixPayment = () => (
    <View style={styles.pixContainer}>
      {loading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <>
          <QRCode
            value={pixCode}
            size={200}
            color={colors.text}
            backgroundColor={colors.white}
          />
          <TouchableOpacity style={styles.copyButton} onPress={copyPixCode}>
            <Text style={styles.copyButtonText}>Copiar código PIX</Text>
          </TouchableOpacity>
          <Text style={styles.pixInstructions}>
            Escaneie o QR Code ou copie o código para pagar
          </Text>
        </>
      )}
    </View>
  );

  const renderCoupon = ({ item }) => (
    <View
      style={[
        styles.couponCard,
        item.usesLeft === 0 && styles.expiredCoupon
      ]}
    >
      <View style={styles.couponHeader}>
        <View style={styles.discountSection}>
          <Text style={styles.discountText}>{item.discount}</Text>
          <Text style={styles.codeText}>{item.code}</Text>
          {item.purchased && (
            <View style={styles.usageContainer}>
              <Text style={styles.usageText}>
                Usos restantes: {item.usesLeft}/{item.maxUses}
              </Text>
              <View style={styles.progressBar}>
                <View 
                  style={[
                    styles.progressFill,
                    { width: `${(item.usesLeft / item.maxUses) * 100}%` }
                  ]} 
                />
              </View>
            </View>
          )}
        </View>
        <View style={styles.priceContainer}>
          {!item.purchased ? (
            <>
              <Text style={styles.priceLabel}>Preço:</Text>
              <Text style={styles.priceValue}>R$ {item.price}</Text>
              <TouchableOpacity
                style={styles.buyButton}
                onPress={() => handleBuyCoupon(item)}
              >
                <Text style={styles.buyButtonText}>Comprar</Text>
              </TouchableOpacity>
            </>
          ) : (
            <View style={styles.statusContainer}>
              <Text style={styles.statusText}>
                {item.usesLeft > 0 ? 'Ativar' : 'Expirado'}
              </Text>
              <Switch
                value={item.isActive}
                onValueChange={() => toggleCouponStatus(item.id)}
                disabled={item.usesLeft === 0}
                trackColor={{ false: colors.border, true: `${colors.primary}80` }}
                thumbColor={item.isActive ? colors.primary : '#f4f3f4'}
              />
            </View>
          )}
        </View>
      </View>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.couponFooter}>
        <Text style={styles.validText}>Válido até {item.validUntil}</Text>
        <Text style={styles.minValueText}>
          Pedido mínimo: R$ {item.minValue}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={coupons}
        renderItem={renderCoupon}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <MaterialCommunityIcons 
              name="ticket-outline" 
              size={64} 
              color={colors.textSecondary} 
            />
            <Text style={styles.emptyText}>
              Você não possui cupons disponíveis
            </Text>
          </View>
        }
      />

      <Modal
        visible={paymentModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setPaymentModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Escolha a forma de pagamento</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setPaymentModalVisible(false)}
              >
                <MaterialCommunityIcons name="close" size={24} color={colors.text} />
              </TouchableOpacity>
            </View>

            {renderPaymentMethods()}

            {selectedPaymentMethod && (
              <View style={styles.paymentContent}>
                {['credit', 'debit'].includes(selectedPaymentMethod.id)
                  ? renderCardSelection()
                  : renderPixPayment()
                }
              </View>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listContainer: {
    padding: 8,
  },
  couponCard: {
    backgroundColor: colors.white,
    margin: 8,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  expiredCoupon: {
    opacity: 0.6,
  },
  couponHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  discountSection: {
    flex: 1,
  },
  discountText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
  },
  codeText: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },
  usageContainer: {
    marginTop: 8,
  },
  usageText: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  progressBar: {
    height: 4,
    backgroundColor: colors.border,
    borderRadius: 2,
    overflow: 'hidden',
    width: '100%',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  priceLabel: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  priceValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  buyButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buyButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  statusContainer: {
    alignItems: 'center',
  },
  statusText: {
    fontSize: 12,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 12,
  },
  couponFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  validText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  minValueText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
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
    justifyContent: 'space-between',
    marginBottom: 24,
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
  paymentContent: {
    padding: 16,
  },
  cardsContainer: {
    gap: 12,
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  selectedCard: {
    borderColor: colors.primary,
    backgroundColor: `${colors.primary}10`,
  },
  cardText: {
    marginLeft: 12,
    fontSize: 14,
    color: colors.text,
  },
  pixContainer: {
    alignItems: 'center',
    padding: 16,
  },
  copyButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  copyButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  pixInstructions: {
    marginTop: 16,
    textAlign: 'center',
    color: colors.textSecondary,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  emptyText: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 16,
  },
});