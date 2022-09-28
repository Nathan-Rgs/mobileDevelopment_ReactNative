// Faça um componente customizado usando props chamado
// “Cliente” que tenha duas propriedades chamadas,
// respectivamente, “nome” e “cidade”. Quando esse componente
// for usado, ele deve mostrar a seguinte mensagem: “O cliente
// nome nasceu na cidade de cidade”.
// Depois, crie três componentes “Cliente”, com os seguintes
// valores: (Tutankamon, Tangamandápio), (Violeta, Feliz Natal),
// (Emanuelita, Não-me-toque).

import * as React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import Cliente from "./components/AssetExample";

export default function App() {
  const [frase, setFrase] = React.useState("");

  return (
    <View>
      <Cliente nome={"Tutankamon"} cidade={"Tangamandápio"} />
      <br />
      <Cliente nome={"Violeta"} cidade={"Feliz Natal"} />
      <br />
      <Cliente nome={"Emanuelita"} cidade={"Não-me-toque"} />
    </View>
  );
}

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
  },
});
