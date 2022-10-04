import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import imgLogo from "../../../../../assets/facensLogo.png";
import { THEME } from "../../../../../theme";

export default function Screen1(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("Tela2");
    }, 5000);
  }, []);

  return (
    <View style={styles.cardStyle}>
      <Image source={imgLogo} style={styles.logo} />
      <Text style={styles.title}> Primeira Tela </Text>
    </View>
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
  },
  logo: {
    height: 140,
    marginBottom: 14,
    alignSelf: "center",
  },
});
