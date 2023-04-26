import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../theme/theme';
import {Button} from "react-native-elements"
import ImageList from '../components/ImageList';
import { getImages } from '../../api/images';
import axios from 'axios';
import *  as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library'
import { useNavigation } from '@react-navigation/native';

const ImageScreen = ({route}) => {
    console.log(route);
    const {image} = route.params;
    const datos = image.value;
    const navigation = useNavigation()

    const [images, setImages] = useState([]);

    const loadImages = async () => {
        const res = await getImages()
        setImages(res.data.datos)
        
    };
    useEffect(() =>{
        console.log('cargo');
        loadImages()
    }, []);

    const handleDelete = async () =>{
      await axios.delete('http:/192.168.1.3:5000/delete', datos)
      .then(function(response){
        if(response.status === 200){
          navigation.navigate('BottomTab')
        }
      })
      .catch(function(error){
        console.log("aqui2");
        console.log(error);

      })
    }
    const downloadFile = async () => {
        let fileUri = FileSystem.documentDirectory + image.label + '.jpg'
    try {
        
        const {uri} = FileSystem.downloadAsync(image.value, fileUri);

        saveFile(uri)
    } catch (error) {
      console.log(error);  
    }  
    };

    const saveFile = async (fileUri) => {
        const {status} = await MediaLibrary.requestPermissionsAsync()
        if (status === 'granted') {
            const asset = await MediaLibrary.createAssetAsync(fileUri)
            await MediaLibrary.createAlbumAsync('Download', asset, false)
        }
    }
    const handleDownload = async () => {
        downloadFile()
    }
  return (
    <View>
      <Image source={{uri: image.value}} style={styles.image_screen}/>
      <View style={styles.container_buttons}>
        <Button
        title="Descargar"
        buttonStyle={styles.boton_descargar}
        onPress={() => handleDownload()}
        />
        <View>
        <Button
        title="Borrar"
        buttonStyle={styles.boton_borrar}
        onPress={() => handleDelete()}
        />
        </View>
      </View>
      <View>
        <ImageList photos={images}/>
      </View>
    </View>
  )
}

export default ImageScreen