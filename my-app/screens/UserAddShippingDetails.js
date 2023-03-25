import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,  ScrollView } from 'react-native';
import { auth, fireStoreDB, storage } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';



const UserAddShippingDetails = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [zipcode, setZipcode] = useState();
  const [cno, setCno] = useState('');
  const [adress, setAdress] = useState('');



  const navigation = useNavigation();
  
  const handleSubmit = async () => {
    await onSubmit({ name, cno, adress, zipcode, description });
    setName('');
    setCno('');
    setAdress('');
    setZipcode('');
    setDescription('');
  };

  const user = auth.currentUser;

  const onSubmit = async () => {
    console.log({name, cno, adress, zipcode, description});
    try {
        const docRef = await addDoc(collection(fireStoreDB, "shippingDetails"), 
        {
          userId : user.uid,
          name: name,
          cno: cno,
          adress: adress,
          zipcode: zipcode,
          description: description,
        });
        console.log("Document written with ID: ", docRef.id);
        navigation.navigate('UserViewProductDetails');
    } catch (error) {
      console.error("Error adding adress: ", error.message);
    }
  };



  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>{'\n'}{'\n'}</Text>      
      <Text style={styles.label}>Name:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.label}>Contact Number:</Text>
      <TextInput style={styles.input} value={cno} onChangeText={setCno} />
      <Text style={styles.label}>Adress:</Text>
      <TextInput style={styles.input} value={adress} onChangeText={setAdress} />
      <Text style={styles.label}>Zipcode:</Text>
      <TextInput style={styles.input} value={zipcode} onChangeText={setZipcode} />
      <Text style={styles.label}>Landmark(optional):</Text>

      <TextInput
        style={[styles.input, styles.textarea]}
        value={description}
        onChangeText={setDescription}
        multiline={true}
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Place Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#c8d8e4',
  },

  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    backgroundColor: '#f2f2f2',
    color: '#333',
    fontSize: 16,
  },
  textarea: {
    height: 100,
  },

  button: {
    backgroundColor: '#2b6777',
    padding: 12,
    borderRadius: 10,
    marginBottom: 30
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default UserAddShippingDetails;