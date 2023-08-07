import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useCreatePaymentIntentMutation } from "../../features/payment/paymentApi";
import Loading from "../loadingError/Loading";

const CheckoutForm = ({ cartTotalAmount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, serCardError] = useState("");

  const [createPaymentIntent, { data, isLoading, isError, error }] =
    useCreatePaymentIntentMutation();
  console.log(data);
  useEffect(() => {
    if (isLoading) {
      <Loading />;
    }
    if (isError) {
      <p>{error?.message}</p>;
    }
    if (!isError && !isLoading) {
      createPaymentIntent({
        price: cartTotalAmount,
      });
    }
  }, [createPaymentIntent, cartTotalAmount, isError, isLoading, error]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      serCardError(error);
    } else {
      console.log("payment Method", paymentMethod);
      serCardError("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {cardError && (
        <div className="alert alert-error my-2">
          <span>{cardError.message}</span>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
