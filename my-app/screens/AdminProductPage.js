// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

// const AdminProductPage = ({ image, name, price, type, gender, description, brand, onEdit, onDelete }) => {

//     const product = {
//         image: 'https://example.com/my-product-image.jpg',
//         name: 'My Skincare Product',
//         price: '$24.99',
//         type: 'Moisturizer',
//         gender: 'Unisex',
//         brand: 'My Brand',
//         description: 'This is a description of my skincare product.',
//       };

//   return (
//     <View style={styles.container}>
//       <Image style={styles.image} source={{ uri: product.image }} />
//       <View style={styles.infoContainer}>
//         <Text style={styles.name}>{product.name}</Text>
//         <Text style={styles.price}>{product.price}</Text>
//         <View style={styles.typeContainer}>
//           <Text style={styles.type}>{product.type}</Text>
//           <Text style={styles.gender}>{product.gender}</Text>
//         </View>
//         <Text style={styles.brand}>{product.brand}</Text>
//         <Text style={styles.description}>{product.description}</Text>
//       </View>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={[styles.button, styles.editButton]} onPress={onEdit}>
//           <Text style={styles.buttonText}>Edit</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={onDelete}>
//           <Text style={styles.buttonText}>Delete</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: 16,
//     backgroundColor: '#fff',
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     borderRadius: 8,
//     marginRight: 16,
//   },
//   infoContainer: {
//     flex: 1,
//   },
//   name: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   price: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#008080',
//     marginBottom: 8,
//   },
//   typeContainer: {
//     flexDirection: 'row',
//     marginBottom: 8,
//   },
//   type: {
//     backgroundColor: '#008080',
//     color: '#fff',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 8,
//     marginRight: 8,
//     fontWeight: 'bold',
//   },
//   gender: {
//     backgroundColor: '#f0f0f0',
//     color: '#333',
//     paddingHorizontal: 8,
//     paddingVertical: 4,
//     borderRadius: 8,
//     fontWeight: 'bold',
//   },
//   brand: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   description: {
//     fontSize: 16,
//     color: '#666',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     marginTop: 16,
//   },
//   button: {
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//     borderRadius: 8,
//     marginHorizontal: 8,
//   },
//   editButton: {
//     backgroundColor: '#008080',
//   },
//   deleteButton: {
//     backgroundColor: '#f0f0f0',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// export default AdminProductPage;

import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const AdminProductPage = (props) => {
     const product = {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMsA-1D8ReqQVJvrap7Qe0HP87izSh8ulw0Q&usqp=CAU',
        name: 'My Skincare Product',
        price: '$24.99',
        type: 'Moisturizer',
        gender: 'Unisex',
        brand: 'My Brand',
        description: 'This is a description of my skincare product.',
      };
  const [isEditing, setIsEditing] = useState(false);
  
  const handleEdit = () => {
    setIsEditing(true);
  }
  
  const handleDelete = () => {
    // handle delete product
  }
  
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Image
        source={{ uri: product.image }}
        style={{ height: 350, width: '100%', borderRadius: 5 }}
      />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 10 }}>{product.name}</Text>
      <Text style={{ fontSize: 16, color: 'grey', marginTop: 5 }}>{product.type} - {product.gender}</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>Price: {product.price}</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>{product.description}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
        <TouchableOpacity onPress={handleEdit} style={{ backgroundColor: '#4287f5', padding: 10, borderRadius: 5 }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete} style={{ backgroundColor: 'red', padding: 10, borderRadius: 5 }}>
          <Text style={{ color: 'white', fontSize: 16 }}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdminProductPage;