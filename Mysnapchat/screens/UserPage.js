import {useNavigation} from '@react-navigation/native';
import React, {useEffect,useState} from 'react';
import Axios from 'axios';
import RNFS from 'react-native-fs';
import NumericInput from 'react-native-numeric-input'
import {
  Button,
  Image,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';


  function Users(props) {

    const [user, setUser] = useState('');
    const [Imagesource, setImage] = useState('');
    const [time, setTime] = useState('');

    const token = props.route.params.token
    const image = props.route.params.image

    RNFS.readFile(image, 'base64')
    .then(res =>{
        setImage(res);
    });

    const Allusers=async()=>{
        const response = await Axios.get("https://za3n0ne7q4.execute-api.eu-west-3.amazonaws.com/prod/user",{headers: {
            'Authorization': `Basic ${token}`,
          }} )
        .then((res) => { setUser(res.data.data)})
        .catch((err) => {
            console.log(err+"serhisjdkflkj");
        });
    }

    useEffect(()=> {
      Allusers()
    }, [])


    const sendSnap=async(e)=>{
        const response = await Axios.post("https://za3n0ne7q4.execute-api.eu-west-3.amazonaws.com/prod/snap",{
            to: e,
            image: 'data:image/png;base64,'+Imagesource,
            duration: time,
        },{headers: {
            'Authorization': `Basic ${token}`,
          }} )
        .then((res) => { console.log(res)})
        .catch((err) => {
            console.log(err+" Rayan");
        });
    }

    const navigation = useNavigation();
    
    if (user) {
        return(

            <>
            <Button title="Retour" onPress={() => navigation.goBack()} />
        <ScrollView>
                {user.map((item, index) => (
                    
                  <View >
                    {console.log(item.username)}
                   <Text style={{fontSize: 30}}>{item.username}</Text>
                   <Button
                        title="Envoyer"
                         onPress={() => {
                          console.log()
                            sendSnap(item._id)
                        }}
                        />
                        <NumericInput onChange={newText => setTime(newText)}/>
                   </View>
                ))}
        </ScrollView>
           </>
    
          
        
      )};

    return  <Image
    style={{width: '100%',
    height: '100%',
    aspectRatio: 9 / 16,}}
    source={{
      uri: `file://'${image}`,
    }}
  />;
  }
  
  export default Users;