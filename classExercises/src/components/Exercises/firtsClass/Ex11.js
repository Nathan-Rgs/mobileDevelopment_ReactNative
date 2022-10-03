// Faça um app que tenha dois inputText que serão usados para
// receber números. Crie um componente Text para cada uma das
// seguintes operações: soma, substração, divisão e multiplicação
// dos dois números.

import React, { useState } from "react";
//import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from "react-native";
import Constants from "expo-constants";

function App() {
  //const [nome, setNome] = useState("José");
  const [num, setNum] = useState(null);
  const [num2, setNum2] = useState(null);

  return (
    <View>
      <TextInput
        style={{ borderColor: "red" }}
        placeholder="Digite um numero aqui!"
        value={num}
        onChangeText={(text) => {
          setNum(text);
        }}
      />
      <TextInput
        style={{ borderColor: "red" }}
        placeholder="Digite um numero aqui!"
        value={num2}
        onChangeText={(text) => {
          setNum2(text);
        }}
      />
      <br />
      <Text>Nome Soma: {Number(num) + Number(num2)}</Text>
      <Text>Nome Subtração: {Number(num) - Number(num2)}</Text>
      <Text>Nome Multiplicação: {Number(num) * Number(num2)}</Text>
      <Text>Nome Divisão: {Number(num) / Number(num2) || 0}</Text>
    </View>
  );
}

export default App;
