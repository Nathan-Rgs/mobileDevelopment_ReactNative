// Considere a API disponível no seguinte link:
// https://zoo-animal-api.herokuapp.com/animals/rand/10. Uma
// das informações disponíveis nesta API é o link da imagem do animal.
// Use essa informação para montar um grid de imagens de animais
// usando uma FlatList

import React, { useEffect, useState } from "react";
import { Text, View, FlatList, StyleSheet, Image } from "react-native";

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
      setDados(dados);
    } catch (error) {
      setErro("Ferrou!");
    }
  };

  return (
    <View style={styles.formStyle}>
      <Text> Exercício 2: </Text>
      <Text>{erro}</Text>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.id}
        numColumns={2}
        style={styles.animalFlatList}
        renderItem={({ item }) => {
          return (
            <View>
              <Image
                source={{ uri: item.image_link }}
                style={styles.animalImg}
              ></Image>
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  formStyle: {
    marginTop: 75,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    width: 300,
    margin: "auto",
    borderRadius: 10,
    backgroundColor: "white",
  },
  animalFlatList: {
    flexWrap: "wrap",
    gap: 10,
  },
  animalImg: {
    width: 150,
    height: 150,
  },
});
