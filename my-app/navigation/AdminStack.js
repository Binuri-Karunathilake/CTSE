import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AdminAddNewProduct from '../screens/AdminAddNewProduct';
import AdminViewProductList from '../screens/AdminViewProductList';
import CustomDrawer from '../components/CustomDrawer';
import { Ionicons, FontAwesome5, MaterialIcons  } from '@expo/vector-icons';
import AdminProductPage from '../screens/AdminProductPage';
import AdminEditProduct from '../screens/AdminEditProduct';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AdminStack = () => {
  return (
    <Drawer.Navigator screenOptions={{drawerLabelStyle: {marginLeft: -25, fontFamily: '', fontSize: 15}, drawerActiveBackgroundColor: '#2b6777', drawerActiveTintColor: '#fff', drawerInactiveTintColor: '#333', unmountOnBlur:true,
        headerStyle: {
          backgroundColor: '#2b6777',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '500',
        },
    }} drawerContent={props => <CustomDrawer {...props}  /> }  >
        <Drawer.Screen name='AdminViewProductList' component={AdminViewProductList} 
        options={{
          title: 'Products (Admin)',
          drawerIcon: ({color}) => (
            <MaterialIcons  name='storefront' size={22} color={color} />
          )
        }} />
        <Drawer.Screen name='Add Product' component={AdminAddNewProduct} options={{
          drawerIcon: ({color}) => (
            <MaterialIcons  name='add-business' size={22} color={color} />
          )
        }} />
        <Drawer.Screen name='User Management' component={AdminAddNewProduct} options={{
          drawerIcon: ({color}) => (
            <FontAwesome5 name='users-cog' size={20} color={color} />
          )
        }} />
        <Drawer.Screen name='Admin Product Details' component={AdminProductPage} options={{
                  drawerItemStyle: { display: 'none' }
        }}/>
        <Drawer.Screen name='Admin Edit Product Details' component={AdminEditProduct} options={{
                  drawerItemStyle: { display: 'none' }
        }}/>
    </Drawer.Navigator>
  )
}

export default AdminStack

const styles = StyleSheet.create({})