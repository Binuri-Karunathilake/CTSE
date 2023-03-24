import React, { useState } from 'react';
import { FlatList, Text, TextInput, View, StyleSheet, Dimensions, Image } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import UserProductInfo from '../components/UserProductInfo';

const PRODUCTS = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMsA-1D8ReqQVJvrap7Qe0HP87izSh8ulw0Q&usqp=CAU',
    id: 1,
    name: 'Product 1',
    brand: 'Brand A',
    price: 10.00,
    gender: 'male',
    description: 'Product 1 description',
    type: 'Skin',
    status: 'available'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMsA-1D8ReqQVJvrap7Qe0HP87izSh8ulw0Q&usqp=CAU',
    id: 2,
    name: 'Product 2',
    brand: 'Brand B',
    price: 20.00,
    gender: 'female',
    description: 'Product 2 description',
    type: 'Hair',
    status: 'out of stock',
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMsA-1D8ReqQVJvrap7Qe0HP87izSh8ulw0Q&usqp=CAU',
    id: 3,
    name: 'Product 3',
    brand: 'Brand C',
    price: 30.00,
    gender: 'both',
    description: 'Product 3 description',
    type: 'Skin',
    status: 'available'
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMsA-1D8ReqQVJvrap7Qe0HP87izSh8ulw0Q&usqp=CAU',
    id: 4,
    name: 'Product 4',
    brand: 'Brand C',
    price: 50.00,
    gender: 'male',
    description: 'Product 3 description',
    type: 'Perfume',
    status: 'out of stock',
  },
];

const statuses = [
  {status: 'All', key: 1},
  {status: 'Skin', key: 2},
  {status: 'Hair', key: 3},
  {status: 'Perfume', key: 4}
]

const UserViewProductDetails = () => {
  const [searchText, setSearchText] = useState('');
  const [type, setType] = useState('All');
  const [products, setProducts] = useState(PRODUCTS);

  const fiterProducts = (status) => {
    if(status !== 'All') {
      setProducts([])
    }
    setProducts()
  }

  const renderProduct = ({ item }) => {
    return (
      <View style={styles.productContainer}>
      <Image source={{uri: 'https://www.elfcosmetics.co.uk/dw/image/v2/BBXC_PRD/on/demandware.static/-/Sites-elf-master/default/dw603e0e85/2023/HolyHydration!TripleBounceSerum/57167_CLOSED_R.jpg?sw=352&sh=352&sm=fit&sfrm=png&strip=false'}} style={styles.productImage} />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productBrand}>{item.brand}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <Text style={styles.productGender}>{item.gender}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
      </View>
    </View>
    );
  };

  const filteredProducts = PRODUCTS.filter((product) => {
    if(type === 'All') {
      return product.name.toLowerCase().includes(searchText.toLowerCase());
    } else {
      return product.name.toLowerCase().includes(searchText.toLowerCase()) && product.type.toLowerCase().includes(type.toLowerCase());
    }
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search products..."
        value={searchText}
        onChangeText={setSearchText}
      />
  
      <FlatList
        data={filteredProducts}
        renderItem={({item, index}) => {
          console.log(item);
          return(<UserProductInfo item={item}/>)
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
    backgroundColor: '#fff'
  },
  productContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    padding: 10,
    backgroundColor: 'red',
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productBrand: {
    fontSize: 16,
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    marginBottom: 8,
  },
  productGender: {
    fontSize: 16,
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 16,
  },
  listTab: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  btnTab: {
    width: Dimensions.get('window').width/ 4.5,
    flexDirection: 'row',
    borderRadius: 20,
    padding: 5,
    justifyContent: 'center',
  },
  textTab: {
    fontSize: 12
  },
  btnTabActive: {
    backgroundColor: '#2b6777'
  },
  btnTabActiveText: {
    color: 'white',
    fontWeight: '300'
  },
  productImageContainer : {

  },
  productImage : {

  },
  productTextContainer : {

  },
});

export default UserViewProductDetails;
