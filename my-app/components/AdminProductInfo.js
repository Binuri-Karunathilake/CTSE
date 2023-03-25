import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const AdminProductInfo = ({ item, id }) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={() => {navigation.navigate("Admin Product Details", {item, id})}}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={[styles.subtitleAvailable, item.status === 'Available'? {color: '#52ab98'} : {color: '#b5443c'} ]}>{item.status}</Text>
        </View>
        <Text style={styles.price}>Rs.{item.price}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
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
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#c45500',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default AdminProductInfo;