import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator  } from '@react-navigation/drawer';

import Login from './src/Pages/Login';
import Main from './src/Pages/Main';
import Details from './src/Pages/Main/Details';
import DrawerMenu from './src/components/DrawerMenu';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function StackNav({navigation}) {
  return(
    <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forScaleFromCenterAndroid,
          headerShown: false
        }}
      >
      <Stack.Screen initialParams={{ ip: ''}} name="Main" component={Main} />  
    </Stack.Navigator>
  )
}

function App() {
  return (
    <NavigationContainer>
        <StatusBar barStyle="light-content" translucent={true}/>
        <Drawer.Navigator
          initialRouteName="Login"
          drawerContent={props => <DrawerMenu {...props } />}
        >
          <Drawer.Screen initialParams={{ ip: '', funcionario: ''}} name="Login" component={Login} />      
          <Drawer.Screen name="StackNav" component={StackNav} />
          <Drawer.Screen name="Details" component={Details} />
        </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;
