import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { firebase } from "./firebase";

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import UserProfilePage from './screens/UserProfile';
import AdminHomeScreen from './screens/AdminHomeScreen';
import EditProfile from './screens/EditProfile';
import Login from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';


function App() {
  const [initilizing, setInitilizing] = useState(true);
  const [user, setUser] = useState();

  //handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initilizing) setInitilizing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  if (initilizing) return null;

  if(!user) {

  return (
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        
      </Stack.Navigator>
  );
}

return(
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="AdminHome" component={AdminHomeScreen} />        
    <Stack.Screen options={{headerShown: false}} name='EditProfile' component={EditProfile} />
  </Stack.Navigator>
);
}

export default () =>{
  return(
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}
const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
