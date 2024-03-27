import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Products from "../pages/Products";
import IndividualProduct from "../pages/IndividualProduct";
import CartDisplay from "../pages/CartDisplay";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import Return from "../pages/return";
import LandingPage from "../pages/LandingPage";
import { AuthProvider } from "../hooks/Auth";
import PrivateRoute from "../router/PrivateRoute";
import { ProductsProvider } from "../hooks/Products";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ProductsProvider>
          <Routes>
            <Route exact path="/" element={<LandingPage />}></Route>
            <Route exact path="/auth/login" element={<Login />}></Route>
            <Route exact path="/auth/register" element={<SignUp />}></Route>
            <Route
              exact
              path="/products/:id"
              element={<IndividualProduct />}
            ></Route>
            <Route exact path="/products" element={<Products />}></Route>
            <Route element={<PrivateRoute />}>
              <Route exact path="/cart" element={<CartDisplay />}></Route>
              <Route exact path="/checkout" element={<Checkout />}></Route>
              <Route exact path="/orders" element={<Orders />}></Route>
              <Route exact path="/return" element={<Return/>}></Route>
            </Route>
          </Routes>
        </ProductsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
