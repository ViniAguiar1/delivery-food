import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Animated,
  Easing,
  Image,
  Alert
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../theme/color";

const SignUpScreen: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const formAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(formAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, []);

  const handleSignUp = async () => {
    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Erro", "Por favor, preencha todos os campos");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Erro", "Por favor, insira um email válido");
      return;
    }

    try {
      const newUser = { name, email };
      await AsyncStorage.setItem("user", JSON.stringify(newUser));
      Alert.alert("Sucesso", "Conta criada com sucesso!", [
        {
          text: "OK",
          onPress: () => navigation.goBack(),
        },
      ]);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível criar sua conta. Tente novamente.");
    }
  };

  const formTranslateY = formAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [800, 0],
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.content,
          { transform: [{ translateY: formTranslateY }] },
        ]}
      >
        <KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
          <Image
            source={{
              uri: "https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg",
            }}
            style={styles.signUpImage}
          />
          
          <Text style={styles.title}>Criar Conta</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Nome completo"
            value={name}
            onChangeText={setName}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          
          <TextInput
            style={styles.input}
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
          
          <TouchableOpacity
            style={styles.signUpButton}
            onPress={handleSignUp}
          >
            <Text style={styles.signUpButtonText}>Cadastrar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.loginRedirect}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.loginRedirectText}>
              Já tem uma conta?{" "}
              <Text style={styles.loginRedirectHighlight}>Faça login</Text>
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  signUpImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: colors.text,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  signUpButton: {
    backgroundColor: colors.primary,
    width: "100%",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
  },
  signUpButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  loginRedirect: {
    marginTop: 20,
  },
  loginRedirectText: {
    color: colors.text,
    fontSize: 14,
  },
  loginRedirectHighlight: {
    color: colors.primary,
    fontWeight: "bold",
  },
});

export default SignUpScreen;