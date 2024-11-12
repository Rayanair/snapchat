import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import ConnectionPage from './ConnectionPage';
import InscriptionPage from './InscriptionPage';
import Home from './Home';
import Camera from './Camera';
import SwiperPage from './swiperPage';
import Users from './UserPage';
import ViewSnap from './ViewSnap';


const Stack = createNativeStackNavigator();

function ScreenPage() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Group>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Connection" component={ConnectionPage}/>
            <Stack.Screen name="Inscription" component={InscriptionPage}/>
            <Stack.Screen name="Camera" component={Camera}/>
            <Stack.Screen name="swiperPage" component={SwiperPage}/>
            <Stack.Screen name="User" component={Users}/>
            <Stack.Screen name="Snap" component={ViewSnap}/>
        </Stack.Group>
    </Stack.Navigator>
         
  );
}

export default ScreenPage;