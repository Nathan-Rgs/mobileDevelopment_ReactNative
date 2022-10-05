// Junte as telas dos exercícios anteriores para que a
// navegação pelas telas do aplicativo seja feita por abas. Além disso,
// adicione ícones nas abas de cada tela: pelo menos um ícone deve ser
// adicionado por meio de uma imagem local e outro por meio de
// alguma biblioteca de ícones.

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Ex01 from "../Ex01";
import Ex02 from "../Ex02";
import Ex03 from "../Ex03/Ex03";
import ChooseEx from "./ChooseEx";

const Pilha = createNativeStackNavigator();

function Ex04() {
  return (
    <Pilha.Navigator initialRouteName="ChooseEx">
      <Pilha.Screen
        name="ChooseEx"
        component={ChooseEx}
        options={{ headerShown: false }}
      />
      <Pilha.Screen
        name="Ex01"
        component={Ex01}
        options={{ headerShown: false }}
      />
      <Pilha.Screen
        name="Ex02"
        component={Ex02}
        options={{ headerShown: false }}
      />
      <Pilha.Screen
        name="Ex03"
        component={Ex03}
        options={{ headerShown: false }}
      />
    </Pilha.Navigator>
  );
}

export default Ex04;
