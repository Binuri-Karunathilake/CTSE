import { useNavigation } from '@react-navigation/native';
import { deleteDoc, doc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { fireStoreDB, storage } from '../firebase';

const AdminProductPage = ({route}) => {
  const navigation = useNavigation();

  const [showAlert, setShowAlert] = useState(false);

  const {item, id} = route.params;
  console.log(item);
  console.log(id);
     const product = {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMsA-1D8ReqQVJvrap7Qe0HP87izSh8ulw0Q&usqp=CAU',
        name: 'My Skincare Product',
        price: 24.99,
        type: 'Moisturizer',
        gender: 'Unisex',
        brand: 'My Brand',
        description: 'This is a description of my skincare product.',
        status: 'available'
      };
  const [isEditing, setIsEditing] = useState(false);
  
  const handleEdit = () => {
    navigation.navigate("Admin Edit Product Details", {item, id})
  }
  
  const handleDelete = () => {
    console.log(id);
    try {
      setShowAlert(true);
    } catch (error) {
      alert(error.message);
    }
  }

  const hideAlert = () => {
    setShowAlert(false);
  }

  const deleteProduct = async () => {

    try {
      const delRef = ref(storage, item.image);
      await deleteObject(delRef);
      await deleteDoc(doc(fireStoreDB, 'products', id));
      setShowAlert(false);
      navigation.navigate('AdminViewProductList')
    } catch (error) {
      alert(error.message);
    }

  }

  
  return (
    <View style={styles.container}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={item.status === "Available" ? styles.subtitleAvailable : styles.subtitleOut}>{item.status}</Text>
    </View>
    <Text style={styles.subtitle}>Type of Product : {item.type}</Text>
    <Text style={styles.subtitle}>{item.gender === 'male'? 'For Men' : item.gender === 'female'? 'For Women' : 'Unisex'}</Text>
    <Text style={styles.price}>Rs.{item.price}</Text>
    <Text style={styles.description}>{item.description}</Text>
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={handleEdit} style={styles.editButton}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDelete} style={styles.deleteButton}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
      <AwesomeAlert
          //From Awesome alert documentation
          show={showAlert}
          showProgress={false}
          title="Delete Product"
          message="Are you sure you want to delete the product? This cannot be undone."
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Yes, delete it"
          confirmButtonColor="#DD6B55"
          onCancelPressed={hideAlert}
          onConfirmPressed={deleteProduct}
        />
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  image: {
    height: 350,
    width: '100%',
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: 'grey',
    marginBottom: 10,
  },
  subtitleAvailable: {
    fontSize: 16,
    color: '#52ab98',
    marginBottom: 10,
    fontWeight: '500',
    marginRight: 10,
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#52ab98'
  },
  subtitleOut: {
    fontSize: 16,
    color: '#b5443c',
    marginBottom: 10,
    fontWeight: '500',
    marginRight: 10,
    padding: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#b5443c'
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
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
    marginHorizontal: 20
  },
  deleteButton: {
    backgroundColor: '#b5443c',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AdminProductPage;