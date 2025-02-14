import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AcceptanceButton } from '../components/common/AcceptanceButton';
import { LegalSection } from '../components/common/LegalSection';
import { getAcceptanceStatus, setAcceptanceStatus, StorageKeys } from '../utils/storage';
import { ActivityIndicator } from 'react-native';

export function TermsOfServiceScreen() {
  const [accepted, setAccepted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [initialLoading, setInitialLoading] = useState<boolean>(true);

  useEffect(() => {
    checkAcceptanceStatus();
  }, []);

  const checkAcceptanceStatus = async () => {
    const status = await getAcceptanceStatus(StorageKeys.TERMS_ACCEPTED);
    setAccepted(status);
    setInitialLoading(false);
  };

  const handleAccept = async () => {
    setLoading(true);
    try {
      await setAcceptanceStatus(StorageKeys.TERMS_ACCEPTED, true);
      setAccepted(true);
      Alert.alert('Sucesso', 'Termos de Uso aceitos com sucesso!');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível aceitar os termos de uso.');
    } finally {
      setLoading(false);
    }
  };

  if (initialLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2e6ddf" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.title}>Termos de Uso</Text>
          <Text style={styles.lastUpdated}>Última atualização: 01 de março de 2024</Text>
          
          <LegalSection
            title="1. Aceitação dos Termos"
            content="Ao acessar e usar nosso aplicativo, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não poderá usar nossos serviços."
          />
          
          <LegalSection
            title="2. Uso do Serviço"
            content="Você concorda em usar nosso serviço apenas para propósitos legais e de acordo com estes termos. Você não deve usar o serviço de maneira que possa danificar, desabilitar ou sobrecarregar nossos servidores."
          />
          
          <LegalSection
            title="3. Conta do Usuário"
            content="Você é responsável por manter a confidencialidade de sua conta e senha. Você concorda em notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta."
          />
          
          <LegalSection
            title="4. Modificações dos Termos"
            content="Reservamos o direito de modificar estes termos a qualquer momento. Continuando a usar o serviço após tais modificações, você concorda com os novos termos."
          />
        </View>
      </ScrollView>
      
      {!accepted && (
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Ao aceitar, você concorda com nossos Termos de Uso e todas as condições estabelecidas.
          </Text>
          <AcceptanceButton onAccept={handleAccept} loading={loading} />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
    textAlign: 'center',
  },
  lastUpdated: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  footer: {
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e1e1e1',
  },
  footerText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 16,
  },
});