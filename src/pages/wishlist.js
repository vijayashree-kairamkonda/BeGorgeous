import { UseWishlist } from "../contexts/wishlist-context";
import "../App.css";
import {  useCart } from "../contexts/cart-context";


export const Wishlist = () => {
  const { wishlist, removeFromWishlist } = UseWishlist();
  const { cart, addToCart, deleteFromCart } = useCart();

  return (
    <div>
      <div className="wrapper flex-row justify-center align-center  ">
        <main className="main-container wishlist-container">
          {wishlist.length !== 0 &&
            wishlist.map((item) => {
              return (
                <div className="product-card" key={item.id}>
                  <img src={item.image} alt="ring" />
                  <div className="product-card-like">
                    <i
                      className="fas fa-heart product-card-like-icon wishlist-selected"
                      onClick={() => {
                        removeFromWishlist(item);
                        console.log("removed");
                      }}
                    ></i>
                  </div>

                  <div className="card-category">
                    <h3>{item.title}</h3>
                  </div>
                  <div className="card-des">
                    <p>{item.desc}</p>
                  </div>

                  <div className="card-prod-price">
                    <span className="card-prod-price-now">Rs.{item.price}</span>
                    <br />
                    <span className="card-prod-price-old">
                      Rs.{item.originalPrice}
                    </span>
                  </div>
                  {cart.find((a) => a._id === item._id) ? (
                    <div className="wishlist-card-btn">
                      <button
                        className="product-card-btn"
                        onClick={() => deleteFromCart(item)}
                      >
                        REMOVE FROM CART
                      </button>
                    </div>
                  ) : (
                    <div className="wishlist-card-btn">
                      <button
                        className="product-card-btn"
                        onClick={() => addToCart(item)}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  )}
                </div>
              );
            })}

          {wishlist.length === 0 ? "NO PRODUCTS WISHLISTED" : null}
        </main>
      </div>
    </div>
  );
};
