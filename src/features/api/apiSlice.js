import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
  
    baseUrl: "https://shop-backend-flax.vercel.app",
    prepareHeaders: async (headers, { getState }) => {
      const token = getState()?.auth?.accessToken;
      const localAuth = JSON.parse(localStorage.getItem("auth"))?.accessToken;
      // console.log(getState()?.auth, localAuth);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      } else if (localAuth) {
        headers.set("Authorization", `Bearer ${localAuth}`);
      }
      return headers;
    },
  }),
  // refetchOnMountOrArgChange: 30,
  // keepUnusedDataFor: 600,
  endpoints: () => ({}),
});
