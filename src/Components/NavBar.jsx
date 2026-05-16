import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      {/* Wrapped the logo text in a NavLink pointing to "/" */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-logo active" : "nav-logo"
        }
      >
        HeBRews
      </NavLink>

      <div className="nav-links">
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Shop
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/form"
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          Add +
        </NavLink>
      </div>
    </nav>
  );
}
