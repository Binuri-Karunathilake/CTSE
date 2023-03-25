import React, {useState,useEffect} from 'react'
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
import * as ImagePicker from 'expo-image-picker';
import { auth, fireStoreDB } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { useNavigation } from '@react-navigation/native';

export default EditProfile = () => {
  // Replace these with your own user information
  const [fName,setfName] = useState ('');
  const [Lname, setLname]= useState ('');
  const [email, setEmail] = useState ('');
  const [phoneNumber,setphoneNumber] = useState ('');
  const [image, setImage] = useState (null);
    const [currentUser, setCurrentUser] = useState();
  const [UserProfile, setUserProfile] = useState(null);
    const navigation = useNavigation()
    const [uID, setuID] = useState();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }

  };

  const handleDelete = async () => {
     try {
    const userRef = doc(fireStoreDB, "users", uID);
    await deleteDoc(userRef);
    await LoggedInUser.delete(); // This will delete the user from Firebase authentication
    navigation.replace('Login');
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
}
  
  const fireAuth = auth;
  const LoggedInUser = fireAuth.currentUser;

  const getUser = async () => {
    const userRef = collection(fireStoreDB, "users");
  // Create a query against the collection.
    const user = query(userRef, where("userId", "==", LoggedInUser.uid));
    const querySnapshot = await getDocs(user);
    let returnedUser = {};
    querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots

      returnedUser = {id: doc.id, data: doc.data()};
    });
    console.log(returnedUser.data);
    setuID(returnedUser.id)
    setCurrentUser(returnedUser.data)
    console.log("=================================");
    setEmail(returnedUser.data.email);
    setfName(returnedUser.data.fName);
    setphoneNumber(returnedUser.data.phoneNumber);
    setLname(returnedUser.data.Lname);
  }
  useEffect( () => {
    getUser();
    const unsubscribe = onAuthStateChanged(fireAuth, (user) => {
        if(!user) {
            navigation.replace('Login');
        }
    })
    return unsubscribe
  }, [])
  const handleSave = async () => {
    await onSubmit({ fName, Lname, phoneNumber});
    setfName('');
    setLname('');
    setphoneNumber('');
  };


  const onSubmit = async () => {
    console.log({fName, Lname, phoneNumber});
    try {
        const docRef = await updateDoc(doc(fireStoreDB, "users", uID), 
        {
          fName: fName,
          Lname: Lname,
          email: email,
          phoneNumber: phoneNumber,
        });
        console.log("Document edited");
        navigation.navigate('UserProfile');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };


  return (
  <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}></View>
       <TouchableOpacity style={styles.avatarContainer} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.avatar} />
          ) : (
            <Image source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} style={styles.avatar} />
          )}
        </TouchableOpacity>

      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>{fName + ' ' + Lname}</Text>
          <View style={styles.btn}>
            <TouchableOpacity 
            style={[styles.buttonOutLine, styles.buttonContainer]}
            onPress={handleSave}
            >
              <Text>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonOutLine, styles.logoutButtonContainer]}
                  onPress={handleDelete}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.form}>
            <View style={styles.container1}>
                <Text style={styles.questions}>First Name : </Text>
                <View style={styles.textcontainer}>
                  <TextInput 
                  style={styles.paragraph} 
                  value={fName}
                  onChangeText={setfName}
                 />
                </View>
                <Text style={styles.questions}>Last Name : </Text>
                <View style={styles.textcontainer}>
                  <TextInput 
                  style={styles.paragraph} 
                  value={Lname}
                  onChangeText={setLname}
                  />
                </View>
                <Text style={styles.questions}>Email : </Text>
                <View style={styles.textcontainer}>
                  <TextInput style={styles.paragraph} value={email} editable={false} />
                </View>
               <Text style={styles.questions}>Phone :</Text>
                <View style={styles.textcontainer}>
                  <TextInput 
                  style={styles.features} 
                  value={phoneNumber}
                  onChangeText={setphoneNumber}
                 />
                </View>
            </View>   
          </View>
        </View>
      </View>
    </View>
  </ScrollView>

  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#10B981',
    height: 200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },

  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addImage:{
    flexDirection: 'column',
    marginTop: 120,
    marginRight:40,
    justifyContent: 'space-evenly',
    alignItems: 'flex-end'
  },
  // name: {
  //   fontSize: 22,
  //   color: '#FFFFFF',
  //   fontWeight: '600',
  // },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: '600',
  },
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
    width: 150,
    borderRadius: 10,
    
    // backgroundColor: '#10B981',
  },
  logoutButtonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
    width: 150,
    borderRadius: 10,
    backgroundColor: '#10B981',
  },

  btn: {
    alignItems: 'center',
    // paddingLeft: 250,
    // paddingHorizontal: 120,
    // backgroundColor: '#f1f1f1',
    display:'flex' ,
    flexDirection: 'row',
    justifyContent: 'space-evenly', 
  },
  buttonOutLine: {
    backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#10B981',
        borderWidth: 2,
  },
  form: {
    opacity: 5,
    backgroundColor: '#F2F2F2',
    padding: 5,
    marginBottom:5,
    width: '100%'

  },
  container1: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
  },
  questions: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
    marginTop:8
  },
  textcontainer: {
    padding: 8,
    borderWidth: 2,
    borderColor: '#ACADBC',
    backgroundColor: '#ffff',
    marginTop: 5,
    borderRadius: 6
  },
  features: {
    fontWeight: '500',
    fontSize: 15,
    marginBottom: 15,
    color: '#1d1f1e',
  
  },
  paragraph: {
    marginBottom: 10,
    // fontFamily: 'Georgia',
    fontSize: 14,
    lineHeight: 16 * 1.5,
    textAlign: 'justify',
    maxWidth: 200,
    minWidth: 500
  },


})