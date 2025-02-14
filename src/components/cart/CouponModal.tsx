import React from 'react';
import { Modal, View, TouchableOpacity, Text, ScrollView, StyleSheet, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../theme/color';
import { AVAILABLE_COUPONS } from '../../constants/coupon';

interface CouponModalProps {
  visible: boolean;
  selectedCoupon: any;
  onSelectCoupon: (coupon: any) => void;
  onClose: () => void;
  cartTotal: number;
}

export function CouponModal({
  visible,
  selectedCoupon,
  onSelectCoupon,
  onClose,
  cartTotal,
}: CouponModalProps) {
  const handleCouponSelect = (coupon: any) => {
    if (cartTotal < coupon.minValue) {
      Alert.alert(
        'Cupom não aplicável',
        `Valor mínimo para este cupom é R$ ${coupon.minValue.toFixed(2)}`
      );
      return;
    }
    onSelectCoupon(coupon);
  };

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
            <Text style={styles.modalTitle}>Selecionar Cupom</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <MaterialCommunityIcons name="close" size={24} color={colors.text} />
            </TouchableOpacity>
          </View>

          <ScrollView>
            {AVAILABLE_COUPONS.map((coupon) => (
              <TouchableOpacity
                key={coupon.id}
                style={[
                  styles.couponItem,
                  selectedCoupon?.id === coupon.id && styles.selectedCoupon,
                ]}
                onPress={() => handleCouponSelect(coupon)}
              >
                <View>
                  <Text style={styles.couponDiscount}>{coupon.discount}</Text>
                  <Text style={styles.couponCode}>{coupon.code}</Text>
                  <Text style={styles.couponDescription}>{coupon.description}</Text>
                </View>
                {selectedCoupon?.id === coupon.id && (
                  <MaterialCommunityIcons name="check-circle" size={24} color={colors.primary} />
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
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
  couponItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  selectedCoupon: {
    borderColor: colors.primary,
    backgroundColor: `${colors.primary}10`,
  },
  couponDiscount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  couponCode: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 4,
  },
  couponDescription: {
    fontSize: 14,
    color: colors.text,
    marginTop: 4,
  },
});