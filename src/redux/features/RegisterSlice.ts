import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const initialState={
    name:'',
    email:'',
    number:'',
    address:'',
    password:'',
    role:''
}
 const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers:{
       setName:(state,action:PayloadAction<string>)=>{
        state.name=action.payload;
       },
       setEmail:(state,action:PayloadAction<string>)=>{
        state.email=action.payload;
       },
       setNumber:(state,action:PayloadAction<string>)=>{
        state.number=action.payload;
       },
       setAddress:(state,action:PayloadAction<string>)=>{
        state.address=action.payload;
       },
       setPassword:(state,action:PayloadAction<string>)=>{
        state.password=action.payload;
       },
       setRole:(state,action:PayloadAction<string>)=>{
        state.role=action.payload;
       }
    }

})
 

export const {setEmail,setName,setNumber,setAddress,setPassword,setRole}= registerSlice.actions;
export default registerSlice.reducer;