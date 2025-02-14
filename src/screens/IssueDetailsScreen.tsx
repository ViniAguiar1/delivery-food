import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity, Modal, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../theme/color';
import OrderTrackingMap from '../components/orders/OrderTrackingMap';

export const IssueDetailsScreen = ({ route, navigation }) => {
  const { issue } = route.params;

  const timeline = [
    {
      id: 1,
      title: 'Solicitação aberta',
      description: 'Sua solicitação foi registrada',
      date: '15/03/2024 12:30',
      status: 'completed',
    },
    {
      id: 2,
      title: 'Em análise',
      description: 'Nossa equipe está analisando sua solicitação',
      date: '15/03/2024 12:35',
      status: 'current',
    },
    {
      id: 3,
      title: 'Resolução',
      description: 'Aguardando resolução',
      date: '--/-- --:--',
      status: 'pending',
    },
  ];

  // Estado para controlar a exibição do modal de adicionar informações
  const [modalVisible, setModalVisible] = useState(false);
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleAddInfo = () => {
    // Função para salvar as informações adicionais, por exemplo:
    console.log('Informações adicionadas:', additionalInfo);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.issueInfo}>
            <Text style={styles.issueId}>{issue.title}</Text>
            <View
              style={[
                styles.statusBadge,
                {
                  backgroundColor:
                    issue.status === 'Resolvido'
                      ? `${colors.success}20`
                      : `${colors.primary}20`,
                },
              ]}>
              <Text
                style={[
                  styles.statusText,
                  {
                    color:
                      issue.status === 'Resolvido'
                        ? colors.success
                        : colors.primary,
                  },
                ]}>
                {issue.status}
              </Text>
            </View>
          </View>
          <Text style={styles.issueType}>{issue.type}</Text>
          <Text style={styles.issueDate}>Aberto em {issue.date}</Text>
        </View>

        {/* Order Map if issue is related to delivery */}
        {issue.type === 'Atraso na entrega' && <OrderTrackingMap order={issue} />}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Linha do tempo</Text>
          <View style={styles.timeline}>
            {timeline.map((item, index) => (
              <View key={item.id} style={styles.timelineItem}>
                <View style={styles.timelineLeft}>
                  <View
                    style={[
                      styles.timelineDot,
                      {
                        backgroundColor:
                          item.status === 'completed'
                            ? colors.success
                            : item.status === 'current'
                            ? colors.primary
                            : colors.border,
                      },
                    ]}
                  />
                  {index < timeline.length - 1 && (
                    <View
                      style={[
                        styles.timelineLine,
                        {
                          backgroundColor:
                            item.status === 'completed'
                              ? colors.success
                              : colors.border,
                        },
                      ]}
                    />
                  )}
                </View>
                <View style={styles.timelineContent}>
                  <Text style={styles.timelineTitle}>{item.title}</Text>
                  <Text style={styles.timelineDescription}>
                    {item.description}
                  </Text>
                  <Text style={styles.timelineDate}>{item.date}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* <View style={styles.section}>
          <Text style={styles.sectionTitle}>Detalhes da solicitação</Text>
          <Text style={styles.description}>
            Descreva mais detalhes sobre seu problema para que possamos ajudar melhor.
          </Text>
          <TouchableOpacity
            style={styles.addDetailsButton}
            onPress={() => setModalVisible(true)}>
            <MaterialCommunityIcons
              name="plus-circle-outline"
              size={24}
              color={colors.primary}
            />
            <Text style={styles.addDetailsText}>Adicionar mais informações</Text>
          </TouchableOpacity>
        </View> */}

        <View style={styles.supportSection}>
          <Text style={styles.supportTitle}>Precisa de ajuda?</Text>
          <TouchableOpacity
            style={styles.supportButton}
            onPress={() => navigation.navigate('ChatSupport')}>
            <MaterialCommunityIcons
              name="chat-processing"
              size={24}
              color={colors.white}
            />
            <Text style={styles.supportButtonText}>Falar com atendente</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modal para adicionar mais informações */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Adicionar mais informações</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Escreva aqui..."
              value={additionalInfo}
              onChangeText={setAdditionalInfo}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={handleAddInfo}>
                <Text style={styles.modalButtonText}>Adicionar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.white,
    padding: 24,
  },
  issueInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  issueId: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '500',
  },
  issueType: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 4,
  },
  issueDate: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  section: {
    backgroundColor: colors.white,
    margin: 16,
    padding: 16,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  timeline: {
    marginLeft: 8,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  timelineLeft: {
    alignItems: 'center',
    width: 20,
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.primary,
  },
  timelineLine: {
    width: 2,
    flex: 1,
    backgroundColor: colors.border,
    marginTop: 4,
  },
  timelineContent: {
    flex: 1,
    marginLeft: 12,
  },
  timelineTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginBottom: 4,
  },
  timelineDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  timelineDate: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  description: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 16,
  },
  addDetailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${colors.primary}10`,
    padding: 12,
    borderRadius: 8,
  },
  addDetailsText: {
    marginLeft: 8,
    fontSize: 14,
    color: colors.primary,
    fontWeight: '500',
  },
  supportSection: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: colors.white,
    margin: 16,
    borderRadius: 12,
    marginBottom: 32,
  },
  supportTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  supportButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  supportButtonText: {
    marginLeft: 8,
    fontSize: 16,
    color: colors.white,
    fontWeight: '500',
  },
  // Estilos do modal
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: colors.white,
    padding: 24,
    borderRadius: 12,
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 14,
    color: colors.text,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
  modalButtonText: {
    color: colors.white,
    fontSize: 16,
  },
});

export default IssueDetailsScreen;
