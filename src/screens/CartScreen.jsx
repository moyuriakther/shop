import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";

const CartScreen = () => {
  window.scrollTo(0, 0);
  const { productId } = useParams();
  const user = JSON.parse(localStorage.getItem("userInfo"));
  console.log(user, productId);
  return (
    <>
      <Header />
      <div className="container">
        {/* cart */}

        {/* <div className="alert alert-info text-center mt-3">
            Your Cart is empty
            <Link
              className="btn btn-success mx-5 px-5 py-3"
              to="/"
              style={{ fontSize: "12px" }}
            >
              SHOPPING NOW
            </Link>
          </div> */}

        <>
          <div className="alert alert-info text-center mt-3">
            Total Cart Products
            <Link to="/cart" className="text-success mx-2">
              {/* ({cartItems?.length}) */} 4
            </Link>
          </div>
          <div className="cart-item row">
            <div className="remove-button d-flex justify-content-center align-items-center">
              <i className="fas fa-times"></i>
            </div>
            <div className="cart-image col-md-3">
              {/* <img src={item?.image} alt={item?.name} /> */}
            </div>
            <div className="cart-text col-md-5 d-flex align-items-center">
              <Link to={`/products/`}>
                <h4>{"name"}</h4>
              </Link>
            </div>
            <div className="cart-qty col-md-2 col-sm-5 mt-md-5 mt-3 mt-md-0 d-flex flex-column justify-content-center">
              <h6>QUANTITY</h6>
              <select
              // value={item.qty}
              // onChange={(e) =>
              //   dispatch(addToCart(item.product, Number(e.target.value)))
              // }
              >
                {/* {[...Array(item?.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))} */}
              </select>
            </div>
            <div className="cart-price mt-3 mt-md-0 col-md-2 align-items-sm-end align-items-start  d-flex flex-column justify-content-center col-sm-7">
              <h6>PRICE</h6>
              <h4>${500}</h4>
            </div>
          </div>

          {/* end cart items */}
          <div className="total">
            <span className="sub"> total: </span>
            <span className="total-price"> ${1200} </span>
          </div>
          <hr />
          <div className="cart-buttons d-flex align-items-center row">
            <Link className="col-md-6" to="/">
              <button>Continue To Shopping</button>
            </Link>

            <div className="col-md-6 d-flex justify-content-md-end mt-3 mt-md-0">
              <button>Checkout</button>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default CartScreen;
