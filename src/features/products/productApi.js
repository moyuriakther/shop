import { apiSlice } from "../api/apiSlice";

export const quizMarkApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // getProducts: builder.query({
    //   query: (search, pagenumber) =>
    //     `/api/products?search=${search}&pageNumber=${pagenumber}`,
    // }),
    getAllProducts: builder.query({
      query: () => `/api/products/allProducts`,
    }),
    getProduct: builder.query({
      query: (id) => `api/products/${id}`,
    }),
    addProductReview: builder.mutation({
      query: ({ productId, data }) => ({
        url: `/api/products/${productId}/review`,
        method: "POST",
        body: data,
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
