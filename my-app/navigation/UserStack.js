import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import UserViewProductDetails from '../screens/UserViewProductDetails';
import UserProfile from '../screens/UserProfile';
import EditProfile from '../screens/EditProfile';
import shippingDetailsList from '../screens/shippingDetailsList';
import UserAddShippingDetails from '../screens/UserAddShippingDetails';
import EditShippingDetails from '../screens/EditShippingDetails';
import ViewShippingDetails from '../screens/ViewShippingDetails';
import ProductDetails from '../screens/ProductDetails';
import { MaterialIcons } from '@expo/vector-icons';

const UserStack = () => {

    const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{unmountOnBlur: true}} >
        <Tab.Screen name='UserViewProductDetails' component={UserViewProductDetails} options={{ title: 'Product Details', tabBarIcon: ({color}) => (
            <MaterialIcons  name='storefront' size={22} color={color} />
        )
        }} />
        <Tab.Screen name='UserProfile' component={UserProfile} />
        <Tab.Screen name='EditProfile' component={EditProfile} options={{
                  tabBarItemStyle: { display: 'none' }, title: 'Edit Profile'
        }}/>
        <Tab.Screen name='ProductDetails' component={ProductDetails} options={{
                  tabBarItemStyle: { display: 'none' }, title: 'Product Information'
        }}/>
        <Tab.Screen name='shippingDetailsList' component={shippingDetailsList} options={{
                  tabBarItemStyle: { display: 'none' }, title: 'Shipping Details'
        }}/>
        <Tab.Screen name='UserAddShippingDetails' component={UserAddShippingDetails} options={{
                  tabBarItemStyle: { display: 'none' }, title: 'Shipping Details'
        }}/>
        <Tab.Screen name='ViewShippingDetails' component={ViewShippingDetails} options={{
                  tabBarItemStyle: { display: 'none' }, title: 'Shipping Details'
        }}/>
        <Tab.Screen name='EditShippingDetails' component={EditShippingDetails} options={{
                  tabBarItemStyle: { display: 'none' }, title: 'Shipping Details'
        }} />
    </Tab.Navigator>
  )
}

export default UserStack

const styles = StyleSheet.create({})