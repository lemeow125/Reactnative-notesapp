import * as React from "react";
import { View, Text, TextInput, Switch } from "react-native";
import styles from "../../styles";
import Background from "../../Components/Background/Background";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { RootDrawerParamList } from "../../Interfaces/Interfaces";
import { useNavigation } from "@react-navigation/native";
import { useMutation, useQueryClient } from "react-query";
import { AddNote } from "../../Components/Api/Api";

export default function NewNote() {
  const [note, setNote] = useState({
    title: "",
    content: "",
    public: false,
  });

  const navigation = useNavigation<RootDrawerParamList>();

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: AddNote,
    onSuccess: () => {
      queryClient.invalidateQueries("notes");
      queryClient.invalidateQueries("public_notes");
    },
  });

  return (
    <Background>
      <Text style={{ ...styles.text_white, ...{ fontSize: 32 } }}>
        New Note
      </Text>
      <SafeAreaView>
        <View style={styles.addnotecont}>
          <View style={styles.tle}>
            <TextInput
              style={styles.title}
              placeholder="Title"
              placeholderTextColor="white"
              value={note.title}
              onChangeText={(text) => {
                setNote({ ...note, title: text });
              }}
              maxLength={20}
            />
          </View>
          <View style={styles.typehere}>
            <TextInput
              style={styles.typeinput}
              placeholder="Type here...."
              placeholderTextColor="white"
              value={note.content}
              multiline={true}
              onChangeText={async (text) => {
                await setNote({ ...note, content: text });
              }}
            />
          </View>
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
              onValueChange={() => setNote({ ...note, public: !note.public })}
              value={note.public}
            />
            <Text style={{ ...styles.text_white, ...{ fontSize: 16 } }}>
              Public?
            </Text>
          </View>
          <TouchableOpacity
            style={styles.savebtn}
            onPress={async () => {
              try {
                await mutation.mutate({
                  title: note.title,
                  content: note.content,
                  public: note.public,
                });
                navigation.navigate("Home");
              } catch (error) {}
              console.log(note.content);
            }}
          >
            <Text style={styles.savenote}>SAVE</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cancelbtn}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.cancel}>CANCEL</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Background>
  );
}
