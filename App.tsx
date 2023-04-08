import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawerContent from "./src/Components/Drawer/DrawerScreenSettings/CustomDrawerContent/CustomDrawerContent";
import DrawerScreenSettings from "./src/Components/Drawer/DrawerScreenSettings/DrawerScreenSettings";

import Home from "./src/Routes/Home/Home";
import UserInfo from "./src/Routes/UserInfo/UserInfo";
import AddNote from "./src/Routes/AddNote/AddNote";
import Login from "./src/Routes/Login/Login";
import Register from "./src/Routes/Register/Register";
import { Provider } from "react-redux";
import Store from "./src/Features/Redux/Store/Store";
import { QueryClient, QueryClientProvider } from "react-query";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
  <Provider store={Store}>
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={CustomDrawerContent}
        screenOptions={DrawerScreenSettings}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Add Note" component={AddNote} />
        <Drawer.Screen name="User Info" component={UserInfo} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Register" component={Register} />
      </Drawer.Navigator>
    </NavigationContainer>
  </Provider>
  );
}