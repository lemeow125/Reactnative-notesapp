import * as React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import styles from "../../styles";
import { NoteProps, RootDrawerParamList } from "../../Interfaces/Interfaces";
import ButtonCentered from "../Buttons/ButtonCentered/ButtonCentered";
import { useQueryClient, useMutation } from "react-query";
import { DeleteNote } from "../Api/Api";
import { useNavigation } from "@react-navigation/native";

export default function PublicNote(props: NoteProps) {
  const navigation = useNavigation<RootDrawerParamList>();
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
    </View>
  );
}
