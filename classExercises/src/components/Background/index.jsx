import { ImageBackground } from "react-native";

import backgroundImg from "../../assets/background-galaxy.png";

import { styles } from "./styles";

export function Background({ children }) {
  return (
    <ImageBackground
      source={backgroundImg}
      defaultSource={backgroundImg}
      style={[styles.container]}
    >
      {children}
    </ImageBackground>
  );
}
