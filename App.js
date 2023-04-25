import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './src/theme/theme'
import { AuthProvider } from './src/context/UsuarioContext'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigation from './src/navigation/StackNavigation'
import { StatusBar } from 'expo-status-bar'
import StackNavigation2 from './src/navigation/StackNavigation2'

const App = () => {
  return (
    <NavigationContainer>
        <AppState>
          <StackNavigation2 />
        </AppState>
        <StatusBar/>
    </NavigationContainer>
  )
}

const AppState = ({children}) => {
  return(
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

export default App;
