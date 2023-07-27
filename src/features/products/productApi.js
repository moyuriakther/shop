import { apiSlice } from "../api/apiSlice";

export const quizMarkApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // getProducts: builder.query({
    //   query: (search, pagenumber) =>
    //     `/api/products?search=${search}&pageNumber=${pagenumber}`,
    // }),
    getAllProducts: builder.query({
      query: () => `/api/products/allProducts`,
      // timeout: 1000,
      keepUnusedDataFor: 5,
    }),
    getProduct: builder.query({
      query: (id) => `api/products/${id}`,
    }),
    addProductReview: builder.mutation({
      query: ({ productId, review }) => ({
        url: `/api/products/${productId}/review`,
        method: "POST",
        body: { review: review },
      }),
    }),
  }),
});
export const {
  // useGetProductsQuery,
  useGetAllProductsQuery,
  useGetProductQuery,
  useAddProductReviewMutation,
} = quizMarkApi;
