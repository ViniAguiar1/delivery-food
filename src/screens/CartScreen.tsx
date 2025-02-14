import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Modal, Text, Button, TouchableOpacity } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import * as Notifications from 'expo-notifications';

import { CartHeader } from '../components/cart/CartHeader';
import CartItemList from '../components/cart/CartItemList';
import { CartFooter } from '../components/cart/CartFooter';
import { PaymentMethodModal } from '../components/cart/PaymentMethodModal';
import { CouponModal } from '../components/cart/CouponModal';
import { LoadingOverlay } from '../components/common/LoadingOverlay';
import { SuccessMessage } from '../components/common/SuccessMessage';
import { EmptyCart } from '../components/cart/EmptyCart';
import { CouponButton } from '../components/cart/CouponButton';
import { CartTotal } from '../components/cart/CartTotal';
import { CartService } from '../services/CartService';
import { colors } from '../theme/color';
import { useCart } from '../hooks/useCart';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { restaurants } from '../data/restaurants';
import { AddressSelector } from '../components/AddressSelector';
import AddressButton from '../components/address/AddressButton';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

// Componente de Modal para mensagens de erro
const ErrorModal = ({ visible, message, onClose }) => (
  <Modal visible={visible} transparent={true} animationType="slide">
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>
        <Text style={styles.modalMessage}>{message}</Text>
        <Button title="Fechar" onPress={onClose} />
      </View>
    </View>
  </Modal>
);

export default function CartScreen() {
  const navigation = useNavigation();
  const { cartItems, total, loading, setLoading, subtotal } = useCart();
  const [paymentModalVisible, setPaymentModalVisible] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false); // Estado para controlar sucesso do pagamento
  const [couponModalVisible, setCouponModalVisible] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [pixCode, setPixCode] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addressModalVisible, setAddressModalVisible] = useState(false);
  const [orderStatus, setOrderStatus] = useState('pending'); // Estado para controlar o status do pedido

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
    if (method.id === 'pix') {
      setPixCode('');
    }
  };

  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
    setAddressModalVisible(false);
  };

  const handleCardSelect = async () => {
    try {
      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Confirme seu pagamento com biometria',
        fallbackLabel: 'Use sua senha',
      });

      if (result.success) {
        processPayment('Pagamento com cartão realizado com sucesso! 💳');
      }
    } catch (error) {
      setErrorVisible(true);
    }
  };

  const generatePixCode = () => {
    const randomCode = Math.random().toString(36).substring(2, 15);
    setPixCode(`PIX${randomCode.toUpperCase()}`);
  };

  const handleConfirmPixPayment = () => {
    processPayment('Pagamento PIX confirmado com sucesso! 🎉');
  };

  const requestNotificationPermissions = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== 'granted') {
      const { status: newStatus } = await Notifications.requestPermissionsAsync();
      if (newStatus !== 'granted') {
        console.error('Permissões de notificação não concedidas');
        return false;
      }
    }
    return true;
  };

  const sendOrderNotification = async (message) => {
    const hasPermission = await requestNotificationPermissions();
    if (!hasPermission) return;
  
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Atualização do Pedido',
          body: message,
          sound: true,
        },
        trigger: { seconds: 1 }, // Garante envio em 1 segundo
      });
    } catch (error) {
      console.error('Erro ao enviar notificação:', error);
    }
  };  

  const processPayment = async (message) => {
    if (!selectedAddress) {
      setErrorVisible(true);
      return;
    }
  
    setLoading(true);
    setPaymentModalVisible(false);
    setOrderStatus('completed'); // Atualiza o status do pedido para concluído
  
    await new Promise((resolve) => setTimeout(resolve, 1000));
  
    const currentRestaurant = restaurants.find((restaurant) =>
      cartItems.some((item) =>
        restaurant.dishes.some((dish) => dish.id.toString() === item.id)
      )
    );
  
    const { finalTotal, deliveryFee, discount } = calculateFinalTotal();
  
    const order = {
      id: new Date().toISOString(),
      items: cartItems,
      total: finalTotal, // Valor total correto
      discount, // Valor do desconto aplicado
      deliveryFee, // Taxa de entrega
      orderDate: new Date().toISOString(),
      restaurantName: currentRestaurant?.name || 'Restaurante Desconhecido',
      restaurantImage: currentRestaurant?.image || 'https://via.placeholder.com/150',
      status: 'pending',
      paymentMethod: selectedPaymentMethod,
    };
  
    try {
      const existingOrders = await AsyncStorage.getItem('orders');
      const updatedOrders = existingOrders ? JSON.parse(existingOrders).concat(order) : [order];
      await AsyncStorage.setItem('orders', JSON.stringify(updatedOrders));
  
      // Definir sucesso no pagamento e mensagem de sucesso
      setPaymentSuccess(true);
      setSuccessMessage('Pagamento realizado com sucesso!');
      setShowSuccessMessage(true);
  
      // Iniciar notificações a cada 5 segundos
      startNotificationInterval();
  
    } catch (error) {
      console.error('Erro ao salvar pedido:', error);
    }
  
    setLoading(false);
    setIsSuccess(false);
    CartService.clearCart();
    navigation.navigate('OrdersTab');
  };
  
  const startNotificationInterval = () => {
    const interval = setInterval(() => {
      if (orderStatus === 'pending') {
        sendOrderNotification('Seu pedido está sendo processado...');
      } else {
        clearInterval(interval); // Limpa o intervalo quando o status do pedido mudar
      }
    }, 5000); // Envia notificações a cada 5 segundos
  };    
  
  
  const calculateDiscount = () => {
    let discount = 0;

    if (selectedCoupon) {
      if (selectedCoupon.code === 'PRIMEIRA20') {
        discount = subtotal * 0.2; // 20% de desconto no subtotal.
      }
      // Não calcula desconto como valor fixo para "FRETE10".
    }

    return discount; // Retorna 0 se nenhum cupom for selecionado.
  };

  const calculateFinalTotal = () => {
    const discount = calculateDiscount();
    let finalTotal = subtotal - discount;

    // Zerando taxa de entrega quando o cupom for FRETE10
    const deliveryFee = selectedCoupon && selectedCoupon.code === 'FRETE10' ? 0 : 5.99;

    finalTotal += deliveryFee;

    // Evita NaN retornando um valor padrão quando subtotal ou finalTotal é inválido.
    return {
      finalTotal: isNaN(finalTotal) ? 0 : finalTotal,
      discount: isNaN(discount) ? 0 : discount,
      deliveryFee: isNaN(deliveryFee) ? 0 : deliveryFee,
    };
  };

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <View style={styles.container}>
      <CartHeader />

      <SuccessMessage
  message={successMessage}
  visible={showSuccessMessage}
  onHide={() => setShowSuccessMessage(false)}
/>


      <LoadingOverlay visible={loading} isSuccess={isSuccess} />

      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <CartItemList items={cartItems} />

          <AddressButton
            selectedAddress={selectedAddress}  // Passando o endereço selecionado
            onPress={() => setAddressModalVisible(true)}  // Abre o modal de seleção de endereço
          />

          <CouponButton
            selectedCoupon={selectedCoupon}
            onPress={() => setCouponModalVisible(true)}
          />

          <CartTotal
            subtotal={subtotal}
            deliveryFee={calculateFinalTotal().deliveryFee} // Taxa de entrega corrigida
            discount={calculateFinalTotal().discount}       // Valor do desconto
            total={calculateFinalTotal().finalTotal}        // Total final
          />


        </View>
      </ScrollView>

      <AddressSelector
        visible={addressModalVisible}
        onClose={() => setAddressModalVisible(false)}
        onSelectAddress={handleSelectAddress}
      />


      <CartFooter
        total={calculateFinalTotal().finalTotal}
        selectedPaymentMethod={selectedPaymentMethod}
        onPaymentPress={() => setPaymentModalVisible(true)}
      />


      <PaymentMethodModal
        visible={paymentModalVisible}
        selectedMethod={selectedPaymentMethod}
        onSelectMethod={handlePaymentMethodSelect}
        onSelectCard={handleCardSelect}
        onGeneratePix={generatePixCode}
        onConfirmPixPayment={handleConfirmPixPayment}
        onClose={() => setPaymentModalVisible(false)}
        pixCode={pixCode}
        total={calculateFinalTotal().finalTotal}
      />

      <ErrorModal
        visible={errorVisible}
        message="Por favor, selecione um endereço de entrega antes de confirmar o pedido."
        onClose={() => setErrorVisible(false)}
      />

      <CouponModal
        visible={couponModalVisible}
        selectedCoupon={selectedCoupon}
        onSelectCoupon={setSelectedCoupon}
        onClose={() => setCouponModalVisible(false)}
        cartTotal={total}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalMessage: {
    marginBottom: 20,
    textAlign: 'center',
  },
  addressButton: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: colors.lightGray,
    borderRadius: 5,
  },
  addressButtonText: {
    color: colors.darkGray,
    fontSize: 16,
  },
});
