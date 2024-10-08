import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery= fetchBaseQuery({ baseUrl: "https://carwashing.vercel.app/",credentials:'include',prepareHeaders:(headers,{getState})=>{
  const token =(getState() as RootState).user.token;
  if (token) {
    headers.set('authorization',`Bearer ${token}`)
  }
} })
export const baseApi = createApi({
  reducerPath: "Api",
  baseQuery: baseQuery,
  tagTypes: ["service","cart","slot","user","users","booked","reviews"],
  endpoints: () => ({}),
});
