import { View, Text, Button, Pressable, Image } from 'react-native'
import React from 'react'
import { colores, styles } from '../theme/theme'
import { Ionicons } from '@expo/vector-icons';
import InicioImage from '../images/Pfp.png'

const Inicio = ({navigation}) => {
  const INICIO_IMAGE = Image.resolveAssetSource(InicioImage).uri;
  return (
    <View style={styles.container2}>
      <Image source={{uri: INICIO_IMAGE}} style={styles.inicio_image} />
      <Pressable
        style={styles.button_inicio}
        onPress={() => navigation.navigate('Login')}
      >
        
        <Text
        style={styles.text3}
        ><Ionicons name="home-outline" size={20} color={colores.seis}/> Login</Text>
      </Pressable>
      <Pressable
        style={styles.button_inicio}
        onPress={() => navigation.navigate('')}  
      >
        <Text
        style={styles.text3}><Ionicons name="help-circle-outline" size={20} color={'white'}/> Ayuda</Text>

      </Pressable>
    </View>
  )
}

export default Inicio