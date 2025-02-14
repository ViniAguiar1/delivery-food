import React from 'react';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../theme/color';
import { ProfileOptionType } from '../types/user';

export const mainOptions: ProfileOptionType[] = [
  {
    icon: <Ionicons name="person-outline" size={24} color={colors.primary} />,
    title: 'Dados pessoais',
    badge: false,
  },
  {
    icon: <MaterialCommunityIcons name="heart-outline" size={24} color={colors.primary} />,
    title: 'Favoritos',
    badge: false,
  },
  // {
  //   icon: <MaterialCommunityIcons name="star-outline" size={24} color={colors.primary} />,
  //   title: 'Avaliações',
  //   badge: false,
  // },
  {
    icon: <MaterialCommunityIcons name="ticket-percent-outline" size={24} color={colors.primary} />,
    title: 'Cupons',
    badge: false,
  },
  {
    icon: <MaterialCommunityIcons name="credit-card-outline" size={24} color={colors.primary} />,
    title: 'Formas de Pagamento',
    badge: false,
  },
  {
    icon: <MaterialCommunityIcons name="map-marker-outline" size={24} color={colors.primary} />,
    title: 'Endereços salvos',
    badge: false,
  },
  {
    icon: <Ionicons name="time-outline" size={24} color={colors.primary} />,
    title: 'Histórico de Pedidos',
    badge: true,
    badgeCount: 2,
  },
];

export const secondaryOptions: ProfileOptionType[] = [
  {
    icon: <MaterialCommunityIcons name="bell-outline" size={24} color={colors.primary} />,
    title: 'Notificações',
    badge: true,
    badgeCount: 3,
  },
  {
    icon: <Ionicons name="help-circle-outline" size={24} color={colors.primary} />,
    title: 'Central de Ajuda',
    badge: false,
  },
];