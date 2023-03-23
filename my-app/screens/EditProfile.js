import React from 'react'
import { StyleSheet, Text,TextInput, View, Image, TouchableOpacity,ScrollView } from 'react-native'

export default Profile = () => {
  // Replace these with your own user information
  const name = 'John Doe';
  const phoneNumber = '123-456-7890';
  const address = '123 Main St, Anytown USA';
  const bio = 'I am a software developer with a passion for building great products.';

  return (
  <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image
        style={styles.avatar}
        source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }}
      />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>John Doe</Text>
          {/* <Text style={styles.info}>UX Designer / Mobile developer</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis,
            omittam deseruisse consequuntur ius an,
          </Text> */}
          <View style={styles.btn}>
            <TouchableOpacity style={[styles.buttonOutLine, styles.buttonContainer]}>
              <Text>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.buttonOutLine, styles.logoutButtonContainer]}>
              <Text>Logout</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.form}>
            <View style={styles.container1}>
                <Text style={styles.questions}>Name : </Text>
                <View style={styles.textcontainer}>
                  <TextInput style={styles.paragraph}>{name}</TextInput>
                </View>
                <Text style={styles.questions}>Bio : </Text>
                <View style={styles.textcontainer}>
                  <TextInput style={styles.paragraph}>{bio}</TextInput>
                </View>
               <Text style={styles.questions}>Phone :</Text>
                <View style={styles.textcontainer}>
                  <TextInput style={styles.features}>{phoneNumber}</TextInput>
                </View>
                <Text style={styles.questions}>Address : </Text>
                <View style={styles.textcontainer}>
                  <TextInput style={styles.paragraph}>{address}</TextInput>
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
    marginBottom:5
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
    textAlign: 'justify'
  },


})