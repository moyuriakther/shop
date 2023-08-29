import { apiSlice } from "../api/apiSlice";

export const paymentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPaymentIntent: builder.mutation({
      query: (price) => ({
        url: `api/create-payment-intent`,
        method: "POST",
        body: price,
      }),
    }),
    createPayment: builder.mutation({
      query: (payment) => ({
        url: "api/create-payment-intent/payment",
        method: "POST",
        body: payment,
      }),
    }),
  }),
});
export const { useCreatePaymentIntentMutation, useCreatePaymentMutation } =
  paymentApi;
