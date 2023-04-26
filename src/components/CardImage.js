import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../theme/theme'
import { useNavigation } from '@react-navigation/native'
const CardImage = ({image}) => {
  console.log(image);
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.cardImage} 
    onPress={() => navigation.navigate("ImageScreen", { image })}>
      <Image 
        source={{
            uri: 
            image.value?image.value:
            'https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png'
        }} 
        style={styles.imagenes} 
      />
    </TouchableOpacity>
  )
}

export default CardImage