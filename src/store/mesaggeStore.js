import { createSlice } from "@reduxjs/toolkit";

const mesaggeStore=createSlice({
    name:'user',
   initialState:{
    user:null,
    username:'',
    email:'',
    textarea:''
   },
   reducers:{
    setUserName:(state,action)=>{
        state.username=state.action
    },
    setEmail:(state,action)=>{
        state.email=state.action
    },
    setTextArea:(state,action)=>{
        state.textarea=state.action
    },
    login:(state,action)=>{
        state.user=action.payload
    },
    logout:(state)=>{
        state.user=null
    }
   }
}) 
export const {setEmail,setTextArea,setUserName,login,logout}=mesaggeStore.actions

export default mesaggeStore.reducer