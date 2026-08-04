import { useEffect, useState } from "react";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext.jsx";

export default function Orders() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get(user.role === "customer" ? "/orders/my" : "/orders").then(({ data }) => setOrders(data));
  }, [user.role]);

  return (
    <section>
      <h1>Orders</h1>
      <div className="list">
        {orders.map((order) => (
          <div className="row" key={order._id}>
            <span>{new Date(order.createdAt).toLocaleDateString()}</span>
            <span>{order.orderStatus}</span>
            <strong>₹{order.totalAmount}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

