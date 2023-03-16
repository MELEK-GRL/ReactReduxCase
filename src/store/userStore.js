import { createSlice } from "@reduxjs/toolkit";


// var a= JSON.parse(localStorage.getItem('user'))|| false



export const userStore=createSlice({
    name:'user',
    initialState:{
        user:true
    },
    reducers:{
        setUser:(state,action)=>{
            state.user=state.payload
            
        },
      
    },
    
})



export const {setUser,setJson} =userStore.actions

export default userStore.reducer