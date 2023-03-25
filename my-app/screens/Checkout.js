import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const CheckoutScreen = () => {
// Declare variables for the input fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');

// Function to handle the checkout button press
  const handleCheckout = () => {
    alert(`Are you sure want to continue!`);
  };
//   const handleCheckout = () => {
//     alert(`Thank you for your order, ${firstName} ${lastName}!`);
//   };

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemName}>Item 1</Text>
        <Text style={styles.itemPrice}>$9.99</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemName}>Item 2</Text>
        <Text style={styles.itemPrice}>$9.99</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.itemName}>Item 3</Text>
        <Text style={styles.itemPrice}>$9.99</Text>
      </View>
      <View style={styles.checkoutFormContainer}>
        <Text style={styles.sectionTitle}>Checkout Form:</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          value={address}
          onChangeText={setAddress}
          multiline
        />
        <Button title="Place Order" onPress={handleCheckout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 50
// ,
//   },
//   itemContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 16,
//   },
//   itemName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   itemPrice: {
//     fontSize: 18,
//   },
//   checkoutFormContainer: {
//     flex: 1,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 4,
//     padding: 8,
//     marginBottom: 16,
//     fontSize: 18,
//   },

});

export default CheckoutScreen;
