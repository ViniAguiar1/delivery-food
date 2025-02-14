import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet, View, Text, Button } from "react-native";  // Substituindo componentes NativeScript para React Native
import { MainStackParamList } from "../NavigationParamList";

type ScreenTwoProps = {
  route: RouteProp<MainStackParamList, "Two">;
  navigation: any;  // Usando qualquer tipo para navegação
};

export function ScreenTwo({ navigation, route }: ScreenTwoProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>You're viewing screen two!</Text>
      <Text style={styles.text}>Message: {route.params.message}</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center", // Centraliza os componentes
    backgroundColor: "yellow",
  },
  text: {
    fontSize: 24,
    color: "black",
    marginBottom: 20,  // Espaçamento entre os textos
  },
  button: {
    fontSize: 24,
    color: "#2e6ddf",
  },
});
