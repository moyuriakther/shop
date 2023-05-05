import { Link } from "react-router-dom";
import Header from "../components/Header";

const PlaceOrderScreen = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row order-detail">
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-user"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Customer</strong>
                </h5>
                {/* <p>{userInfo?.name}</p> */}
                {/* <p>{userInfo?.email}</p> */}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-truck-moving"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Order Info</strong>
                </h5>
                {/* <p>Shipping: {shippingAddress?.country}</p> */}
                {/* <p>Pay Method: {paymentMethod}</p> */}
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-4 mb-lg-4 mb-5 mb-sm-0">
            <div className="row">
              <div className="col-md-4 center">
                <div className="alert-success order-box">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
              </div>
              <div className="col-md-8 center">
                <h5>
                  <strong>Deliver to</strong>
                </h5>
                <p>
                  Address:
                  {/* {` ${shippingAddress?.city} ${shippingAddress?.address} ${shippingAddress?.postalCode}`} */}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row order-products justify-content-between">
          <div className="col-lg-8">
            {/* {cartItems.length === 0 ? (
              <Error variant="alert-info mt-5">Your Cart Is Empty</Error>
            ) : (
              <>
                {cartItems?.map((item, i) => ( */}
            <div className="row order-product">
              <div className="col-6 col-md-3">
                {/* <img src={item?.image} alt="product" /> */}
              </div>
              <div className="col-6 col-md-5 d-flex align-items-center">
                <Link to={`/products/`}>{/* <h6>{item?.name}</h6> */}</Link>
              </div>
              <div className="col-6 mt-3 mt-md-0 col-md-2 d-flex align-items-center flex-column">
                <h4>QUANTITY</h4>
                {/* <h6>{item?.qty}</h6> */}
              </div>
              <div className="col-6 mt-3 mt-md-0 col-md-2 d-flex align-items-end flex-column">
                <h4>SUBTOTAL</h4>
                {/* <h6>${item.price * item.qty}</h6> */}
              </div>
            </div>
            {/* ))}
              </>
            )} */}
          </div>
          <div className="col-lg-3 d-flex align-items-end flex-column mt-5 subtotal-order">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Products</strong>
                  </td>
                  {/* <td>${itemsPrice}</td> */}
                </tr>
                <tr>
                  <td>
                    <strong>Shipping</strong>
                  </td>
                  {/* <td>${shippingPrice}</td> */}
                </tr>
                <tr>
                  <td>
                    <strong>Tax</strong>
                  </td>
                  {/* <td>${taxPrice}</td> */}
                </tr>
                <tr>
                  <td>
                    <strong>Total</strong>
                  </td>
                  {/* <td>${totalPrice}</td> */}
                </tr>
              </tbody>
            </table>
            {/* {cartItems?.length > 0 && ( */}
            <button type="submit">PLACE ORDER</button>
            {/* )} */}
            {/* {error && (
              <div className="my-3 col-12">
                <Error variant="alert-danger">{error}</Error>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceOrderScreen;
