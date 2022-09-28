//Crie um componente customizado, cujo valor inicial seja uma
//string vazia. Quando um botão for clicado, ele deve concatenar
//no valor anterior a seguinte string: “:)”. Teste o componente no
//aplicativo usando um componente “Text”.

import React, { useState } from "react";
import { Text, View, Button } from "react-native";
import Componente from "./Componente";

function App() {
  const [texto, setTexto] = useState("");
  const teste = {
    alan: "pai de familia",
    matheus: "matador de aula profissional",
  };

  return (
    <View>
      <Button
        title="Clique aqui e adicione um :)"
        onPress={() => {
          setTexto((prev) => prev + " :)");
        }}
      />
      <Componente text={texto} />
    </View>
  );
}

export default App;
