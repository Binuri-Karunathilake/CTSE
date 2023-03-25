import { collection, getDocs, query, where } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

import React, { useEffect, useState } from 'react';
import { FlatList, Text, TextInput, View, StyleSheet, Dimensions, Image, ImageBackground, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import UserInfo from '../components/UserInfo';
import { auth, fireStoreDB } from '../firebase';



const UserList = () => {
 
  const [ShippingInfo, setShippingInfo] = useState([]);

  const user = {uid : '123456789'};


  const navigation = useNavigation();




    const getTasks = async () => {
        console.log("Inside get ataks");
        const shippingRef = collection(fireStoreDB, "users");
      // Create a query against the collection.
        const shippingList = query(shippingRef, );
        const querySnapshot = await getDocs(shippingList);
        let shippingArray = [];
        querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
  
          shippingArray.push({id: doc.id, data: doc.data()});
        });
        console.log(querySnapshot);
        setShippingInfo(shippingArray)
        console.log(shippingArray);
        console.log("================================");
        console.log("================================");
  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
      <View>
      <Text> {"\n"}  {"\n"}  {"\n"}</Text>

      <FlatList
        data={ShippingInfo}
        extraData={ShippingInfo}
        renderItem={({item, index}) => {
          console.log(item);
          return(<UserInfo item={item.data} id={item.id}/>)
        }}
        keyExtractor={(item) => item.id.toString()}
      />

<Text>  {"\n"}  {"\n"}</Text>

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'red',
    
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
    backgroundColor: '#fff'
  },
  productContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 16,
    marginBottom: 16,
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
  productImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    padding: 10,
    backgroundColor: 'red',
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productBrand: {
    fontSize: 16,
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    marginBottom: 8,
  },
  productGender: {
    fontSize: 16,
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
  },
  listTab: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  btnTab: {
    width: Dimensions.get('window').width/ 4.5,
    flexDirection: 'row',
    borderRadius: 20,
    padding: 5,
    justifyContent: 'center',
  },
  textTab: {
    fontSize: 12
  },
  btnTabActive: {
    backgroundColor: '#2b6777'
  },
  btnTabActiveText: {
    color: 'white',
    fontWeight: '300'
  },
  productImageContainer : {

  },
  productImage : {

  },
  productTextContainer : {

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

export default UserList;