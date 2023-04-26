import { View, Text, Image } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTab from './BottomTab';
import ImageScreen from '../screens/ImageScreen';
import Login from '../screens/Login';
import Icono from '../images/Pfp.png'
import { styles } from '../theme/theme';

const Stack = createNativeStackNavigator();
const StackNavigation2 = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown: false,}}/> 
      <Stack.Screen name="BottomTab" component={BottomTab} options={{headerShown: false,}} />
      <Stack.Screen name="ImageScreen" component={ImageScreen}
       options={{
        title: "Dronautica",
        }} 
      />
    </Stack.Navigator>
  )
}

export default StackNavigation2