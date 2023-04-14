import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../../styles";
import Background from "../../Components/Background/Background";
import AppIcon from "../../Components/Icons/AppIcon/AppIcon";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { RootDrawerParamList } from "../../Interfaces/Interfaces";

export default function Home() {
  const navigation = useNavigation<RootDrawerParamList>();

  const dispatch = useDispatch();
  return (
    <Background>
      <Text style={{ ...styles.text_white, ...{ fontSize: 25 } }}>
        Clip Notes
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={styles.homecont}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("New Note");
            }}
          >
            <Text style={styles.newnote}>+</Text>
          </TouchableOpacity>
          <Text style={styles.no}>New note...</Text>
          <View style={{ margin: 16 }} />
        </View>
      </View>
    </Background>
  );
}
