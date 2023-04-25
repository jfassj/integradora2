import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from '../theme/theme'
const CardImage = ({image}) => {
  console.log(image);
  return (
    <View style={styles.cardImage}>
      <Image 
        source={{
            uri:'https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png'
        }} 
        style={styles.imagenes} 
      />
    </View>
  )
}

export default CardImage