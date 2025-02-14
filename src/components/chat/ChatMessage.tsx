import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import type { Message } from '../../types/chat';

interface ChatMessageProps {
  message: Message;
  agentAvatar: string;
}

export function ChatMessage({ message, agentAvatar }: ChatMessageProps) {
  const isUser = message.sender === 'user';

  return (
    <View style={[styles.container, isUser ? styles.userContainer : styles.agentContainer]}>
      {!isUser && (
        <Image source={{ uri: agentAvatar }} style={styles.avatar} />
      )}
      <View style={[
        styles.bubble,
        isUser ? styles.userBubble : styles.agentBubble,
      ]}>
        {message.type === 'image' ? (
          <Image
            source={{ uri: message.attachmentUrl }}
            style={styles.messageImage}
            resizeMode="cover"
          />
        ) : (
          <Text style={[styles.text, isUser ? styles.userText : styles.agentText]}>
            {message.text}
          </Text>
        )}
        <Text style={[styles.timestamp, isUser ? styles.userTimestamp : styles.agentTimestamp]}>
          {message.timestamp.toLocaleTimeString().slice(0, 5)}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  userContainer: {
    justifyContent: 'flex-end',
  },
  agentContainer: {
    justifyContent: 'flex-start',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  bubble: {
    maxWidth: '75%',
    padding: 12,
    borderRadius: 16,
  },
  userBubble: {
    backgroundColor: '#3b82f6',
    borderTopRightRadius: 4,
  },
  agentBubble: {
    backgroundColor: 'white',
    borderTopLeftRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
  },
  userText: {
    color: 'white',
  },
  agentText: {
    color: '#1a1a1a',
  },
  timestamp: {
    fontSize: 12,
    marginTop: 4,
  },
  userTimestamp: {
    color: 'rgba(255, 255, 255, 0.7)',
    textAlign: 'right',
  },
  agentTimestamp: {
    color: '#666',
  },
  messageImage: {
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').width * 0.6,
    borderRadius: 8,
  },
});