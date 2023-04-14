import * as React from "react";
import { View, Text } from "react-native";
import styles from "../../styles";
import Background from "../../Components/Background/Background";
import Notes from "../../Components/Notes/Notes";
import { Switch } from "react-native-gesture-handler";
import { useState } from "react";

export default function Home() {
  const [switchLabel, setLabel] = useState("Viewing public notes");
  const [togglePublic, setToggled] = useState(false);
  function Preview() {
    if (togglePublic) {
      return <Text>Viewing public notes</Text>;
    } else {
      return <Notes />;
    }
  }
  return (
    <Background>
      <Text style={{ ...styles.text_white, ...{ fontSize: 25 } }}>
        Clip Notes
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          marginLeft: 16,
          alignItems: "center",
        }}
      >
        <Switch
          onValueChange={() => {
            setToggled(!togglePublic);
            if (togglePublic) {
              setLabel("Viewing own notes");
            } else {
              setLabel("Viewing public notes");
            }
          }}
          value={togglePublic}
        />
        <Text style={{ ...styles.text_white, ...{ fontSize: 16 } }}>
          {switchLabel}
        </Text>
      </View>
      <Preview />
    </Background>
  );
}
