// Crie um app com duas possíveis telas de fundo que devem
// ser alternada a cada 5 segundos.

import { StyleSheet } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Screen1 from "./Screen1";
import Screen2 from "./Screen2";

const Pilha = createNativeStackNavigator();

function Ex03() {
  const component = {};
  component.name = "Ex03";

  return (
    <NavigationContainer style={styles.cardStyle}>
      <Pilha.Navigator initialRouteName="Tela1">
        <Pilha.Screen
          name="Tela1"
          component={Screen1}
          options={{ headerShown: false }}
        />
        <Pilha.Screen
          name="Tela2"
          component={Screen2}
          options={{ headerShown: false }}
        />
      </Pilha.Navigator>
    </NavigationContainer>
  );
}

export default Ex03;

const styles = StyleSheet.create({
  cardStyle: {
    width: "90%",
    height: "auto",
    padding: 32,
    borderRadius: 10,
    backgroundColor: "white",
    alignSelf: "center",
  },
});
