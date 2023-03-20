import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AdminAddNewProduct = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [cosmeticType, setCosmeticType] = useState('lipstick');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    onSubmit({ name, brand, price, cosmeticType, description });
    setName('');
    setBrand('');
    setPrice('');
    setCosmeticType('lipstick');
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>Brand:</Text>
      <TextInput
        style={styles.input}
        value={brand}
        onChangeText={setBrand}
      />
      <Text style={styles.label}>Price:</Text>
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={setPrice}
      />
      {/* <Text style={styles.label}>Cosmetic Type:</Text>
      <Picker
        selectedValue={cosmeticType}
        onValueChange={(itemValue) => setCosmeticType(itemValue)}
        style={styles.input}
      >
        <Picker.Item label="Lipstick" value="lipstick" />
        <Picker.Item label="Eyeshadow" value="eyeshadow" />
        <Picker.Item label="Mascara" value="mascara" />
        <Picker.Item label="Blush" value="blush" />
      </Picker> */}
      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={[styles.input, styles.textarea]}
        value={description}
        onChangeText={setDescription}
        multiline={true}
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Product</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
  },
  textarea: {
    height: 100,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AdminAddNewProduct;

