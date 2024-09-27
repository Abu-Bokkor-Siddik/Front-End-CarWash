import { baseApi } from "../baseApi";

const bookingApi =baseApi.injectEndpoints({
    endpoints:(builder)=>({
        booking:builder.mutation({
            query:(userinfo)=>{
                console.log(userinfo,'user info ')
                return{
                    url:'/api/bookings',
                    method:'POST',
                    body:userinfo
                }
            }
        }),
    //    start 
    GetUserBooked: builder.query({
        query: (email) => {
          return {
            url: `api/bookings/${email}`,
            method: "GET",
          };
        },
        providesTags: ["booked"],
      }),

    // end
    })
})
export const {useBookingMutation,useGetUserBookedQuery}=bookingApi;