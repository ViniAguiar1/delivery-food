import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme/color";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Erro", "Todos os campos são obrigatórios.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

    const newUser = { name, email, password, avatar: null };

    try {
      await AsyncStorage.setItem("user", JSON.stringify(newUser));
      Alert.alert("Sucesso", "Conta criada com sucesso! 🎉", [
        {
          text: "Ir para Login",
          onPress: () => navigation.navigate("ProfileTab"),
        },
      ]);
    } catch (error) {
      Alert.alert("Erro", "Não foi possível criar a conta. Tente novamente.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{
          uri: "https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>Crie sua conta</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
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
        placeholder="Confirmar Senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginRedirect}
        onPress={() => navigation.navigate("ProfileTab")}
      >
        <Text style={styles.loginRedirectText}>
          Já tem uma conta?{" "}
          <Text style={styles.loginRedirectHighlight}>Faça login</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.border,
  },
  signUpButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    width: "100%",
    borderRadius: 8,
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
