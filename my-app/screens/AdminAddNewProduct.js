import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { ActivityIndicator, RadioButton } from 'react-native-paper';
import { FontAwesome5 } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { fireStoreDB, storage } from '../firebase';
import { async } from '@firebase/util';
import { set } from 'react-native-reanimated';
import { addDoc, collection } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const genders = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
  { label: 'Both', value: 'both' },
];

const AdminAddNewProduct = () => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [gender, setGender] = useState('both');
  const [type, setType] = useState();
  const [image, setImage] = useState(null);
  const [uploading, setuploading] = useState(false);
  const [uploaded, setuploaded] = useState(false);

  const navigation = useNavigation();
  
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4,3],
      quality: 1,
    });

    const source = {uri: result.uri};
    console.log(source);
    setImage(source.uri);
  }

  const uploadImage = async (uri) => {
    setuploading(true);
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", uri, true);
      xhr.send(null);
    });

    try {
      const fileRef = ref(storage, `image-${Date.now()}`);
      const result = await uploadBytes(fileRef, blob);
      blob.close();
      return await getDownloadURL(fileRef);
    } catch (error) {
      alert(error.message);
    }
  }

  const handleDelete = async () => {
    setuploading(true);
    const delRef = ref(storage, image);
    try {
      await deleteObject(delRef);
      setInterval(() => {
        setImage(null);
        setuploaded(false);
        setuploading(false);
      }, 200);
    } catch (error) {
      alert(error.message);
    }
  }

  const handleUpload = async () => {
    const imgRef = await uploadImage(image);
    setImage(imgRef);
    setuploading(false)
    setuploaded(true)
  }

  const handleSubmit = async () => {
    await onSubmit({ name, brand, price, gender, description });
    setName('');
    setBrand('');
    setPrice('');
    setGender('both');
    setDescription('');
  };

  const onSubmit = async () => {
    console.log({name, brand, price, gender, description});
    try {
        const docRef = await addDoc(collection(fireStoreDB, "products"), 
        {
          image: image,
          name: name,
          id: Date.now(),
          stauts: 'available',
          type: type,
          description: description,
          gender: gender,
          brand: brand,
        });
        console.log("Document written with ID: ", docRef.id);
        navigation.navigate('Home');
    } catch (error) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* <View style={styles.header}>
        <FontAwesome5 name="store" size={24} color="#007bff" />
        <Text style={styles.title}>Add New Product</Text>
      </View> */}
      <Text style={styles.label}>Name:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.label}>Brand:</Text>
      <TextInput style={styles.input} value={brand} onChangeText={setBrand} />
      <Text style={styles.label}>Price:</Text>
      <TextInput style={styles.input} value={price} onChangeText={setPrice} />
      <Text style={styles.label}>Type of Product:</Text>
      <Picker
        selectedValue={type}
        onValueChange={(itemValue, itemIndex) =>
          setType(itemValue)
        }>
        <Picker.Item label="Skin" value="Skin" />
        <Picker.Item label="Hair" value="Hair" />
        <Picker.Item label="Perfume" value="Perfume" />
        <Picker.Item label="Other" value="Other" />
      </Picker>
      <Text style={styles.label}>Gender:</Text>
      <View style={styles.radioGroup}>
        {genders.map((item) => (
          <View key={item.value} style={styles.radioButton}>
            <RadioButton
              value={item.value}
              status={gender === item.value ? 'checked' : 'unchecked'}
              onPress={() => setGender(item.value)}
              color="#2b6777"
            />
            <Text style={styles.radioLabel}>{item.label}</Text>
          </View>
        ))}
      </View>
      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={[styles.input, styles.textarea]}
        value={description}
        onChangeText={setDescription}
        multiline={true}
        numberOfLines={4}
      />
      <View>
      <Text style={styles.label}>Pick an Image :</Text>
      <TouchableOpacity style={styles.buttonAdd} onPress={pickImage}>
        <Text style={styles.buttonText2}>Select</Text>
      </TouchableOpacity>
      
        {image && (
          <View style={styles.addImage}>
            <Image source={{uri: image}} style={{width: 200, height: 200}} />
            <View>
            <TouchableOpacity style={styles.buttonUpload} onPress={handleUpload}>
              <Text style={styles.buttonText1}>Upload</Text>
            </TouchableOpacity>
            {uploading? (<ActivityIndicator size="small" color="#0000ff" />) : ''}
            {uploaded? (
              <TouchableOpacity style={styles.buttonClear} onPress={handleDelete}>
              <Text style={styles.buttonText1}>Delete</Text>
            </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.buttonClear} onPress={()=> {setImage(null)}}>
              <Text style={styles.buttonText1}>Clear</Text>
            </TouchableOpacity>
            )}
            </View>
          </View>
          )}
      
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Product</Text>
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

export default AdminAddNewProduct;


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
// } from 'react-native';
// import { RadioButton } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const genderOptions = [
//   { label: 'Male', value: 'male' },
//   { label: 'Female', value: 'female' },
//   { label: 'Both', value: 'both' },
// ];

// const AdminAddNewProduct = ({ onSubmit }) => {
//   const [name, setName] = useState('');
//   const [brand, setBrand] = useState('');
//   const [price, setPrice] = useState('');
//   const [description, setDescription] = useState('');
//   const [gender, setGender] = useState('both');

//   const handleSubmit = () => {
//     onSubmit({ name, brand, price, description, gender });
//     setName('');
//     setBrand('');
//     setPrice('');
//     setDescription('');
//     setGender('both');
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.formContainer}>
//         <Text style={styles.label}>Name:</Text>
//         <TextInput
//           style={styles.input}
//           value={name}
//           onChangeText={setName}
//         />
//         <Text style={styles.label}>Brand:</Text>
//         <TextInput
//           style={styles.input}
//           value={brand}
//           onChangeText={setBrand}
//         />
//         <Text style={styles.label}>Price:</Text>
//         <TextInput
//           style={styles.input}
//           value={price}
//           onChangeText={setPrice}
//         />
//         <Text style={styles.label}>Description:</Text>
//         <TextInput
//           style={[styles.input, styles.textarea]}
//           value={description}
//           onChangeText={setDescription}
//           multiline={true}
//           numberOfLines={4}
//         />
//         <View style={styles.genderContainer}>
//           <Text style={[styles.label, styles.genderLabel]}>Gender:</Text>
//           {genderOptions.map((option) => (
//             <View key={option.value} style={styles.genderOption}>
//               <RadioButton
//                 value={option.value}
//                 status={gender === option.value ? 'checked' : 'unchecked'}
//                 onPress={() => setGender(option.value)}
//               />
//               <Text style={styles.genderOptionLabel}>{option.label}</Text>
//             </View>
//           ))}
//         </View>
//         <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//           <Text style={styles.buttonText}>Add Product</Text>
//         </TouchableOpacity>
//       </View>
//       <Image
//         source={require('./assets/images/cosmetic.png')}
//         style={styles.image}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#F2F2F2',
//   },
//   formContainer: {
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     padding: 16,
//     width: '80%',
//     maxWidth: 400,
//     marginBottom: 16,
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     paddingHorizontal: 12,
//     paddingVertical: 8,
//     marginBottom: 16,
//   },
 
// network error



