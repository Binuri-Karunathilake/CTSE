import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import SplashScreen from './SplashScreen';

export default function App() {
  const [showSplash, setShowSplash] = useState(false);

  const handleBuyNow = () => {
    setShowSplash(true);
    setTimeout(() => {
      setShowSplash(false);
      alert('Buy now!');
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri:
            'https://img.freepik.com/premium-photo/empty-white-packaging-tube-beauty-spa-medical-skin-care-cosmetic-lotion-cream-packaging-face-wash-foam-product-design-layout-pink-background_615536-378.jpg?w=900',
        }}
      />
      <Text style={styles.productName}>Color Wow Dream Clean </Text>
      <Text style={styles.productDescription}>
        A vibrance-boosting haircare bundle featuring a shampoo and conditioner.
      </Text>
      <Text style={styles.productPrice}>LKR 8,486.45</Text>
      <Button
        title="Buy Now"
        onPress={handleBuyNow}
        color="#fff"
        style={styles.button}
      />
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
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#c8d8e4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});