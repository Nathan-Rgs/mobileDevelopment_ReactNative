import { StatusBar, StyleSheet } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";

import { Loading } from "./src/components/Loading";
import Ex03 from "./src/components/Exercises/thirdClass/exercises/Ex04/Ex04";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      ></StatusBar>
      {fontsLoaded ? <Ex03 /> : <Loading />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  signature: {
    color: "white",
    alignSelf: "flex-end",
    marginRight: 5,
  },
});
