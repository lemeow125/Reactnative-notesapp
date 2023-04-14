import * as React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useQuery } from "react-query";
import { GetNotes, GetPublicNotes } from "../Api/Api";
import styles from "../../styles";
import { useSelector } from "react-redux";
import { RootState } from "../../Features/Redux/Store/Store";
import { NoteProps, RootDrawerParamList } from "../../Interfaces/Interfaces";
import { useNavigation } from "@react-navigation/native";
import Note from "../Note/Note";

export default function PublicNotes() {
  const navigation = useNavigation<RootDrawerParamList>();
  const {
    data: notes,
    isLoading,
    error,
  } = useQuery("public_notes", GetPublicNotes, { retry: 0 });
  if (isLoading) {
    return (
      <Text style={{ ...styles.no, ...{ textAlign: "center" } }}>
        Loading public notes...
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
      <Text style={{ ...styles.no, ...{ textAlign: "center" } }}>
        There are no public notes...
      </Text>
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
    </ScrollView>
  );
}
