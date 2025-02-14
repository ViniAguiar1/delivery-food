import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { OrderMap } from './OrderMap';
import { colors } from '../../theme/color';
import Fontisto from '@expo/vector-icons/Fontisto';

const OrderTrackingMap = ({ order }) => {
  // Sample locations - In a real app, these would come from your backend
  const locations = {
    restaurant: {
      latitude: -23.5505,
      longitude: -46.6333,
    },
    delivery: {
      latitude: -23.5605,
      longitude: -46.6433,
    },
    courier: {
      latitude: -23.5555,
      longitude: -46.6383,
    },
  };

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'confirmado':
        return 'check-circle';
      case 'preparando':
        return 'food';
      case 'em andamento':
        return 'truck-delivery';
      case 'entregue':
        return 'package-variant-closed';
      default:
        return 'clock-outline';
    }
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'confirmado':
        return colors.success;
      case 'preparando':
        return colors.primary;
      case 'em andamento':
        return '#FF9800';
      case 'entregue':
        return colors.success;
      default:
        return colors.textSecondary;
    }
  };

  const orderSteps = [
    { id: 1, title: 'Pedido confirmado', status: 'Confirmado', time: '12:30' },
    { id: 2, title: 'Preparando seu pedido', status: 'Preparando', time: '12:35' },
    { id: 3, title: 'Saiu para entrega', status: 'Em andamento', time: '12:50' },
    { id: 4, title: 'Pedido entregue', status: 'Pendente', time: '--:--' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="map-marker-radius"
          size={24}
          color={colors.primary}
        />
        <Text style={styles.headerTitle}>Acompanhe seu pedido</Text>
      </View>

      {/* Map Component */}
      <OrderMap
        restaurantLocation={locations.restaurant}
        deliveryLocation={locations.delivery}
        courierLocation={locations.courier}
      />

      <View style={styles.timeline}>
        {orderSteps.map((step, index) => (
          <View key={step.id} style={styles.timelineItem}>
            <View style={styles.timelineLeft}>
              <View
                style={[
                  styles.timelineDot,
                  {
                    backgroundColor: getStatusColor(step.status),
                  },
                ]}
              >
                <MaterialCommunityIcons
                  name={getStatusIcon(step.status)}
                  size={16}
                  color={colors.white}
                />
              </View>
              {index < orderSteps.length - 1 && (
                <View
                  style={[
                    styles.timelineLine,
                    {
                      backgroundColor:
                        step.status.toLowerCase() !== 'pendente'
                          ? getStatusColor(step.status)
                          : colors.border,
                    },
                  ]}
                />
              )}
            </View>

            <View style={styles.timelineContent}>
              <Text style={styles.timelineTitle}>{step.title}</Text>
              <Text style={styles.timelineTime}>{step.time}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.estimateContainer}>
        <MaterialCommunityIcons
          name="clock-outline"
          size={20}
          color={colors.primary}
        />
        <Text style={styles.estimateText}>
          Previsão de entrega: 13:20 - 13:40
        </Text>
      </View>

      <View style={styles.deliveryInfoContainer}>
        <View style={styles.deliveryPersonInfo}>
          <View style={styles.avatarContainer}>
            <MaterialCommunityIcons
              name="account"
              size={24}
              color={colors.white}
            />
          </View>
          <View style={styles.deliveryTextInfo}>
            <Text style={styles.deliveryName}>João Silva</Text>
            <Text style={styles.deliveryStatus}>Seu entregador</Text>
          </View>
        </View>
        <View style={styles.vehicleInfo}>
        <Fontisto name="motorcycle" size={24} color="#ea580c" />
          <Text style={styles.licensePlate}>ABC-1234</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 16,
    margin: 16,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginLeft: 8,
  },
  timeline: {
    marginVertical: 24,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  timelineLeft: {
    alignItems: 'center',
    width: 24,
  },
  timelineDot: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: colors.border,
    marginVertical: 4,
  },
  timelineContent: {
    flex: 1,
    marginLeft: 12,
    marginTop: 4,
  },
  timelineTitle: {
    fontSize: 16,
    color: colors.text,
    fontWeight: '500',
  },
  timelineTime: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
  },
  estimateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${colors.primary}10`,
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  estimateText: {
    marginLeft: 8,
    fontSize: 14,
    color: colors.primary,
    fontWeight: '500',
  },
  deliveryInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 16,
    borderRadius: 12,
  },
  deliveryPersonInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deliveryTextInfo: {
    marginLeft: 12,
  },
  deliveryName: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  deliveryStatus: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  vehicleInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  licensePlate: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
    marginLeft: 4,
  },
});

export default OrderTrackingMap;