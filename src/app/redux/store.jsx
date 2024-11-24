import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userSlice"


export const makeStore = ()=>{
    return configureStore({
        reducer:{
            user:userReducer
        }
        
    })
}