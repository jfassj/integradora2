import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../theme/theme'
import ImageList from '../components/ImageList'

const Multimedia = () => {
  const [photos, setPhotos] = useState([]);

  

  return (
    <View style={styles.container}>
      <ImageList photos={photos}/>
    </View>
  )
}

export default Multimedia