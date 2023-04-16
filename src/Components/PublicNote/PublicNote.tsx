import * as React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import styles from "../../styles";
import { NoteProps } from "../../Interfaces/Interfaces";

export default function PublicNote(props: NoteProps) {
  return (
    <View style={styles.addnotecont}>
      <View style={styles.tle}>
        <TextInput
          style={styles.title}
          value={props.title}
          maxLength={20}
          editable={false}
        />
      </View>
      <View style={styles.typehere}>
        <ScrollView style={styles.typeinput} nestedScrollEnabled={true}>
          <Text style={styles.typeinput}>{props.content}</Text>
        </ScrollView>
      </View>
    </View>
  );
}
