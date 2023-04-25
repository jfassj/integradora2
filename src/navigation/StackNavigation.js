
import Login from '../screens/Login';
import Inicio from '../screens/Inicio';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

const Stack2 = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack2.Navigator screenOptions={{headerShown: false,}}>
      <Stack2.Screen name="Inicio" component={Inicio} />
      <Stack2.Screen name="Login" component={Login} />
    </Stack2.Navigator>
  );
}

export default StackNavigation;