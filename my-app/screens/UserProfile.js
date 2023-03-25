import React, {useState,useEffect} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, fireStoreDB } from '../firebase';

export default UserProfile = () => {
  // Replace these with your own user information
  const [fName,setfName] = useState ('');
  const [Lname, setLname]= useState ('');
  const [email, setEmail] = useState ('');
  const [phoneNumber,setphoneNumber] = useState ('');
  const [image, setImage] = useState (null);
  const [currentUser, setCurrentUser] = useState();
  const navigation = useNavigation()

    
  const handleLogout = () => {
    // handle logout logic
    signOut(fireAuth).then(() => {
      alert("Signed out successfully !")
    }).catch((error) => {
      alert(error.message)
    });
  };
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
  

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
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
          <Text style={styles.name}>{fName} {Lname}</Text>
          <View style={styles.btn}>
            <TouchableOpacity 
            style={[styles.buttonOutLine, styles.buttonContainer]}
            onPress={()=>navigation.navigate('EditProfile')}>
              <Text style={styles.buttonOutlineText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonOutLine, styles.logoutButtonContainer]}
                  onPress={handleLogout}>
              <Text style={styles.lgbuttonOutlineText}>Logout</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.form}>
            <View style={styles.container1}>
                <Text style={styles.questions}>First Name : </Text>
                <View style={styles.textcontainer}>
                  <Text style={styles.paragraph}>{fName}</Text>
                </View>
                <Text style={styles.questions}>Last Name : </Text>
                <View style={styles.textcontainer}>
                  <Text style={styles.paragraph}>{Lname}</Text>
                </View>
                <Text style={styles.questions}>Email : </Text>
                <View style={styles.textcontainer}>
                  <Text style={styles.paragraph}>{email} </Text>
                </View>
               <Text style={styles.questions}>Phone :</Text>
                <View style={styles.textcontainer}>
                  <Text style={styles.features}>{phoneNumber} </Text>
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
    backgroundColor: '#2b6777',
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
  lgbuttonOutlineText:{
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  },

  buttonOutlineText:{
    color: '#2b6777',
    fontWeight: '700',
    fontSize: 16
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
    backgroundColor: '#2b6777',
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
        borderColor: '#2b6777',
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