import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Axios from 'axios';
import {
  Button,
  Text,
  TextInput,
  View,
} from 'react-native';

const ConnectionPage = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const Login=async()=>{

    const response = await Axios.put("https://za3n0ne7q4.execute-api.eu-west-3.amazonaws.com/prod/user", {
      email: email,
      password: password,
    },)
    .then((res) => navigation.navigate('swiperPage', {
      token: res.data.data.token,
      email:  res.data.data.email,
      id:  res.data.data._id,
      username:  res.data.data.username,
      profilPicture:  res.data.data.profilPicture
    }))
    .catch((err) => {
        console.log(err);
    });
}



  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "yellow",
        width: "100%",
      }}>
        <Button title="Retour" onPress={() => navigation.goBack()} />
      <Text  style={{
        fontSize: 30,
        color: "white"
      }} >Mysnapchat</Text>
      <TextInput style={{
        backgroundColor: "white",
        width: "80%",
        padding: 10,
        borderRadius: 10,
        margin: "5%",
      }} placeholder='Email'
      onChangeText={newText => setEmail(newText)}
      defaultValue={email}/>
      <TextInput style={{
        backgroundColor: "white",
        width: "80%",
        padding: 10,
        borderRadius: 10,
        margin: "5%",
      }} placeholder='Password'
      onChangeText={newText => setPassword(newText)}
      defaultValue={password}/>
       <Button
          title="Se connecter"
          onPress={() => Login()}
        />
    </View>
  );
};
export default ConnectionPage;