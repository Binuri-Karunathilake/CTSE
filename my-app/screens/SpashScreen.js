import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class SplashScreen extends Component {
  componentDidMount() {
    setTimeout(() => {
      // Replace 'Home' with the name of your app's main screen
      this.props.navigation.replace('Login');
    }, 3000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/Logo.png')} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
  },
});

export default SplashScreen;