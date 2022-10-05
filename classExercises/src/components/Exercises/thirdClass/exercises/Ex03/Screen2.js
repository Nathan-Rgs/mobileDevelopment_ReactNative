import React, { useEffect } from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

import ArrowLeft from "../../../../../assets/ArrowLeft";
import { THEME } from "../../../../../theme";
import { Background } from "../../../../Background";

export default function Tela2(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.push("Tela1");
    }, 5000);
  }, []);

  return (
    <Background>
      <View style={styles.cardStyle}>
        <View style={styles.header}>
          <Pressable
            onPress={() => {
              props.navigation.navigate("ChooseEx");
            }}
          >
            <ArrowLeft style={styles.arrowLeft} />
          </Pressable>
          <Text style={styles.title}> Exercício 3: </Text>
        </View>
        <Text style={[styles.title, styles.cardScreen, { color: "white" }]}>
          {" "}
          Segunda Tela{" "}
        </Text>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    width: "90%",
    height: "auto",
    padding: 32,
    borderRadius: 10,
    backgroundColor: "white",
    alignSelf: "center",
  },
  title: {
    fontSize: THEME.FONT_SIZE.LG,
    textAlign: "center",
  },
  logo: {
    height: 140,
    marginBottom: 14,
    alignSelf: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingBottom: 16,
  },
  cardScreen: {
    backgroundColor: "red",
  },
});
