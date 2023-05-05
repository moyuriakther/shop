import Header from "../components/Header";
const PaymentScreen = () => {
  return (
    <>
      <Header />
      <div className="container d-flex justify-content-center align-items-center login-">
        <form
          className="login2 col-md-8 col-lg-4 col-11"
          // onSubmit={handleSubmit}
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
          <button type="submit">
            {/* <Link to="/placeorder" className="text-white"> */}
            Continue
            {/* </Link> */}
          </button>
        </form>
      </div>
    </>
  );
};

export default PaymentScreen;
