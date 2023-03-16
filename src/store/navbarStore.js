import { createSlice } from "@reduxjs/toolkit";

export const navbarStore=createSlice({
    name:'navbar',
    initialState:{
        navbarOpen:false
    },
    reducers:{
        setNavbarOpen:(state)=>{
            state.navbarOpen=!state.navbarOpen
        }
    }
})

export const {setNavbarOpen} =navbarStore.actions

export default navbarStore.reducer