import Ex01 from "./src/components/thirdClass/exercises/ex02";
import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider style={styles.backgroundStyle}>
      <Ex01></Ex01>
      <Text style={styles.signature}>Made by: Nathan Roberto</Text>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#45fd",
    display: "flex",
    flex: 1,
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  signature: {
    color: "white",
    alignSelf: "flex-end",
    marginRight: 5,
  },
});
