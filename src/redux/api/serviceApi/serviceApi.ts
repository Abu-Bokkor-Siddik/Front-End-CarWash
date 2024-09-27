
import { baseApi } from "../baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    GetServe: builder.query({
      query: ({searchTerm,price,sort,duration}) => {
          console.log(searchTerm,price,sort,duration)
          const params = new URLSearchParams()
          if (searchTerm) {
            params.append('searchTerm',searchTerm)
          }
          if (price) {
            params.append('price',price)
          }
          if (sort) {
            params.append('sort',sort)
          }

          if (duration) {
            params.append('duration',duration)
          }

        return {
          url: `api/services`,
          method: "GET",
          params:params,
        };
      },
      providesTags:["service"]
    }),
    
   GetSlotId: builder.query({
    query: (id) => {
      // data should be object ...
      console.log(id.id,'get c')
      return {
        url: `/api/slots/availability?serviceId=${id?.id}`,
        method: "GET",
      };
      
    },
    providesTags:["service"]
  }),
  // end
  // st
  // post 
  addService: builder.mutation({
    query: (data) => {
      console.log(data,'here')
      // data should be object ...
      console.log(data)
      return {
        url: `api/services`,
        method: "POST",
        body:data,
      };
    },
    invalidatesTags:["service"]
  }),
  // end
  updateService: builder.mutation({
    query: ({id,payload}) => {
      // data should be object ...
      console.log(payload,id)
      return {
        url: `/api/services/${id}`,
        method: "PUT",
        body:payload,
      };
    },
    invalidatesTags:["service"]
  }),
  //end 
  deleteService: builder.mutation({
    query: (id) => {
      // console.log(id)
      // data should be object ...
      return {
        url: `/api/services/${id}`,
        method: "DELETE",
        
      };
    },
    invalidatesTags:["service"]
  }),
  // end
  }),
});
export const { useGetServeQuery,useGetSlotIdQuery,useAddServiceMutation,useUpdateServiceMutation ,useDeleteServiceMutation} = serviceApi;
