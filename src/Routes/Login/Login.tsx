import * as React from 'react';
import {View, Text,  TextInput} from 'react-native';
import styles from '../../styles';
import Background from '../../Components/Background/Background';
import { SafeAreaView} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {TouchableOpacity,} from "react-native";



export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Background>
       <Text style={{...styles.text_white, ...{fontSize: 32}}}></Text>
      <SafeAreaView>
      <View style={styles.container}>
        <Text style ={styles.loginlabel}>Login to Clip Notes</Text>
      <StatusBar style="auto" />
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

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn}>
      <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerbtn}>
      <Text style={styles.registertext}>REGISTER</Text>
      </TouchableOpacity>
      </View>
      </SafeAreaView>
    </Background>   
); 
};
 
