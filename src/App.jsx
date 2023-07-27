import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Register from "./screens/Register";
import ProfileScreen from "./screens/ProfileScreen";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import NotFound from "./screens/NotFound";
import Login from "./screens/Login";
import SingleProduct from "./screens/SingleProduct";
import Wishlist from "./screens/WishlistScreen";
import PrivateRoute from "./components/PrivateRoute";
// import CartHome from "./components/cart/CartHome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart/:productId?" element={<CartScreen />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <ProfileScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/shipping"
          element={
            <PrivateRoute>
              <ShippingScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <PrivateRoute>
              <PaymentScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/placeOrder"
          element={
            <PrivateRoute>
              <PlaceOrderScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/order/:id"
          element={
            <PrivateRoute>
              <OrderScreen />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        {/* <Route path="/carts" element={<CartHome />} /> */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
