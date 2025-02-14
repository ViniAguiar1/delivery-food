import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen"; // Certifique-se de ajustar o caminho
import RestaurantScreen from "../screens/RestaurantScreen"; // Certifique-se de ajustar o caminho

// Criação do Stack Navigator
const Stack = createNativeStackNavigator();

export const MainStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false, // Esconde o cabeçalho
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Restaurant" component={RestaurantScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
