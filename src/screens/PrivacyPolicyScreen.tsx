import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AcceptanceButton } from '../components/common/AcceptanceButton';
import { LegalSection } from '../components/common/LegalSection';
import { getAcceptanceStatus, setAcceptanceStatus, StorageKeys } from '../utils/storage';
import { ActivityIndicator } from 'react-native';

export function PrivacyPolicyScreen() {
  const [accepted, setAccepted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [initialLoading, setInitialLoading] = useState<boolean>(true);

  useEffect(() => {
    checkAcceptanceStatus();
  }, []);

  const checkAcceptanceStatus = async () => {
    const status = await getAcceptanceStatus(StorageKeys.PRIVACY_POLICY_ACCEPTED);
    setAccepted(status);
    setInitialLoading(false);
  };

  const handleAccept = async () => {
    setLoading(true);
    try {
      await setAcceptanceStatus(StorageKeys.PRIVACY_POLICY_ACCEPTED, true);
      setAccepted(true);
      Alert.alert('Sucesso', 'Política de Privacidade aceita com sucesso!');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível aceitar a política de privacidade.');
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
          <Text style={styles.title}>Política de Privacidade</Text>
          <Text style={styles.lastUpdated}>Última atualização: 01 de março de 2024</Text>
          
          <LegalSection
            title="1. Coleta de Informações"
            content="Coletamos informações que você nos fornece diretamente ao usar nosso aplicativo, incluindo dados de registro, informações de perfil e conteúdo gerado pelo usuário."
          />
          
          <LegalSection
            title="2. Uso das Informações"
            content="Utilizamos as informações coletadas para fornecer, manter e melhorar nossos serviços, personalizar sua experiência e enviar atualizações importantes."
          />
          
          <LegalSection
            title="3. Compartilhamento de Informações"
            content="Não compartilhamos suas informações pessoais com terceiros sem seu consentimento expresso, exceto quando exigido por lei."
          />
          
          <LegalSection
            title="4. Segurança"
            content="Implementamos medidas técnicas e organizacionais apropriadas para proteger suas informações contra acesso não autorizado ou processamento ilegal."
          />
        </View>
      </ScrollView>
      
      {!accepted && (
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Ao aceitar, você concorda com nossa Política de Privacidade e como tratamos seus dados.
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