import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="nav-container">
      <div className="nav-brand">
        <NavLink to="/" style={{ color: "#be123c" }}>
          BeGorgeous
        </NavLink>
        </div>
      
        <div className="nav-items" >
          <ul className="nav-list" >
            <li className="nav-pill">
              <NavLink to="/wishlist">Wishlist</NavLink>
            </li>
            <li className="nav-pill">
              <NavLink to="/cart">Cart</NavLink>
            </li>
            <li className="nav-pill">
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
      
    </nav>
  );
};
