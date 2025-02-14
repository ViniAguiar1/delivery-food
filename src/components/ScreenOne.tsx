import { Alert } from 'react-native';  // Usando o Alert do React Native
import { RouteProp } from '@react-navigation/core';
import * as React from "react";
import { StyleSheet, View, Text, Button } from "react-native";  // Alterado para os componentes do React Native

import { MainStackParamList } from "../NavigationParamList";

type ScreenOneProps = {
  route: RouteProp<MainStackParamList, "One">;
  navigation: any;  // Usando qualquer tipo para navegação
};

export function ScreenOne({ navigation }: ScreenOneProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World!</Text>
      <Button
        title="Tap me for an alert"
        onPress={() => Alert.alert("Tapped!")}
      />
      <Button
        title="Go to next screen"
        onPress={() => navigation.navigate("Two", { message: "Hello, world!" })}
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
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    fontSize: 24,
    color: "#2e6ddf",
  },
});
