import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../theme/theme'
import ImageList from '../components/ImageList'
import { getImages } from '../../api/images'

const Multimedia = () => {

  const [photos, setPhotos] = useState([]);

  const loadImages = async () => {
    const res = await getImages()
    setPhotos(res.data.datos)
    
  }
  useEffect(() =>{
    console.log('cargo');
    loadImages()
  }, [])

  

  return (
    <View style={styles.container}>
      <ImageList photos={photos}/>
    </View>
  )
}

export default Multimedia