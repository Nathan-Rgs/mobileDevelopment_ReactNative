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
  Image,
  Pressable,
} from "react-native";
import { useForm } from "react-hook-form";

import logoImg from "../../../../assets/facensLogo.png";
import ArrowLeft from "../../../../assets/ArrowLeft";

import { THEME } from "../../../../theme";
import { Background } from "../../../Background";

export default function Ex01(props) {
  const component = {};
  component.name = "Ex01";

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
    <Background>
      <View style={styles.cardStyle}>
        <Pressable
          onPress={() => {
            props.navigation.pop();
          }}
        >
          <ArrowLeft />
        </Pressable>

        <Image source={logoImg} style={styles.logo} />
        <Text style={styles.title}> {component.name}: </Text>

        <View style={styles.formView}>
          <View style={styles.inputsView}>
            <TextInput
              style={styles.inputs}
              label={"Nome"}
              placeholder={"Digite seu nome"}
              onChangeText={(text) => setValue("name", text)}
            />
            <TextInput
              style={styles.inputs}
              label={"Endereço"}
              placeholder={"Digite seu endereço"}
              onChangeText={(text) => setValue("adress", text)}
            />
            <TextInput
              style={styles.inputs}
              label={"Email"}
              placeholder={"Digite seu email"}
              onChangeText={(text) => setValue("email", text)}
            />
            <TextInput
              style={styles.inputs}
              label={"Telephone"}
              placeholder={"Digite seu phone"}
              onChangeText={(text) => setValue("phone", text)}
            />
          </View>
          <Button onPress={handleSubmit(onSubmit)} title={"Enviar"} />
        </View>

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
  },
  title: {
    fontSize: THEME.FONT_SIZE.LG,
    fontFamily: THEME.FONT_FAMILY.BLACK,
  },
  logo: {
    height: 140,
    marginBottom: 14,
    alignSelf: "center",
  },
  inputs: {
    color: THEME.COLORS.CAPTION_400,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  formView: {
    paddingVertical: 10,
  },
  inputsView: {
    paddingBottom: 10,
  },
});
