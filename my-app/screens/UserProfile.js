import React from 'react';
import { Touchable, TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const UserProfilePage = () => {
  // Replace these with your own user information
  const name = 'John Doe';
  const email = 'john.doe@example.com';
  const profileImageUrl = 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50';
  const phoneNumber = '123-456-7890';
  const address = '123 Main St, Anytown USA';
  const bio = 'I am a software developer with a passion for building great products.';

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.profileImage} source={{ uri: profileImageUrl }} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
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
      <View style={styles.body}>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Phone:</Text>
          <Text style={styles.value}>{phoneNumber}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Address:</Text>
          <Text style={styles.value}>{address}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Bio:</Text>
          <Text style={styles.value}>{bio}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#f1f1f1',
  },
  headerBtn: {
    paddingVertical: 16,
    backgroundColor: '#f1f1f1',
    display: 'flex',
    flexDirection :'row'
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
  body: {
    padding: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 8,
  },
  value: {
    flex: 1,
  },

  userBtn: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 10,
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
        fontSize: 12
    },
    
    userBtnTxt : {
        color: 'black',
        fontWeight: '700',
        fontSize: 12
    },



});

export default UserProfilePage;
