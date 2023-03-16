import { configureStore } from "@reduxjs/toolkit";
import navbarStore from "./navbarStore";
import userStore from './userStore'
import categoriesStore from "./categoriesStore";
import mesaggeStore from "./mesaggeStore";


const store=configureStore({
    reducer:{
        add:navbarStore,
        users:userStore,
        cards:categoriesStore,
        login:mesaggeStore
        
    }
})

export default store