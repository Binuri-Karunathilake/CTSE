import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Screen = () => {
  return (
    <View>
      <SafeAreaView style={{flex: 1}}>
        <TouchableOpacity style={{alignItems: "flex-end", margin: 16}} onPress={() => {}}>
            <FontAwesome5 name="bars" size={24} colors="#161924"/>       
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  )
}

export default Screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    text: {
        color: "#161924",
        fontSize: 20,
        fontWeight: "500"
    }
})