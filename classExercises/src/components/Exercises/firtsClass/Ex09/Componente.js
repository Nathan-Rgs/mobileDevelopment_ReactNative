import * as React from "react";
import { Text, View } from "react-native";

export default function Componente(props) {
  const { text } = props;
  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}
