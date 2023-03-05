import * as React from "react";
import { View, Text } from "react-native";
import styles from "../../styles";
import Background from "../../Components/Background/Background";

export interface props {}

export default function AddNote(props: props) {
  return (
    <Background>
      <Text style={{ ...styles.text_white, ...{ fontSize: 32 } }}>
        Add Note
      </Text>
    </Background>
  );
}
