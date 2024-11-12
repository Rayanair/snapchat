
import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect, useRef} from 'react';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import {launchImageLibrary} from 'react-native-image-picker';
import {
  Image,
  TouchableOpacity,
  Text,
  View,
  Linking,
  StyleSheet,
} from 'react-native';


  function Cameras(props) {
    const navigation = useNavigation();
    const token = props.token;
    const email = props.email;
    const id = props.id;
    const username = props.username;

    const [showCamera, setShowCamera] = useState(true);
    const [imageSource, setImageSource] = useState('');

    useEffect(() => {
      async function getPermission() {
        const permission = await Camera.requestCameraPermission();
        console.log(`Camera permission status: ${permission}`);
        if (permission === 'denied') await Linking.openSettings();
      }
      getPermission();
    }, []);

  const camera = useRef(null);
  const devices = useCameraDevices()
  const device = devices.back


  const capturePhoto = async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({});
      setImageSource(`file://'${photo.path}`);
      console.log(photo.path);
      console.log(photo)
    }
  };

  const openGallery = () => {
    const options = { storageOptions: {
      path: 'images',
      mediaType: 'photo',
    },
    includeBase64: true,
  };

  launchImageLibrary(options, response => {
    console.log(response.assets[0].uri)
    setImageSource(response.assets[0].uri)
    setShowCamera(false)
  })
  }


  if (device == null) {
    return <Text>Camera not available</Text>;
  }
  return (
    <View style={styles.container}>
    {showCamera ? (
      <>
        <Camera
          ref={camera}
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={showCamera}
          photo={true}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.camButton}
            onPress={() => {
              capturePhoto()
              setShowCamera(false)
            }
            }
          />
           <TouchableOpacity
              style={{
                backgroundColor: '#77c3ec',
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                borderWidth: 2,
                borderColor: 'white',
              }}
              onPress={() => {
                openGallery()
              }}>
              <Text style={{color: 'white', fontWeight: '500'}}>
                Galerie
              </Text>
            </TouchableOpacity>
        </View>

      </>
    ) : (
      <>
      {imageSource !== '' ? (
            <Image
              style={styles.image}
              source={{
                uri: imageSource,
              }}
            />
          ) : null}

          <View style={styles.backButton}>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(0,0,0,0.2)',
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#fff',
                width: 100,
              }}
              onPress={() => setShowCamera(true)}>
              <Text style={{color: 'white', fontWeight: '500'}}>Retour</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(0,0,0,0.2)',
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#fff',
                width: 100,
              }}
              onPress={() => navigation.navigate('User', {image: imageSource, token: token})}>
              <Text style={{color: 'white', fontWeight: '500'}}>Envoyer</Text>
            </TouchableOpacity>
          </View>
      </>
    )}
  </View>
  )
    
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: 'gray',
    },
    backButton: {
      backgroundColor: 'rgba(0,0,0,0.0)',
      position: 'absolute',
      justifyContent: 'center',
      width: '100%',
      top: 0,
      padding: 20,
    },
    buttonContainer: {
      backgroundColor: 'rgba(0,0,0,0.2)',
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      bottom: 0,
      padding: 20,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
    },
    camButton: {
      height: 80,
      width: 80,
      borderRadius: 40,
      //ADD backgroundColor COLOR GREY
      backgroundColor: '#B2BEB5',
  
      alignSelf: 'center',
      borderWidth: 4,
      borderColor: 'white',
    },
    image: {
      width: '100%',
      height: '100%',
      aspectRatio: 9 / 16,
    },
  });
  
  export default Cameras;