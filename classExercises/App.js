import Ex01 from "./src/components/thirdClass/exercises/ex02";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    <View style={styles.backgroundStyle}>
      <Ex01></Ex01>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#45fd",
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
});
