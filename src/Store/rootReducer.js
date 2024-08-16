import { combineReducers } from "@reduxjs/toolkit";
import LoginSlice from "./LoginSlice";
import SidebarToggleSlice from "./SidebarToggleSlice";


const rootReducer = combineReducers({
    LoginSlice, SidebarToggleSlice
})

export default rootReducer;