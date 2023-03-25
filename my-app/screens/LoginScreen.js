import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import {Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth, firebase } from '../firebase'
import { onAuthStateChanged, signInWithEmailAndPassword } from '@firebase/auth';


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
    const [userType, setUserType] = useState(false);


    const loginUser = async (email, password) => {
        if(email === "hello@gmail.com") {
        }
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with : ' + user.email);
        })
        .catch(error => {
            alert(error.message);
        })
    };

    const handlueSignUp = () => {
        createUserWithEmailAndPassword(fireAuth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user);
        })
        .catch(error => {
            alert(error.message);
        })
    }
    
    const forgetPassword = () =>{
        // firebase.auth().sendPasswordResetEmail(email)
        // .then(() => {
        //     alert("Password reset email sent")
        // }).catch((error) => {
        //     alert(error)
        // })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user);
            if(user && user.email === 'hello@gmail.com') {
                navigation.replace('AdminStack');
            } 
            else if (user) {
                navigation.replace('UserViewProductDetails')
            }
        })
        return unsubscribe;
    }, [])

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="height">
            <Image style={styles.logo} resizeMode="cover" source ={require("../assets/Logo.png")}/>
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
        marginBottom: 80
    }
    
})