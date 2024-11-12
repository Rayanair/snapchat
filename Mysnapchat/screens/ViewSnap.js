import React from 'react';
import { useNavigation} from '@react-navigation/native';
import Axios from 'axios';
import {
  Image,
  View,
  Text,
} from 'react-native';

const ViewSnap = (props) => {
    const id = props.route.params.id;
    const image = props.route.params.image;
    const duration = props.route.params.duration;
    const token = props.route.params.token;

    const navigation = useNavigation();
    
    const snapSee=async()=>{
        console.log("https://za3n0ne7q4.execute-api.eu-west-3.amazonaws.com/prod/snap/"+id)
        console.log(token)
          const response = await Axios.put("https://za3n0ne7q4.execute-api.eu-west-3.amazonaws.com/prod/snap/seen/"+id, {headers: {
              'Authorization': `Basic ${token}`,
            }})
          .then((res) => console.log(res+"totot le momo"))
          .catch((err) => {
              console.log(err+" t une merde");
          });
      }

       setTimeout(() => {
            snapSee()
            navigation.goBack()
        }, duration*1000);


  return (
    <View
      style={{
      }}>
        <Text style={{
            backgroundColor: "white",
            fontSize: 30,
            color: "black",
        }}>{duration}</Text>
         <Image
                style={{width: '100%',
                height: '100%',
                aspectRatio: 9 / 16,}}
                source={{
                uri: image,
                }}
            />
    </View>
  );
};
export default ViewSnap;