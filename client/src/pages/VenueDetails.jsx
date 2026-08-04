import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

export default function VenueDetails() {
  const { id } = useParams();
  const [venue, setVenue] = useState(null);

  useEffect(() => {
    api.get(`/venues/${id}`).then(({ data }) => setVenue(data));
  }, [id]);

  async function addToCart() {
    await api.post("/cart/items", {
      itemType: "venue",
      item: venue._id,
      owner: venue.owner?._id || venue.owner,
      name: venue.name,
      quantity: 1,
      price: venue.pricePerDay
    });
  }

  if (!venue) return <p>Loading...</p>;

  return (
    <section className="details">
      <div className="details-media">
        {venue.images?.[0] ? <img src={venue.images[0]} alt={venue.name} /> : <span>{venue.name.charAt(0)}</span>}
      </div>
      <div>
        <p className="eyebrow">{venue.category?.name}</p>
        <h1>{venue.name}</h1>
        <p>{venue.description}</p>
        <p><strong>Capacity:</strong> {venue.capacity} guests</p>
        <p><strong>Available:</strong> {venue.availableQuantity}</p>
        <p><strong>Price:</strong> ₹{venue.pricePerDay}/day</p>
        <button onClick={addToCart}><ShoppingCart size={18} /> Add to cart</button>
      </div>
    </section>
  );
}
