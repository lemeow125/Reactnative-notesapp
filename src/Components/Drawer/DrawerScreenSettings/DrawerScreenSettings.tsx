import { View, Image, Text } from "react-native";
import type { DrawerNavigationOptions } from "@react-navigation/drawer";
import AppIcon from "../../Icons/AppIcon/AppIcon";
const DrawerScreenSettings: DrawerNavigationOptions = {
  headerTitleStyle: { color: "white", fontSize: 26 },
  unmountOnBlur: true,
  headerStyle: { backgroundColor: "#0087e4" },
  headerTintColor: "white",
  drawerType: "slide",
  drawerLabelStyle: {
    color: "white",
  },
  drawerStyle: {
    backgroundColor: "#002d4d",
    width: 260,
  },
  headerRight: () => (
    <View
      style={{ flexDirection: "row", marginRight: 16, alignItems: "center" }}
    >
      <AppIcon size={32} color="white" />
    </View>
  ),
};
export default DrawerScreenSettings;
