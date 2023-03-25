import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const PaymentScreen = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const navigation = useNavigation();

  const handlePayment = () => {
    // handle payment
    alert('Payment successful! Thank you for your order');
    navigation.navigate('UserViewProductDetails');
  };

  return (
    <View style={styles.container}>
      <View style={styles.paymentDetails}>
        <Text style={styles.paymentHeader}>Payment Details</Text>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          value={cardNumber}
          onChangeText={setCardNumber}
          keyboardType="numeric"
          maxLength={16}
        />
        <View style={styles.inputRow}>
          <TextInput
            style={[styles.input, { marginRight: 10 }]}
            placeholder="Expiration Date"
            value={expirationDate}
            onChangeText={setExpirationDate}
            keyboardType="numeric"
            maxLength={4}
          />
          <TextInput
            style={styles.input}
            placeholder="CVV"
            value={cvv}
            onChangeText={setCvv}
            keyboardType="numeric"
            maxLength={3}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 50,
  },
  paymentDetails: {
    marginBottom: 20,
  },
  paymentHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  payButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PaymentScreen;
