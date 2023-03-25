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
    backgroundColor: '#52ab98',
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
