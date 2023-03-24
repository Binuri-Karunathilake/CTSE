import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const CustomDrawer = (props) => {
    const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: "#c8d8e4"}}>
        <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
            <ImageBackground source={require("../assets/icon.png")} style={{padding: 20, marginBottom: 15}} >
                <Image source={require("../assets/Welcome.jpg")} style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}} />
                <Text style={{}}>Administrator</Text>
            </ImageBackground>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
        <View style={styles.bottumDrawerView}>
            <TouchableOpacity onPress={() => {navigation.navigate('Login')}} style={styles.drawerButton}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Ionicons name='exit-outline' size={22}/>
                    <Text style={styles.bottonButtonText}>Sign Out</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
    drawerContent: {
        backgroundColor: "#c8d8e4",
        // #f2f2f2
    },
    bottumDrawerView: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#2b6777'
    },
    drawerButton: {
        paddingVertical: 15
    },
    bottonButtonText: {
        fontFamily: '',
        fontSize: 15,
        marginLeft: 5
    }
})