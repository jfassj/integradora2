import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTab from './BottomTab';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();
const StackNavigation2 = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false,}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={BottomTab} />
    </Stack.Navigator>
  )
}

export default StackNavigation2