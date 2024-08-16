import { combineReducers } from "@reduxjs/toolkit";
import LoginSlice from "./LoginSlice";
import SidebarToggleSlice from "./SidebarToggleSlice";
import OrganisationSlice from "./OrganisationSlice";

const rootReducer = combineReducers({
    LoginSlice, SidebarToggleSlice, OrganisationSlice
})

export default rootReducer;