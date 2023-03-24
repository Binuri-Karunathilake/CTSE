import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const navigation = useNavigation();

const ShoppingCartScreen = () => {
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Item 1', price: 10 },
    { id: '2', name: 'Item 2', price: 20 },
    { id: '3', name: 'Item 3', price: 30 },
  ]);

  const handleUpdateItem = (itemId, newQuantity) => {
    setCartItems(prevItems => {
      const updatedItems = [...prevItems];
      const index = updatedItems.findIndex(item => item.id === itemId);
      updatedItems[index] = { ...updatedItems[index], quantity: newQuantity };
      return updatedItems;
    });
  };

  const handleDeleteItem = itemId => {
    setCartItems(prevItems => {
      return prevItems.filter(item => item.id !== itemId);
    });
  };

  const renderCartItem = ({ item }) => {
    return (
      <View style={styles.cartItem}>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
        <View style={styles.cartItemActions}>
          <TouchableOpacity onPress={() => handleUpdateItem(item.id, item.quantity + 1)}>
            <Icon name="add" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleUpdateItem(item.id, Math.max(0, item.quantity - 1))}>
            <Icon name="remove" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleDeleteItem(item.id)}>
            <Icon name="delete" size={24} color="red" />
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
      <Button title="Checkout" onPress={() => alert('Checkout button pressed')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    borderBottomColor: '#ccc',
  },
  cartItemActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default ShoppingCartScreen;
