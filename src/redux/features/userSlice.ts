/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { useAppSelector } from "../hooks";
import { RootState } from "../store";
import { access } from "fs";
const initialState = {
  token: "",
  user: {
    _id: "",
    email: "",
    role: "",
    exp: "",
    iat: "",
    updatedAt: "",
  },
//   service: [] as any,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },

    setUser: (state, action) => {
      state.user = { ...action.payload };
    },
    logOut:(state,action)=>{
      state.token="";
      state.user={
        _id: "",
        email: "",
        role: "",
        exp: "",
        iat: "",
        updatedAt: ""
      };
    }
  },
});

export const { setToken, setUser,logOut } = userSlice.actions;
export default userSlice.reducer;
export const currentToken=((state:RootState)=>state.user.token)
export const currentUser=((state:RootState)=>state.user.user)