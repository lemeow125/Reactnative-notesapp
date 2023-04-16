import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useQuery } from "react-query";
import { GetNotes } from "../Api/Api";
import styles from "../../styles";
import { useSelector } from "react-redux";
import { RootState } from "../../Features/Redux/Store/Store";
import { NoteProps, RootDrawerParamList } from "../../Interfaces/Interfaces";
import { useNavigation } from "@react-navigation/native";
import Note from "../Note/Note";

export default function Notes() {
  const navigation = useNavigation<RootDrawerParamList>();
  const {
    data: notes,
    isLoading,
    error,
  } = useQuery("notes", GetNotes, { retry: 0 });
  const logged_in = useSelector((state: RootState) => state.logged_in.value);
  if (isLoading) {
    return (
      <Text style={{ ...styles.no, ...{ textAlign: "center" } }}>
        Loading notes...
      </Text>
    );
  } else if (!logged_in && error) {
    return (
      <Text style={{ ...styles.no, ...{ textAlign: "center" } }}>
        Please login to use Clip Notes
      </Text>
    );
  } else if (error) {
    return (
      <Text style={{ ...styles.no, ...{ textAlign: "center", color: "red" } }}>
        Error contacting Notes server
      </Text>
    );
  } else if (notes.length === 0) {
    return (
      <View>
        <Text style={{ ...styles.no, ...{ textAlign: "center" } }}>
          No notes exist yet. Create one!
        </Text>
        <TouchableOpacity
          style={{
            ...styles.homecont,
            ...{ display: "flex", alignSelf: "center" },
          }}
          onPress={() => {
            navigation.navigate("New Note");
          }}
        >
          <Text style={styles.newnote}>+</Text>
          <Text style={styles.no}>New note...</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <ScrollView contentContainerStyle={{ justifyContent: "center" }}>
      {notes.map((note: NoteProps, index: number) => {
        return (
          <Note
            id={note.id}
            key={index}
            title={note.title}
            content={note.content}
            date_created={note.date_created}
            owner={note.owner}
            public={note.public}
          />
        );
      })}
      <TouchableOpacity
        style={{
          ...styles.homecont,
          ...{ display: "flex", alignSelf: "center" },
        }}
        onPress={() => {
          navigation.navigate("New Note");
        }}
      >
        <Text style={styles.newnote}>+</Text>
        <Text style={styles.no}>New note...</Text>
      </TouchableOpacity>

      <View style={{ margin: 16 }} />
    </ScrollView>
  );
}
