import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/UsuarioContext';
import { colores, styles } from '../theme/theme';
import logInImage from '../images/Logo.png'
import axios from 'axios';

 const initialState = {
     usuario:'',
     password: '',
 }
const Login = (props) => {
     const [datos, setDatos] = useState(initialState);
     const {usuario, password} = datos;
 const LOGIN_IMAGE = Image.resolveAssetSource(logInImage).uri;

     const context = useContext(AuthContext);
    
     const handleChange = (nom, valor) => {
         setDatos({...datos, [nom]:valor});
   }

   const handleSubmit = async () => {
    console.log('AQUI3');
       await axios.post('http://192.168.1.3:5000/authenticate', datos)
       
       .then(function (response) {
         // handle success
    console.log(response);
    console.log(response.data.resultado.user)
     console.log(response.status);     
		  if(response.status === 200) {
		  	setDatos(initialState);
	 	  	context.signIn(response.data.resultado.user);
	 	  	props.navigation.navigate('BottomTab');
      }
       })
       .catch(function (error) {
         // handle error
        //  console.log(JSON.stringify(error));
        console.log('AQUI2');
       })
       .finally(function () {
         // ToastAndroid.show('operación terminada', ToastAndroid.SHORT);
       });
     };

  return (
    <View style={styles.login_container}>
        <Image  source={{uri: LOGIN_IMAGE}} style={styles.login_image} />
      <Text style={styles.login_texto}>Introduce tu usuario y contraseña</Text>
      <TextInput
        placeholder='Usuario'
        placeholderTextColor={colores.uno}
        textAlign='center'
        style={styles.login_input}
        value={usuario}
        onChangeText={valor => handleChange('usuario', valor)}
      />
      <TextInput
        placeholder='Contraseña'
        placeholderTextColor={colores.uno}
        textAlign='center'
        style={styles.login_input}
        secureTextEntry={true}
        value={password}
        onChangeText={valor => handleChange('password', valor)}
      />
      <TouchableOpacity
        style={{flex:1}}
        onPress={handleSubmit}
      >
        <View style={styles.login_button}>
            <Text style={styles.login_button_text}> Ingresar</Text>
        </View>
      </TouchableOpacity>
      <Text>
         {/* { context.authState.nombre }  */}
      </Text>
    </View>
  )
}

export default Login