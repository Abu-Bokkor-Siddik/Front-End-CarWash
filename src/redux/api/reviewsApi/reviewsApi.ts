import { baseApi } from "../baseApi";

const reviewsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    reviews: builder.mutation({
      query: (userinfo) => {
        console.log(userinfo, "user info ");
        return {
          url: "api/review",
          method: "POST",
          body: userinfo,
        };
      },
    }),
    //    start
    GetUserReviews: builder.query({
      query: () => {
        return {
          url: `api/review`,
          method: "GET",
        };
      },
      providesTags: ["reviews"],
    }),

    // end
  }),
});
export const { useReviewsMutation, useGetUserReviewsQuery } = reviewsApi;
