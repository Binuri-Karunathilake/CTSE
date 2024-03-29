import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from "react";
import { auth, firebase } from "./firebase";

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import UserProfilePage from './screens/UserProfile';

import ProductDetails from './screens/ProductDetails'
import OrdersPage from './screens/UserOrders'
import UserAddShippingDetails from './screens/UserAddShippingDetails'
import UserViewProductDetails from './screens/UserViewProductDetails'
import UserProductInfo from './components/UserProductInfo';
import UserShippingInfo from './components/UserShippingInfo';
import shippingDetailsList from './screens/shippingDetailsList';
import ViewShippingDetails from './screens/ViewShippingDetails';
import EditShippingDetails from './screens/EditShippingDetails';
import AdminAddNewProduct from './screens/AdminAddNewProduct';
import AdminViewProductList from './screens/AdminViewProductList';
import AdminStack from './navigation/AdminStack';
import AdminProductPage from './screens/AdminProductPage';
import AdminHomeScreen from './screens/AdminHomeScreen';
import EditProfile from './screens/EditProfile';
import Login from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import UserProfile from './screens/UserProfile';



export default function App() {
  const [initilizing, setInitilizing] = useState(true);
  const [user, setUser] = useState();
  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
      <Stack.Screen name='UserViewProductDetails' component={UserViewProductDetails} />
      <Stack.Screen name='UserProductInfo' component={ProductDetails} />
      <Stack.Screen name='shippingDetailsList' component={shippingDetailsList} />

      <Stack.Screen name='UserAddShippingDetails' component={UserAddShippingDetails} />
      <Stack.Screen name='ViewShippingDetails' component={ViewShippingDetails} />
      <Stack.Screen name='EditShippingDetails' component={EditShippingDetails} />

        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="AdminHomeScreen" component={AdminHomeScreen} />  
        <Stack.Screen
          name="AdminStack"
          component={AdminStack}
          options={{ headerShown: false }}
        />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AdminHome" component={AdminHomeScreen} />        
      <Stack.Screen options={{headerShown: false}} name='EditProfile' component={EditProfile} />
      <Stack.Screen options={{headerShown: false}} name='UserProfile' component={UserProfile} />      

        

      </NavigationContainer>
  );
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
