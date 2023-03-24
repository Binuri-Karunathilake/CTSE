import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import {firebase}  from '../firebase'


const HomeScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('')

  useEffect(() =>{
    firebase.firestore().collection('users')
    .doc(firebase.auth().currentUser.uid).get()
    .then((snapshot) =>{
      if(snapshot.exists){
        setName(snapshot.data())
      }
      else {
        console.log('User does not exist')
      }
    })
  }, [])


// const handleLogout = () => {
//   signOut(fireAuth).then(() => {
//     alert("Signed out successfully !")
//   }).catch((error) => {
//     alert(error.message)
//   });
// }

  // const fireAuth = auth;
  // const user = fireAuth.currentUser;

  
  // useEffect( () => {
  //   const unsubscribe = onAuthStateChanged(fireAuth, (user) => {
  //       if(!user) {
  //           navigation.replace('Login');
  //       }
  //   })
  //   return unsubscribe
  // }, [])
  

  return (
    <View style={styles.listItemContainer}>
        <Text style={{fontSize: 20, fontWeight:"bold"}}>
        Hello, {name.fName}
      </Text>
      {/* <TouchableOpacity
      style={styles.button}>
        <Text style={{fontSize: 22, fontWeight: "bold"}}>
          Sign Out
        </Text>
      </TouchableOpacity> */}
      <View style={styles.logoutButtonContainer}>
        <TouchableOpacity 
        style={styles.logoutButton} 
      onPress={() => {firebase.auth().signOut()}}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.logoutButton} 
      onPress={() => navigation.navigate('UserProfile')}>
          <Text style={styles.logoutButtonText}>next</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen

//styles
const styles = StyleSheet.create({
    container: {
    padding: 10,
    width: '100%'
  },

  flatList: {
    height: '70%',
    flexGrow: 0
  },

  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '500',
    color: '#0782F9'
  },

  button: {
    backgroundColor: '#0782F9',
    width: '40%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    color: 'white'
  },

  buttonContainer: {
    width: '100%',
    alignItems: 'center'
  },

  buttonText: {
    color: 'white',
    fontWeight: '700'
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },

  descriptionInput: {
    height: 100,
  },

  logoutButtonContainer : {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight:15
  },

  logoutButton : {
    backgroundColor: '#900D09',
    width: '20%',
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    color: 'white'
  },

  logoutButtonText : {
    color: 'white',
    fontWeight: '300'
  },
  
})