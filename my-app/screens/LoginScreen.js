import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import {Image} from 'react-native';
import { auth } from '../firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user');
    const fireAuth = auth;
    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(fireAuth, (user) => {
            if (user) {
                if (user.email === 'admin@example.com') {
                    navigation.replace('AdminHome');
                } else {
                    navigation.replace('Home');
                }
            }
        })
        return unsubscribe
    }, [])
    

    const handleSignUp = () => {
        if (role === 'user') {
            createUserWithEmailAndPassword(fireAuth, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user);
            })
            .catch(error => {
                alert(error.message);
            })
        } else if (role === 'admin') {
            // add admin authentication code here
            signInWithEmailAndPassword(fireAuth, 'admin@example.com', 'admin123')
            .then(userCredentials => {
              const user = userCredentials.user;
              if (user) {
                // Set isAdmin property to true in user object
                user.isAdmin = true;
                // Navigate to admin home screen
                navigation.replace('AdminHome');
              }
            })
            .catch(error => {
              alert(error.message);
            })
        }
    }

    const handleLogin = () => {
        if (role === 'user') {
          signInWithEmailAndPassword(fireAuth, email, password)
            .then(userCredentials => {
              const user = userCredentials.user;
              console.log('Logged in with : ' + user.email);
            })
            .catch(error => {
              alert(error.message);
            })
        } else if (role === 'admin') {
          const adminEmail = 'admin@example.com';
          const adminPassword = 'admin123';
          signInWithEmailAndPassword(fireAuth, adminEmail, adminPassword)
            .then(userCredentials => {
              const user = userCredentials.user;
              if (user) {
                // set isAdmin property to true in user object
                user.isAdmin = true;
              }
              console.log('Logged in as admin');
            })
            .catch(error => {
              alert(error.message);
            })
        }
      }
      

  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="height">
        <Image style={styles.logo} resizeMode="cover" source ={require("../assets/images/Welcome.jpg")}/>
        {/* <PageTitle>Sign In</PageTitle> */}
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Email'
                value={email}
                onChangeText={text => {setEmail(text)}}
                style={styles.input} />
            <TextInput
                placeholder='Password'
                value={password}
                secureTextEntry
                onChangeText={text => {setPassword(text)}}
                style={styles.input} />
            
        </View>

        <View
            style={styles.buttonContainer}>

            <TouchableOpacity
            onPress={handleLogin}
            style={styles.button}>
                <Text style={styles.buttonText}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]}>
                <Text style={styles.buttonOutlineText}>
                    Register
                </Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen


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
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },

    buttonOutline : {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2

    },

    buttonOutlineText : {
        color: '#0782F9',
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
        marginBottom: 80
    }
    
})