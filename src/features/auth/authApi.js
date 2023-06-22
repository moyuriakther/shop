import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/api/users",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (err) {
          // do nothing
        }
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/api/users/login",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result.data);
          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result.data.token,
              user: result.data,
            })
          );
          dispatch(
            userLoggedIn({
              accessToken: result.data.token,
              user: result.data,
            })
          );
        } catch (err) {
          // do nothing
        }
      },
    }),
    userDetails: builder.query({
      query: (id) => `/api/users/${id}`,
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation, useUserDetailsQuery } =
  authApi;
