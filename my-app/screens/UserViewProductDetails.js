import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TextInput, View, StyleSheet, Dimensions, Image } from 'react-native';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import UserProductInfo from '../components/UserProductInfo';
import { fireStoreDB } from '../firebase';

const PRODUCTS = [
  {
    image: 'https://images.unsplash.com/photo-1566977776052-6e61e35bf9be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fGNvc21ldGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    id: 1,
    name: 'Eternity by Belle',
    brand: 'Brand A',
    price: 185.00,
    gender: 'male',
    description: 'for women ',
    
    type: 'Skin',
    status: 'available'
  },
  
  {
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvc21ldGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    id: 2,
    name: 'Vegan Cream',
    brand: 'Brand B',
    price: 25.00,
    gender: 'female',
    description: 'Product 2 description',
    type: 'Hair',
    status: 'out of stock',
  },
  {
    image: 'https://images.unsplash.com/photo-1618330834871-dd22c2c226ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNvc21ldGljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    id: 3,
    name: 'Niacinamide serum',
    brand: 'Brand C',
    price: 30.00,
    gender: 'both',
    description: 'reduce wrinkles',
    type: 'Skin',
    status: 'available'
  },
  {
    image: 'https://static.thcdn.com/images/large/webp//productimg/1600/1600/13806351-6474952929341174.jpg',
    id: 4,
    name: 'Color Wow Dream Clean',
    brand: 'Brand C',
    price: 50.00,
    gender: 'male',
    description: 'A vibrance-boosting ',
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
  const [products, setProducts] = useState([]);

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

  const filteredProducts = products.filter((product) => {

      return product.data.name.toLowerCase().includes(searchText.toLowerCase())
    
  });

  const getProducts = async () => {
    const productRef = collection(fireStoreDB, "products");
    // Create a query against the collection.
      const querySnapshot = await getDocs(productRef);
      let returnedProducts = [];
      querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
        returnedProducts.push({id: doc.id, data: doc.data()});
      });
      console.log(returnedProducts);
      setProducts(returnedProducts)
      console.log(products);
  }

  useEffect(() => {
    getProducts();
  }, []);

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
        extraData={filteredProducts}
        renderItem={({item, index}) => {
          console.log(item);
          return(<UserProductInfo item={item.data}/>)
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
    backgroundColor: '#c8d8e4',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#2b6777',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
    backgroundColor: '#ffffff',
  },
  productContainer: {
    backgroundColor: '#ffffff',
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
    backgroundColor: '#f2f2f2',
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
    fontSize: 12,
  },
  btnTabActive: {
    backgroundColor: '#2b6777',
  },
  btnTabActiveText: {
    color: 'white',
    fontWeight: '300',
  },
});

export default UserViewProductDetails;
