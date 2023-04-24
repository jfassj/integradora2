import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CardImage from './CardImage'
import { styles } from '../theme/theme'
const ImageList = ({photos}) => {

    const renderItem = (({item}) => <CardImage image={item}/>)

  return (
    
    <View>
      <FlatList
      data={photos}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      numColumns={2}
      />
    </View>
  )
}

export default ImageList