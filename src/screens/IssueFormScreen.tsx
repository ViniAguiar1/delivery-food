import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { colors } from '../theme/color';

const IssueFormScreen = ({ route, navigation }) => {
  const { issueType } = route.params;
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    description: '',
    orderNumber: '',
    attachments: [],
  });

  const handleSubmit = () => {
    if (!formData.description || !formData.orderNumber) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios');
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        'Solicitação enviada',
        'Recebemos sua solicitação e entraremos em contato em breve.',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('HelpCenter'),
          },
        ]
      );
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{issueType.title}</Text>
          <Text style={styles.subtitle}>
            Conte-nos mais sobre o problema
          </Text>
        </View>

        <View style={styles.form}>
          <Input
            label="Número do pedido"
            value={formData.orderNumber}
            onChangeText={(text) =>
              setFormData((prev) => ({ ...prev, orderNumber: text }))
            }
            placeholder="Ex: #123456"
            leftIcon="pound"
          />

          <Input
            label="Descrição do problema"
            value={formData.description}
            onChangeText={(text) =>
              setFormData((prev) => ({ ...prev, description: text }))
            }
            placeholder="Descreva em detalhes o que aconteceu..."
            multiline
            numberOfLines={4}
            leftIcon="text"
          />

          <View style={styles.infoContainer}>
            <MaterialCommunityIcons
              name="information"
              size={20}
              color={colors.textSecondary}
            />
            <Text style={styles.infoText}>
              Quanto mais detalhes você fornecer, mais rápido poderemos ajudar
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          onPress={handleSubmit}
          title="Enviar solicitação"
          loading={loading}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
  },
  header: {
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  form: {
    backgroundColor: colors.white,
    borderRadius: 16,
    margin: 16,
    padding: 20,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  infoText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  footer: {
    padding: 16,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
});

export default IssueFormScreen;