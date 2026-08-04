import { useEffect, useState } from "react";
import api from "../api/axios";

export default function ManageVenues() {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    api.get("/venues").then(({ data }) => setVenues(data));
  }, []);

  return (
    <section>
      <h1>Venue Management</h1>
      <div className="panel">
        <p>Create/update venue forms belong here. The backend routes are ready for owner CRUD.</p>
      </div>
      <div className="list">
        {venues.map((venue) => (
          <div className="row" key={venue._id}>
            <span>{venue.name}</span>
            <span>{venue.status}</span>
            <strong>₹{venue.pricePerDay}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

