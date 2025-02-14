import React, { useEffect, useRef, useState } from 'react';
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import * as Notifications from "expo-notifications";
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CartNotificationBar } from './src/components/CartNotificationBar';
import { View, Text } from 'react-native';

// Importação dos ícones
import { MaterialIcons } from "@expo/vector-icons";

// Importação das telas
import HomeScreen from "./src/screens/HomeScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";
import OrdersScreen from "./src/screens/OrdersScreen";
import CartScreen from "./src/screens/CartScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import PersonalDataScreen from "./src/screens/PersonalDataScreen";
import PaymentMethodsScreen from "./src/screens/PaymentMethodsScreen";
import SavedAddressesScreen from "./src/screens/SavedAddressesScreen";
import OrderHistoryScreen from "./src/screens/OrderHistoryScreen";
import NotificationsScreen from "./src/screens/NotificationsScreen";
import HelpCenterScreen from "./src/screens/HelpCenterScreen";
import LogoutScreen from "./src/screens/LogoutScreen";
import OrderDetailsScreen from "./src/screens/OrderDetailsScreenProps"
import DishDetailScreen from './src/screens/DishDetailScreen';
import CardDetailsScreen from './src/screens/CardDetailsScreen';
import { AdjustLimitsScreen } from './src/screens/AdjustLimitsScreen';
import { BlockCardScreen } from './src/screens/BlockCardScreen';
import { NFCSettings } from './src/screens/NFCSettings';
import CardSecurityScreen from './src/screens/CardSecurityScreen';
import ChangePasswordScreen from './src/screens/ChangePasswordScreen';
import AddressFormScreen from './src/screens/AddressFormScreen';
import IssueDetailsScreen from './src/screens/IssueDetailsScreen';
import FAQScreen from './src/screens/FAQScreen';
import OrderIssuesScreen from './src/screens/OrderIssuesScreen';
import PaymentHelpScreen from './src/screens/PaymentAssistanceScreen';
import IssueFormScreen from './src/screens/IssueFormScreen';
import ChatSupportScreen from './src/screens/ChatSupportScreen';
import PaymentAssistanceScreen from './src/screens/PaymentAssistanceScreen';
import RefundHelpScreen from './src/screens/RefundHelpScreen';
import DuplicateChargeScreen from './src/screens/DuplicateChargeScreen';
import IncorrectAmountScreen from './src/screens/IncorrectAmountScreen';
import PaymentMethodsInfoScreen from './src/screens/PaymentMethodsInfoScreen';
import { FinancialSpecialistChatScreen } from './src/screens/FinancialSpecialistChatScreen';
import { TermsOfServiceScreen } from './src/screens/TermsOfServiceScreen';
import { PrivacyPolicyScreen } from './src/screens/PrivacyPolicyScreen';
import { FavoritesScreen } from './src/screens/FavoritesScreen';
import { RatingsScreen } from './src/screens/RatingsScreen';
import { CouponsScreen } from './src/screens/CouponsScreen';
import { SearchScreen } from './src/screens/SearchScreen';
import { CategoryScreen } from './src/screens/CategoryScreen';
import SignUpScreen from './src/screens/SignUpScreen';

// Configuração das notificações
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

// Definindo as navegações
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Componente de navegação de abas
function HomeTabs() {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#000",
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeScreen}
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="OrdersTab"
          component={OrdersScreen}
          options={{
            title: "Pedidos",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="receipt-long" size={size} color={color} />
            ),
          }}
        />
        {/* <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: "Buscar",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="search" size={24} color={color} />
            ),
          }}
        /> */}
        <Tab.Screen
          name="ProfileTab"
          component={ProfileScreen}
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="person" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
      <CartNotificationBar />
    </View>
  );
}

// Função principal do App
export default function App() {
  const navigationRef = useNavigationContainerRef();
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  useEffect(() => {
    Notifications.requestPermissionsAsync();

    const subscription = Notifications.addNotificationResponseReceivedListener(response => {
      const data = response.notification.request.content.data;
      if (data.screen) {
        navigationRef.current?.navigate(data.screen);
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        {appIsReady ? (
          <NavigationContainer ref={navigationRef}>
            <StatusBar style="auto" />
            <Stack.Navigator>
              <Stack.Screen
                name="Main"
                component={HomeTabs}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Restaurant"
                component={RestaurantScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PersonalData"
                component={PersonalDataScreen}
                options={{
                  title: "Dados Pessoais",
                  headerTintColor: "#f97316",
                  headerTitleStyle: {
                    fontWeight: "600",
                  },
                }}
              />
              <Stack.Screen
                name="PaymentMethods"
                component={PaymentMethodsScreen}
                options={{
                  title: "Formas de Pagamento",
                  headerTintColor: "#f97316",
                  headerTitleStyle: {
                    fontWeight: "600",
                  },
                }}
              />
              <Stack.Screen
                name="SavedAddresses"
                component={SavedAddressesScreen}
                options={{
                  title: "Endereços Salvos",
                  headerTintColor: "#f97316",
                  headerTitleStyle: {
                    fontWeight: "600",
                  },
                }}
              />
              <Stack.Screen
                name="OrderHistory"
                component={OrderHistoryScreen}
                options={{ title: "Histórico de Pedidos" }}
              />
              <Stack.Screen
                name="Notifications"
                component={NotificationsScreen}
                options={{
                  title: "Notificações",
                  headerTintColor: "#f97316",
                  headerTitleStyle: {
                    fontWeight: "600",
                  },
                }}
              />
              <Stack.Screen
                name="OrderDetails"
                component={OrderDetailsScreen}
                options={{
                  headerShown: true,
                  title: "Detalhes do Pedido",
                  headerTintColor: "#f97316",
                  headerTitleStyle: {
                    fontWeight: "600",
                  },
                }}
              />
              <Stack.Screen
                name="HelpCenter"
                component={HelpCenterScreen}
                options={{ title: "Central de Ajuda", headerTintColor: "#f97316", }}
              />
              <Stack.Screen name="LogoutScreen" component={LogoutScreen} />
              <Stack.Screen
                name="DishDetail"
                component={DishDetailScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CardDetails"
                component={CardDetailsScreen}
                options={{
                  headerShown: true, title: 'Detalhes do Cartão',
                  headerTintColor: "#f97316",
                  headerTitleStyle: {
                    fontWeight: "600",
                  },
                }}
              />
              <Stack.Screen
                name="CartScreen"
                component={CartScreen}
                options={{ headerShown: true, title: 'Carrinho' }}
              />
              <Stack.Screen
                name="BlockCard"
                component={BlockCardScreen}
                options={{
                  headerShown: true, title: 'Bloquear Cartão',
                  headerTintColor: "#f97316",
                  headerTitleStyle: {
                    fontWeight: "600",
                  },
                }}
              />
              <Stack.Screen
                name="AdjustLimits"
                component={AdjustLimitsScreen}
                options={{
                  headerShown: true, title: 'Ajustar Limites',
                  headerTintColor: "#f97316",
                  headerTitleStyle: {
                    fontWeight: "600",
                  },
                }}
              />
              <Stack.Screen
                name="NFCSettings"
                component={NFCSettings}
                options={{
                  headerShown: true, title: 'Configurações NFC',
                  headerTintColor: "#f97316",
                  headerTitleStyle: {
                    fontWeight: "600",
                  },
                }}
              />
              <Stack.Screen
                name="CardSecurity"
                component={CardSecurityScreen}
                options={{
                  headerShown: true, title: "Segurança do Cartão",
                  headerTintColor: "#f97316",
                  headerTitleStyle: {
                    fontWeight: "600",
                  },
                }}
              />
              <Stack.Screen
                name="ChangePassword"
                component={ChangePasswordScreen}
                options={{
                  headerShown: true, title: 'Atualizar Senha',
                  headerTintColor: "#f97316",
                  headerTitleStyle: {
                    fontWeight: "600",
                  },
                }}
              />
              <Stack.Screen
                name="AddressForm"
                component={AddressFormScreen}
                options={{
                  headerShown: true, title: 'Adicionar Endereço',
                  headerTintColor: "#f97316",
                  headerTitleStyle: {
                    fontWeight: "600",
                  },
                }}
              />
              <Stack.Screen
                name="IssueDetails"
                component={IssueDetailsScreen}
                options={{
                  headerShown: true, title: 'Detalhes do Problema',
                  headerTintColor: "#f97316",
                  headerTitleStyle: {
                    fontWeight: "600",
                  },
                }}
              />
              <Stack.Screen
                name="FAQs"
                component={FAQScreen}
                options={{
                  headerShown: true, title: 'FAQ',
                  headerTintColor: "#f97316",
                  headerTitleStyle: {
                    fontWeight: "600",
                  },
                }}
              />
              <Stack.Screen
                name="OrderIssues"
                component={OrderIssuesScreen}
                options={{
                  headerShown: true, title: 'Problemas com Pedido',
                  headerTintColor: "#f97316",
                  headerTitleStyle: {
                    fontWeight: "600",
                  },
                }}
              />
              <Stack.Screen
                name="PaymentHelp"
                component={PaymentAssistanceScreen}
                options={{
                  headerShown: true, title: 'Ajuda com Pagamentos',
                  headerTintColor: "#f97316",
                  headerTitleStyle: {
                    fontWeight: "600",
                  },
                }}
              />
              <Stack.Screen
                name="IssueForm"
                component={IssueFormScreen}
                options={{
                  headerShown: true, title: 'Reportar Problema',
                  headerTintColor: "#f97316",
                  headerTitleStyle: {
                    fontWeight: "600",
                  },
                }}
              />
              <Stack.Screen
                name="ChatSupport"
                component={ChatSupportScreen}
                options={{
                  headerShown: true, title: 'Suporte',
                  headerTintColor: "#f97316",
                  headerTitleStyle: {
                    fontWeight: "600",
                  },
                }}
              />
              <Stack.Screen name="RefundHelp" component={RefundHelpScreen}
                options={{
                  headerShown: true, title: "Solicitar Reembolso",
                  headerTintColor: "#f97316",
                  headerTitleStyle: {
                    fontWeight: "600",
                  },
                }}
              />
              <Stack.Screen name="DuplicateCharge" component={DuplicateChargeScreen}
                options={{
                  headerShown: true, title: "Cobrança Duplicada",
                  headerTintColor: "#f97316",
                  headerTitleStyle: {
                    fontWeight: "600",
                  },
                }}
              />
              <Stack.Screen name="IncorrectAmount" component={IncorrectAmountScreen}
                options={{
                  headerShown: true, title: "Valor Incorreto",
                  headerTintColor: "#f97316",
                  headerTitleStyle: {
                    fontWeight: "600",
                  },
                }}
              />
              <Stack.Screen name="PaymentMethodsInfo" component={PaymentMethodsInfoScreen}
                options={{
                  headerShown: true, title: "Métodos de Pagamento",
                  headerTintColor: "#f97316",
                  headerTitleStyle: {
                    fontWeight: "600",
                  },
                }}
              />
              <Stack.Screen name="FinancialSpecialistChat" component={FinancialSpecialistChatScreen}
                options={{
                  headerShown: true, title: 'Suporte Financeiro',
                  headerTintColor: "#f97316",
                  headerTitleStyle: {
                    fontWeight: "600",
                  },
                }}
              />
              <Stack.Screen
                name="PrivacyPolicy"
                component={PrivacyPolicyScreen}
                options={{ title: 'Política de Privacidade' }}
              />
              <Stack.Screen
                name="TermsOfService"
                component={TermsOfServiceScreen}
                options={{ title: 'Termos de Uso' }}
              />
              <Stack.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{
                  headerShown: true, title: 'Favoritos',
                  headerTintColor: "#f97316",
                  headerTitleStyle: {
                    fontWeight: "600",
                  },
                }}
              />
              <Stack.Screen
                name="Ratings"
                component={RatingsScreen}
                options={{ headerShown: true, title: 'Avaliações' }}
              />
              <Stack.Screen
                name="Coupons"
                component={CouponsScreen}
                options={{
                  headerShown: true, title: 'Cupons',
                  headerTintColor: "#f97316",
                  headerTitleStyle: {
                    fontWeight: "600",
                  },
                }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Category"
                component={CategoryScreen}
                options={({ route }) => ({
                  title: route.params.category,
                  headerTintColor: "#f97316",
                  headerTitleStyle: {
                    fontWeight: "600",
                  },
                })}
              />

            </Stack.Navigator>
          </NavigationContainer>
        ) : (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#ffffff" }}>
            <Text>Carregando...</Text>
          </View>
        )}
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}