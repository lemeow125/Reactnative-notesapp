import * as React from "react";
import { View, Text, TextInput, Switch } from "react-native";
import styles from "../../styles";
import Background from "../../Components/Background/Background";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { RootDrawerParamList } from "../../Interfaces/Interfaces";
import { useNavigation } from "@react-navigation/native";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { AddNote, GetNote, UpdateNote } from "../../Components/Api/Api";

export default function EditNote({ navigation, route }: any) {
  const { noteId } = route.params;
  const [note, setNote] = useState({
    title: "",
    content: "",
    public: false,
  });
  async function retrieve() {
    let a = await GetNote(noteId);
    setNote(a);
    return a;
  }
  const { data, isLoading, error } = useQuery("note", retrieve, {
    retry: 0,
  });
  useEffect(() => {
    setNote(data);
  }, [data]);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: UpdateNote,
    onSuccess: () => {
      queryClient.invalidateQueries("notes");
      queryClient.invalidateQueries("public_notes");
    },
  });
  if (error) {
    return (
      <Background>
        <Text style={{ ...styles.text_white, ...{ fontSize: 32 } }}>
          Error retrieving specific note
        </Text>
      </Background>
    );
  }
  if (isLoading) {
    return (
      <Background>
        <Text style={{ ...styles.text_white, ...{ fontSize: 32 } }}>
          Loading note...
        </Text>
      </Background>
    );
  }
  if (data && note) {
    return (
      <Background>
        <Text style={{ ...styles.text_white, ...{ fontSize: 32 } }}>
          Edit Note
        </Text>
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
                  id: noteId,
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
      </Background>
    );
  }
}
