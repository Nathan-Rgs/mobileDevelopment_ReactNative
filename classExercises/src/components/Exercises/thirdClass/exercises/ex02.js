// Considere a API disponível no seguinte link:
// https://zoo-animal-api.herokuapp.com/animals/rand/10. Uma
// das informações disponíveis nesta API é o link da imagem do animal.
// Use essa informação para montar um grid de imagens de animais
// usando uma FlatList

import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { Background } from "../../../Background";

import ArrowLeft from "../../../../assets/ArrowLeft";
import { THEME } from "../../../../theme";

function App(props) {
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
    <Background>
      <View style={styles.cardStyle}>
        <View style={styles.header}>
          <Pressable
            onPress={() => {
              props.navigation.pop();
            }}
          >
            <ArrowLeft style={styles.arrowLeft} />
          </Pressable>
          <Text style={styles.title}> Exercício 2: </Text>
        </View>
        <Text>{erro}</Text>
        <FlatList
          data={dados}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <View style={styles.viewAnimalFlatList}>
                <Image
                  source={{ uri: item.image_link }}
                  style={styles.animalImg}
                ></Image>
                <Text style={styles.animalName}>{item.name}</Text>
              </View>
            );
          }}
        />
      </View>
    </Background>
  );
}

export default App;

const styles = StyleSheet.create({
  cardStyle: {
    marginVertical: 40,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    margin: "auto",
    borderRadius: 10,
    backgroundColor: "white",
  },
  viewAnimalFlatList: {
    padding: 5,
  },
  animalImg: {
    width: 100,
    height: 100,
  },
  animalName: {
    width: 100,
  },
  title: {
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BLACK,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  arrowLeft: {
    marginRight: 20,
  },
});
