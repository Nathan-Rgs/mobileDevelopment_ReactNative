import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="arrowLeftIconTitle"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      color="#000"
      {...props}
    >
      <Path d="M9 6l-6 6 6 6M21 12H4M3 12h1" />
    </Svg>
  );
}

export default SvgComponent;
