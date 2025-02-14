import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/color';

interface ProfileOptionProps {
  icon: React.ReactNode | string; // Agora aceita string ou React.ReactNode
  title: string;
  onPress: () => void;
  color?: string;
  showBadge?: boolean;
  badgeCount?: number;
}

const ProfileOption: React.FC<ProfileOptionProps> = ({
  icon,
  title,
  onPress,
  color,
  showBadge,
  badgeCount,
}) => {
  return (
    <TouchableOpacity style={styles.option} onPress={onPress}>
      <View style={styles.leftContent}>
        {/* Verifica se `icon` é string ou um componente */}
        {typeof icon === 'string' ? (
          <MaterialCommunityIcons name={icon} size={24} color={color || colors.text} />
        ) : (
          icon
        )}
        <Text style={[styles.optionText, color && { color }]}>{title}</Text>
      </View>
      <View style={styles.rightContent}>
        {showBadge && badgeCount && badgeCount > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badgeCount}</Text>
          </View>
        )}
        <Ionicons name="chevron-forward" size={20} color={colors.textSecondary} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: colors.text,
    marginLeft: 16,
  },
  badge: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    paddingHorizontal: 8,
  },
  badgeText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default ProfileOption;
