import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View>
      <Text style={style.texto}>Teste de texto</Text>
    </View>
  );
}

const style = StyleSheet.create({
  texto: {
    color: "blue",
    fontFamily: "italic",
    fontSize: 25,
  },
});
