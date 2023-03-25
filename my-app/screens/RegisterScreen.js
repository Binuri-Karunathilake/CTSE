import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import {Image} from 'react-native';
import { auth, fireStoreDB } from '../firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { firebase } from '../firebase'
import { addDoc, collection } from '@firebase/firestore';




const RegisterScreen = () => {
    const [fName,setFirstName] = useState('');
    const [Lname,setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setphoneNumber] = useState ('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation()
    const user = auth.currentUser;


    registerUser = async (fName, Lname, email, phoneNumber, password) => {
        // try {
        //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        //     const user = userCredential.user;
        
        //     // Send email verification
        //     await sendEmailVerification(user, {
        //       url: "https://reactapp-cea8f.firebaseapp.com",
        //       handleCodeInApp: true,
        //     });
        //     alert("Verification email sent");
        try {
          const regUser = await createUserWithEmailAndPassword(auth, email, password)
          console.log(regUser.user.uid);
          // Store user data in Firestore
          const docRef = await addDoc(collection(fireStoreDB, "users"), 
          {
            userId: regUser.user.uid,
            fName,
            Lname,
            email,
            phoneNumber,
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (error) {
          alert(error.message);
        }
        

      }
    

      



    // const [role, setRole] = useState('user');
    // const fireAuth = auth;

    // const navigation = useNavigation()

    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(fireAuth, (user) => {
    //         if (user) {
    //             if (user.email === 'admin@example.com') {
    //                 navigation.replace('AdminHome');
    //             } else {
    //                 navigation.replace('Home');
    //             }
    //         }
    //     })
    //     return unsubscribe
    // }, [])
    

    // const handleSignUp = () => {
    //     if (role === 'user') {
    //         createUserWithEmailAndPassword(fireAuth, email, password)
    //         .then(userCredentials => {
    //             const user = userCredentials.user;
    //             console.log(user);
    //         })
    //         .catch(error => {
    //             alert(error.message);
    //         })
    //     } else if (role === 'admin') {
    //         // add admin authentication code here
    //         signInWithEmailAndPassword(fireAuth, 'admin@example.com', 'admin123')
    //         .then(userCredentials => {
    //           const user = userCredentials.user;
    //           if (user) {
    //             // Set isAdmin property to true in user object
    //             user.isAdmin = true;
    //             // Navigate to admin home screen
    //             navigation.replace('AdminHome');
    //           }
    //         })
    //         .catch(error => {
    //           alert(error.message);
    //         })
    //     }
    // }

    // const handleLogin = () => {
    //     if (role === 'user') {
    //       signInWithEmailAndPassword(fireAuth, email, password)
    //         .then(userCredentials => {
    //           const user = userCredentials.user;
    //           console.log('Logged in with : ' + user.email);
    //         })
    //         .catch(error => {
    //           alert(error.message);
    //         })
    //     } else if (role === 'admin') {
    //       const adminEmail = 'admin@example.com';
    //       const adminPassword = 'admin123';
    //       signInWithEmailAndPassword(fireAuth, adminEmail, adminPassword)
    //         .then(userCredentials => {
    //           const user = userCredentials.user;
    //           if (user) {
    //             // set isAdmin property to true in user object
    //             user.isAdmin = true;
    //           }
    //           console.log('Logged in as admin');
    //         })
    //         .catch(error => {
    //           alert(error.message);
    //         })
    //     }
    //   }
      

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="height">
        <Image style={styles.logo} resizeMode="cover" source ={require("../assets/Logo.png")}/>
        {/* <PageTitle>Sign In</PageTitle> */}
        <View style={styles.inputContainer}>
        <TextInput
                placeholder='First Name'
                value={fName}
                onChangeText={(fName) => {setFirstName(fName)}}
                autoCorrect={false}
                style={styles.input} />
        <TextInput
                placeholder='Last Name'
                value={Lname}
                onChangeText={Lname => {setLastName(Lname)}}
                autoCorrect={false}
                style={styles.input} />

        <TextInput
                placeholder='Phone Number'
                value={phoneNumber}
                keyboardType='number-pad'
                onChangeText={phoneNumber => {setphoneNumber(phoneNumber)}}
                autoCorrect={false}
                style={styles.input} />

            <TextInput
                placeholder='Email'
                value={email}
                onChangeText={email => {setEmail(email)}}
                autoCapitalize="none"
                keyboardType="email-address"
                style={styles.input} />
            <TextInput
                style={styles.input} 
                placeholder='Password'
                value={password}
                onChangeText={(password) => setPassword(password)}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                />
                
            {/* <TextInput
                placeholder='Password'
                value={password}
                secureTextEntry
                onChangeText={text => {setPassword(text)}}
                style={styles.input} />              */}
            
        </View>

        <View
            style={styles.buttonContainer}>

            <TouchableOpacity
            onPress={() => registerUser(fName, Lname, email,phoneNumber, password)}
            style={styles.button}>
                <Text style={styles.buttonText}>
                    Register
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Login')}
            style={[styles.button, styles.buttonOutline]}>
                <Text style={styles.buttonOutlineText}>
                    Login
                </Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen


//styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },

    inputContainer : {
        width: '80%'
    },

    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },

    input : {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },

    button: {
        backgroundColor: '#2b6777',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },

    buttonOutline : {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#2b6777',
        borderWidth: 2

    },

    buttonOutlineText : {
        color: '#2b6777',
        fontWeight: '700',
        fontSize: 16
    },
    
    buttonText : {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },

    logo: {
        width: 150,
        height: 150,
        marginBottom: 60
    }
    
})