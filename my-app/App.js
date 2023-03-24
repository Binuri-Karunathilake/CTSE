import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import UserProfilePage from './screens/UserProfile';
import ProductDetails from './screens/ProductDetails'
import AddShippingDetails from './screens/AddShippingDetails'
import OrdersPage from './screens/UserOrders'
import UserAddShippingDetails from './screens/UserAddShippingDetails'
import UserViewProductDetails from './screens/UserViewProductDetails'
import UserProductInfo from './components/UserProductInfo';
import UserShippingInfo from './components/UserShippingInfo';
import shippingDetailsList from './screens/shippingDetailsList';

// import AdminStack from './navigation/AdminStack';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='shippingDetailsList' component={shippingDetailsList} />


      <Stack.Screen name='UserViewProductDetails' component={UserViewProductDetails} />
      <Stack.Screen name='UserProductInfo' component={ProductDetails} />
      <Stack.Screen name='UserAddShippingDetails' component={UserAddShippingDetails} />
      
        <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        
      </Stack.Navigator>
      {/* <AdminStack/> */}

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
