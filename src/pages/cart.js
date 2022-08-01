import "../App.css";
import { useCart } from "../contexts/cart-context";

export const Cart = () => {
  const { cart, deleteFromCart, incrementItem, decrementItem } = useCart();

  return (
    <div>
      <div className="wrapper flex-row justify-center align-center  ">
        <main className="main-container cart-container flex-row justify-center">
          {cart.length !== 0 &&
            cart.map((item) => {
              return (
                <div className="cart-card" key={item.id}>
                  <div>
                    {" "}
                    <img src={item.image} alt="ring" className="cart-img" />
                  </div>
                  <div className="cart-desc">
                    <div className="cart-category">
                      <h3>{item.title}</h3>
                    </div>
                    <div className="cart-des">
                      <p>{item.desc}</p>
                    </div>
                    <div className="cart-qty">
                      Quantity :
                      <button
                        className="cart-qty-btn"
                        onClick={() => {
                          item.qty !== 1
                            ? decrementItem(item)
                            : deleteFromCart(item);
                        }}
                      >
                        -
                      </button>
                      {item.qty}
                      <button
                        className="cart-qty-btn"
                        onClick={() => incrementItem(item)}
                      >
                        +
                      </button>
                    </div>

                    <div className="cart-prod-price">
                      <span>Rs.{item.price}</span>
                      <br />
                    </div>
                    <div className="product-cart-btn">
                      <button onClick={() => deleteFromCart(item)}>
                        REMOVE FROM CART
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

          {cart.length === 0 ? "NO PRODUCTS ADDED" : null}
        </main>
          {cart.length !== 0 && (
        <aside className="cart-sidebar">
            <>
              <div className="cart-sidebar-header">PRICE DETAILS</div>
              <div className="cart-sidebar-desc">
                {cart.map((a) => (
                  <div>
                    {a.title}
                    {a.price} [ {a.qty} x Rs.{a.qty * a.price} ]
                  </div>
                ))}
              </div>
              <div className="cart-sidebar-desc">
                TOTAL PRICE: Rs.
                {cart.reduce((acc, curr) => {
                  return acc + curr.originalPrice * curr.qty;
                }, 0)}<br/>
                SHIPPING : FREE
              </div>
              {/* <div className="cart-sidebar-desc"></div> */}
              <div className="cart-sidebar-footer">
                FINAL PRICE [{cart.length} items] :Rs.
                {cart.reduce((acc, curr) => {
                  return acc + curr.price * curr.qty;
                }, 0)}
              </div>
             
            </>
        </aside>
          )}
      </div>
    </div>
  );
};
