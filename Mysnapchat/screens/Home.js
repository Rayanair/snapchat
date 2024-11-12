
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Button,
  View,
} from 'react-native';

  function Home() {
    const navigation = useNavigation();
    return (
      <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , backgroundColor: "yellow"}}>
        <Button
          title="Connection"
          onPress={() => navigation.navigate('Connection')}
        />
        <Button
          title="Inscription"
          onPress={() => navigation.navigate('Inscription')}
        />
      </View>
    );
  }
  
  export default Home;