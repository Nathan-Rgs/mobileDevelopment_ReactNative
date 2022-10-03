import React, { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";

function App() {
  const [dados, setDados] = useState([]);
  const [erro, setErro] = useState("");

  useEffect(() => {
    getDados();
  }, []);

  const getDados = async () => {
    try {
      const resposta = await fetch(
        "https://zoo-animal-api.herokuapp.com/animals/rand/10"
      );
      const dados = await resposta.json();
      console.log(dados);

      setDados(dados);
    } catch (error) {
      console.log("Ferrou!");
      setErro("Ferrou!");
    }
  };

  return (
    <View>
      <Text>{erro}</Text>
      <FlatList
        data={dados}
        renderItem={({ item }) => {
          return (
            <Text>
              Nome: {item.name} -- Habitate: {item.habitat}
            </Text>
          );
        }}
      />
    </View>
  );
}

export default App;
