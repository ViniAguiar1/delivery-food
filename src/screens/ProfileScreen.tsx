import React, { useState, useEffect, useRef } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Alert,
  StatusBar,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Animated,
  Easing,
  Image
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProfileHeader from "../components/Header/ProfileHeader";
import ProfileOption from "../components/Profile/ProfileOption";
import QuickActions from "../components/Profile/QuickActions";
import { colors } from "../theme/color";
import { mainOptions, secondaryOptions } from "../data/profileOptions";
import type { ProfileScreenNavigationProp } from "../navigation/types";

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const [user, setUser] = useState(null);
  const [isLoginSheetVisible, setLoginSheetVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sheetAnim = useRef(new Animated.Value(0)).current; // Animação da tela de login

  useEffect(() => {
    const loadSession = async () => {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) setUser(JSON.parse(storedUser));
    };
    loadSession();
  }, []);

  const showLoginSheet = () => {
    setLoginSheetVisible(true);
    Animated.timing(sheetAnim, {
      toValue: 1,
      duration: 300,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  };

  const hideLoginSheet = () => {
    Animated.timing(sheetAnim, {
      toValue: 0,
      duration: 300,
      easing: Easing.in(Easing.ease),
      useNativeDriver: true,
    }).start(() => setLoginSheetVisible(false));
  };

  const handleOptionPress = (title: string) => {
    if (!user) {
      Alert.alert("Aviso", "Faça login para acessar esta funcionalidade.");
      return;
    }
    switch (title) {
      case "Dados pessoais":
        navigation.navigate("PersonalData");
        break;
      case "Formas de Pagamento":
        navigation.navigate("PaymentMethods");
        break;
      case "Endereços salvos":
        navigation.navigate("SavedAddresses");
        break;
      case "Histórico de Pedidos":
        navigation.navigate("OrdersTab");
        break;
      case "Notificações":
        navigation.navigate("Notifications");
        break;
      case "Segurança":
        navigation.navigate("Security");
        break;
      case "Central de Ajuda":
        navigation.navigate("HelpCenter");
        break;
      case "Favoritos":
        navigation.navigate("Favorites");
        break;
      // case "Avaliações":
      //   navigation.navigate("Ratings");
      //   break;
      case "Cupons":
        navigation.navigate("Coupons");
        break
      default:
        break;
    }
  };

  const handleLogout = async () => {
    if (!user) {
      Alert.alert("Aviso", "Você já está desconectado.");
      return;
    }
    Alert.alert("Sair do aplicativo", "Tem certeza que deseja sair?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Sair",
        style: "destructive",
        onPress: async () => {
          await AsyncStorage.removeItem("user");
          setUser(null);
        },
      },
    ]);
  };

  const handleLogin = async () => {
    const newUser = { email, name: "Vinicius Aguiar" };
    setUser(newUser);
    await AsyncStorage.setItem("user", JSON.stringify(newUser));
    hideLoginSheet();
  };

  const sheetTranslateY = sheetAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [800, 0], // A tela inicia abaixo da tela (800px fora do viewport)
  });

  const overlayOpacity = sheetAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 0.5], // Escurece o fundo quando a tela de login aparece
  });

  return (
    <>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        {user ? (
          <>
            <ProfileHeader
              user={user} // Use o estado 'user' aqui
              onSettingsPress={() => console.log('Configurações abertas!')}
              onAvatarChange={(newAvatar) => {
                console.log('Novo avatar:', newAvatar);
                setUser((prevUser) => ({ ...prevUser, avatar: newAvatar }));
                AsyncStorage.setItem(
                  'user',
                  JSON.stringify({ ...user, avatar: newAvatar })
                );
              }}
            />

            <ScrollView
              style={styles.content}
              showsVerticalScrollIndicator={false}
            >
              <QuickActions />

              {/* Opções principais */}
              <View style={styles.section}>
                {mainOptions.map((option, index) => (
                  <ProfileOption
                    key={index}
                    icon={option.icon} // Passa a string diretamente
                    title={option.title}
                    onPress={() => handleOptionPress(option.title)}
                  />
                ))}
              </View>

              <View style={styles.section}>
                {secondaryOptions.map((option, index) => (
                  <ProfileOption
                    key={index}
                    icon={option.icon} // Passa a string diretamente
                    title={option.title}
                    onPress={() => handleOptionPress(option.title)}
                  />
                ))}
              </View>

              {/* Botão de logout */}
              <View style={styles.section}>
                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={handleLogout}
                >
                  <MaterialCommunityIcons
                    name="logout"
                    size={24}
                    color={colors.error}
                  />
                  <Text
                    style={[styles.optionButtonText, { color: colors.error }]}
                  >
                    Sair do aplicativo
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </>
        ) : (
          <View style={styles.notLoggedInContainer}>
            <Image
              source={{
                uri: "https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg",
              }}
              style={styles.placeholderImage}
            />
            <Text style={styles.notLoggedInText}>
              Você não está conectado. Faça login para acessar mais recursos.
            </Text>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={showLoginSheet}
            >
              <Text style={styles.loginButtonText}>Fazer Login</Text>
            </TouchableOpacity>
          </View>

        )}

        {isLoginSheetVisible && (
          <>
            {/* Fundo escurecido */}
            <Animated.View
              style={[styles.overlay, { opacity: overlayOpacity }]}
            />

            {/* Tela de Login */}
            <Animated.View
              style={[
                styles.loginSheet,
                { transform: [{ translateY: sheetTranslateY }] },
              ]}
            >
              <KeyboardAvoidingView behavior="padding" style={styles.sheetContent}>
                {/* Adicione o botão de fechar aqui */}
                <TouchableOpacity style={styles.closeButton} onPress={hideLoginSheet}>
                  <MaterialCommunityIcons
                    name="close"
                    size={24}
                    color={colors.error}
                  />
                </TouchableOpacity>

                <Image
                  source={{
                    uri: "https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg",
                  }}
                  style={styles.loginImage}
                />
                <Text style={styles.sheetTitle}>Faça Login</Text>
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
                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={handleLogin}
                >
                  <Text style={styles.loginButtonText}>Entrar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.signUpRedirect}
                  onPress={() => navigation.navigate("SignUp")}
                >
                  <Text style={styles.signUpRedirectText}>
                    Ainda não tem uma conta?{" "}
                    <Text style={styles.signUpRedirectHighlight}>Cadastre-se</Text>
                  </Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
            </Animated.View>


          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
  },
  section: {
    backgroundColor: colors.white,
    marginBottom: 8,
    borderRadius: 8,
  },
  notLoggedInContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  notLoggedInText: {
    fontSize: 18,
    color: colors.text,
    textAlign: "center",
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    alignItems: "center",
  },
  loginButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "black",
  },
  loginSheet: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "90%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
  },
  sheetContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sheetTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  // closeButton: {
  //   marginTop: 10,
  // },
  closeButtonText: {
    color: colors.error,
    fontWeight: "bold",
  },
  optionButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    backgroundColor: colors.white,
  },
  optionButtonText: {
    marginLeft: 10,
    fontSize: 16,
    color: colors.text,
  },
  placeholderImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 20, // Deixa os cantos arredondados
  },

  loginImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 15,
  },
  signUpRedirect: {
    marginTop: 20,
  },
  signUpRedirectText: {
    color: colors.text,
    fontSize: 14,
  },
  signUpRedirectHighlight: {
    color: colors.primary,
    fontWeight: "bold",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 5,
    elevation: 5, // Sombra no Android
  },


});

export default ProfileScreen;
