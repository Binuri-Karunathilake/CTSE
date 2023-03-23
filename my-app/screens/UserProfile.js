import React from 'react';
import { Touchable, TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const SPACING = 20
const AVATAR_SIZE = 70;


const UserProfilePage = () => {
  // Replace these with your own user information
  const name = 'John Doe';
  const email = 'john.doe@example.com';
  const profileImageUrl = 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50';
  const phoneNumber = '123-456-7890';
  const address = '123 Main St, Anytown USA';
  const bio = 'I am a software developer with a passion for building great products.';

  return (
    <ScrollView >
      <View style={styles.container}>
        <View style={styles.imageView}>
          <View style={styles.detailsContainer}>
                  <Image
                      source={{uri: profileImageUrl}}
                      style={styles.image}
                      />
                    <View style={styles.details}>
                      <Text style={styles.name}>{name}</Text>
                      <Text style={styles.email}>{email}</Text>
                    </View>
          </View>
          <View style={styles.headerBtn}>
          <View>
            <TouchableOpacity style={[styles.userBtn, styles.buttonOutline]} onpress={()=> {}}>
                <Text style={styles.userBtnTxt}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={[styles.userBtn, styles.buttonOutline]} onpress={()=> {}}>
                <Text style={styles.userBtnTxt}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
</View>
</View>
          <View style={styles.form}>
            <View style={styles.container1}>

              <View>
                            <Text style={styles.questions}>Phone :</Text>
                            <View style={styles.textcontainer}>
                            <Text style={styles.features}>{phoneNumber}</Text>
                            </View>
                            <Text style={styles.questions}>Address : </Text>
                            <View style={styles.textcontainer}>
                            <Text style={styles.paragraph}>{address}</Text>
                            </View>
                            <Text style={styles.questions}>Bio : </Text>
                            <View style={styles.textcontainer}>
                            <Text style={styles.paragraph}>{bio}</Text>
                            </View>
                            
              </View>
                        
              {/* <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <StyleButton1 onPress={() => navigation.navigate('CoFounderRegister')}>
                    <ButtonText>Edit</ButtonText>
                </StyleButton1>
                    </View> */}
              </View>

          
          

          </View>

     
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#E3E9E2',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // marginBottom: SPACING/2,
  },
  details: {
    flexShrink: 1,
    width: 200
},
form: {
  opacity: 5,
  backgroundColor: '#F2F2F2',
  padding: 10,
  flex: 1,
  marginTop:15
},
container1: {
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 20,
  marginHorizontal:10
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
  flex: 1,
  marginBottom: 10,
  // fontFamily: 'Georgia',
  fontSize: 14,
  lineHeight: 16 * 1.5,
  textAlign: 'justify'
},

container2: {
  backgroundColor: '#E3E9E2',
  borderTopRightRadius: 20
},

  // body: {
  //   borderTopLeftRadius : 50,
  //   borderTopRightRadius : 50,
  //   padding: 16,
  //   backgroundColor: 'red',

  // },
  header: {
    alignItems: 'center',
    // paddingVertical: 16,
    backgroundColor: '#f1f1f1',
    
  },
  headerBtn: {
    alignItems: 'center',
    paddingLeft: 250,
    // paddingHorizontal: 120,
    // backgroundColor: '#f1f1f1',
    display:'flex' ,
    flexDirection: 'row',
    justifyContent: 'space-evenly',   
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    marginTop: 8,
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    marginTop: 8,
    fontSize: 18,
    color: '#666',
  },

  infoContainer: {

    flexDirection: 'row',
    // marginBottom: 16,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 8,
  },
  value: {
    // flex: 1,
  },

  userBtn: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 10,
        borderRadius: 5,
        // alignItems: 'center',
    },

    buttonOutline : {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
    },

    buttonOutlineText : {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 12
    },
    
    userBtnTxt : {
        color: 'black',
        fontWeight: '700',
        fontSize: 12
    },

    imageView: {
      padding: SPACING,
      // marginTop: 30,
      backgroundColor: 'rgba(255, 255, 255, 0.0)',
      borderRadius: 12,
      // marginBottom: SPACING,
      shadowColor: 'black',
      shadowOffset: {
          width: 0,
          height: 10
    },
      shadowOpacity: 1,
      shadowRadius: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: AVATAR_SIZE,
    backgroundColor: 'red',
    marginEnd: 20
},

});

export default UserProfilePage;
