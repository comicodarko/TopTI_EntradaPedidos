import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import BackgroundColor from 'react-native-background-color';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators, TransitionPresets } from '@react-navigation/stack';
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
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false        
      }}     
    >
      <Stack.Screen initialParams={{ ip: '', funcionario: ''}} name="Login" component={Login} />      
      <Stack.Screen initialParams={{ ip: ''}} name="Main" component={Main} />
      <Stack.Screen name="StackNav" component={StackNav} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}

function App() {
  useEffect(() => {
    Platform.OS === "android" && setTimeout(() => { BackgroundColor.setColor("#202020") }, 500);
  }, [])
  return (
    <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#0000" translucent={true}/>
        <Drawer.Navigator
          initialRouteName="Login"
          drawerContent={props => <DrawerMenu {...props } />}
        >
          <Drawer.Screen name="StackNav" component={StackNav} />          
        </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;
