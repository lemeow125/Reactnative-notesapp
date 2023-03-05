import * as React from "react";
import { IconProps } from "../../../Interfaces/Interfaces";

import { Svg, Path } from "react-native-svg";

export default function AppIcon(props: IconProps) {
  return (
    <>
      <Svg
        width={props.size + "px"}
        height={props.size + "px"}
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke={props.color}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path stroke="none" d="M0 0h24v24H0z" fill="none"></Path>
        <Path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></Path>
        <Path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></Path>
        <Path d="M9 12h6"></Path>
        <Path d="M9 16h6"></Path>
      </Svg>
    </>
  );
}
