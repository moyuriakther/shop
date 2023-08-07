import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/payment/CheckoutForm";
import { useSelector } from "react-redux";
const PaymentScreen = () => {
  const navigate = useNavigate();
  // const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const cart = useSelector((state) => state.cart);
  const { cartTotalAmount } = cart;

  const shippingDataFromLocalStorage = JSON.parse(
    localStorage.getItem("shippingAddress")
  );
  if (!shippingDataFromLocalStorage) {
    navigate("/shipping");
  }
  // const handleSubmit = (e) => {
  // e.preventDefault();

  // navigate("/placeOrder");
  // };
  //use publishable key
  console.log(import.meta.env.VITE_Payment_Gateway_pk);
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk);
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-">
        <div
          className="login2 col-md-8 col-lg-4 col-11"
          // onSubmit={handleSubmit}
        >
          <h6 className="py-4">SELECT PAYMENT METHOD</h6>
          <div className="payment-container">
            {/* <div className="radio-container">
              <input
                className="form-check-input"
                type="radio"

                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label">PayPal or Credit Card</label>
            </div> */}
          </div>
          {/* <button type="submit">Continue</button> */}
          <Elements stripe={stripePromise}>
            <CheckoutForm cartTotalAmount={cartTotalAmount} />
          </Elements>
        </div>
      </div>
    </>
  );
};

export default PaymentScreen;
