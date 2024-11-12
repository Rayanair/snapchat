import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Axios from 'axios';
import {
  Button,
  Text,
  TextInput,
  View,
} from 'react-native';

const InscriptionPage = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');


  const Inscription=async()=>{

    const response = await Axios.post("https://za3n0ne7q4.execute-api.eu-west-3.amazonaws.com/prod/user",{
      email: email,
      username: username,
      profilePicture: "",
      password: password,
    },
    )
    .then((res) => {
      navigation.navigate('Connection') 
  })
    .catch((err) => {
        console.log(err+email+username+password);
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
        color: "white",
        margin: 20,
      }} >Mysnapchat</Text>
       <TextInput style={{
        backgroundColor: "white",
        width: "80%",
        padding: 10,
        margin: 10,
        borderRadius: 10,
      }} placeholder='Username'
      onChangeText={newText => setUsername(newText)}
      defaultValue={username}/>
      <TextInput style={{
        backgroundColor: "white",
        width: "80%",
        padding: 10,
        margin: 10,
        borderRadius: 10,
      }} placeholder='Email'
      onChangeText={newText => setEmail(newText)}
      defaultValue={email}
      />
      <Text style={{padding: 10, fontSize: 10}}>
        {email
          .split(' ')
          .map(word => word && word)
          .join(' ')}
      </Text>
      <TextInput style={{
        backgroundColor: "white",
        width: "80%",
        margin: 10,
        padding: 10,
        borderRadius: 10,
      }} placeholder='Password'
      onChangeText={newText => setPassword(newText)}
      defaultValue={password}/>
     <Button
          title="S'inscrire"
          onPress={() => Inscription()}
        />
    </View>
  );
};
export default InscriptionPage;