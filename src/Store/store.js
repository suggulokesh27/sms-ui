import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./Slices/sidebarToggleSlice";
import navbarToggleSlice from './Slices/navbarToggleSlice';

const store = configureStore({
    reducer: {
        sidebar: sidebarSlice,
        navbar: navbarToggleSlice
    }
})

export default store;
