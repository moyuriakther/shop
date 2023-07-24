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
      query: ({ productId, review }) => ({
        url: `/api/products/${productId}/review`,
        method: "POST",
        body: { review: review },
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data: review } = await queryFulfilled;
          console.log(review);
          dispatch(
            apiSlice.util.updateQueryData("getProduct", undefined, (draft) => {
              draft.push(review);
            })
          );
        } catch (err) {
          console.log(err);
        }
      },
    }),
  }),
});
export const {
  // useGetProductsQuery,
  useGetAllProductsQuery,
  useGetProductQuery,
  useAddProductReviewMutation,
} = quizMarkApi;
