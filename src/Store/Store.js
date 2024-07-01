import { configureStore } from "@reduxjs/toolkit";
import SidebarToggleSlice from "./SidebarToggleSlice";

const Store = configureStore({
   reducer : {
    SidebarToggleSlice
   }
})

export default Store;