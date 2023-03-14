import * as React from "react";
import { View } from "react-native";
import styles from "../../styles";


export interface props {
  children: React.ReactNode;  
}

export default function Background(props: props) {
  return (

    <View style={styles.background}>
      <View style={{ margin: 8 }} /> 
      {props.children}
    </View> 
  );
}
