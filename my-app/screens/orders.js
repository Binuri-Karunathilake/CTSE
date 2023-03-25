// import { fireStoreDB } from '../firebase';

// // Get the orders collection

// // Query the orders collection to get orders for a specific user
// //const userOrdersQuery = query(ordersRef, where('userId', '==', 'user123'));



// // retrieve all orders by a specific user
// const userId = 'user123';
// //const query = collectionGroup(fireStoreDB, 'orders')
//   .where('userId', '==', userId);

// // execute the query and retrieve the orders
// getDocs(query).then((querySnapshot) => {
//   const orders = [];
//   querySnapshot.forEach((doc) => {
//     orders.push(doc.data());
//   });
//   console.log('Orders:', orders);
// }).catch((error) => {
//   console.error('Error retrieving orders:', error);
// });
