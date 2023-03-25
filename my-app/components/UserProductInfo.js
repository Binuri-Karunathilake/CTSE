import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const UserProductInfo = ({ item }) => {

  const navigation = useNavigation();
  console.log(item);

  return (
    <TouchableOpacity style={styles.container} onPress={() => {navigation.navigate("ProductDetails", {item})}}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#2b6777',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    marginVertical: 5,
    borderRadius: 10,
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
    color: '#ffffff',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#c8d8e4',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#f2f2f2',
  },
});

export default UserProductInfo;
