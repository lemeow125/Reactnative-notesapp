import * as React from "react";
import { View, Text } from "react-native";
import styles from "../../styles";
import Background from "../../Components/Background/Background";

export interface props {}

export default function UserInfo(props: props) {
  return (
    <Background>
      <Text style={{ ...styles.text_white, ...{ fontSize: 32 } }}>
        UserInfo
      </Text>
    </Background>
  );
}
