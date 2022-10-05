// Crie um app com duas possíveis telas de fundo que devem
// ser alternada a cada 5 segundos.

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Screen1 from "./Screen1";
import Screen2 from "./Screen2";

const Pilha = createNativeStackNavigator();

function Ex03() {
  return (
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
  );
}

export default Ex03;
