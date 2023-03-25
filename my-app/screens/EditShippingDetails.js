import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { fireStoreDB, storage } from '../firebase';
import { async } from '@firebase/util';

import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';


const EditShippingDetails = ({route}) => {
    
    const {item, id} = route.params;
    console.log(id);
    console.log(item);
    const [name, setName] = useState(item.name);
    const [description, setDescription] = useState(item.description);
    const [zipcode, setZipcode] = useState(item.zipcode);
    const [image, setImage] = useState(null);
    const [cno, setCno] = useState(item.cno);
    const [adress, setAdress] = useState(item.adress);
    
      const navigation = useNavigation();
      const user = {uid : '123456789'};

      const handleSubmit = async () => {
        await onSubmit({ name, cno, adress, zipcode, description });
        setName('');
        setCno('');
        setAdress('');
        setZipcode('');
        setDescription('');
      };
    
      const onSubmit = async () => {
        console.log({name, cno, adress, zipcode, description});
        try {
            const docRef = await updateDoc(doc(fireStoreDB, "shippingDetails", id), 
            {
                userID : user.uid,
                name: name,
                cno: cno,
                adress: adress,
                zipcode: zipcode,
                description: description,
            });
            console.log("Document edited");
            navigation.navigate('UserViewProductDetails');
        } catch (error) {
          console.error("Error adding document: ", error.message);
        }
      };
    
      return (
        <ScrollView style={styles.container}>

        <Text>  {"\n"}  {"\n"}</Text>
          <Text style={styles.label}>Name:</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
          <Text style={styles.label}>Contact Number:</Text>
          <TextInput style={styles.input} value={cno} onChangeText={setCno} />
          <Text style={styles.label}>Adress:</Text>
          <TextInput style={styles.input} value={adress} onChangeText={setAdress} />
          <Text style={styles.label}>Zipcode:</Text>
          <TextInput style={styles.input} value={zipcode} onChangeText={setZipcode} />      
          <Text style={styles.label}>Description:</Text>
          <TextInput
            style={[styles.input, styles.textarea]}
            value={description}
            onChangeText={setDescription}
            multiline={true}
            numberOfLines={4}
          />     
           <Text>  {"\n"}  {"\n"}</Text>

          
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Edit and Confirm order</Text>
          </TouchableOpacity>
        </ScrollView>
      );
    
        };
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#f2f2f2',
  },
  addImage: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center'
    
  },
  buttonAdd: {
    borderColor: '#2b6777',
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
    marginBottom: 30,
    width: 150
  },
  buttonUpload: {
    backgroundColor: '#3b7330',
    padding: 5,
    borderRadius: 5,
    marginBottom: 30,
    width: 100,
    maxHeight: 30
  },
  buttonClear: {
    backgroundColor: '#69070e',
    padding: 5,
    borderRadius: 5,
    marginBottom: 30,
    width: 100,
    maxHeight: 30
  },
  buttonText1: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '500'
  },
  buttonText2: {
    color: '#2b6777',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '500'
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
    backgroundColor: '#fff',
    color: '#333',
    fontSize: 16,
  },
  textarea: {
    height: 100,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 10
  },
  radioButton: {
    textAlign: 'center'
  },
  radioLabel: {
    fontSize: 16,
    marginLeft: 8,
    color: '#333',
    textAlign: 'center',
  },
  radioIcon: {
    width: 24,
    height: 24,
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
export default EditShippingDetails;
