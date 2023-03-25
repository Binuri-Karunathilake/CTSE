import { useState, useEffect } from 'react';
import { getDocs } from 'firebase/firestore';
import { userOrdersQuery } from './orders';


function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const ordersSnapshot = await getDocs(userOrdersQuery);
      const ordersData = ordersSnapshot.docs.map((doc) => doc.data());
      setOrders(ordersData);
    };

    fetchOrders();
  }, []);

  
  // Render orders list
  return (
    <div>
      {orders.map((order) => (
        <div key={order.orderId}>
          <h2>{order.orderId}</h2>
          <p>{order.orderDate}</p>
          <p>{order.orderTotal}</p>
          <ul>
            {order.items.map((item) => (
              <li key={item.itemId}>{item.itemName} - {item.itemPrice}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
