import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../theme/color';
import { User } from '../../types/user';
import * as ImagePicker from 'expo-image-picker';

interface ProfileHeaderProps {
  user: User;
  onSettingsPress: () => void;
  onAvatarChange?: (newAvatar: string) => void; // Callback para enviar o novo avatar para o pai
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ user, onSettingsPress, onAvatarChange }) => {
  const [avatar, setAvatar] = useState(user.avatar || 'https://github.com/ViniAguiar1.png'); // Avatar inicial

  const handleAvatarPress = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão necessária', 'Precisamos de permissão para acessar sua galeria.');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled) {
        const selectedImage = result.assets[0].uri;
        setAvatar(selectedImage); // Atualizar localmente o avatar
        if (onAvatarChange) {
          onAvatarChange(selectedImage); // Enviar o novo avatar para o componente pai, se necessário
        }
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível selecionar a imagem.');
    }
  };

  return (
    <View style={styles.header}>
      <View style={styles.userInfo}>
        <TouchableOpacity style={styles.avatarContainer} onPress={handleAvatarPress}>
          <Image
            source={{ uri: avatar }}
            style={styles.avatar}
          />
          <View style={styles.editAvatarBadge}>
            <Ionicons name="camera" size={12} color={colors.white} />
          </View>
        </TouchableOpacity>
        <View style={styles.userTextInfo}>
          <Text style={styles.userName}>Vinicius Aguiar</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
      </View>
      {/* Botão de configurações (opcional) */}
      {/* <TouchableOpacity
        onPress={onSettingsPress}
        style={styles.settingsButton}
        activeOpacity={0.7}
      >
        <Ionicons name="settings-outline" size={24} color={colors.primary} />
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 390,
    padding: 20,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 16,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  editAvatarBadge: {
    position: 'absolute',
    bottom: 0,
    right: 16,
    backgroundColor: colors.primary,
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.white,
  },
  userTextInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  settingsButton: {
    padding: 8,
    marginLeft: -50,
  },
});

export default ProfileHeader;
