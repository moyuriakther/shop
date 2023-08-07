import { apiSlice } from "../api/apiSlice";

export const paymentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPaymentIntent: builder.mutation({
      query: (data) => ({
        url: `api/payment`,
        method: "POST",
        data,
      }),
    }),
  }),
});
export const { useCreatePaymentIntentMutation } = paymentApi;
