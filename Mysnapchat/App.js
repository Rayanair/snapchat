
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {useState} from 'react';
import { Picker } from '@react-native-picker/picker';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ScreenPage from './screens/ScreenPage';



function App() {
  return (
          <NavigationContainer>
              <ScreenPage />
          </NavigationContainer>
  );
}

export default App;