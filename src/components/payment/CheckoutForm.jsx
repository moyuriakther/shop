import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import {
  useCreatePaymentIntentMutation,
  useCreatePaymentMutation,
} from "../../features/payment/paymentApi";
import Loading from "../loadingError/Loading";
import { toast } from "react-toastify";

const CheckoutForm = ({ cartTotalAmount, cartItems }) => {
  const price = cartTotalAmount;
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, serCardError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const user = JSON.parse(localStorage.getItem("auth"))?.user;
  const [createPaymentIntent, { data, isLoading, isError, error }] =
    useCreatePaymentIntentMutation();
  console.log(!data?.clientSecret, !stripe, isLoading, isError, error);

  const [createPayment, { data: paymentResponse, isLoading: paymentLoading }] =
    useCreatePaymentMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      serCardError(error);
    } else {
      serCardError("");
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(data?.clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.name,
            email: user?.email,
          },
        },
      });
    if (confirmError) {
      serCardError(confirmError);
    }
    console.log(paymentIntent);
    setProcessing(false);
    if (paymentIntent?.status === "succeeded") {
      setTransactionId(paymentIntent?.id);
      //next steps
      const transactionId = paymentIntent?.id;
      const payment = {
        email: user?.email,
        transactionId,
        price,
        quantity: cartItems?.length,
        items: cartItems?.map((item) => item?.product?._id),
        itemNames: cartItems?.map((item) => item?.product?.name),
        currency: paymentIntent?.currency,
      };
      createPayment(payment);
    }
  };
  useEffect(() => {
    if (isLoading || paymentLoading) {
      <Loading />;
    }
    if (isError) {
      <p>{error?.message}</p>;
    }
    if (!isError && !isLoading) {
      createPaymentIntent({ price: price });
      console.log(price);
    }
  }, []);

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
        <button
          className={
            !stripe || !data?.clientSecret ? "opacity-50" : "opacity-100"
          }
          type="submit"
          disabled={!stripe || !data?.clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && (
        <div className="alert alert-error my-2">
          <span>{cardError.message}</span>
        </div>
      )}
      {transactionId && (
        <div className="alert alert-success my-2">
          <span>
            Transaction complete with transaction id : <b>{transactionId}</b>
          </span>
          {paymentResponse?.transactionId &&
            toast.success("Payment successfully done")}
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
