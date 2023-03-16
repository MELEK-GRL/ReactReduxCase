import { createSlice } from "@reduxjs/toolkit";

export const categoriesStore=createSlice({
 name:'card',
 initialState:{
    card:[],
    count:0
 },
 reducers:{
    AddCard:(state,action)=>{
        const find=state.card.findIndex(x=>x.id===action.payload.id)
        if(find>=0){
          state.card[find].count+=1
        }
        else{
          const tempvar={...action.payload,count:1}
          state.card.push(tempvar)
        }
        
      }
 }
})

export const {AddCard}=categoriesStore.actions
export default categoriesStore.reducer