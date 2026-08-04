import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Checkout() {
  const navigate = useNavigate();

  async function handleCheckout() {
    await api.post("/orders/checkout", {});
    navigate("/orders");
  }

  return (
    <section className="panel">
      <h1>Checkout</h1>
      <p>Review your booking request and confirm. Payment gateway integration can be added here.</p>
      <button onClick={handleCheckout}>Place booking</button>
    </section>
  );
}

