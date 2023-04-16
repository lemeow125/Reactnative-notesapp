import * as React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import styles from "../../styles";
import { NoteProps } from "../../Interfaces/Interfaces";
import ButtonCentered from "../Buttons/ButtonCentered/ButtonCentered";
import { useQueryClient, useMutation } from "react-query";
import { DeleteNote } from "../Api/Api";

export default function Note(props: NoteProps) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: DeleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries("notes");
      queryClient.invalidateQueries("public_notes");
    },
  });
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
      <View style={styles.flex_row}>
        <ButtonCentered
          color={"Red"}
          onPress={() => {
            console.log("Deleted note id " + props.id);
            mutation.mutate(props.id);
          }}
          width={64}
        >
          <Text style={{ ...styles.text_white, ...{ fontSize: 16 } }}>
            Delete Note
          </Text>
        </ButtonCentered>
        <ButtonCentered
          color={"Yellow"}
          onPress={() => console.log("Edited note id " + props.id)}
          width={64}
        >
          <Text style={{ ...styles.text_white, ...{ fontSize: 16 } }}>
            Edit Note
          </Text>
        </ButtonCentered>
      </View>
    </View>
  );
}
