import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Cart } from "../pages/cart";
import { Login } from "../pages/login";
import { SignUp } from "../pages/signup";
import { Wishlist } from "../pages/wishlist";
import { ProductListing } from "../pages/productListing";
import { RequireAuth } from "../require-auth";

const EndPoints = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/cart"
        element={
          <RequireAuth>
            <Cart />{" "}
          </RequireAuth>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      <Route
        path="/wishlist"
        element={
          <RequireAuth>
            <Wishlist />{" "}
          </RequireAuth>
        }
      />

      <Route path="/productListing" element={<ProductListing />} />
    </Routes>
  );
};

export { EndPoints as Routes };
