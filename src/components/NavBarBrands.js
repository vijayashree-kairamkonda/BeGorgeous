import { NavLink } from "react-router-dom";
import "../App.css";
import { useProductContext } from "../contexts/product-context";

export const NavBarBrands = () => {
  const { dispatch } = useProductContext();

  return (
    <div className="container">
      <NavLink
        to="/productListing"
        onClick={() => dispatch({ type: "TOGGLE_CATEGORY", payload: "RINGS" })}
      >
        <div className="category-card">
          <img
            src="https://everstylish.com/pub/media/promobanners//a/d/adl11156_4.jpg"
            alt="rings"
          />
          <h3 className="card-category-name">RINGS</h3>
        </div>
      </NavLink>

      <NavLink
        to="/productListing"
        onClick={() => {
          console.log("clicked");
          dispatch({ type: "TOGGLE_CATEGORY", payload: "BRACELETS" });
        }}
      >
        <div className="category-card">
          <img
            src="https://everstylish.com/pub/media/promobanners//a/d/adl11357_4_2_2.jpg"
            alt="bracelets"
          />
          <h3 className="card-category-name">BRACELETS</h3>
        </div>
      </NavLink>

      <NavLink
        to="/productListing"
        onClick={() =>
          dispatch({ type: "TOGGLE_CATEGORY", payload: "NECKPIECES" })
        }
      >
        <div className="category-card">
          <img
            src="https://everstylish.com/pub/media/promobanners//a/d/adl11270-2_1.jpg"
            alt="neckpieces"
          />
          <h3 className="card-category-name">NECKPIECES</h3>
        </div>
      </NavLink>

      <NavLink
        to="/productListing"
        onClick={() =>
          dispatch({ type: "TOGGLE_CATEGORY", payload: "EARRINGS" })
        }
      >
        <div className="category-card">
          <img
            src="https://everstylish.com/pub/media/promobanners//a/d/adl11332_2.jpg"
            alt="earrings"
          />
          <h3 className="card-category-name">EARRINGS</h3>
        </div>
      </NavLink>
    </div>
  );
};
