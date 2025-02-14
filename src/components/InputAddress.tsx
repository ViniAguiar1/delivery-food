import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Animated, TouchableOpacity, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../theme/color';

interface InputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
  secureTextEntry?: boolean;
  leftIcon?: string;
  loading?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  maxLength?: number;
  editable?: boolean;
}

export const InputAddress = ({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  secureTextEntry,
  leftIcon,
  loading,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  maxLength,
  editable = true,
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isSecureTextVisible, setIsSecureTextVisible] = useState(!secureTextEntry);

  const animatedValue = new Animated.Value(value ? 1 : 0);

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  const labelStyle = {
    position: 'absolute',
    left: leftIcon ? 48 : 16,
    top: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [16, -8],
    }),
    fontSize: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: error
      ? colors.error
      : isFocused
      ? colors.primary
      : colors.textSecondary,
    backgroundColor: colors.white,
    paddingHorizontal: 4,
    zIndex: 1,
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={[styles.label, labelStyle]}>{label}</Animated.Text>
      <View
        style={[
          styles.inputContainer,
          {
            borderColor: error
              ? colors.error
              : isFocused
              ? colors.primary
              : colors.border,
            backgroundColor: editable ? colors.white : colors.background,
          },
        ]}
      >
        {leftIcon && (
          <MaterialCommunityIcons
            name={leftIcon}
            size={24}
            color={error ? colors.error : isFocused ? colors.primary : colors.textSecondary}
            style={styles.icon}
          />
        )}
        <TextInput
          style={[
            styles.input,
            { color: editable ? colors.text : colors.textSecondary },
          ]}
          value={value}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={isFocused ? placeholder : ''}
          placeholderTextColor={colors.textSecondary}
          secureTextEntry={secureTextEntry && !isSecureTextVisible}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          maxLength={maxLength}
          editable={editable && !loading}
        />
        {loading ? (
          <ActivityIndicator color={colors.primary} style={styles.icon} />
        ) : secureTextEntry ? (
          <TouchableOpacity
            onPress={() => setIsSecureTextVisible(!isSecureTextVisible)}
            style={styles.icon}
          >
            <MaterialCommunityIcons
              name={isSecureTextVisible ? 'eye' : 'eye-off'}
              size={24}
              color={colors.textSecondary}
            />
          </TouchableOpacity>
        ) : null}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    minHeight: 56,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 16,
  },
  icon: {
    padding: 12,
  },
  label: {
    backgroundColor: colors.white,
    paddingHorizontal: 4,
    zIndex: 1,
  },
  errorText: {
    color: colors.error,
    fontSize: 12,
    marginTop: 4,
    marginLeft: 16,
  },
});