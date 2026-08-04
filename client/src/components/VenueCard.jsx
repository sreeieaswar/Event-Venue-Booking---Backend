import { MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function VenueCard({ venue }) {
  return (
    <article className="venue-card">
      <div className="venue-image">
        {venue.images?.[0] ? <img src={venue.images[0]} alt={venue.name} /> : <span>{venue.name?.charAt(0)}</span>}
      </div>
      <div className="venue-body">
        <h3>{venue.name}</h3>
        <p>{venue.description || "A flexible space ready for your next event."}</p>
        <div className="venue-meta">
          <span><MapPin size={16} /> {venue.address?.city || "Location"}</span>
          <span><Users size={16} /> {venue.capacity}</span>
        </div>
        <div className="venue-footer">
          <strong>₹{venue.pricePerDay}/day</strong>
          <Link className="button-link" to={`/venues/${venue._id}`}>View</Link>
        </div>
      </div>
    </article>
  );
}

