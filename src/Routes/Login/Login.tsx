import * as React from 'react';
import {View, Text,  TextInput} from 'react-native';
import styles from '../../styles';
import Background from '../../Components/Background/Background';
import { SafeAreaView} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {Button,TouchableOpacity,} from "react-native";



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <Background>
       <Text style={{...styles.text_white, ...{fontSize: 32}}}>LOG IN</Text>
      <SafeAreaView>
      <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput 
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          /> 
          </View>   
        
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn}>
      <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      </View>
      </SafeAreaView>
    </Background>   
); 
}
 
