import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import api from "../api/axios";
import VenueCard from "../components/VenueCard.jsx";

export default function Home() {
  const [venues, setVenues] = useState([]);
  const [filters, setFilters] = useState({ search: "", city: "", capacity: "" });

  async function loadVenues(nextFilters = filters) {
    const { data } = await api.get("/venues", { params: nextFilters });
    setVenues(data);
  }

  useEffect(() => {
    loadVenues();
  }, []);

  function handleChange(event) {
    const next = { ...filters, [event.target.name]: event.target.value };
    setFilters(next);
  }

  function handleSubmit(event) {
    event.preventDefault();
    loadVenues();
  }

  return (
    <section>
      <div className="hero">
        <div>
          <p className="eyebrow">Book venues and event services</p>
          <h1>Find the right place for every celebration.</h1>
          <p>Search spaces for birthdays, weddings, corporate meetings, photography, and private events.</p>
        </div>
        <form className="search-panel" onSubmit={handleSubmit}>
          <label>
            Search
            <input name="search" value={filters.search} onChange={handleChange} placeholder="Wedding hall, studio..." />
          </label>
          <label>
            City
            <input name="city" value={filters.city} onChange={handleChange} placeholder="Hyderabad" />
          </label>
          <label>
            Guests
            <input name="capacity" type="number" value={filters.capacity} onChange={handleChange} placeholder="100" />
          </label>
          <button type="submit"><Search size={18} /> Search</button>
        </form>
      </div>
      <div className="grid">
        {venues.map((venue) => <VenueCard key={venue._id} venue={venue} />)}
      </div>
    </section>
  );
}

