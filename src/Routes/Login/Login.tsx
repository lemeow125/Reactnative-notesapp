import * as React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from '../../styles';
import Background from '../../Components/Background/Background';
import { SafeAreaView, NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { TouchableOpacity, } from "react-native";
import { NavigationHelpersContext, useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { SetUser } from "../../Features/Redux/Slices/LoggedInUserSlice/LoggedInUserSlice";
import { SetLoggedIn } from "../../Features/Redux/Slices/LoginSlice/LoginSlice";
import { UserInfo, UserLogin } from "../../Components/Api/Api";
import { RootDrawerParamList } from "../../Interfaces/Interfaces";

export default function Login() {
  const navigation = useNavigation<RootDrawerParamList>();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  return (
    <Background>
      <Text style={{ ...styles.text_white, ...{ fontSize: 32 } }}></Text>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.loginlabel}>Login to Clip Notes</Text>
          <StatusBar style="auto" />
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Username"
              placeholderTextColor="white"
              value={user.username}
              maxLength={20}
              onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
                setUser({ ...user, username: e.nativeEvent.text });
                console.log(user.username)
              }}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              placeholder="Password"
              placeholderTextColor="white"
              secureTextEntry={true}
              value={user.password}
              onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>): void => {
                setUser({ ...user, password: e.nativeEvent.text });
                console.log(user.password)
              }}
            />
          </View>

          <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={async () => {
            setUser({
              username: "",
              password: "",
            });
            if (await UserLogin(user)) {
              await dispatch(SetLoggedIn());
              await dispatch(SetUser(await UserInfo()));
              navigation.navigate("Home");
            } else {
              setError("Invalid Login");
            }
          }}
 style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>
          <Text style={styles.text_small_red}>{error}</Text>
          <TouchableOpacity style={styles.registerbtn}>
            <Text style={styles.registertext}>REGISTER</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Background>
  );
};

