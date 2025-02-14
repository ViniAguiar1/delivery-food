import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity, Text, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../theme/color';

const FAQItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);
  const animation = new Animated.Value(0);

  const toggleExpand = () => {
    setExpanded(!expanded);
    Animated.spring(animation, {
      toValue: expanded ? 0 : 1,
      useNativeDriver: true,
    }).start();
  };

  const rotate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <TouchableOpacity style={styles.faqItem} onPress={toggleExpand}>
      <View style={styles.faqHeader}>
        <Text style={styles.faqQuestion}>{question}</Text>
        <Animated.View style={{ transform: [{ rotate }] }}>
          <MaterialCommunityIcons
            name="chevron-down"
            size={24}
            color={colors.textSecondary}
          />
        </Animated.View>
      </View>
      {expanded && (
        <Text style={styles.faqAnswer}>{answer}</Text>
      )}
    </TouchableOpacity>
  );
};

export const FAQScreen = ({ navigation }) => {
  const faqs = [
    {
      question: 'Como faço para rastrear meu pedido?',
      answer: 'Você pode acompanhar seu pedido em tempo real através da seção "Meus Pedidos" no aplicativo. Lá você encontrará informações detalhadas sobre o status da entrega.',
    },
    {
      question: 'Qual o prazo para reembolso?',
      answer: 'O prazo para reembolso é de até 7 dias úteis, dependendo do seu banco e forma de pagamento utilizada.',
    },
    {
      question: 'Como altero meu endereço de entrega?',
      answer: 'Para alterar seu endereço de entrega, acesse a seção "Meus Endereços" no menu do aplicativo. Lá você pode adicionar, editar ou remover endereços.',
    },
  ];

  const categories = [
    'Pedidos',
    'Pagamentos',
    'Entrega',
    'Conta',
    'Outros',
  ];

  const [selectedCategory, setSelectedCategory] = useState('Pedidos');

  const handleChatSupport = () => {
    navigation.navigate('ChatSupport', {
      issue: {
        type: 'Dúvida geral',
        category: selectedCategory,
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Perguntas Frequentes</Text>
        <Text style={styles.subtitle}>
          Encontre respostas para as dúvidas mais comuns
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.categoryButtonActive,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextActive,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.content}>
        <View style={styles.faqContainer}>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </View>

        <View style={styles.helpSection}>
          <Text style={styles.helpTitle}>Não encontrou o que procura?</Text>
          <TouchableOpacity 
            style={styles.helpButton}
            onPress={handleChatSupport}
          >
            <MaterialCommunityIcons
              name="headset"
              size={24}
              color={colors.primary}
            />
            <Text style={styles.helpButtonText}>Falar com atendente</Text>
          </TouchableOpacity>
          <Text style={styles.helpDescription}>
            Nossa equipe está disponível 24/7 para te ajudar
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 24,
    backgroundColor: colors.white,
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
  categoriesContainer: {
    backgroundColor: colors.white,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    backgroundColor: colors.background,
  },
  categoryButtonActive: {
    backgroundColor: colors.primary,
  },
  categoryText: {
    fontSize: 14,
    color: colors.text,
    fontWeight: '500',
  },
  categoryTextActive: {
    color: colors.white,
  },
  content: {
    flex: 1,
  },
  faqContainer: {
    padding: 16,
  },
  faqItem: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqQuestion: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
    marginRight: 16,
  },
  faqAnswer: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 12,
    lineHeight: 20,
  },
  helpSection: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: colors.white,
    margin: 16,
    borderRadius: 12,
  },
  helpTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginBottom: 16,
  },
  helpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: `${colors.primary}10`,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  helpButtonText: {
    marginLeft: 8,
    fontSize: 16,
    color: colors.primary,
    fontWeight: '500',
  },
  helpDescription: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});

export default FAQScreen;