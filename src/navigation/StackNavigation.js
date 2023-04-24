
import Login from '../screens/Login';
import Inicio from '../screens/Inicio';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false,}}>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default StackNavigation;