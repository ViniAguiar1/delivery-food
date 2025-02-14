import React from 'react';
import { View, ScrollView, StyleSheet, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import OrderHeader from '../components/orders/OrderHeader';
import { OrderSummary } from '../components/orders/OrderSummary';
import DeliveryInfo from '../components/orders/DeliveryInfo';
import { PaymentInfo } from '../components/orders/PaymentInfo';
import OrderTrackingMap from '../components/orders/OrderTrackingMap';
import { colors } from '../theme/color';

export default function OrderDetailsScreen() {
  // Receber os dados do pedido via navegação
  const route = useRoute();
  const { order } = route.params; // O objeto "order" é recebido da navegação

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Capa */}
        <Image
          source={{ uri: order.restaurantImage }}
          style={styles.coverImage}
          resizeMode="cover"
        />

        {/* Cabeçalho */}
        <OrderHeader
          restaurantName={order.restaurantName}
          orderNumber={order.id}
          orderDate={new Date(order.orderDate).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
          status={order.status}
        />

        {/* Mapa de rastreamento para pedidos não entregues */}
        {order.status.toLowerCase() !== 'entregue' && (
          <OrderTrackingMap order={order} />
        )}

        {/* Itens do pedido */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Itens do Pedido</Text>
          {order.items.map((item, index) => (
            <View key={index} style={styles.orderItem}>
              <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>
                  R$ {(item.price * item.quantity).toFixed(2)}
                </Text>
                {item.selectedAccompaniments?.free?.length > 0 && (
                  <Text style={styles.accompaniments}>
                    Acompanhamentos grátis: {item.selectedAccompaniments.free.map(a => a.name).join(', ')}
                  </Text>
                )}
                {item.selectedAccompaniments?.paid?.length > 0 && (
                  <Text style={styles.accompaniments}>
                    Acompanhamentos pagos: {item.selectedAccompaniments.paid.map(a => `${a.name} (+R$ ${a.price.toFixed(2)})`).join(', ')}
                  </Text>
                )}
                {item.selectedSuggestedItems?.length > 0 && (
                  <Text style={styles.accompaniments}>
                    Adicionais: {item.selectedSuggestedItems.map(a => `${a.name} (+R$ ${a.price.toFixed(2)})`).join(', ')}
                  </Text>
                )}
              </View>
              <Text style={styles.quantity}>Qtd: {item.quantity}</Text>
            </View>
          ))}
        </View>

        {/* Resumo do pedido */}
        <OrderSummary
          subtotal={`R$ ${(order.total - order.deliveryFee).toFixed(2)}`}
          deliveryFee={`R$ ${order.deliveryFee.toFixed(2)}`}
          total={`R$ ${order.total.toFixed(2)}`}
        />

        {/* Informações de pagamento */}
        <PaymentInfo method={order.paymentMethod.name} />

        {/* Informações de entrega */}
        <DeliveryInfo address={order.address || 'Endereço não disponível'} />
      </ScrollView>
    </View> // Certifique-se de que esta View está fechando corretamente.
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  coverImage: {
    width: '100%',
    height: 200,
    marginBottom: 8,
  },
  section: {
    backgroundColor: colors.white,
    marginVertical: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: colors.text,
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textSecondary,
  },
  quantity: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  accompaniments: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.textSecondary,
    marginTop: 4,
  },
});
