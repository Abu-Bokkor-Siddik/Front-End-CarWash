import { baseApi } from "../baseApi";



const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    GetSlot: builder.query({
      query: ({data,serviceid}) => {
          console.log(data,serviceid)
          const params = new URLSearchParams()
          if (data) {
            params.append('data',data)
          }
          if (serviceid) {
            params.append('serviceid',serviceid)
          }
    

        return {
          url: `api/slots/availability`,
          method: "GET",
          params:params,
        };
      },
      providesTags:["slot"]
    }),
    

  // post 
  addSlot: builder.mutation({
    query: (data) => {
      console.log(data,'here')
      // data should be object ...
      // console.log(data)
      return {
        url: `api/services/slots`,
        method: "POST",
        body:data,
      };
    },
    invalidatesTags:["slot"]
  }),
  // end
  updateSlot: builder.mutation({
    query: ({id,payload}) => {
      // data should be object ...
      console.log(payload,id)
      return {
        url: `/api/slot/${id}`,
        method: "PUT",
        body:payload,
      };
    },
    invalidatesTags:["slot"]
  }),
// end
  }),
});
export const { useGetSlotQuery,useAddSlotMutation,useUpdateSlotMutation} = serviceApi;
