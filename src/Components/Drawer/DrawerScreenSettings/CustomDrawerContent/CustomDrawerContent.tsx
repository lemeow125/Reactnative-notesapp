import * as React from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import ButtonAlignLeft from "../../../Buttons/ButtonAlignLeft/ButtonAlignLeft";
import styles from "../../../../styles";

import { RootDrawerParamList } from "../../../../Interfaces/Interfaces";

import AddIcon from "../../../Icons/AddIcon/AddIcon";
import HomeIcon from "../../../Icons/HomeIcon/HomeIcon";
import LoginIcon from "../../../Icons/LoginIcon/LoginIcon";
import SignupIcon from "../../../Icons/SignupIcon/SignupIcon";
import UserIcon from "../../../Icons/UserIcon/UserIcon";
import AppIcon from "../../../Icons/AppIcon/AppIcon";
import LogoutIcon from "../../../Icons/LogoutIcon/LogoutIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../Features/Redux/Store/Store";
import { Toggle_Login } from "../../../../Features/Redux/Slices/LoginSlice/LoginSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CustomDrawerContent(props: {}) {
  const navigation = useNavigation<RootDrawerParamList>();
  const dispatch = useDispatch();
  const width = 224;
  const logged_in = useSelector((state: RootState) => state.logged_in.value);
  const logged_in_user = useSelector(
    (state: RootState) => state.logged_in_user.value
  );
  if (logged_in) {
    return (
      <DrawerContentScrollView {...props}>
        <View
          style={{
            ...styles.flex_row,
            ...{ justifyContent: "center" },
          }}
        >
          <AppIcon size={32} color="white" />
          <Text style={{ ...styles.text_white, ...{ fontSize: 32 } }}>
            Clip Notes
          </Text>
        </View>
        <Text style={{ ...styles.text_white, ...{ fontSize: 16 } }}>
          Logged in as {logged_in_user.username}
        </Text>
        <ButtonAlignLeft
          color="Blue"
          width={width}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <HomeIcon size={32} color="white" />
          <Text style={{ ...styles.text_white, ...{ fontSize: 32 } }}>
            Home
          </Text>
        </ButtonAlignLeft>

        <ButtonAlignLeft
          color="Green"
          width={width}
          onPress={() => {
            navigation.navigate("New Note");
          }}
        >
          <AddIcon size={32} color="white" />
          <Text style={{ ...styles.text_white, ...{ fontSize: 32 } }}>
            New Note
          </Text>
        </ButtonAlignLeft>
        <ButtonAlignLeft
          color="Yellow"
          width={width}
          onPress={() => {
            navigation.navigate("User Info");
          }}
        >
          <UserIcon size={32} color="white" />
          <Text style={{ ...styles.text_white, ...{ fontSize: 32 } }}>
            User Info
          </Text>
        </ButtonAlignLeft>
        <ButtonAlignLeft
          color="Red"
          width={width}
          onPress={() => {
            dispatch(Toggle_Login());
            AsyncStorage.removeItem("token");
          }}
        >
          <LogoutIcon size={32} color="white" />
          <Text style={{ ...styles.text_white, ...{ fontSize: 32 } }}>
            Log Out
          </Text>
        </ButtonAlignLeft>
      </DrawerContentScrollView>
    );
  } else {
    return (
      <DrawerContentScrollView {...props}>
        <View
          style={{
            ...styles.flex_row,
            ...{ justifyContent: "center" },
          }}
        >
          <AppIcon size={32} color="white" />
          <Text style={{ ...styles.text_white, ...{ fontSize: 32 } }}>
            Clip Notes
          </Text>
        </View>

        <ButtonAlignLeft
          color="Blue"
          width={width}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <HomeIcon size={32} color="white" />
          <Text style={{ ...styles.text_white, ...{ fontSize: 32 } }}>
            Home
          </Text>
        </ButtonAlignLeft>
        <ButtonAlignLeft
          color="Green"
          width={width}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <LoginIcon size={32} color="white" />
          <Text style={{ ...styles.text_white, ...{ fontSize: 32 } }}>
            Login
          </Text>
        </ButtonAlignLeft>
        <ButtonAlignLeft
          color="Yellow"
          width={width}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <SignupIcon size={32} color="white" />
          <Text style={{ ...styles.text_white, ...{ fontSize: 32 } }}>
            Register
          </Text>
        </ButtonAlignLeft>
      </DrawerContentScrollView>
    );
  }
}
