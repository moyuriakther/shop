import { Link, useLocation, useParams } from "react-router-dom";
import Header from "../components/Header";
import { useSelector } from "react-redux";
import { useEffect } from "react";
// import { useEffect } from "react";

const CartScreen = () => {
  window.scrollTo(0, 0);
  const { productId } = useParams();
  const location = useLocation();

  // const navigate = useNavigate();
  // const user = JSON.parse(localStorage.getItem("auth"));
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  // console.log(user, productId);
  const cart = useSelector((state) => state.cart);
  const { addToCart, cartItems } = cart;
  const total = cartItems?.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2);

  useEffect(() => {
    if (productId) {
      addToCart(productId, qty);
    }
  }, [qty, productId, addToCart]);

  // const handleCheckout = (e) => {
  //   if (user?.token) {
  //     navigate(`/shipping`);
  //   } else {
  //     navigate("/login");
  //   }
  // };

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
                <div className="remove-button d-flex justify-content-center align-items-center">
                  <i className="fas fa-times"></i>
                </div>
                <div className="cart-image col-md-3">
                  <img src={item?.image} alt={item?.name} />
                </div>
                <div className="cart-text col-md-5 d-flex align-items-center">
                  <Link to={`/products/${item?.product}`}>
                    <h4>{"name"}</h4>
                  </Link>
                </div>
                <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
                  <h6>QUANTITY</h6>
                  <h6 className="font-bold">{item?.qty}</h6>
                  {/* <select
                   value={item.qty}
                   onChange={(e) =>
                    dispatch(addToCart(item.product, Number(e.target.value)))
                  
                  >
                     {[...Array(item?.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))} 
                  </select> */}
                </div>
                <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start  d-flex flex-column justify-content-center col-sm-7">
                  <h6>PRICE</h6>
                  <h4>${item?.price}</h4>
                </div>
              </div>
            ))}
            {/* end cart items */}
            <div className="total">
              <span className="sub"> total: </span>
              <span className="total-price"> ${total} </span>
            </div>
            <hr />
            <div className="cart-buttons d-flex align-items-center row">
              <Link className="col-md-6" to="/">
                <button>Continue To Shopping</button>
              </Link>
              {total > 0 && (
                <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
                  <button>Checkout</button>
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
