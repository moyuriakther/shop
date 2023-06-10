import { apiSlice } from "../api/apiSlice";

export const quizMarkApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // addToCart: builder.mutation({
    //   query: ({ id, data }) => (
    //     console.log(id, data),
    //     {
    //       url: `api/products/${id}`,
    //       method: "POST",
    //       body: data,
    //     }
    //   ),
    // }),
    removeFromCart: builder.mutation({
      query: (id) => ({
        url: `api/products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const { useRemoveFromCartMutation } = quizMarkApi;
