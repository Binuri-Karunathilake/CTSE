import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import {Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '../firebase'


// const LoginScreen = () => {
//     const navigation = useNavigation();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     loginUser = async (email, password) => {
//         try {
//           await firebase.auth().signInWithEmailAndPassword(email, password);
//         } catch (error) {
//           alert(error.message);
//         }
      
//       };
    
//       const forgetPassword = () =>{
//         firebase.auth().sendPasswordResetEmail(email)
//         .then(() => {
//           alert("Password reset email sent")
//         }).catch((error) => {
//           alert(error)
//         })
//       }

// return (
//     <KeyboardAvoidingView
//     style={styles.container}
//     behavior="height">
//         <Image style={styles.logo} resizeMode="cover" source ={require("../assets/images/Welcome.jpg")}/>
//         {/* <PageTitle>Sign In</PageTitle> */}
//         <View style={styles.inputContainer}>
//             <TextInput
//                 placeholder='Email'
//                 value={email}
//                 onChangeText={(email) => {setEmail(email)}}
//                 autoCapitalize="none"
//                 autoCorrect={false}
//                 style={styles.input} />
//             <TextInput
//                 placeholder='Password'
//                 value={password}
//                 secureTextEntry
//                 onChangeText={password => {setPassword(password)}}
//                 style={styles.input} />
            
//         </View>

//         <View
//             style={styles.buttonContainer}>

//             <TouchableOpacity
//             onPress={() => loginUser(email,password) }
//             style={styles.button}>
//                 <Text style={styles.buttonText}>
//                     Login
//                 </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//             onPress={()=>navigation.navigate('RegisterScreen')}
//             style={[styles.button, styles.buttonOutline]}>
//                 <Text style={styles.buttonOutlineText}>
//                     Register
//                 </Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//             onPress={() => {forgetPassword()}}
//             style={{ marginTop: 20 }}
//             >
//             <Text style={{ fontWeight: "bold", fontSize: 16 }}>
//             Forget Passowrd?
//             </Text>
//             </TouchableOpacity>
//         </View>
//     </KeyboardAvoidingView>
//   )
// }

// export default LoginScreen


const LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (email, password) => {
        try {
            const adminEmail = 'admin@123.com';
            const adminPassword = 'admin123';
            if (email === adminEmail && password === adminPassword) {
                // Navigate to admin page
                navigation.navigate('AdminHomeScreen');
            } else {
                await firebase.auth().signInWithEmailAndPassword(email, password);
                // Navigate to user page
                navigation.navigate('Home');
            }
        } catch (error) {
            alert(error.message);
        }
    };
    
    const forgetPassword = () =>{
        firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert("Password reset email sent")
        }).catch((error) => {
            alert(error)
        })
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
                    onChangeText={(email) => {setEmail(email)}}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input} />
                <TextInput
                    placeholder='Password'
                    value={password}
                    secureTextEntry
                    onChangeText={password => {setPassword(password)}}
                    style={styles.input} />
                
            </View>

            <View
                style={styles.buttonContainer}>

                <TouchableOpacity
                onPress={() => loginUser(email,password) }
                style={styles.button}>
                    <Text style={styles.buttonText}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>navigation.navigate('RegisterScreen')}
                style={[styles.button, styles.buttonOutline]}>
                    <Text style={styles.buttonOutlineText}>
                        Register
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => {forgetPassword()}}
                style={{ marginTop: 20 }}
                >
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Forget Passowrd?
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