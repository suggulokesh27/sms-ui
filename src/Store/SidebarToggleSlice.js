import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sideBar : true,
    contentSideBar : false
}

const SidebarToggleSlice = createSlice({
    name : "sideBar",
    initialState,
    reducers : {
        toggleSideBar : (state,action) => {
            state.sideBar = action.payload;
        },
        toggleContentSideBar : (state,action) => {
            state.contentSideBar = action.payload
        }
    }
})

export const { toggleSideBar,toggleContentSideBar } = SidebarToggleSlice.actions;

export default SidebarToggleSlice.reducer;