import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
// import SingleProduct from "./screens/SingleProduct.js";
// import Register from "./screens/Register.js";
// import ProfileScreen from "./screens/ProfileScreen.js";
import CartScreen from "./screens/CartScreen";
// import ShippingScreen from "./screens/ShippingScreen.js";
// import PaymentScreen from "./screens/PaymentScreen.js";
// import PlaceOrderScreen from "./screens/PlaceOrderScreen.js";
// import OrderScreen from "./screens/OrderScreen.js";
import NotFound from "./screens/NotFound";
import Login from "./screens/Login";
import SingleProduct from "./screens/SingleProduct";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route
          path="/search/:search/page/:pageNumber"
          element={<HomeScreen />}
        />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart/:productId?" element={<CartScreen />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
