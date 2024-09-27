import { baseApi } from "../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    GetBooking: builder.query({
      query: () => {
        return {
          url: `api/bookings`,
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),
    GetUser: builder.query({
      query: () => {
        return {
          url: `api/user`,
          method: "GET",
        };
      },
      providesTags: ["users"],
    }),

    GetUserSingle: builder.query({
      query: (email) => {
        // data should be object ...
        console.log(email,'get c')
        return {
          url: `api/single/${email}`,
          method: "GET",
        };
        
      },
      providesTags:["users"]
    }),
    // end
    // end
      updateUser: builder.mutation({
        query: ({id,payload}) => {
          // data should be object ...
          console.log(payload,id)
          return {
            url: `/api/user/${id}`,
            method: "PUT",
            body:payload,
          };
        },
        invalidatesTags:["users"]
      }),
    // end
  }),
});
export const { useGetBookingQuery,useGetUserSingleQuery,useGetUserQuery,useUpdateUserMutation } = userApi;
