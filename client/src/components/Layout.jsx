import { Link, NavLink, Outlet } from "react-router-dom";
import { CalendarCheck, LogOut, ShoppingCart } from "lucide-react";
import { useAuth } from "../context/AuthContext.jsx";

export default function Layout() {
  const { user, logout } = useAuth();

  return (
    <>
      <header className="topbar">
        <Link className="brand" to="/">
          <CalendarCheck size={24} />
          <span>DSS Events</span>
        </Link>
        <nav className="nav">
          <NavLink to="/">Explore</NavLink>
          {user?.role === "customer" && (
            <NavLink to="/cart" aria-label="Cart">
              <ShoppingCart size={18} />
            </NavLink>
          )}
          {user?.role === "venue_owner" && <NavLink to="/owner/venues">My Venues</NavLink>}
          {user?.role === "admin" && <NavLink to="/admin">Admin</NavLink>}
          {user ? (
            <button className="icon-button" onClick={logout} aria-label="Logout">
              <LogOut size={18} />
            </button>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink className="button-link" to="/signup">Signup</NavLink>
            </>
          )}
        </nav>
      </header>
      <main className="page">
        <Outlet />
      </main>
    </>
  );
}

