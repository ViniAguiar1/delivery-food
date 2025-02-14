import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../theme/color';

interface PixQRCodeProps {
  visible: boolean;
  onClose: () => void;
  pixCode: string;
  total: number;
}

export function PixQRCode({ visible, onClose, pixCode, total }: PixQRCodeProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Pagamento PIX</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <MaterialCommunityIcons name="close" size={24} color={colors.text} />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.subtitle}>
            Valor total: R$ {total.toFixed(2)}
          </Text>
          
          <View style={styles.qrContainer}>
            <QRCode
              value={pixCode}
              size={200}
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

          <TouchableOpacity style={styles.confirmButton} onPress={onClose}>
            <Text style={styles.confirmButtonText}>Já realizei o pagamento</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  content: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 24,
    width: '100%',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  closeButton: {
    padding: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
  },
  subtitle: {
    fontSize: 18,
    color: colors.primary,
    marginBottom: 24,
  },
  qrContainer: {
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
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
  },
  codeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 12,
    borderRadius: 8,
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
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    width: '100%',
  },
  confirmButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});