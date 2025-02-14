import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../theme/color';
import Geolocation from '@react-native-community/geolocation';
import Fontisto from '@expo/vector-icons/Fontisto';

interface Location {
  latitude: number;
  longitude: number;
}

interface OrderMapProps {
  restaurantLocation: Location;
  deliveryLocation: Location;
  courierLocation?: Location;
}

export const OrderMap = ({ restaurantLocation, deliveryLocation, courierLocation }) => {
  const [region, setRegion] = useState({
    latitude: (restaurantLocation.latitude + deliveryLocation.latitude) / 2,
    longitude: (restaurantLocation.longitude + deliveryLocation.longitude) / 2,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
    <View style={styles.container}>
      <MapView
        provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : undefined}
        style={styles.map}
        region={region}
        showsUserLocation
        showsMyLocationButton
      >
        {/* Restaurant Marker */}
        <Marker coordinate={restaurantLocation}>
          <View style={styles.markerContainer}>
            <MaterialCommunityIcons name="store" size={24} color={colors.primary} />
          </View>
          <Text style={styles.markerLabel}>Restaurante</Text>
        </Marker>

        {/* Delivery Location Marker */}
        <Marker coordinate={deliveryLocation}>
          <View style={styles.markerContainer}>
            <MaterialCommunityIcons name="map-marker-radius" size={24} color={colors.success} />
          </View>
          <Text style={styles.markerLabel}>Local de entrega</Text>
        </Marker>

        {/* Courier Marker (if available) */}
        {courierLocation && (
          <Marker coordinate={courierLocation}>
            <View style={styles.markerContainer}>
            <Fontisto name="motorcycle" size={24} color="#ea580c" />
            </View>
            <Text style={styles.markerLabel}>Entregador</Text>
          </Marker>
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
  },
  map: {
    flex: 1,
  },
  markerContainer: {
    backgroundColor: colors.white,
    padding: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  markerLabel: {
    backgroundColor: colors.white,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
    color: colors.text,
    textAlign: 'center',
  },
});