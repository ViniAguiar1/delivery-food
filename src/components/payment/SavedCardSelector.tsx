import * as React from "react";
import { flexboxLayout, button, label } from "@nativescript/core";
import { StyleSheet } from "react-nativescript";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../theme/color';

const SAVED_CARDS = [
  { id: '1', last4: '4242', brand: 'Visa', type: 'credit' },
  { id: '2', last4: '5555', brand: 'Mastercard', type: 'debit' },
];

interface SavedCardSelectorProps {
  selectedCard: string | null;
  paymentMethod: string;
  onSelectCard: (card: any) => void;
}

export function SavedCardSelector({ selectedCard, paymentMethod, onSelectCard }: SavedCardSelectorProps) {
  const filteredCards = SAVED_CARDS.filter(card => card.type === paymentMethod);

  return (
    <flexboxLayout className="flex-col gap-3">
      {filteredCards.map((card) => (
        <button
          key={card.id}
          className={`flex-row items-center p-4 rounded-lg border ${
            selectedCard === card.id ? 'bg-primary-100 border-primary' : 'border-gray-300'
          }`}
          onTap={() => onSelectCard(card)}
        >
          <MaterialCommunityIcons
            name={card.brand.toLowerCase() === 'visa' ? 'credit-card' : 'credit-card-outline'}
            size={24}
            color={selectedCard === card.id ? colors.primary : colors.text}
          />
          <label className="ml-3">
            {card.brand} terminado em {card.last4}
          </label>
        </button>
      ))}
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  cardButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  selectedCard: {
    borderColor: colors.primary,
    backgroundColor: `${colors.primary}10`,
  },
  cardText: {
    marginLeft: 12,
    fontSize: 14,
  }
});