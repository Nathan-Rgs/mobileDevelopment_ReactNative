import * as React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

export default function App() {
  const [frase, setFrase] = React.useState("");
  return (
    <View>
      <TextInput style={style.input} onChangeText={setFrase} />
      <Text>
        {frase} | {frase.length}
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
  },
});
