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

export default function CustomDrawerContent(props: {}) {
  const navigation = useNavigation<RootDrawerParamList>();
  const width = 224;
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
        <Text style={{ ...styles.text_white, ...{ fontSize: 32 } }}>Home</Text>
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
        color="Green"
        width={width}
        onPress={() => {
          navigation.navigate("Login");
        }}
      >
        <LoginIcon size={32} color="white" />
        <Text style={{ ...styles.text_white, ...{ fontSize: 32 } }}>Login</Text>
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

      <ButtonAlignLeft
        color="Red"
        width={width}
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        <LogoutIcon size={32} color="white" />
        <Text style={{ ...styles.text_white, ...{ fontSize: 32 } }}>
          Log Out
        </Text>
      </ButtonAlignLeft>

    </DrawerContentScrollView>
  );
}
