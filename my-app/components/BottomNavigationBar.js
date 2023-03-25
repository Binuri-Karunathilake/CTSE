import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function BottomNavigationBar({ navigation }) {
  const [activeTab, setActiveTab] = useState('home');

  const handlePress = (tab) => {
    setActiveTab(tab);
    switch (tab) {
      case 'home':
        navigation.navigate('Home');
        break;
      case 'products':
        navigation.navigate('Products');
        break;
      case 'back':
        navigation.goBack();
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: activeTab === 'home' ? '#2b6777' : '#f2f2f2' },
        ]}
        onPress={() => handlePress('home')}
      >
        <AntDesign name="home" size={24} color={activeTab === 'home' ? '#ffffff' : '#2b6777'} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: activeTab === 'products' ? '#2b6777' : '#f2f2f2' },
        ]}
        onPress={() => handlePress('products')}
      >
        <AntDesign
          name="appstore-o"
          size={24}
          color={activeTab === 'products' ? '#ffffff' : '#2b6777'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          { backgroundColor: activeTab === 'back' ? '#2b6777' : '#f2f2f2' },
        ]}
        onPress={() => handlePress('back')}
      >
        <AntDesign name="arrowleft" size={24} color={activeTab === 'back' ? '#ffffff' : '#2b6777'} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#c8d8e4',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
