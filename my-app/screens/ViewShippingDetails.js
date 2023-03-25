import { useNavigation } from '@react-navigation/native';
import { deleteDoc, doc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { fireStoreDB, storage } from '../firebase';
import { StatusBar } from 'expo-status-bar';
import ThanksBuySplashScreen from './ThanksBuySplashScreen';

const AdminProductPage = ({route}) => {
  const navigation = useNavigation();
  const [showSplash, setShowSplash] = useState(false);



  const [showAlert, setShowAlert] = useState(false);

  const {item, id} = route.params;

  const navigaiton = useNavigation();

  const handleBuyNow = () => {
    setShowSplash(true);
    setTimeout(() => {
      setShowSplash(false);
      navigaiton.navigate('UserViewProductDetails');
    }, 3000);
  };

  const product = {
    name: 'My Skincare Product',
    description: 'This is a description of my skincare product.',
    zipcode: 'Moisturizer',
    cno: 'Unisex',
    adress: 'My Brand',
  };

  const handleEdit = () => {
    navigation.navigate("EditShippingDetails", {item, id})
  }
  
  const handleDelete = () => {
    console.log(id);
    try {
      Alert.alert(
        "Delete Shipping details",
        "Are you sure you want to delete This Shipping details",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          { 
            text: "Delete", 
            onPress: deleteShippingDetails, 
            style: "destructive" 
          }
        ],
        { cancelable: true }
      );
    } catch (error) {
      alert(error.message);
    }
  }

  const deleteShippingDetails = async () => {

    try {
      await deleteDoc(doc(fireStoreDB, 'shippingDetails', id));
      navigation.navigate('shippingDetailsList')
    } catch (error) {
      alert(error.message);
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.subtitle}>{item.cno}</Text>
      <Text style={styles.price}>{item.adress}</Text>
      <Text style={styles.price}>{item.zipcode}</Text>
      <Text style={styles.description}>{item.description}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleEdit} style={styles.editButton}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        <Text>
  {"\n"}  {"\n"}

  
</Text>

        <TouchableOpacity style={styles.button} onPress={handleBuyNow}> 
            <Text style={styles.buttonText}>Confirm and place order</Text>
            
          </TouchableOpacity>
          <StatusBar style="auto" />
      {showSplash && <ThanksBuySplashScreen />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#2b6777',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#c8d8e4',
    marginBottom: 10,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#52ab98',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: '#2b6777',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 10,
    width: '100%',
  },
  editButton: {
    backgroundColor: '#2b6777',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  deleteButton: {
    backgroundColor: '#b5443c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: '#52ab98',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },
  statusBar: {
    backgroundColor: '#c8d8e4',
    height: 20,
  },
});



export default AdminProductPage;