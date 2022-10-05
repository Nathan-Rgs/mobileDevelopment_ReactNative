import { View, StyleSheet, Text, Button } from "react-native";

import { THEME } from "../../../../../theme";
import { Background } from "../../../../Background";

export default function ChooseEx(props) {
  return (
    <Background>
      <View style={styles.cardStyle}>
        <Text style={styles.title}> Escolha o exercício: </Text>
        <View style={styles.buttonsFlex}>
          <Button
            title="Ex 01"
            onPress={() => {
              props.navigation.navigate("Ex01");
            }}
          ></Button>
          <Button
            title="Ex 02"
            onPress={() => {
              props.navigation.navigate("Ex02");
            }}
          ></Button>
          <Button
            title="Ex 03"
            onPress={() => {
              props.navigation.navigate("Ex03");
            }}
          ></Button>
        </View>
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
  buttonsFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },
});
