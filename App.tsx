import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './src/Routes/Home/Home';
import UserInfo from './src/Routes/UserInfo/UserInfo';
import AddNote from './src/Routes/AddNote/AddNote';
import CustomDrawerContent from './src/Components/Drawer/DrawerScreenSettings/CustomDrawerContent/CustomDrawerContent';
import DrawerScreenSettings from './src/Components/Drawer/DrawerScreenSettings/DrawerScreenSettings';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={CustomDrawerContent}
        screenOptions={DrawerScreenSettings}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Add Note" component={AddNote} />
        <Drawer.Screen name="User Info" component={UserInfo} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
