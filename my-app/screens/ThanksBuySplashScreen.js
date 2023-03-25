import React from 'react';
import { StyleSheet, View, ActivityIndicator, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const ThanksBuySplashScreen = () => {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="thumbs-up" size={72} color="#2b6777" />
      <ActivityIndicator size="large" color="#2b6777" style={styles.activityIndicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
  },
  activityIndicator: {
    marginTop: 20,
  },
});

export default ThanksBuySplashScreen;
