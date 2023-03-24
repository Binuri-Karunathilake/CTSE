import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const ShoppingDetails = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}onPress={() => {navigation.navigate("UserProductInfo", {item})}}>
        <Text style={styles.buttonText}>ADD Shopping Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Delete Shopping Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Shopping Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ShoppingDetails;
