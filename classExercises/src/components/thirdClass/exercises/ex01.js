// Crie um app para o cadastro de uma lista telefônica com
// as seguintes informações: nome, endereço, email e telefone. Quando
// o usuário preencher as informações e clicar no botão cadastrar,
// essas informações devem ser adicionadas a um vetor. Uma flatlist
// deve ser usada para exibir as informações desse vetor abaixo da tela
// de cadastro.

import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  Text,
} from "react-native";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, setValue, handleSubmit } = useForm();
  const [cadastros, setCadastros] = useState([]);

  useEffect(() => {
    register("name");
    register("adress");
    register("email");
    register("phone");
  }, [register]);

  const onSubmit = (formData) => {
    formData.id = cadastros.length + 1;
    setCadastros([...cadastros, formData]);
  };

  return (
    <View style={styles.formStyle}>
      <Text> Formulário: </Text>
      <TextInput
        label={"Nome"}
        placeholder={"Digite seu nome"}
        onChangeText={(text) => setValue("name", text)}
      />
      <TextInput
        label={"Endereço"}
        placeholder={"Digite seu endereço"}
        onChangeText={(text) => setValue("adress", text)}
      />
      <TextInput
        label={"Email"}
        placeholder={"Digite seu email"}
        onChangeText={(text) => setValue("email", text)}
      />
      <TextInput
        label={"Telephone"}
        placeholder={"Digite seu phone"}
        onChangeText={(text) => setValue("phone", text)}
      />
      <Button onPress={handleSubmit(onSubmit)} title={"Enviar"} />

      <FlatList
        data={cadastros}
        renderItem={({ item }) => (
          <View>
            <Text>Nome: {item.name}</Text>
            <Text>Endereço: {item.adress}</Text>
            <Text>Phone: {item.phone}</Text>
            <Text>Email: {item.email}</Text>
            <Text></Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    width: 50%,
    margin: "auto",
    borderRadius: 1,
    backgroundColor: "white",
  },
});
