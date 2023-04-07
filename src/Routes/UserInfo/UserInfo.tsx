import * as React from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles';
import Background from '../../Components/Background/Background';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserIcon from '../../Components/Icons/UserIcon/UserIcon';
import {TouchableOpacity, TextInput} from "react-native";
import { useState } from "react";

export default function UserInfo() {
  const [isEditable, setIsEditable] = useState(false);
  return (
    <Background>
      <Text style={{...styles.text_white, ...{fontSize: 32}}}></Text>
      <SafeAreaView>
      <View style={styles.userinfocont}>  
        <Text style ={styles.userlabel} > <UserIcon size={32} color="white"/> USER INFO</Text>

        </View>
      <View style={styles.form}>
        <View style={styles.inputRow}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={[styles.inputUser, !isEditable && styles.disabledInput]}
            editable={isEditable}
          />
          
        </View>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => setIsEditable(!isEditable)}
        >
          <Text style={styles.buttonText}>{isEditable ? "Save" : "Edit Profile"}</Text>
        </TouchableOpacity>
      </View>
      </SafeAreaView>
    </Background>
  );
}
