import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// state to hold cart items, initialized with some example items
const ShoppingCartScreen = () => {
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Item 1', price: 10, quantity: 1 },
    { id: '2', name: 'Item 2', price: 20, quantity: 1 },
    { id: '3', name: 'Item 3', price: 30, quantity: 1 },
    { id: '1', name: 'Item 1', price: 10, quantity: 1 },
    { id: '2', name: 'Item 2', price: 20, quantity: 1 },
    { id: '3', name: 'Item 3', price: 30, quantity: 1 },
    { id: '1', name: 'Item 1', price: 10, quantity: 1 },
    { id: '2', name: 'Item 2', price: 20, quantity: 1 },
    { id: '3', name: 'Item 3', price: 30, quantity: 1 },
  ]);

  //update the quantity of a cart item
  const handleUpdateItem = (itemId, newQuantity) => {
    setCartItems(prevItems => {
      const updatedItems = [...prevItems];
      const index = updatedItems.findIndex(item => item.id === itemId);
      updatedItems[index] = { ...updatedItems[index], quantity: newQuantity };
      return updatedItems;
    });
  };

  //delete a cart item
  const handleDeleteItem = itemId => {
    setCartItems(prevItems => {
      return prevItems.filter(item => item.id !== itemId);
    });
  };

 //render a single cart item
  const renderCartItem = ({ item }) => {
    return (
    
<View style={styles.cartItem}>
  <Text style={styles.itemName}>{item.name}</Text>
  <Text style={styles.itemPrice}>LKR {item.price.toFixed(2)}</Text>
  <View style={styles.cartItemActions}>
    <TouchableOpacity onPress={() => handleUpdateItem(item.id, item.quantity + 1)}>
      <Icon name="add" size={24} color="#555" />
    </TouchableOpacity>
    <Text style={styles.itemQuantity}>{item.quantity}</Text>
    <TouchableOpacity onPress={() => handleUpdateItem(item.id, Math.max(1, item.quantity - 1))}>
      <Icon name="remove" size={24} color="#555" />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => handleDeleteItem(item.id)}>
      <Icon name="delete" size={24} color="#f00" />
    </TouchableOpacity>
  </View>
</View>

    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={renderCartItem}
        contentContainerStyle={styles.cartList}
      />
      <TouchableOpacity style={styles.checkoutButton} onPress={() => alert('Are you sure you want to continue?')}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

// styles for the shopping cart screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2b6777',
  },
  cartList: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#c8d8e4',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 5,
  },
  itemQuantity: {
    fontSize: 16,
    marginHorizontal: 5,
    color: '#555',
  },
  cartItemActions: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5,
  },
  checkoutButton: {
    backgroundColor: '#52ab98',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
  
});

export default ShoppingCartScreen;

