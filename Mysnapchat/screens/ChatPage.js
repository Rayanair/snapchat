
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {
  Button,
  Modal,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

  function Chat(props) {
    const navigation = useNavigation();
    const [allImage, setImages] = useState('');
    const token = props.token;
    const email = props.email;
    const id = props.id;
    const username = props.username;

    const [modalVisible, setModalVisible] = useState(false);
       

    const Allsnap=async()=>{
      console.log(token)
        const response = await Axios.get("https://za3n0ne7q4.execute-api.eu-west-3.amazonaws.com/prod/snap",{headers: {
            'Authorization': `Basic ${token}`,
          }} )
        .then((res) => { {
            setImages(res.data.data)
            console.log(res)
        }})
        .catch((err) => {
            console.log(err+"haha looser");
        });
    }

    useEffect(()=> {
        Allsnap()
      }, [])

      

    if (allImage) {
        return(
            
            <>
        <ScrollView>
                {allImage.map((item, index) => (
                    
                  <View >
                    {console.log(item._id)}
                    {console.log(token)}
                    {console.log(item.from.username)}
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                            >
                                <Text style={{
                                    position: "relative",
                                    backgroundColor: "white",
                                    fontSize: 20,
                                    Colors: "black"
                                }}>{item.duration}</Text>

                                <Image
                                        style={{width: '100%',
                                        height: '100%',
                                        aspectRatio: 9 / 16,}}
                                        source={{
                                        uri: item.image,
                                        }}
                                    />
                    </Modal>


                    <Button
                        title={item.from.username}
                        onPress={() => {

                          navigation.navigate('Snap', {
                            token: token,
                            image: item.image,
                            id: item._id,
                            duration: item.duration
                          })
                        
                      }}
                        />
                  
                   
                   </View>
                ))}
        </ScrollView>
           </>
    
          
        
      )};

    return <Text>RAYAN</Text>;
  }

  const styles = StyleSheet.create({
  
    button: {
      margin: 20,
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
  });
  
  export default Chat;