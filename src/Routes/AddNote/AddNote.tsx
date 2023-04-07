import * as React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from '../../styles';
import Background from '../../Components/Background/Background';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from "react";
import {TouchableOpacity,} from "react-native";
import { RootDrawerParamList } from "../../Interfaces/Interfaces";
import { useNavigation } from "@react-navigation/native";

export default function AddNote() {
  const [addnote, setNote] = useState("");
  const [addtitle, setTitle] = useState("");
  
  const navigation = useNavigation<RootDrawerParamList>();

  return (
    <Background>
      <Text style={{...styles.text_white, ...{fontSize: 32}}}>Add Note</Text>
      <SafeAreaView>  
      <View style={styles.addnotecont}> 
      <View style={styles.tle}>
      <TextInput 
            style={styles.title}
            placeholder="Title"
            placeholderTextColor="white"
            onChangeText={setTitle} 
            value={addtitle}
          />
        </View>   
        <View style={styles.typehere}> 
        <TextInput 
            style={styles.typeinput}
            placeholder="Type here...."
            placeholderTextColor="white"
            onChangeText={setNote} 
            value={addnote} 
          /> 
       </View>
      <TouchableOpacity style={styles.savebtn}>
      <Text style={styles.savenote}>SAVE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.cancelbtn}
       onPress={() => {
        navigation.navigate("Home");  
      }}>
      <Text style={styles.cancel}>CANCEL</Text>
      </TouchableOpacity>
      </View>
      
      </SafeAreaView>
    </Background>
  );
}
