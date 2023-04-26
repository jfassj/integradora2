import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { styles } from '../theme/theme'
import { AuthContext } from '../context/UsuarioContext'
import InicioImage from '../images/Pfp.png'

const Home = (props) => {
  const context = useContext(AuthContext);
  const INICIO_IMAGE = Image.resolveAssetSource(InicioImage).uri;
  return (
    <View style={styles.container}>
      <Text style={styles.text_inicio}>Inicio</Text>
      <Image style={styles.inicio_image}
      source={{
        uri: INICIO_IMAGE
      }}
      />
      <Text style={styles.text_nombre}>Nombre: { context.authState.nombre }</Text>
      <TouchableOpacity
        style={styles.home_boton}
        onPress={() => {
          context.signOut();
          props.navigation.navigate('Login');
        }}
      >
        <Text style={styles.home_boton_texto}>Salir</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home