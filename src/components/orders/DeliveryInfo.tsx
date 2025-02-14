import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../theme/color';

interface DeliveryInfoProps {
  address: string;
}

const DeliveryInfo = ({ address }: DeliveryInfoProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Endereço de entrega</Text>

      <View style={styles.addressContainer}>
        <MaterialCommunityIcons
          name="map-marker"
          size={24}
          color={colors.primary}
          style={styles.icon}
        />
        <Text style={styles.address}>{address}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  icon: {
    marginRight: 12,
    marginTop: 2,
  },
  address: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    color: colors.text,
  },
});

export default DeliveryInfo;