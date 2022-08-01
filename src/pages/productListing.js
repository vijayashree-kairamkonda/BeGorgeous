import "../App.css";
import { useProductContext } from "../contexts/product-context";
import { UseWishlist } from "../contexts/wishlist-context";
import { useCart } from "../contexts/cart-context";


export const ProductListing = () => {
  const { sortBy, dispatch, RatedData, toggleCategory, toggleRating } =
    useProductContext();
  const { wishlist, addToWishlist, removeFromWishlist } = UseWishlist();
  const {  cart, addToCart, deleteFromCart} = useCart();

  return (
    <div className="wrapper">
      <aside className="side-bar">
        <div className="side-bar-heading">FILTERS</div>
        <div className="filter-heading">Price</div>
        <div className="filter-options">
          <div className="options-radio">
            <input
              type="radio"
              onChange={() =>
                dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
              }
              checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
            />
            <label>Price - High to Low</label>
          </div>
          <div className="options-radio">
            <input
              type="radio"
              onChange={() =>
                dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
              }
              checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
            />
            <label>Price - Low to High</label>
          </div>
        </div>
        <div className="filter-heading">Categories</div>
        <div className="filter-options">
          <div>
            <div className="options-checkbox">
              <input
                type="checkbox"
                onChange={() =>
                  dispatch({ type: "TOGGLE_CATEGORY", payload: "RINGS" })
                }
                checked={toggleCategory.includes("RINGS")}
              />
              <label>RINGS</label>
            </div>

            <div className="options-checkbox">
              <input
                type="checkbox"
                onChange={() =>
                  dispatch({ type: "TOGGLE_CATEGORY", payload: "BRACELETS" })
                }
                checked={toggleCategory.includes("BRACELETS")}
              />
              <label>BRACELETS</label>
            </div>
            <div className="options-checkbox">
              <input
                type="checkbox"
                onChange={() =>
                  dispatch({ type: "TOGGLE_CATEGORY", payload: "NECKPIECES" })
                }
                checked={toggleCategory.includes("NECKPIECES")}
              />
              <label>NECKPIECES</label>
            </div>
            <div className="options-checkbox">
              <input
                type="checkbox"
                onChange={() =>
                  dispatch({ type: "TOGGLE_CATEGORY", payload: "EARRINGS" })
                }
                checked={toggleCategory.includes("EARRINGS")}
              />
              <label>EARRINGS</label>
            </div>
          </div>
        </div>
        <div className="filter-heading">Rating</div>
        <div className="options-radio">
          <input
            type="radio"
            onChange={() =>
              dispatch({ type: "TOGGLE_RATING", payload: "4_ABOVE" })
            }
            id=""
            checked={toggleRating === "4_ABOVE"}
          />
          <label>4★ & above</label>
        </div>
        <div className="options-radio">
          <input
            type="radio"
            onChange={() =>
              dispatch({ type: "TOGGLE_RATING", payload: "3_ABOVE" })
            }
            id=""
            checked={toggleRating === "3_ABOVE"}
          />
          <label>3★ & above</label>
        </div>
        <div className="options-radio">
          <input
            type="radio"
            onChange={() =>
              dispatch({ type: "TOGGLE_RATING", payload: "2_ABOVE" })
            }
            id=""
            checked={toggleRating === "2_ABOVE"}
          />
          <label>2★ & above</label>
        </div>
        <div className="options-radio">
          <input
            type="radio"
            onChange={() =>
              dispatch({ type: "TOGGLE_RATING", payload: "1_ABOVE" })
            }
            id=""
            checked={toggleRating === "1_ABOVE"}
          />
          <label>1★ & above</label>
        </div>
        <div className="filter-heading">
          <button
            className="clear-btn"
            onClick={() => dispatch({ type: "CLEAR_ALL" })}
          >
            CLEAR ALL
          </button>
        </div>
      </aside>
      <main className="main-container">
        {RatedData.map((product) => (
          <div className="product-card">
            <img src={product.image} alt="ring"/>
            {product.badge !== null ? <div className="product-card-badge">{product.badge}</div> : null}

            {wishlist.find((item) => item._id === product._id) ? (
              <div className="product-card-like">
                <i
                  className="fas fa-heart product-card-like-icon wishlist-selected"
                  onClick={() => removeFromWishlist(product)}
                ></i>
              </div>
            ) : (
              <div className="product-card-like">
                <i
                  className="fas fa-heart product-card-like-icon"
                  onClick={() => addToWishlist(product)}
                ></i>
              </div>
            )}

            <div className="card-category">
              <h3>{product.title}</h3>
            </div>
            <div className="card-des">
              <p>{product.desc}</p>
            </div>

            <div className="card-prod-price">
              <span className="card-prod-price-now">Rs.{product.price}</span>
              <br />
              <span className="card-prod-price-old">
                Rs.{product.originalPrice}
              </span>
            </div>
            {cart.find((item)=>item._id === product._id) 
                ? 
                    <div >
                        <button className="product-card-btn" onClick={()=>deleteFromCart(product)}>REMOVE FROM CART</button>
                    </div>
                : 
                <div >
                        <button className="product-card-btn" onClick={()=>addToCart(product)}>ADD TO CART</button>
                    </div>
               }
                    
               
            </div>))}
      </main>
    </div>
  );
};
