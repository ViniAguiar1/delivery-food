import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import type { AgentInfo } from '../../types/chat';

interface ChatHeaderProps {
  agentInfo: AgentInfo;
  onClose: () => void;
}

export function ChatHeader({ agentInfo, onClose }: ChatHeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.agentInfo}>
        <Image source={{ uri: agentInfo.avatar }} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{agentInfo.name}</Text>
          <View style={styles.statusContainer}>
            <View style={styles.statusDot} />
            <Text style={styles.status}>{agentInfo.status}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeText}>✕</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
  agentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a1a',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#22c55e',
    marginRight: 4,
  },
  status: {
    fontSize: 14,
    color: '#22c55e',
  },
  closeButton: {
    padding: 8,
  },
  closeText: {
    fontSize: 20,
    color: '#666',
  },
});