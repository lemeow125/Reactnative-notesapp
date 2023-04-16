import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawerContent from "./src/Components/Drawer/DrawerScreenSettings/CustomDrawerContent/CustomDrawerContent";
import DrawerScreenSettings from "./src/Components/Drawer/DrawerScreenSettings/DrawerScreenSettings";

import Home from "./src/Routes/Home/Home";
import UserInfo from "./src/Routes/UserInfo/UserInfo";
import NewNote from "./src/Routes/NewNote/NewNote";
import Login from "./src/Routes/Login/Login";
import Register from "./src/Routes/Register/Register";
import { Provider } from "react-redux";
import Store from "./src/Features/Redux/Store/Store";
import { QueryClient, QueryClientProvider } from "react-query";
import EditNote from "./src/Routes/EditNote/EditNote";

const Drawer = createDrawerNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <Provider store={Store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={CustomDrawerContent}
            screenOptions={DrawerScreenSettings}
          >
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="New Note" component={NewNote} />
            <Drawer.Screen name="User Info" component={UserInfo} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Register" component={Register} />
            <Drawer.Screen name="LogOut" component={Register} />
            <Drawer.Screen name="EditNote" component={EditNote} />
          </Drawer.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
}
