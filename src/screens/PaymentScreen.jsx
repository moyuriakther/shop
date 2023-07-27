import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
// import { loadStripe } from "@stripe/stripe-js";
const PaymentScreen = () => {
  const navigate = useNavigate();
  // const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const shippingDataFromLocalStorage = JSON.parse(
    localStorage.getItem("shippingAddress")
  );
  if (!shippingDataFromLocalStorage) {
    navigate("/shipping");
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/placeOrder");
  };
  //use publishable key
  // const stripePromise = loadStripe('pk_')
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-">
        <form
          className="login2 col-md-8 col-lg-4 col-11"
          onSubmit={handleSubmit}
        >
          <h6>SELECT PAYMENT METHOD</h6>
          <div className="payment-container">
            <div className="radio-container">
              <input
                className="form-check-input"
                type="radio"

                // value={paymentMethod}
                // onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label">PayPal or Credit Card</label>
            </div>
          </div>
          <button type="submit">Continue</button>
        </form>
      </div>
    </>
  );
};

export default PaymentScreen;
