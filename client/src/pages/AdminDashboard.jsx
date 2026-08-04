import { useEffect, useState } from "react";
import api from "../api/axios";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Promise.all([api.get("/users"), api.get("/categories")]).then(([usersRes, categoriesRes]) => {
      setUsers(usersRes.data);
      setCategories(categoriesRes.data);
    });
  }, []);

  return (
    <section>
      <h1>Admin Dashboard</h1>
      <div className="dashboard-grid">
        <div className="panel">
          <h2>Users</h2>
          <strong>{users.length}</strong>
        </div>
        <div className="panel">
          <h2>Categories</h2>
          <strong>{categories.length}</strong>
        </div>
      </div>
    </section>
  );
}

