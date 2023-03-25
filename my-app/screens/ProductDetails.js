import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import SplashScreen from './SplashScreen';

export default function ProductDetails({route}) {
  const [showSplash, setShowSplash] = useState(false);
  

  const navigaiton = useNavigation();

  const handleBuyNow = () => {
    setShowSplash(true);
    setTimeout(() => {
      setShowSplash(false);
      navigaiton.navigate('shippingDetailsList');
    }, 2000);
  };

  const {item} = route.params
  console.log(item);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.image
        }}
      />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productDescription}>
        A vibrance-boosting haircare bundle featuring a shampoo and conditioner.
      
      
      
      </Text>
      <Text style={styles.productPrice}>LKR 8,486.45</Text>
      <TouchableOpacity style={[styles.button, ]} onPress={handleBuyNow}>
  <Text style={styles.buttonText}>Buy Now</Text>
</TouchableOpacity>
      <StatusBar style="auto" />
      {showSplash && <SplashScreen />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b6777',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 20,
    borderRadius: 10,
    opacity: 0.8,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ffffff'

  },
  productDescription: {
    fontSize: 16,
    marginBottom: 10,
    color: '#c8d8e4'

  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 10,
    marginBottom: 30
  },

  buttonText: {
    color: '#2b6777',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
