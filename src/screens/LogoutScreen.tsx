import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const { width } = Dimensions.get('window');

const LogoutScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />

      {/* Imagem de Fundo */}
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1635273051937-a0d300581fb3',
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.contentContainer}>
        {/* Imagem estática representando logout */}
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/1828/1828490.png', // Exemplo de imagem de logout
          }}
          style={styles.logoutImage}
          resizeMode="contain"
        />

        <Text style={styles.title}>Ops! Você não está conectado</Text>
        <Text style={styles.subtitle}>
          Para acessar todos os recursos, faça login ou crie uma conta.
        </Text>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.replace('Login')}
          activeOpacity={0.8}
        >
          <Text style={styles.loginButtonText}>Fazer Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerButton}
          onPress={() => navigation.replace('Register')}
          activeOpacity={0.8}
        >
          <Text style={styles.registerButtonText}>Criar uma conta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  imageContainer: {
    height: width * 0.8,
    width: '100%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 32,
    alignItems: 'center',
  },
  logoutImage: {
    width: 150,
    height: 150,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 32,
    paddingHorizontal: 24,
  },
  loginButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
  registerButton: {
    marginTop: 16,
    paddingVertical: 12,
  },
  registerButtonText: {
    color: '#2563eb',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default LogoutScreen;
