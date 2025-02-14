import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../theme/color';
import { LinearGradient } from 'expo-linear-gradient';

interface CreditCardProps {
  card: {
    brand: string;
    last4: string;
    expiryDate: string;
    cardholderName: string;
    backgroundColor: string[];
  };
}


const CreditCard = ({ card }: CreditCardProps) => {
  const getBrandIcon = () => {
    switch (card.brand.toLowerCase()) {
      case 'visa':
        return 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg';
      case 'mastercard':
        return 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg';
      default:
        return 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg';
    }
  };

  const isValidGradient = Array.isArray(card.backgroundColor) && card.backgroundColor.length > 0;

  return (
    <LinearGradient
      colors={isValidGradient ? card.backgroundColor : ['#000000', '#434343']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.header}>
        <MaterialCommunityIcons name="chip" size={32} color="#FFF" />
        <Image source={{ uri: getBrandIcon() }} style={styles.brandLogo} />
      </View>
      <Text style={styles.cardNumber}>•••• •••• •••• {card.last4}</Text>
      <View style={styles.footer}>
        <View>
          <Text style={styles.label}>TITULAR</Text>
          <Text style={styles.value}>{card.cardholderName || 'N/A'}</Text>
        </View>
        <View>
          <Text style={styles.label}>VALIDADE</Text>
          <Text style={styles.value}>{card.expiryDate || 'N/A'}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderRadius: 16,
    height: 200,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  brandLogo: {
    width: 60,
    height: 40,
    resizeMode: 'contain',
  },
  cardNumber: {
    fontSize: 22,
    color: '#FFF',
    letterSpacing: 2,
    marginBottom: 24,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 10,
    color: '#FFF',
    opacity: 0.8,
    marginBottom: 4,
  },
  value: {
    fontSize: 14,
    color: '#FFF',
    letterSpacing: 1,
  },
});

export default CreditCard;
