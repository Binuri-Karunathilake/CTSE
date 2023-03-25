import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const UserInfo = ({ item, id }) => {
    console.log(item);

  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.detailsContainer}>
        <View style={{flexDirection: 'row', justifyContent:'flex-start' }}>
        <Text style={styles.name}>{item.fName}</Text>
        <Text style={styles.name}>{item.Lname}</Text>
        </View>
        <Text style={styles.details}>{item.phoneNumber}</Text>
        <Text style={styles.details}>{item.email}</Text>
      </View>
      <Text>  {"\n"}  {"\n"}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginVertical: 5,
    borderRadius: 10,
  },
  subtitleAvailable: {
    fontSize: 12,
    marginBottom: 10,
    fontWeight: '800',
    marginRight: 10,
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 5,
    overflow: 'hidden',
    marginRight: 15,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#222',
    marginRight: 5
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#c45500',
    marginBottom: 10,
  },
  details: {
    fontSize: 14,
    color: '#666',
  },
});

export default UserInfo;