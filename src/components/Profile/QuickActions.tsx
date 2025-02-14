import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../theme/color';
import { QuickAction } from '../../types/user';
import { useNavigation } from '@react-navigation/native';
import type { ProfileScreenNavigationProp } from '../../navigation/types';

const QuickActions: React.FC = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const actions: QuickAction[] = [
    {
      icon: 'ticket-percent',
      title: 'Cupons',
      count: '3',
    },
    {
      icon: 'heart',
      title: 'Favoritos',
      count: '12',
    },
    // {
    //   icon: 'star',
    //   title: 'Avaliações',
    //   count: '8',
    // },
  ];

  const handleActionPress = (title: string) => {
    switch (title) {
      case 'Cupons':
        // Navigate to coupons screen
        break;
      case 'Favoritos':
        // Navigate to favorites screen
        break;
      case 'Avaliações':
        // Navigate to reviews screen
        break;
    }
  };

  return (
    <View style={styles.container}>
      {actions.map((action, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.action}
          onPress={() => handleActionPress(action.title)}
          activeOpacity={0.7}
        >
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name={action.icon} size={24} color={colors.primary} />
          </View>
          <Text style={styles.actionTitle}>{action.title}</Text>
          <Text style={styles.actionCount}>{action.count}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: colors.white,
    marginBottom: 8,
  },
  action: {
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionTitle: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 4,
  },
  actionCount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primary,
  },
});

export default QuickActions;