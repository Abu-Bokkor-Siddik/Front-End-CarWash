
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  carts: [] as any,
  selectedCart: 0,
  totalPrice: 0,
  totalTime:0,
};
const bookingSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addCart: (state, action) => {
      console.log(state.carts.length);
    //   const isExit=state.carts.find((carts:any)=>carts._id===action.payload._id)
      // console.log(isExit)
      // if (!isExit) {
      
      // }
      if (state.carts.length == 0) {
        state.carts.push({ ...action.payload, quantity: 1 });
      } else {
        console.log('else state')
      }
      state.selectedCart = state.carts.reduce((total: Number, carts: any) => {
        return Number(total + carts.quantity);
      }, 0);
      state.totalPrice = state.carts.reduce((total: any, carts: any) => {
        console.log(carts[0].service.price);
        const numberTotal = Number(carts[0].service.price);
        console.log(numberTotal);
        return Number(numberTotal) + Number(total);
      }, 0);
      // console.log()
    },

    removeCart:(state,action)=>{
        console.log(action.payload)
        console.log(state.carts)
        state.carts= state.carts.filter((item:any)=> item[0]?._id !== action.payload)
        
    },
    
  },
});
export const { addCart ,removeCart} = bookingSlice.actions;
export default bookingSlice.reducer;
