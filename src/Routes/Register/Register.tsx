import * as React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from '../../styles';
import Background from '../../Components/Background/Background';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from "react";
import {TouchableOpacity} from "react-native";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Background>
      <Text style={{...styles.text_white, ...{fontSize: 32}}}></Text>
      <SafeAreaView>
      <View style={styles.container}>
        <Text style ={styles.loginlabel}>Create an Account</Text>
      <View style={styles.inputView}>
        <TextInput 
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="white"
            onChangeText={setEmail} 
            value={email}
          /> 
          </View>   
          <View style={styles.inputView}>
        <TextInput 
            style={styles.TextInput}
            placeholder="Username"
            placeholderTextColor="white"
            onChangeText={setUsername} 
            value={username}
          /> 
          </View>   
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          onChangeText={setPassword} 
          value={password}
        />
      </View>
      <TouchableOpacity style={styles.registerbtn}>
      <Text style={styles.registertext}>REGISTER</Text>
      </TouchableOpacity>
      </View>
      </SafeAreaView>
    </Background>

  );
}
