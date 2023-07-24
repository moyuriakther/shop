import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  addToCart,
  calculateTotalAmount,
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../features/cart/cartSlice";
// import { useEffect } from "react";

const CartScreen = () => {
  window.scrollTo(0, 0);
  const { productId } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const auth = JSON.parse(localStorage.getItem("auth"));
  const cart = useSelector((state) => state.cart);
  // const auth = useSelector((state) => state.auth);
  console.log(auth.accessToken);
  const { cartItems, cartTotalAmount } = cart;
  // const total = cartItems?.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2);

  useEffect(() => {
    if (productId) {
      addToCart(productId, qty);
    }
  }, [qty, productId]);

  const handleCheckout = () => {
    if (auth?.accessToken) {
      navigate("/shipping");
    } else {
      navigate("/login");
    }
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleRemoveItem = (product) => {
    dispatch(removeFromCart(product));
  };
  useEffect(() => {
    dispatch(calculateTotalAmount());
  }, [cartItems, dispatch]);
  const handleIncreaseQuantity = (product) => {
    console.log(product);
    dispatch(incrementQuantity(product));
  };
  const handleDecreaseQuantity = (product) => {
    dispatch(decrementQuantity(product));
  };
  return (
    <>
      <Header />
      <div className="container">
        {cartItems?.length === 0 ? (
          <div className="alert alert-info text-center mt-3">
            Your Cart is empty
            <Link
              className="btn btn-success mx-5 px-5 py-3"
              to="/"
              style={{ fontSize: "12px" }}
            >
              SHOPPING NOW
            </Link>
          </div>
        ) : (
          <>
            <div className="alert alert-info text-center mt-3">
              Total Cart Products
              <Link to="/cart" className="text-success mx-2">
                ({cartItems?.length})
              </Link>
            </div>
            {cartItems?.map((item, i) => (
              <div className="cart-item row" key={i}>
                <div
                  onClick={() => handleRemoveItem(item)}
                  className="remove-button d-flex justify-content-center align-items-center"
                >
                  <i className="fas fa-times"></i>
                </div>
                <div className="cart-image col-md-3">
                  <img src={item?.product?.image} alt={item?.product?.name} />
                </div>
                <div className="cart-text col-md-5 d-flex align-items-center">
                  <Link to={`/products/${item?.product?._id}`}>
                    <h4>{item?.product?.name}</h4>
                  </Link>
                </div>
                <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-0 mt-md-0 d-flex flex-column align-items-center justify-content-center">
                  <h6>QUANTITY</h6>
                  <div className="flex justify-content-center align-items-center pt-2">
                    <button
                      className="decrease-button"
                      onClick={() => handleDecreaseQuantity(item)}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </button>

                    <h6 className="font-bold text-black px-2 mx-2 text-xl bg-gray-400">
                      {item?.qty}
                    </h6>
                    <button
                      className="increase-button"
                      onClick={() => handleIncreaseQuantity(item)}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </div>
                <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-center d-flex flex-column justify-content-center col-sm-7">
                  <h6>PRICE</h6>
                  <h4 className="pt-2">${item?.product?.price}</h4>
                </div>
              </div>
            ))}
            {/* end cart items */}
            <div className="total flex justify-between">
              {" "}
              <button
                onClick={handleClearCart}
                className="bg-red-600 rounded-full py-2 px-4 text-white"
              >
                Clear Cart
              </button>
              <div>
                <span className="sub"> total: </span>
                <span className="total-price"> ${cartTotalAmount} </span>
              </div>
            </div>
            <hr />
            <div className="cart-buttons d-flex align-items-center row">
              <Link className="col-md-6" to="/">
                <button>Continue To Shopping</button>
              </Link>
              {cartTotalAmount > 0 && (
                <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                  <button onClick={handleCheckout}>Checkout</button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartScreen;
