import { StatusBar, StyleSheet, Text } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import { Background } from "./src/components/Background";
import { Loading } from "./src/components/Loading";
import Ex01 from "./src/components/Exercises/thirdClass/exercises/Ex01";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      ></StatusBar>
      {fontsLoaded ? <Ex01 /> : <Loading />}
      <Text style={styles.signature}>Made by: Nathan Roberto</Text>
    </Background>
  );
}

const styles = StyleSheet.create({
  signature: {
    color: "white",
    alignSelf: "flex-end",
    marginRight: 5,
  },
});
