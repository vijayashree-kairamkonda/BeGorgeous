import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";

export const NavBar = () => {

const {isLoggedIn, setIsLoggedIn} =useAuth();

const loginClickHandler=()=>{
  
    if(isLoggedIn){
      window.location.reload(false)
      setIsLoggedIn(!isLoggedIn)
    }
  
}

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
              <NavLink to="/login" onClick={loginClickHandler} > {isLoggedIn ? "Logout" : "Login"}</NavLink>
            </li>
          </ul>
        </div>
      
    </nav>
  );
};
