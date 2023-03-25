import { collection, getDocs, query, where } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TextInput, View, StyleSheet, Dimensions,  ImageBackground, TouchableOpacity } from 'react-native';
import UserShippingInfo from '../components/UserShippingInfo';
import { auth, fireStoreDB } from '../firebase';



const shippingDetailsList = () => {
 
  const [ShippingInfo, setShippingInfo] = useState([]);
  const user = {uid : '123456789'};
  const navigation = useNavigation();

    const getTasks = async () => {
        console.log("Inside get ataks");
        const shippingRef = collection(fireStoreDB, "shippingDetails");
        const shippingList = query(shippingRef, where("userId", "==", user.uid));
        const querySnapshot = await getDocs(shippingList);
        let shippingArray = [];
        querySnapshot.forEach((doc) => {
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
    <ImageBackground style={styles.container} source={require('../assets/kk.png')} blurRadius={8}>
      <View>
      <Text> {"\n"}  {"\n"}  {"\n"}</Text>

      <FlatList
        data={ShippingInfo}
        extraData={ShippingInfo}
        renderItem={({item, index}) => {
          console.log(item);
          return(<UserShippingInfo item={item.data} id={item.id}/>)
        }}
        keyExtractor={(item) => item.id.toString()}
      />

<Text>  {"\n"}  {"\n"}</Text>

    <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("UserAddShippingDetails")}}>
        <Text style={styles.buttonText}>Add new Shopping Details</Text>
    </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#2b6777', 
  },
  
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
    backgroundColor: '#c8d8e4', 
  },
  productContainer: {
    backgroundColor: '#ffffff', 
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
    backgroundColor: '#f2f2f2',
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
    backgroundColor: '#52ab98', 
  },
  btnTabActiveText: {
    color: 'white',
    fontWeight: '300'
  },

  button: {
    backgroundColor: '#2b6777',
    padding: 12,
    borderRadius: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default shippingDetailsList;
