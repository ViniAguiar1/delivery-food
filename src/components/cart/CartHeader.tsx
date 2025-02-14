import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/color';

export function CartHeader() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Seu Carrinho</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 16,
  },
});