import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import UserProfilePage from './screens/UserProfile';
import AdminAddNewProduct from './screens/AdminAddNewProduct';
import AdminViewProductList from './screens/AdminViewProductList';
import AdminStack from './navigation/AdminStack';
import AdminProductPage from './screens/AdminProductPage';
import ShoppingCartScreen from './screens/ShoppingCart';
import CheckoutScreen from './screens/Checkout';
import HelpScreen from './screens/ShoppingHelp';
import PaymentScreen from './screens/Payment';


export default function App() {
  return (
    <NavigationContainer>
      <PaymentScreen/>
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
