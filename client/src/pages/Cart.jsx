import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/axios";

export default function Cart() {
  const [cart, setCart] = useState({ items: [] });

  async function loadCart() {
    const { data } = await api.get("/cart");
    setCart(data);
  }

  useEffect(() => {
    loadCart();
  }, []);

  async function removeItem(id) {
    await api.delete(`/cart/items/${id}`);
    loadCart();
  }

  const total = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section>
      <h1>Cart</h1>
      <div className="list">
        {cart.items.map((item) => (
          <div className="row" key={item._id}>
            <span>{item.itemType}</span>
            <span>{item.name}</span>
            <span>Qty {item.quantity}</span>
            <strong>₹{item.price * item.quantity}</strong>
            <button className="icon-button" onClick={() => removeItem(item._id)} aria-label="Remove item">
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
      <div className="summary">
        <strong>Total: ₹{total}</strong>
        <Link className="button-link" to="/checkout">Checkout</Link>
      </div>
    </section>
  );
}
