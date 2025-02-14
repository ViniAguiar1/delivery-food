import React, { useState, useRef, useEffect } from 'react';
import { View, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { Message, AgentInfo } from '../types/chat';
import { ChatHeader } from  '../components/chat/ChatHeader';
import { ChatMessage } from '../components/chat/ChatMessage';
import { ChatInput } from '../components/chat/ChatInput';

type RootStackParamList = {
  ChatSupport: { issue?: { type: string } };
};

type Props = NativeStackScreenProps<RootStackParamList, 'ChatSupport'>;

export default function ChatSupportScreen({ navigation, route }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [agentInfo] = useState<AgentInfo>({
    name: 'Atendente Vinicius',
    status: 'Online',
    avatar: 'https://github.com/ViniAguiar1.png',
  });

  const scrollViewRef = useRef<ScrollView>(null);
  const { issue } = route.params || {};

  useEffect(() => {
    setTimeout(() => {
      const greeting: Message = {
        id: '1',
        text: `Olá! Sou ${agentInfo.name}, como posso ajudar você hoje?`,
        sender: 'agent',
        timestamp: new Date(),
      };
      setMessages([greeting]);
    }, 1000);

    if (issue) {
      setTimeout(() => {
        const contextMessage: Message = {
          id: '2',
          text: `Vejo que você está com uma questão sobre "${issue.type}". Pode me contar mais detalhes?`,
          sender: 'agent',
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, contextMessage]);
      }, 2000);
    }
  }, []);

  const handleSendMessage = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const responses = [
        'Entendi sua situação. Estou verificando as informações para melhor te ajudar.',
        'Vou analisar isso com atenção. Me dê um momento, por favor.',
        'Obrigado por explicar. Deixa eu verificar a melhor solução para você.',
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: 'agent',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, agentMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleSendImage = (imageUrl: string) => {
    const imageMessage: Message = {
      id: Date.now().toString(),
      text: '',
      sender: 'user',
      timestamp: new Date(),
      type: 'image',
      attachmentUrl: imageUrl,
    };

    setMessages((prev) => [...prev, imageMessage]);

    setTimeout(() => {
      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Recebi a imagem, estou analisando.',
        sender: 'agent',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, agentMessage]);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <ChatHeader agentInfo={agentInfo} onClose={() => navigation.goBack()} />
      
      <ScrollView
        ref={scrollViewRef}
        style={styles.messagesContainer}
        contentContainerStyle={styles.messagesContent}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
            agentAvatar={agentInfo.avatar}
          />
        ))}
        {isTyping && (
          <View style={styles.typingContainer}>
            <ActivityIndicator size="small" color="#3b82f6" />
          </View>
        )}
      </ScrollView>

      <ChatInput
        onSendMessage={handleSendMessage}
        onSendImage={handleSendImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    paddingVertical: 16,
  },
  typingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
});