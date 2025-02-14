import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import LottieView from 'lottie-react-native';
import { colors } from '../../theme/color';

interface LoadingOverlayProps {
  visible: boolean;
  isSuccess?: boolean;
}

export function LoadingOverlay({ visible, isSuccess }: LoadingOverlayProps) {
  if (!visible) return null;

  return (
    <Animated.View
      entering={FadeIn}
      exiting={FadeOut}
      style={styles.overlay}
    >
      {isSuccess ? (
        <LottieView
          source={{
            uri: 'https://assets7.lottiefiles.com/packages/lf20_u4yrau.json',
          }}
          autoPlay
          loop={false}
          style={styles.successAnimation}
        />
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={styles.loadingText}>Carregando...</Text>
        </View>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transpartent', // Reduzindo a opacidade
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },  
  loadingContainer: {
    alignItems: 'center',
  },
  loadingText: {
    color: colors.white,
    marginTop: 16,
    fontSize: 16,
    fontWeight: '600',
  },
  successAnimation: {
    width: 200,
    height: 200,
  },
});